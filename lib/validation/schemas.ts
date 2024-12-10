import { z } from 'zod';

export const poolSchema = z.object({
    id: z.string().optional(),
    collateralAddress: z.string().optional(),
    borrowRate: z.number().optional(),
    irm: z.string().optional(),
    lendingRate: z.number().optional(),
    loanAddress: z.string().optional(),
    lth: z.string().optional(),
    ltv: z.string().optional(),
    oracle: z.string().optional(),
    totalBorrowAssets: z.number().optional(),
    totalBorrowShares: z.number().optional(),
    totalSupplyAssets: z.number().optional(),
    totalSupplyShares: z.number().optional(),
    transactionHash: z.string().optional(),
    utilizationRate: z.number().optional(),
    collateralToken: z.object({
        id: z.string().optional(),
        collateralToken: z.string().optional(),
    }),
    loanToken: z.object({
        id: z.string().optional(),
        loanToken: z.string().optional(),
    }),
});

export const supplyCollateralsSchema = z.object({
    tokenId: z.string().optional(),
    poolId: z.string().optional(),
    onBehalOf: z.string().optional(),
    sender: z.string().optional(),
    id: z.string().optional(),
});

export const accountSchema = z.object({
    id: z.string().optional(),
    lend: z.array(
        z.object({
            id: z.string().optional(),
            shares: z.number().optional(),
            sender: z.string().optional(),
            poolId: z.string().optional(),
            onBehalfOf: z.string().optional(),
            amount: z.number().optional(),
            pool: poolSchema
        })
    ),
    positions: z.array(
        z.object({
            id: z.string().optional(),
            bidder: z.string().optional(),
            borrowShares: z.number().optional(),
            tokenId: z.string().optional(),
            pool: poolSchema,
            token: z.object({
                id: z.string().optional(),
                tokenId: z.string().optional(),
            }),
        })
    ),
    earn: z.array(
        z.object({
            id: z.string().optional(),
            balance: z.number().optional(),
            curator: z.string().optional(),
        })
    ),
});

export const tokensSchema = z.object({
    id: z.string().optional(),
    tokenId: z.string().optional(),
    pool: z.object({
        id: z.string().optional(),
    }),
});

export const accountCuratorSchema = z.object({
    id: z.string().optional(),
    balance: z.number().optional(),
    curator: z.string().optional(),
})

export const accountPositionSchema = z.object({
    id: z.string().optional(),
    bidder: z.string().optional(),
    borrowShares: z.number().optional(),
    tokenId: z.string().optional(),
    pool: poolSchema,
    token: z.object({
        id: z.string().optional(),
        tokenId: z.string().optional(),
    }),
});

export const accountLendSchema = z.object({
    id: z.string().optional(),
    shares: z.number().optional(),
    sender: z.string().optional(),
    poolId: z.string().optional(),
    pool: poolSchema,
    onBehalfOf: z.string().optional(),
    amount: z.number().optional(),
})

export const borrowSchema = z.object({
    id: z.string().optional(),
    onBehalfOf: z.string().optional(),
    poolId: z.string(),
    receiver: z.string().optional(),
    sender: z.string().optional(),
    shares: z.string().optional(),
    tokenId: z.string(),
    amount: z.string(),
});

export const positionSchema = z.object({
    account: z.object({
        id: z.string(),
    }),
    pool: z.object({
        utilizationRate: z.number(),
        transactionHash: z.string(),
        totalSupplyShares: z.number(),
        totalSupplyAssets: z.number(),
        totalBorrowShares: z.number(),
        totalBorrowAssets: z.number(),
        oracle: z.string(),
        ltv: z.number(),
        lth: z.number(),
        loanToken: z.object({
            id: z.string(),
            loanToken: z.string(),
        }),
        loanAddress: z.string(),
        lendingRate: z.number(),
        irm: z.string(),
        id: z.string(),
        curator: z.object({
            id: z.string(),
        }),
        collateralToken: z.object({
            collateralToken: z.string(),
            id: z.string(),
        }),
        collateralAddress: z.string(),
        borrowRate: z.number(),
    }),
    token: z.object({
        id: z.string(),
        tokenId: z.string(),
    }),
    tokenId: z.string(),
    bidder: z.string(),
    borrowShares: z.number(),
    id: z.string(),
});

export const collateralTokenSchema = z.object({
    id: z.string(),
    collateralToken: z.string(),
    pool: z.object({
        id: z.string(),
    }),
});

export const loanTokenSchema = z.object({
    id: z.string(),
    loanToken: z.string(),
    pool: z.object({
        id: z.string(),
    }),
});

export const ltvSchema = z.object({
    id: z.string().optional(),
    ltv: z.string()
})

export const irmSchema = z.object({
    id: z.string().optional(),
    irm: z.string()
})

export const supplyCollateralAndBorrow = z.object({
    id: z.string().optional(),
    poolId: z.string(),
    collateralToken: z.string().optional(),
    tokenId: z.string(),
    borrowAmount: z.string(),
    ltv: z.number().min(1).max(100),
    supplyPool: z.string().optional()
});

const earnPoolSchema = z.object({
    id: z.string(),
});

export const earnSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    asset: z.string().optional(),
    symbol: z.string().optional(),
    curator: z.string(),
    pools: z.array(earnPoolSchema),
    transactionHash: z.string().optional(),
    blockTimestamp: z.number().optional(),
    blockNumber: z.number().optional(),
    allocations: z.array(z.number()),
})

export const curatorSchema = z.object({
    _name: z.string(),
    _symbol: z.string(),
    _asset: z.string(),
    pools: z.array(z.string()),
    allocations: z.array(z.number()),
})

export const auctionHistorySchema = z.object({
    event: z.string().min(1),
    amount: z.number().min(0),
    address: z.string().min(1),
    loanId: z.string().min(1),
    date: z.string()
});

export const auctionActivitySchema = z.object({
    activityType: z.string().min(1),
    price: z.union([z.string().min(1), z.literal('--')]),
    from: z.string().min(1),
    to: z.string().min(1),
    date: z.string()
});

// Alchemy NFT schema
const OpenSeaMetadataSchema = z.object({
    floorPrice: z.number(),
    collectionName: z.string(),
    collectionSlug: z.string(),
    safelistRequestStatus: z.string(),
    imageUrl: z.string(),
    description: z.string(),
    externalUrl: z.null(),
    twitterUsername: z.null(),
    discordUrl: z.null(),
    bannerImageUrl: z.null(),
    lastIngestedAt: z.string(),
});

const ImageSchema = z.object({
    cachedUrl: z.string(),
    thumbnailUrl: z.string(),
    pngUrl: z.string(),
    contentType: z.string(),
    size: z.number(),
    originalUrl: z.string(),
});

const RawMetadataSchema = z.object({
    tokenUri: z.string(),
    metadata: z.object({
        image: z.string(),
        external_url: z.string(),
        is_normalized: z.boolean(),
        image_url: z.string(),
        name: z.string(),
        description: z.string(),
        attributes: z.array(
            z.object({
                value: z.union([z.string(), z.boolean(), z.number()]),
                trait_type: z.string(),
                display_type: z.optional(z.string()),
            })
        ),
        version: z.number(),
        url: z.string(),
    }),
    error: z.null(),
});

const CollectionSchema = z.object({
    name: z.string(),
    slug: z.string(),
    externalUrl: z.null(),
    bannerImageUrl: z.null(),
});

const MintSchema = z.object({
    mintAddress: z.null(),
    blockNumber: z.null(),
    timestamp: z.null(),
    transactionHash: z.null(),
});

const ContractSchema = z.object({
    address: z.string(),
    name: z.string(),
    symbol: z.string(),
    totalSupply: z.null(),
    tokenType: z.string(),
    contractDeployer: z.string(),
    deployedBlockNumber: z.number(),
    openSeaMetadata: OpenSeaMetadataSchema,
    isSpam: z.null(),
    spamClassifications: z.array(z.string()),
});

export const alchemyNftSchema = z.object({
    contract: ContractSchema,
    tokenId: z.string(),
    tokenType: z.string(),
    name: z.string(),
    description: z.string(),
    tokenUri: z.string(),
    image: ImageSchema,
    raw: RawMetadataSchema,
    collection: CollectionSchema,
    mint: MintSchema,
    owners: z.null(),
    timeLastUpdated: z.string(),
    balance: z.string(),
    acquiredAt: z.object({
        blockTimestamp: z.null(),
        blockNumber: z.null(),
    }),
});

// CoinMarketCap schema
const ContractAddressMarketCap = z.object({
    contract_address: z.string(),
    platform: z.object({
        name: z.string(),
        coin: z.object({
            id: z.string(),
            name: z.string(),
            symbol: z.string(),
            slug: z.string(),
        }),
    }),
});

export const coinMarketCapSchema = z.object({
    id: z.number(),
    name: z.string(),
    symbol: z.string(),
    category: z.string(),
    description: z.string(),
    slug: z.string(),
    logo: z.string().url(),
    subreddit: z.string().optional(),
    notice: z.string().optional(),
    tags: z.array(z.string()).nullable(),
    "tag-names": z.array(z.string()).nullable(),
    "tag-groups": z.array(z.string()).nullable(),
    urls: z.object({
        website: z.array(z.string().url()).optional(),
        twitter: z.array(z.string().url()).optional(),
        "message_board": z.array(z.string().url()).optional(),
        chat: z.array(z.string().url()).optional(),
        facebook: z.array(z.string().url()).optional(),
        explorer: z.array(z.string().url()).optional(),
        reddit: z.array(z.string().url()).optional(),
        "technical_doc": z.array(z.string().url()).optional(),
        "source_code": z.array(z.string().url()).optional(),
        announcement: z.array(z.string().url()).optional(),
    }),
    platform: z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
        symbol: z.string(),
        token_address: z.string(),
    }),
    date_added: z.string().transform(v => new Date(v)),
    twitter_username: z.string().optional(),
    is_hidden: z.number(),
    date_launched: z.string().nullable().transform(v => v ? new Date(v) : null),
    contract_address: z.array(ContractAddressMarketCap),
    self_reported_circulating_supply: z.number().nullable(),
    self_reported_tags: z.array(z.string()).nullable(),
    self_reported_market_cap: z.number().nullable(),
    infinite_supply: z.boolean(),
});

// BENDDAO
const ReserveAssetSchema = z.object({
    name: z.string(),
    underlyingAsset: z.string().length(42),
    decimals: z.number(),
    symbol: z.string(),
    price: z.object({
        priceInEth: z.string(),
        oracle: z.object({
            usdPriceEth: z.string(),
            __typename: z.string(),
        }),
        __typename: z.string(),
    }),
    __typename: z.string(),
});

const NFTItemSchema = z.object({
    nftItemInfo: z.object({
        type: z.string(),
        ownerAddress: z.string().length(42),
        collectionAddress: z.string().length(42),
        tokenID: z.string(),
        bnftAddress: z.string().length(42),
        nftItem: z.object({
            tokenURIRaw: z.string(),
            cdnImageUrl: z.string(),
            collection: z.object({
                name: z.string(),
                floorPrice: z.string(),
                openseaImageURL: z.string(),
                creator: z.string(),
                releaseDate: z.string(),
                totalSupply: z.number(),
                royaltyFee: z.string(),
                nftData: z.object({
                    ltv: z.number(),
                    liquidationThreshold: z.number(),
                }),
                bendNFT: z.object({
                    bnftAddress: z.string().length(42),
                }),
                wrapperAssetAddress: z.string(),
                wrapperGatewayAddress: z.string(),
                wrapperAssetNFTCollection: z.string(),
                __typename: z.string(),
            }),
            __typename: z.string(),
        }),
        nftOrder: z.null(),
        loan: z.object({
            subgraphID: z.string(),
            bidStartTimestamp: z.number(),
            currentAmount: z.string(),
            bidPrice: z.string(),
            state: z.string(),
            bidderAddress: z.string(),
            reserveAsset: z.string().length(42),
            reserveData: z.object({
                decimals: z.number(),
                priceInETH: z.string(),
                __typename: z.string(),
            }),
            __typename: z.string(),
        }),
        apeStakingProxies: z.array(z.string()),
        __typename: z.string(),
    }),
    delegated: z.boolean(),
    availableToBorrow: z.string(),
    healthFactor: z.number(),
});

export const AuctionsDataSchema = z.object({
    id: z.string(),
    loanId: z.string(),
    tokenId: z.string(),
    collectionName: z.string(),
    collectionAddress: z.string().length(42),
    borrowed: z.string(),
    bidPrice: z.string(),
    floorPrice: z.string(),
    collateralRatio: z.number(),
    liquidationRatio: z.number(),
    liquidationPrice: z.string(),
    healthFactor: z.number(),
    reserveAsset: ReserveAssetSchema,
    bidEndTime: z.number(),
    bidStartTimestamp: z.number(),
    auctionHistory: z.array(z.any()),
    contractApproved: z.boolean(),
    state: z.string(),
    bidderAddress: z.string().length(42),
    bidFine: z.string(),
    order: z.null(),
    image: z.string().url(),
    nftAsset: NFTItemSchema,
});

export const auctionApiSchema = z.object({
    nftData: alchemyNftSchema,
    isLiquidatableStatus: z.boolean(),
    position: positionSchema,
    floorPrice: z.string(),
    debt: z.string(),
});