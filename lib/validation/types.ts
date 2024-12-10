import { z } from 'zod';
import {
    accountSchema,
    alchemyNftSchema,
    auctionActivitySchema,
    auctionHistorySchema,
    AuctionsDataSchema,
    borrowSchema,
    coinMarketCapSchema,
    collateralTokenSchema,
    curatorSchema,
    earnSchema,
    irmSchema,
    accountLendSchema,
    loanTokenSchema,
    ltvSchema,
    poolSchema,
    positionSchema,
    supplyCollateralAndBorrow,
    accountPositionSchema,
    accountCuratorSchema,
    tokensSchema,
    supplyCollateralsSchema,
    auctionApiSchema
} from './schemas';

export type AuctionApiSchema = z.infer<typeof auctionApiSchema>;

export type PoolSchema = z.infer<typeof poolSchema>;

export type SupplyCollateralsSchema = z.infer<typeof supplyCollateralsSchema>;

export type TokensSchema = z.infer<typeof tokensSchema>;

export type AccountCuratorSchema = z.infer<typeof accountCuratorSchema>;

export type AccountPositionSchema = z.infer<typeof accountPositionSchema>;

export type AccountSchema = z.infer<typeof accountSchema>;

export type AccountLendSchema = z.infer<typeof accountLendSchema>;

export type BorrowSchema = z.infer<typeof borrowSchema>;

export type PositionSchema = z.infer<typeof positionSchema>;

export type CollateralTokenSchema = z.infer<typeof collateralTokenSchema>;

export type LoanTokenSchema = z.infer<typeof loanTokenSchema>;

export type LTVSchema = z.infer<typeof ltvSchema>;

export type IRMSchema = z.infer<typeof irmSchema>;

export type SupplyCollateralAndBorrow = z.infer<typeof supplyCollateralAndBorrow>;

export type EarnSchema = z.infer<typeof earnSchema>;

export type CuratorSchema = z.infer<typeof curatorSchema>;

export type AuctionHistorySchema = z.infer<typeof auctionHistorySchema>;

export type AuctionActivitySchema = z.infer<typeof auctionActivitySchema>;

export type AlchemyNftSchema = z.infer<typeof alchemyNftSchema>;

export type CoinMarketCapSchema = z.infer<typeof coinMarketCapSchema>;

export type AuctionsDataSchema = z.infer<typeof AuctionsDataSchema>;