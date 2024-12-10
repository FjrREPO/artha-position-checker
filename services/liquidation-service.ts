import { PrismaClient } from '@prisma/client';
import { AuctionApiSchema } from '@/lib/validation/types';

const prisma = new PrismaClient();

export async function upsertLiquidations(liquidations: AuctionApiSchema[]) {
    const liquidationOperations = liquidations.map(async (liquidation) => {
        return prisma.liquidation.upsert({
            where: {
                addressIP_tokenId: {
                    addressIP: liquidation.nftData?.contract?.address || '',
                    tokenId: liquidation.position.tokenId || ''
                }
            },
            update: {
                nftName: liquidation.nftData?.contract?.name || '',
                nftSymbol: liquidation.nftData?.contract?.symbol || '',
                nftImageUrl: liquidation.nftData?.contract?.openSeaMetadata?.imageUrl || '',
                isLiquidatableStatus: liquidation.isLiquidatableStatus,
                positionAccount: liquidation.position?.account?.id || '',
                loanAddress: liquidation.position?.pool?.loanAddress || '',
                floorPrice: liquidation.floorPrice || '0',
                debt: liquidation.debt || '0',
                bidder: liquidation.position?.bidder || null
            },
            create: {
                addressIP: liquidation.nftData?.contract?.address || '',
                nftName: liquidation.nftData?.contract?.name || '',
                nftSymbol: liquidation.nftData?.contract?.symbol || '',
                nftImageUrl: liquidation.nftData?.contract?.openSeaMetadata?.imageUrl || '',
                tokenId: liquidation.position.tokenId || '',
                isLiquidatableStatus: liquidation.isLiquidatableStatus,
                positionAccount: liquidation.position?.account?.id || '',
                loanAddress: liquidation.position?.pool?.loanAddress || '',
                floorPrice: liquidation.floorPrice || '0',
                debt: liquidation.debt || '0',
                bidder: liquidation.position?.bidder || null
            }
        });
    });

    return Promise.all(liquidationOperations);
}

export async function getAllLiquidations() {
    return prisma.liquidation.findMany();
}