import { NextResponse } from 'next/server';
import { createPublicClient, http } from 'viem';
import { baseSepolia } from 'viem/chains';
import { mockArthaAbi, mockArthaAddress, mockOracleAbi } from '@/lib/abi/auctionApiABI';
import { AlchemyNftSchema, AuctionApiSchema, PositionSchema } from '@/lib/validation/types';
import { ADDRESS_ARTE, listIP } from '@/constants/config';
import { upsertLiquidations } from '@/services/liquidation-service';

const client = createPublicClient({
    chain: baseSepolia,
    transport: http(),
});

async function checkLiquidatableStatus(position: PositionSchema): Promise<boolean> {
    try {
        const [poolId, tokenId] = (position?.id?.split('-') ?? []) as [string, string];
        return await client.readContract({
            abi: mockArthaAbi,
            address: mockArthaAddress[84532],
            functionName: 'unhealthyList',
            args: [poolId as `0x${string}`, BigInt(tokenId)],
        });
    } catch (error) {
        console.error('Error checking liquidatable status:', error);
        return false;
    }
}

async function fetchFloorPrice(oracleAddress: string, tokenId: bigint): Promise<number> {
    try {
        const price = await client.readContract({
            abi: mockOracleAbi,
            address: oracleAddress as `0x${string}`,
            functionName: 'getPrice',
            args: [tokenId],
        });

        return Number(price);
    } catch (error) {
        console.error('Error fetching price:', error);
        return 0;
    }
}

function calculateDebt(position: PositionSchema): string {
    return (
        (position.borrowShares / position.pool.totalBorrowShares) *
        position.pool.totalBorrowAssets
    ).toString();
}

async function fetchGraphQLPositions(): Promise<PositionSchema[]> {
    try {
        const data = {
            query: `{
                positions(first: 1000) {
                    account { id }
                    pool {
                        utilizationRate
                        transactionHash
                        totalSupplyShares
                        totalSupplyAssets
                        totalBorrowShares
                        totalBorrowAssets
                        oracle
                        ltv
                        lth
                        loanToken { id, loanToken }
                        loanAddress
                        lendingRate
                        irm
                        id
                        curator { id }
                        collateralToken { collateralToken, id }
                        collateralAddress
                        borrowRate
                    }
                    token { id, tokenId }
                    tokenId
                    bidder
                    borrowShares
                    id
                }
            }`,
        };

        const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_TOKEN}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`GraphQL request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData.data.positions;
    } catch (error) {
        console.error('Error fetching GraphQL positions:', error);
        throw error;
    }
}

async function fetchNFTData(): Promise<{ ownedNfts: AlchemyNftSchema[] }> {
    try {
        const address = ADDRESS_ARTE;

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/nft?ownerAddress=${address}&contractAddress=${listIP}`
        );

        if (!response.ok) {
            throw new Error(`NFT data fetch failed with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching NFT data:', error);
        throw error;
    }
}

async function getAllLiquidatable(): Promise<AuctionApiSchema[]> {
    try {
        const positions = await fetchGraphQLPositions();
        const nftData = await fetchNFTData();
        const result: AuctionApiSchema[] = [];

        for (const position of positions) {
            const isLiquidatableStatus = await checkLiquidatableStatus(position);

            if (isLiquidatableStatus) {
                const price = await fetchFloorPrice(
                    position.pool.oracle,
                    BigInt(position.tokenId)
                );

                const nftArteData = nftData.ownedNfts.find(
                    (nft: AlchemyNftSchema) =>
                        nft.tokenId === position.tokenId
                );

                result.push({
                    nftData: nftArteData || {} as AlchemyNftSchema,
                    isLiquidatableStatus,
                    position,
                    floorPrice: price.toString(),
                    debt: calculateDebt(position),
                });
            }
        }

        return result;
    } catch (error) {
        console.error('Error fetching liquidatable positions:', error);
        throw error;
    }
}

export async function GET() {
    try {
        const result = await getAllLiquidatable();

        await upsertLiquidations(result);

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Detailed error:', error);
        return NextResponse.json({
            error: 'Failed to fetch positions',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}