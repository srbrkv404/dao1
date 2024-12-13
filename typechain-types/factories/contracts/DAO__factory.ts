/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { DAO, DAOInterface } from "../../contracts/DAO";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_lockTime",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "ProposalFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum DAO.Function",
        name: "_func",
        type: "uint8",
      },
      {
        internalType: "uint248",
        name: "_data",
        type: "uint248",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "addProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "finish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposal",
    outputs: [
      {
        components: [
          {
            internalType: "enum DAO.Function",
            name: "func",
            type: "uint8",
          },
          {
            internalType: "uint248",
            name: "data",
            type: "uint248",
          },
        ],
        internalType: "struct DAO.Purpose",
        name: "",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "getVoterInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "activeVotes",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct DAO.VoterInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastProposalId",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockTime",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
    outputs: [
      {
        internalType: "contract IStaking",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voteType",
        type: "bool",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051612a77380380612a7783398181016040528101906100329190610340565b82600160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061011d7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217753361012660201b60201c565b50505050610393565b6000610138838361022360201b60201c565b61021857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506101b561028d60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061021d565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b60006fffffffffffffffffffffffffffffffff82169050919050565b6102bf8161029a565b81146102ca57600080fd5b50565b6000815190506102dc816102b6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061030d826102e2565b9050919050565b61031d81610302565b811461032857600080fd5b50565b60008151905061033a81610314565b92915050565b60008060006060848603121561035957610358610295565b5b6000610367868287016102cd565b93505060206103788682870161032b565b92505060406103898682870161032b565b9150509250925092565b6126d5806103a26000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806391d14854116100ad578063c7f758a811610071578063c7f758a814610308578063c9d27afe1461033d578063d353a1cb14610359578063d547741f14610375578063fc0c546a1461039157610121565b806391d14854146102525780639ed1f25514610282578063a217fddf146102b2578063b6b55f25146102d0578063c283bf07146102ec57610121565b80632f2ff15d116100f45780632f2ff15d146101c057806336568abe146101dc5780634cf088d9146101f857806374cb30411461021657806375b238fc1461023457610121565b806301ffc9a7146101265780630d66808714610156578063248a9ca3146101745780632e1a7d4d146101a4575b600080fd5b610140600480360381019061013b9190611748565b6103af565b60405161014d9190611790565b60405180910390f35b61015e610429565b60405161016b91906117d6565b60405180910390f35b61018e60048036038101906101899190611827565b61044b565b60405161019b9190611863565b60405180910390f35b6101be60048036038101906101b991906118b4565b61046a565b005b6101da60048036038101906101d5919061193f565b61069c565b005b6101f660048036038101906101f1919061193f565b6106be565b005b610200610739565b60405161020d91906119de565b60405180910390f35b61021e61075f565b60405161022b91906117d6565b60405180910390f35b61023c610781565b6040516102499190611863565b60405180910390f35b61026c6004803603810190610267919061193f565b6107a5565b6040516102799190611790565b60405180910390f35b61029c600480360381019061029791906119f9565b61080f565b6040516102a99190611b21565b60405180910390f35b6102ba6108ca565b6040516102c79190611863565b60405180910390f35b6102ea60048036038101906102e591906118b4565b6108d1565b005b61030660048036038101906103019190611c24565b6109d0565b005b610322600480360381019061031d91906118b4565b610c04565b60405161033496959493929190611dec565b60405180910390f35b61035760048036038101906103529190611e80565b610db6565b005b610373600480360381019061036e91906118b4565b61100d565b005b61038f600480360381019061038a919061193f565b61116a565b005b61039961118c565b6040516103a69190611ee1565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104225750610421826111b2565b5b9050919050565b600160009054906101000a90046fffffffffffffffffffffffffffffffff1681565b6000806000838152602001908152602001600020600101549050919050565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b816000018054905081101561054f57600460008360000183815481106104d9576104d8611efc565b5b9060005260206000200154815260200190815260200160002060060160009054906101000a900460ff16610542576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053990611f9d565b60405180910390fd5b80806001019150506104b0565b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016105ad929190611fcc565b6020604051808303816000875af11580156105cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f0919061200a565b50600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600061063f9190611641565b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546106919190612066565b925050819055505050565b6106a58261044b565b6106ae8161121c565b6106b88383611230565b50505050565b6106c6611321565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461072a576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107348282611329565b505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160109054906101000a90046fffffffffffffffffffffffffffffffff1681565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610817611662565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082018054806020026020016040519081016040528092919081815260200182805480156108b057602002820191906000526020600020905b81548152602001906001019080831161089c575b505050505081526020016001820154815250509050919050565b6000801b81565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016109309392919061209a565b6020604051808303816000875af115801561094f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610973919061200a565b5080600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546109c691906120d1565b9250508190555050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756109fa8161121c565b6001601081819054906101000a90046fffffffffffffffffffffffffffffffff1680929190610a2890612105565b91906101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555050600060046000600160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16815260200190815260200160002090506040518060400160405280876001811115610ac457610ac3611c98565b5b8152602001867effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152508160000160008201518160000160006101000a81548160ff02191690836001811115610b1d57610b1c611c98565b5b021790555060208201518160000160016101000a8154817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602179055509050504281600101819055508383826004019182610b9e929190612379565b50600160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff167f3f802220982dbddc337f1811180e73513e775b18380401997927fd1454cfd0bd60405160405180910390a2505050505050565b610c0c61167c565b6000806000606060008060046000898152602001908152602001600020905080600001816001015482600201548360030154846004018560060160009054906101000a900460ff16856040518060400160405290816000820160009054906101000a900460ff166001811115610c8557610c84611c98565b5b6001811115610c9757610c96611c98565b5b81526020016000820160019054906101000a90047effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16815250509550818054610d20906121a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4c906121a6565b8015610d995780601f10610d6e57610100808354040283529160200191610d99565b820191906000526020600020905b815481529060010190602001808311610d7c57829003601f168201915b505050505091509650965096509650965096505091939550919395565b60006004600084815260200190815260200160002090506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000826001015403610e57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4e90612495565b60405180910390fd5b8160060160009054906101000a900460ff1615610ea9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea090612501565b60405180910390fd5b8160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610f38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2f9061256d565b60405180910390fd5b806000018490806001815401808255809150506001900390600052602060002001600090919091909150558215610f8d578060010154826002016000828254610f8191906120d1565b92505081905550610fad565b8060010154826003016000828254610fa591906120d1565b925050819055505b60018260050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050505050565b600060046000838152602001908152602001600020905042600160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16826001015461106591906120d1565b11156110a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109d906125d9565b60405180910390fd5b8060030154816002015411156110fd576110bf8261141b565b817f62e6fcb90e5285906a572c594624c50c2dc090221866bc44690f30bdeb42a4f260016040516110f09190611790565b60405180910390a2611137565b817f62e6fcb90e5285906a572c594624c50c2dc090221866bc44690f30bdeb42a4f2600060405161112e9190611790565b60405180910390a25b60016004600084815260200190815260200160002060060160006101000a81548160ff0219169083151502179055505050565b6111738261044b565b61117c8161121c565b6111868383611329565b50505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61122d81611228611321565b6115f0565b50565b600061123c83836107a5565b61131657600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506112b3611321565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061131b565b600090505b92915050565b600033905090565b600061133583836107a5565b1561141057600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506113ad611321565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611415565b600090505b92915050565b60006004600083815260200190815260200160002060000190506000600181111561144957611448611c98565b5b8160000160009054906101000a900460ff16600181111561146d5761146c611c98565b5b0361153157600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ae345f708260000160019054906101000a90047effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016114fc9190612616565b60006040518083038186803b15801561151457600080fd5b505afa158015611528573d6000803e3d6000fd5b505050506115ec565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166359a3cc578260000160019054906101000a90047effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016115bb919061265b565b60006040518083038186803b1580156115d357600080fd5b505afa1580156115e7573d6000803e3d6000fd5b505050505b5050565b6115fa82826107a5565b61163d5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401611634929190612676565b60405180910390fd5b5050565b508054600082559060005260206000209081019061165f91906116c9565b50565b604051806040016040528060608152602001600081525090565b60405180604001604052806000600181111561169b5761169a611c98565b5b815260200160007effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b5b808211156116e25760008160009055506001016116ca565b5090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611725816116f0565b811461173057600080fd5b50565b6000813590506117428161171c565b92915050565b60006020828403121561175e5761175d6116e6565b5b600061176c84828501611733565b91505092915050565b60008115159050919050565b61178a81611775565b82525050565b60006020820190506117a56000830184611781565b92915050565b60006fffffffffffffffffffffffffffffffff82169050919050565b6117d0816117ab565b82525050565b60006020820190506117eb60008301846117c7565b92915050565b6000819050919050565b611804816117f1565b811461180f57600080fd5b50565b600081359050611821816117fb565b92915050565b60006020828403121561183d5761183c6116e6565b5b600061184b84828501611812565b91505092915050565b61185d816117f1565b82525050565b60006020820190506118786000830184611854565b92915050565b6000819050919050565b6118918161187e565b811461189c57600080fd5b50565b6000813590506118ae81611888565b92915050565b6000602082840312156118ca576118c96116e6565b5b60006118d88482850161189f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061190c826118e1565b9050919050565b61191c81611901565b811461192757600080fd5b50565b60008135905061193981611913565b92915050565b60008060408385031215611956576119556116e6565b5b600061196485828601611812565b92505060206119758582860161192a565b9150509250929050565b6000819050919050565b60006119a461199f61199a846118e1565b61197f565b6118e1565b9050919050565b60006119b682611989565b9050919050565b60006119c8826119ab565b9050919050565b6119d8816119bd565b82525050565b60006020820190506119f360008301846119cf565b92915050565b600060208284031215611a0f57611a0e6116e6565b5b6000611a1d8482850161192a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611a5b8161187e565b82525050565b6000611a6d8383611a52565b60208301905092915050565b6000602082019050919050565b6000611a9182611a26565b611a9b8185611a31565b9350611aa683611a42565b8060005b83811015611ad7578151611abe8882611a61565b9750611ac983611a79565b925050600181019050611aaa565b5085935050505092915050565b60006040830160008301518482036000860152611b018282611a86565b9150506020830151611b166020860182611a52565b508091505092915050565b60006020820190508181036000830152611b3b8184611ae4565b905092915050565b60028110611b5057600080fd5b50565b600081359050611b6281611b43565b92915050565b60007effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b611b9c81611b68565b8114611ba757600080fd5b50565b600081359050611bb981611b93565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611be457611be3611bbf565b5b8235905067ffffffffffffffff811115611c0157611c00611bc4565b5b602083019150836001820283011115611c1d57611c1c611bc9565b5b9250929050565b60008060008060608587031215611c3e57611c3d6116e6565b5b6000611c4c87828801611b53565b9450506020611c5d87828801611baa565b935050604085013567ffffffffffffffff811115611c7e57611c7d6116eb565b5b611c8a87828801611bce565b925092505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611cd857611cd7611c98565b5b50565b6000819050611ce982611cc7565b919050565b6000611cf982611cdb565b9050919050565b611d0981611cee565b82525050565b611d1881611b68565b82525050565b604082016000820151611d346000850182611d00565b506020820151611d476020850182611d0f565b50505050565b611d568161187e565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d96578082015181840152602081019050611d7b565b60008484015250505050565b6000601f19601f8301169050919050565b6000611dbe82611d5c565b611dc88185611d67565b9350611dd8818560208601611d78565b611de181611da2565b840191505092915050565b600060e082019050611e016000830189611d1e565b611e0e6040830188611d4d565b611e1b6060830187611d4d565b611e286080830186611d4d565b81810360a0830152611e3a8185611db3565b9050611e4960c0830184611781565b979650505050505050565b611e5d81611775565b8114611e6857600080fd5b50565b600081359050611e7a81611e54565b92915050565b60008060408385031215611e9757611e966116e6565b5b6000611ea58582860161189f565b9250506020611eb685828601611e6b565b9150509250929050565b6000611ecb826119ab565b9050919050565b611edb81611ec0565b82525050565b6000602082019050611ef66000830184611ed2565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4f6e65206f662074686520766f74696e677320796f752070617274696369706160008201527f74656420696e206973206e6f742066696e697368656420796574000000000000602082015250565b6000611f87603a83611d67565b9150611f9282611f2b565b604082019050919050565b60006020820190508181036000830152611fb681611f7a565b9050919050565b611fc681611901565b82525050565b6000604082019050611fe16000830185611fbd565b611fee6020830184611d4d565b9392505050565b60008151905061200481611e54565b92915050565b6000602082840312156120205761201f6116e6565b5b600061202e84828501611ff5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120718261187e565b915061207c8361187e565b925082820390508181111561209457612093612037565b5b92915050565b60006060820190506120af6000830186611fbd565b6120bc6020830185611fbd565b6120c96040830184611d4d565b949350505050565b60006120dc8261187e565b91506120e78361187e565b92508282019050808211156120ff576120fe612037565b5b92915050565b6000612110826117ab565b91506fffffffffffffffffffffffffffffffff820361213257612131612037565b5b600182019050919050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121be57607f821691505b6020821081036121d1576121d0612177565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026122397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826121fc565b61224386836121fc565b95508019841693508086168417925050509392505050565b600061227661227161226c8461187e565b61197f565b61187e565b9050919050565b6000819050919050565b6122908361225b565b6122a461229c8261227d565b848454612209565b825550505050565b600090565b6122b96122ac565b6122c4818484612287565b505050565b5b818110156122e8576122dd6000826122b1565b6001810190506122ca565b5050565b601f82111561232d576122fe816121d7565b612307846121ec565b81016020851015612316578190505b61232a612322856121ec565b8301826122c9565b50505b505050565b600082821c905092915050565b600061235060001984600802612332565b1980831691505092915050565b6000612369838361233f565b9150826002028217905092915050565b612383838361213d565b67ffffffffffffffff81111561239c5761239b612148565b5b6123a682546121a6565b6123b18282856122ec565b6000601f8311600181146123e057600084156123ce578287013590505b6123d8858261235d565b865550612440565b601f1984166123ee866121d7565b60005b82811015612416578489013582556001820191506020850194506020810190506123f1565b86831015612433578489013561242f601f89168261233f565b8355505b6001600288020188555050505b50505050505050565b7f546869732070726f706f73616c20646f6573206e6f7420657869737400000000600082015250565b600061247f601c83611d67565b915061248a82612449565b602082019050919050565b600060208201905081810360008301526124ae81612472565b9050919050565b7f546869732070726f706f73616c2069732066696e697368656400000000000000600082015250565b60006124eb601983611d67565b91506124f6826124b5565b602082019050919050565b6000602082019050818103600083015261251a816124de565b9050919050565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b6000612557601683611d67565b915061256282612521565b602082019050919050565b600060208201905081810360008301526125868161254a565b9050919050565b7f596f752063616e206e6f742066696e69736820766f74696e67206e6f77000000600082015250565b60006125c3601d83611d67565b91506125ce8261258d565b602082019050919050565b600060208201905081810360008301526125f2816125b6565b9050919050565b600061ffff82169050919050565b612610816125f9565b82525050565b600060208201905061262b6000830184612607565b92915050565b60006effffffffffffffffffffffffffffff82169050919050565b61265581612631565b82525050565b6000602082019050612670600083018461264c565b92915050565b600060408201905061268b6000830185611fbd565b6126986020830184611854565b939250505056fea264697066735822122068d5e67ff26f34839ede47cf9cb7bc70f9bca42eb47ca1bc3f4a2ca2badf6c0d64736f6c634300081b0033";

type DAOConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DAOConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAO__factory extends ContractFactory {
  constructor(...args: DAOConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _lockTime: BigNumberish,
    _token: AddressLike,
    _staking: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _lockTime,
      _token,
      _staking,
      overrides || {}
    );
  }
  override deploy(
    _lockTime: BigNumberish,
    _token: AddressLike,
    _staking: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _lockTime,
      _token,
      _staking,
      overrides || {}
    ) as Promise<
      DAO & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DAO__factory {
    return super.connect(runner) as DAO__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOInterface {
    return new Interface(_abi) as DAOInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DAO {
    return new Contract(address, _abi, runner) as unknown as DAO;
  }
}
