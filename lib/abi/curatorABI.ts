export const curatorABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_Arte",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "pool",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "allocation",
                "type": "uint256"
            }
        ],
        "name": "InvalidAllocation",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "poolsLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "allocationsLength",
                "type": "uint256"
            }
        ],
        "name": "InvalidLength",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "pool",
                "type": "bytes32"
            }
        ],
        "name": "InvalidPool",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "curator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "asset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32[]",
                "name": "pools",
                "type": "bytes32[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "allocations",
                "type": "uint256[]"
            }
        ],
        "name": "CuratorDeployed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ALLOCATION_SCALED",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Arte",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_asset",
                "type": "address"
            },
            {
                "internalType": "bytes32[]",
                "name": "pools",
                "type": "bytes32[]"
            },
            {
                "internalType": "uint256[]",
                "name": "allocations",
                "type": "uint256[]"
            }
        ],
        "name": "deployCurator",
        "outputs": [
            {
                "internalType": "address",
                "name": "curator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]