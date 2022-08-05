export default {
  "contractName": "Storage",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "PaimaGameInteraction",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "fee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "latestStoreHeight",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "paimaSubmitGameInput",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "createLobby",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "joinLobby",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitMoves",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "setNft",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput1",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput2",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput3",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput4",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput5",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput6",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput7",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput8",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput9",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "submitAuxillaryGameInput10",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "withdrawFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newFee",
          "type": "uint256"
        }
      ],
      "name": "setFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162000f2e38038062000f2e83398181016040528101906200003791906200012b565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600181905550505062000172565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b8826200008b565b9050919050565b620000ca81620000ab565b8114620000d657600080fd5b50565b600081519050620000ea81620000bf565b92915050565b6000819050919050565b6200010581620000f0565b81146200011157600080fd5b50565b6000815190506200012581620000fa565b92915050565b6000806040838503121562000145576200014462000086565b5b60006200015585828601620000d9565b9250506020620001688582860162000114565b9150509250929050565b610dac80620001826000396000f3fe60806040526004361061012a5760003560e01c80638da5cb5b116100ab578063b5cd2a6a1161006f578063b5cd2a6a14610318578063d822ed3914610334578063ddca3f4314610350578063e4de8fa21461037b578063e79b78eb14610397578063fd0cbc26146103b35761012a565b80638da5cb5b1461027d5780638f30761d146102a85780639546a119146102c4578063a102c229146102e0578063a974d7cd146102fc5761012a565b80633804df03116100f25780633804df03146101c357806369fe0e2d146101df5780636d0fbd74146102085780637ad136a81461022457806381aebfa2146102405761012a565b806313af40351461012f57806314fa26ab1461015857806320d2a41c1461017457806324600fc31461019057806327a1c7d7146101a7575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190610872565b6103cf565b005b610172600480360381019061016d91906109e5565b6104a0565b005b61018e600480360381019061018991906109e5565b6104ac565b005b34801561019c57600080fd5b506101a56104b8565b005b6101c160048036038101906101bc91906109e5565b6105bc565b005b6101dd60048036038101906101d891906109e5565b6105c8565b005b3480156101eb57600080fd5b5061020660048036038101906102019190610a64565b6106a2565b005b610222600480360381019061021d91906109e5565b61073a565b005b61023e600480360381019061023991906109e5565b610746565b005b34801561024c57600080fd5b5061026760048036038101906102629190610872565b610752565b6040516102749190610aa0565b60405180910390f35b34801561028957600080fd5b5061029261076a565b60405161029f9190610aca565b60405180910390f35b6102c260048036038101906102bd91906109e5565b61078e565b005b6102de60048036038101906102d991906109e5565b61079a565b005b6102fa60048036038101906102f591906109e5565b6107a6565b005b610316600480360381019061031191906109e5565b6107b2565b005b610332600480360381019061032d91906109e5565b6107be565b005b61034e600480360381019061034991906109e5565b6107ca565b005b34801561035c57600080fd5b506103656107d6565b6040516103729190610aa0565b60405180910390f35b610395600480360381019061039091906109e5565b6107dc565b005b6103b160048036038101906103ac91906109e5565b6107e8565b005b6103cd60048036038101906103c891906109e5565b6107f4565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045490610b42565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6104a9816105c8565b50565b6104b5816105c8565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610546576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053d90610bae565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060004790508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156105b7573d6000803e3d6000fd5b505050565b6105c5816105c8565b50565b60015434101561060d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060490610c40565b60405180910390fd5b43600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fb4ed4a01d5a4051dccaadfb05dc4112bcfae6fa35d8dfabdc1898cd637318d11826040516106979190610ce8565b60405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072790610d56565b60405180910390fd5b8060018190555050565b610743816105c8565b50565b61074f816105c8565b50565b60026020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610797816105c8565b50565b6107a3816105c8565b50565b6107af816105c8565b50565b6107bb816105c8565b50565b6107c7816105c8565b50565b6107d3816105c8565b50565b60015481565b6107e5816105c8565b50565b6107f1816105c8565b50565b6107fd816105c8565b50565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061083f82610814565b9050919050565b61084f81610834565b811461085a57600080fd5b50565b60008135905061086c81610846565b92915050565b6000602082840312156108885761088761080a565b5b60006108968482850161085d565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108f2826108a9565b810181811067ffffffffffffffff82111715610911576109106108ba565b5b80604052505050565b6000610924610800565b905061093082826108e9565b919050565b600067ffffffffffffffff8211156109505761094f6108ba565b5b610959826108a9565b9050602081019050919050565b82818337600083830152505050565b600061098861098384610935565b61091a565b9050828152602081018484840111156109a4576109a36108a4565b5b6109af848285610966565b509392505050565b600082601f8301126109cc576109cb61089f565b5b81356109dc848260208601610975565b91505092915050565b6000602082840312156109fb576109fa61080a565b5b600082013567ffffffffffffffff811115610a1957610a1861080f565b5b610a25848285016109b7565b91505092915050565b6000819050919050565b610a4181610a2e565b8114610a4c57600080fd5b50565b600081359050610a5e81610a38565b92915050565b600060208284031215610a7a57610a7961080a565b5b6000610a8884828501610a4f565b91505092915050565b610a9a81610a2e565b82525050565b6000602082019050610ab56000830184610a91565b92915050565b610ac481610834565b82525050565b6000602082019050610adf6000830184610abb565b92915050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e206368616e6765206f776e65720000000000600082015250565b6000610b2c601b83610ae5565b9150610b3782610af6565b602082019050919050565b60006020820190508181036000830152610b5b81610b1f565b9050919050565b7f4f6e6c79206f776e65722063616e2077697468647261772066756e6473000000600082015250565b6000610b98601d83610ae5565b9150610ba382610b62565b602082019050919050565b60006020820190508181036000830152610bc781610b8b565b9050919050565b7f53756666696369656e742066756e647320726571756972656420746f2073756260008201527f6d69742067616d6520696e707574000000000000000000000000000000000000602082015250565b6000610c2a602e83610ae5565b9150610c3582610bce565b604082019050919050565b60006020820190508181036000830152610c5981610c1d565b9050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c9a578082015181840152602081019050610c7f565b83811115610ca9576000848401525b50505050565b6000610cba82610c60565b610cc48185610c6b565b9350610cd4818560208601610c7c565b610cdd816108a9565b840191505092915050565b60006020820190508181036000830152610d028184610caf565b905092915050565b7f4f6e6c79206f776e65722063616e206368616e67652066656500000000000000600082015250565b6000610d40601983610ae5565b9150610d4b82610d0a565b602082019050919050565b60006020820190508181036000830152610d6f81610d33565b905091905056fea2646970667358221220661a30608e63619908088ae0a6d9038e66f69063802c1067997ce7279c6ada5564736f6c634300080d0033",
  "deployedBytecode": "0x60806040526004361061012a5760003560e01c80638da5cb5b116100ab578063b5cd2a6a1161006f578063b5cd2a6a14610318578063d822ed3914610334578063ddca3f4314610350578063e4de8fa21461037b578063e79b78eb14610397578063fd0cbc26146103b35761012a565b80638da5cb5b1461027d5780638f30761d146102a85780639546a119146102c4578063a102c229146102e0578063a974d7cd146102fc5761012a565b80633804df03116100f25780633804df03146101c357806369fe0e2d146101df5780636d0fbd74146102085780637ad136a81461022457806381aebfa2146102405761012a565b806313af40351461012f57806314fa26ab1461015857806320d2a41c1461017457806324600fc31461019057806327a1c7d7146101a7575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190610872565b6103cf565b005b610172600480360381019061016d91906109e5565b6104a0565b005b61018e600480360381019061018991906109e5565b6104ac565b005b34801561019c57600080fd5b506101a56104b8565b005b6101c160048036038101906101bc91906109e5565b6105bc565b005b6101dd60048036038101906101d891906109e5565b6105c8565b005b3480156101eb57600080fd5b5061020660048036038101906102019190610a64565b6106a2565b005b610222600480360381019061021d91906109e5565b61073a565b005b61023e600480360381019061023991906109e5565b610746565b005b34801561024c57600080fd5b5061026760048036038101906102629190610872565b610752565b6040516102749190610aa0565b60405180910390f35b34801561028957600080fd5b5061029261076a565b60405161029f9190610aca565b60405180910390f35b6102c260048036038101906102bd91906109e5565b61078e565b005b6102de60048036038101906102d991906109e5565b61079a565b005b6102fa60048036038101906102f591906109e5565b6107a6565b005b610316600480360381019061031191906109e5565b6107b2565b005b610332600480360381019061032d91906109e5565b6107be565b005b61034e600480360381019061034991906109e5565b6107ca565b005b34801561035c57600080fd5b506103656107d6565b6040516103729190610aa0565b60405180910390f35b610395600480360381019061039091906109e5565b6107dc565b005b6103b160048036038101906103ac91906109e5565b6107e8565b005b6103cd60048036038101906103c891906109e5565b6107f4565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461045d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045490610b42565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6104a9816105c8565b50565b6104b5816105c8565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610546576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053d90610bae565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060004790508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156105b7573d6000803e3d6000fd5b505050565b6105c5816105c8565b50565b60015434101561060d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060490610c40565b60405180910390fd5b43600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fb4ed4a01d5a4051dccaadfb05dc4112bcfae6fa35d8dfabdc1898cd637318d11826040516106979190610ce8565b60405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072790610d56565b60405180910390fd5b8060018190555050565b610743816105c8565b50565b61074f816105c8565b50565b60026020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610797816105c8565b50565b6107a3816105c8565b50565b6107af816105c8565b50565b6107bb816105c8565b50565b6107c7816105c8565b50565b6107d3816105c8565b50565b60015481565b6107e5816105c8565b50565b6107f1816105c8565b50565b6107fd816105c8565b50565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061083f82610814565b9050919050565b61084f81610834565b811461085a57600080fd5b50565b60008135905061086c81610846565b92915050565b6000602082840312156108885761088761080a565b5b60006108968482850161085d565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108f2826108a9565b810181811067ffffffffffffffff82111715610911576109106108ba565b5b80604052505050565b6000610924610800565b905061093082826108e9565b919050565b600067ffffffffffffffff8211156109505761094f6108ba565b5b610959826108a9565b9050602081019050919050565b82818337600083830152505050565b600061098861098384610935565b61091a565b9050828152602081018484840111156109a4576109a36108a4565b5b6109af848285610966565b509392505050565b600082601f8301126109cc576109cb61089f565b5b81356109dc848260208601610975565b91505092915050565b6000602082840312156109fb576109fa61080a565b5b600082013567ffffffffffffffff811115610a1957610a1861080f565b5b610a25848285016109b7565b91505092915050565b6000819050919050565b610a4181610a2e565b8114610a4c57600080fd5b50565b600081359050610a5e81610a38565b92915050565b600060208284031215610a7a57610a7961080a565b5b6000610a8884828501610a4f565b91505092915050565b610a9a81610a2e565b82525050565b6000602082019050610ab56000830184610a91565b92915050565b610ac481610834565b82525050565b6000602082019050610adf6000830184610abb565b92915050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e206368616e6765206f776e65720000000000600082015250565b6000610b2c601b83610ae5565b9150610b3782610af6565b602082019050919050565b60006020820190508181036000830152610b5b81610b1f565b9050919050565b7f4f6e6c79206f776e65722063616e2077697468647261772066756e6473000000600082015250565b6000610b98601d83610ae5565b9150610ba382610b62565b602082019050919050565b60006020820190508181036000830152610bc781610b8b565b9050919050565b7f53756666696369656e742066756e647320726571756972656420746f2073756260008201527f6d69742067616d6520696e707574000000000000000000000000000000000000602082015250565b6000610c2a602e83610ae5565b9150610c3582610bce565b604082019050919050565b60006020820190508181036000830152610c5981610c1d565b9050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c9a578082015181840152602081019050610c7f565b83811115610ca9576000848401525b50505050565b6000610cba82610c60565b610cc48185610c6b565b9350610cd4818560208601610c7c565b610cdd816108a9565b840191505092915050565b60006020820190508181036000830152610d028184610caf565b905092915050565b7f4f6e6c79206f776e65722063616e206368616e67652066656500000000000000600082015250565b6000610d40601983610ae5565b9150610d4b82610d0a565b602082019050919050565b60006020820190508181036000830152610d6f81610d33565b905091905056fea2646970667358221220661a30608e63619908088ae0a6d9038e66f69063802c1067997ce7279c6ada5564736f6c634300080d0033",
  "networks": {
    "200101": {
      "events": {},
      "links": {},
      "address": "0x852Ec3e5C0900C94206bCB4c09D9967238eBE122",
      "transactionHash": "0x6b51b6d431879592a486dcf3c6865bcb909a3693cf499db7128141cd6094e834"
    }
  }
}