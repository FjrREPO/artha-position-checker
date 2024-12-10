//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockArtha
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { ADDRESS_ARTE } from "@/constants/config"

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x11d89C52498627a63D42f3Fc2c56F72C308B804A)
 */
export const mockArthaAbi = [
    { type: 'error', inputs: [], name: 'AuctionAlreadyEnded' },
    { type: 'error', inputs: [], name: 'AuctionNotYetEnded' },
    { type: 'error', inputs: [], name: 'BidTooLow' },
    { type: 'error', inputs: [], name: 'DebtNotZero' },
    { type: 'error', inputs: [], name: 'IPNotAvailable' },
    { type: 'error', inputs: [], name: 'IRMNotExist' },
    { type: 'error', inputs: [], name: 'InsufficientCollateral' },
    { type: 'error', inputs: [], name: 'InsufficientLiquidity' },
    { type: 'error', inputs: [], name: 'LTVExceeded' },
    { type: 'error', inputs: [], name: 'LTVGreaterThanLTH' },
    { type: 'error', inputs: [], name: 'LTVNotExist' },
    { type: 'error', inputs: [], name: 'NotAllowed' },
    { type: 'error', inputs: [], name: 'NotAuctionable' },
    { type: 'error', inputs: [], name: 'NotTokenOwner' },
    {
        type: 'error',
        inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
        name: 'OwnableInvalidOwner',
    },
    {
        type: 'error',
        inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
        name: 'OwnableUnauthorizedAccount',
    },
    { type: 'error', inputs: [], name: 'PoolAlreadyCreated' },
    { type: 'error', inputs: [], name: 'PoolNotExist' },
    { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
    {
        type: 'error',
        inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
        name: 'SafeERC20FailedOperation',
    },
    { type: 'error', inputs: [], name: 'ZeroAddress' },
    { type: 'error', inputs: [], name: 'ZeroAmount' },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'borrowRate',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'interest',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'feeShares',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Accrued',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'bidder',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'AuctionSettled',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'bidder',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Bid',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'onBehalfOf',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'receiver',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'shares',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Borrow',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'caller',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'token',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'FlashLoan',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'irm', internalType: 'address', type: 'address', indexed: false },
            { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'InterestRateModelChanged',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'ltv', internalType: 'uint256', type: 'uint256', indexed: false },
            { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'LTVChanged',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'operator',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
        ],
        name: 'OperatorSet',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
            {
                name: 'newOwner',
                internalType: 'address',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'OwnershipTransferred',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'poolParams',
                internalType: 'struct PoolParams',
                type: 'tuple',
                components: [
                    { name: 'collateralToken', internalType: 'address', type: 'address' },
                    { name: 'loanToken', internalType: 'address', type: 'address' },
                    { name: 'oracle', internalType: 'address', type: 'address' },
                    { name: 'irm', internalType: 'address', type: 'address' },
                    { name: 'ltv', internalType: 'uint256', type: 'uint256' },
                    { name: 'lth', internalType: 'uint256', type: 'uint256' },
                ],
                indexed: false,
            },
        ],
        name: 'PoolCreated',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'onBehalfOf',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'shares',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Repay',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'onBehalfOf',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'shares',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Supply',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'onBehalOf',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'SupplyCollateral',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'onBehalfOf',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'receiver',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'shares',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
        ],
        name: 'Withdraw',
    },
    {
        type: 'event',
        anonymous: false,
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32', indexed: false },
            {
                name: 'tokenId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: false,
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'onBehalfOf',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
            {
                name: 'receiver',
                internalType: 'address',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'WithdrawCollateral',
    },
    {
        type: 'function',
        inputs: [],
        name: 'AUCTION_TIME',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'INTEREST_SCALED',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'id', internalType: 'Id', type: 'bytes32' }],
        name: 'accrueInterest',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'bid',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
            { name: 'onBehalfOf', internalType: 'address', type: 'address' },
            { name: 'receiver', internalType: 'address', type: 'address' },
        ],
        name: 'borrow',
        outputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'poolParams',
                internalType: 'struct PoolParams',
                type: 'tuple',
                components: [
                    { name: 'collateralToken', internalType: 'address', type: 'address' },
                    { name: 'loanToken', internalType: 'address', type: 'address' },
                    { name: 'oracle', internalType: 'address', type: 'address' },
                    { name: 'irm', internalType: 'address', type: 'address' },
                    { name: 'ltv', internalType: 'uint256', type: 'uint256' },
                    { name: 'lth', internalType: 'uint256', type: 'uint256' },
                ],
            },
        ],
        name: 'computeId',
        outputs: [{ name: 'id', internalType: 'Id', type: 'bytes32' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'poolParams',
                internalType: 'struct PoolParams',
                type: 'tuple',
                components: [
                    { name: 'collateralToken', internalType: 'address', type: 'address' },
                    { name: 'loanToken', internalType: 'address', type: 'address' },
                    { name: 'oracle', internalType: 'address', type: 'address' },
                    { name: 'irm', internalType: 'address', type: 'address' },
                    { name: 'ltv', internalType: 'uint256', type: 'uint256' },
                    { name: 'lth', internalType: 'uint256', type: 'uint256' },
                ],
            },
        ],
        name: 'createPool',
        outputs: [{ name: '', internalType: 'Id', type: 'bytes32' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'receiver',
                internalType: 'contract IERC3156FlashBorrower',
                type: 'address',
            },
            { name: 'token', internalType: 'address', type: 'address' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'flashLoan',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            {
                name: 'receiver',
                internalType: 'contract IERC3156FlashBorrower',
                type: 'address',
            },
            { name: 'token', internalType: 'address', type: 'address' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'flashLoanIP',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'getPositon',
        outputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'address', type: 'address' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'irm', internalType: 'address', type: 'address' }],
        name: 'interestRateModels',
        outputs: [{ name: 'enabled', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'isLiquidated',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'id', internalType: 'Id', type: 'bytes32' }],
        name: 'isPoolExist',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: 'ltv', internalType: 'uint256', type: 'uint256' }],
        name: 'ltvs',
        outputs: [{ name: 'enabled', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'address', type: 'address' },
            { name: '', internalType: 'address', type: 'address' },
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'bytes', type: 'bytes' },
        ],
        name: 'onERC721Received',
        outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        inputs: [
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'operator', internalType: 'address', type: 'address' },
        ],
        name: 'operators',
        outputs: [{ name: 'isOperator', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', internalType: 'address', type: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'Id', type: 'bytes32' }],
        name: 'pools',
        outputs: [
            { name: 'collateralToken', internalType: 'address', type: 'address' },
            { name: 'loanToken', internalType: 'address', type: 'address' },
            { name: 'oracle', internalType: 'address', type: 'address' },
            { name: 'irm', internalType: 'address', type: 'address' },
            { name: 'ltv', internalType: 'uint256', type: 'uint256' },
            { name: 'lth', internalType: 'uint256', type: 'uint256' },
            { name: 'totalSupplyAssets', internalType: 'uint256', type: 'uint256' },
            { name: 'totalSupplyShares', internalType: 'uint256', type: 'uint256' },
            { name: 'totalBorrowAssets', internalType: 'uint256', type: 'uint256' },
            { name: 'totalBorrowShares', internalType: 'uint256', type: 'uint256' },
            { name: 'lastAccrued', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'positions',
        outputs: [
            { name: 'borrowShares', internalType: 'uint256', type: 'uint256' },
            { name: 'owner', internalType: 'address', type: 'address' },
            { name: 'bidder', internalType: 'address', type: 'address' },
            { name: 'bid', internalType: 'uint256', type: 'uint256' },
            { name: 'endTime', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'shares', internalType: 'uint256', type: 'uint256' },
            { name: 'onBehalfOf', internalType: 'address', type: 'address' },
        ],
        name: 'repay',
        outputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'irm', internalType: 'address', type: 'address' },
            { name: 'enabled', internalType: 'bool', type: 'bool' },
        ],
        name: 'setInterestRateModel',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'ltv', internalType: 'uint256', type: 'uint256' },
            { name: 'enabled', internalType: 'bool', type: 'bool' },
        ],
        name: 'setLTV',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'operator', internalType: 'address', type: 'address' },
            { name: 'approved', internalType: 'bool', type: 'bool' },
        ],
        name: 'setOperator',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'setUnhealthy',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'settleAuction',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'Id', type: 'bytes32' },
            { name: 'owner', internalType: 'address', type: 'address' },
        ],
        name: 'supplies',
        outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
            { name: 'onBehalfOf', internalType: 'address', type: 'address' },
        ],
        name: 'supply',
        outputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'onBehalfOf', internalType: 'address', type: 'address' },
        ],
        name: 'supplyCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'amount', internalType: 'uint256', type: 'uint256' },
            { name: 'onBehalfOf', internalType: 'address', type: 'address' },
            { name: 'receiver', internalType: 'address', type: 'address' },
        ],
        name: 'supplyCollateralAndBorrow',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: '', internalType: 'Id', type: 'bytes32' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        name: 'unhealthyList',
        outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'shares', internalType: 'uint256', type: 'uint256' },
            { name: 'onBehalfOf', internalType: 'address', type: 'address' },
            { name: 'receiver', internalType: 'address', type: 'address' },
        ],
        name: 'withdraw',
        outputs: [
            { name: '', internalType: 'uint256', type: 'uint256' },
            { name: '', internalType: 'uint256', type: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [
            { name: 'id', internalType: 'Id', type: 'bytes32' },
            { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
            { name: 'onBehalfOf', internalType: 'address', type: 'address' },
            { name: 'receiver', internalType: 'address', type: 'address' },
        ],
        name: 'withdrawCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
    },
] as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x11d89C52498627a63D42f3Fc2c56F72C308B804A)
 */
export const mockArthaAddress = {
    84532: ADDRESS_ARTE,
} as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x11d89C52498627a63D42f3Fc2c56F72C308B804A)
 */
export const mockArthaConfig = {
    address: mockArthaAddress,
    abi: mockArthaAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockOracle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockOracleAbi = [
    {
        type: 'constructor',
        inputs: [{ name: '_price', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        name: 'getPrice',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [],
        name: 'price',
        outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        inputs: [{ name: '_price', internalType: 'uint256', type: 'uint256' }],
        name: 'setPrice',
        outputs: [],
        stateMutability: 'nonpayable',
    },
] as const
