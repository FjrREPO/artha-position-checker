export const donationABI = [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "currentTransactionId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "donate",
        "inputs": [
            {
                "name": "productId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "donations",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "productId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "marketplaceId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "proved",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "link",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "hasClaimed",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "products",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "proveDonation",
        "inputs": [
            {
                "name": "transactionId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "marketplaceId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "proof",
                "type": "tuple",
                "internalType": "struct Reclaim.Proof",
                "components": [
                    {
                        "name": "claimInfo",
                        "type": "tuple",
                        "internalType": "struct Claims.ClaimInfo",
                        "components": [
                            {
                                "name": "provider",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "parameters",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "context",
                                "type": "string",
                                "internalType": "string"
                            }
                        ]
                    },
                    {
                        "name": "signedClaim",
                        "type": "tuple",
                        "internalType": "struct Claims.SignedClaim",
                        "components": [
                            {
                                "name": "claim",
                                "type": "tuple",
                                "internalType": "struct Claims.CompleteClaimData",
                                "components": [
                                    {
                                        "name": "identifier",
                                        "type": "bytes32",
                                        "internalType": "bytes32"
                                    },
                                    {
                                        "name": "owner",
                                        "type": "address",
                                        "internalType": "address"
                                    },
                                    {
                                        "name": "timestampS",
                                        "type": "uint32",
                                        "internalType": "uint32"
                                    },
                                    {
                                        "name": "epoch",
                                        "type": "uint32",
                                        "internalType": "uint32"
                                    }
                                ]
                            },
                            {
                                "name": "signatures",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "providersHash",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "reclaimAddress",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "removeProduct",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setProduct",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "price",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "stringToUint",
        "inputs": [
            {
                "name": "s",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "usdc",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IERC20"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "verifyProof",
        "inputs": [
            {
                "name": "proof",
                "type": "tuple",
                "internalType": "struct Reclaim.Proof",
                "components": [
                    {
                        "name": "claimInfo",
                        "type": "tuple",
                        "internalType": "struct Claims.ClaimInfo",
                        "components": [
                            {
                                "name": "provider",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "parameters",
                                "type": "string",
                                "internalType": "string"
                            },
                            {
                                "name": "context",
                                "type": "string",
                                "internalType": "string"
                            }
                        ]
                    },
                    {
                        "name": "signedClaim",
                        "type": "tuple",
                        "internalType": "struct Claims.SignedClaim",
                        "components": [
                            {
                                "name": "claim",
                                "type": "tuple",
                                "internalType": "struct Claims.CompleteClaimData",
                                "components": [
                                    {
                                        "name": "identifier",
                                        "type": "bytes32",
                                        "internalType": "bytes32"
                                    },
                                    {
                                        "name": "owner",
                                        "type": "address",
                                        "internalType": "address"
                                    },
                                    {
                                        "name": "timestampS",
                                        "type": "uint32",
                                        "internalType": "uint32"
                                    },
                                    {
                                        "name": "epoch",
                                        "type": "uint32",
                                        "internalType": "uint32"
                                    }
                                ]
                            },
                            {
                                "name": "signatures",
                                "type": "bytes[]",
                                "internalType": "bytes[]"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "withdrawDonation",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "AddressInsufficientBalance",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ]
    }
]