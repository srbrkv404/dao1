// SPDX-License-Identifier: MIT

import "./IStaking.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

pragma solidity ^0.8.27;

contract DAO is AccessControl {
    uint128 public lockTime;
    uint128 public lastProposalId;
    IERC20 public token;
    IStaking public staking;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    enum Function {
        setRewardPercent,
        setRewardTime
    }

    struct Purpose {
        Function func;
        uint248 data;
    }
    
    struct Proposal {
        Purpose purpose;
        uint256 startTime;
        uint256 forVotes;
        uint256 againstVotes;
        string description;
        mapping (address => bool) usersVoted;
        bool finished;
    }

    struct VoterInfo {
        uint256[] activeVotes;
        uint256 balance;
    }

    mapping (uint256 => Proposal) proposals;
    mapping (address => VoterInfo) voters;

    event ProposalAdded(uint256 indexed proposalId);
    event ProposalFinished(uint256 indexed proposalId, bool success);

    constructor(uint128 _lockTime, address _token, address _staking) {
        lockTime = _lockTime;
        token = IERC20(_token);
        staking = IStaking(_staking);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    function addProposal(
        Function _func,
        uint248 _data,
        string calldata _description
    ) external onlyRole(ADMIN_ROLE) {
        lastProposalId++;

        Proposal storage curProposal = proposals[lastProposalId];

        curProposal.purpose = Purpose(_func, _data);
        curProposal.startTime = block.timestamp;
        curProposal.description = _description;

        emit ProposalAdded(lastProposalId);
    }

    function vote(uint256 proposalId, bool voteType) external {
        Proposal storage curProposal = proposals[proposalId];
        VoterInfo storage curVoter = voters[msg.sender];

        require(curProposal.startTime != 0, "This proposal does not exist");
        require(!curProposal.finished, "This proposal is finished");
        require(!curProposal.usersVoted[msg.sender], "You have already voted");
        
        curVoter.activeVotes.push(proposalId);
        
        if (voteType) {
            curProposal.forVotes += curVoter.balance;
        } else {
            curProposal.againstVotes += curVoter.balance;
        }

        curProposal.usersVoted[msg.sender] = true;
    }

    function finish(uint256 proposalId) external {
        Proposal storage curProposal = proposals[proposalId];

        require(curProposal.startTime + lockTime <= block.timestamp, "You can not finish voting now");

        
        if (curProposal.forVotes > curProposal.againstVotes) {
            _execute(proposalId);
            emit ProposalFinished(proposalId, true);
        } else {
            emit ProposalFinished(proposalId, false);
        }

        proposals[proposalId].finished = true;
    }

    function deposit(uint256 tokenAmount) external {
        token.transferFrom(msg.sender, address(this), tokenAmount);

        voters[msg.sender].balance += tokenAmount;
    }

    function withdraw(uint256 tokenAmount) external {
        VoterInfo storage curVoter = voters[msg.sender];

        for (uint i = 0; i < curVoter.activeVotes.length; i++) {
            if (!proposals[curVoter.activeVotes[i]].finished) {
                revert("One of the votings you participated in is not finished yet");
            }
        }

        token.transfer(msg.sender, tokenAmount);

        delete voters[msg.sender].activeVotes;
        voters[msg.sender].balance -= tokenAmount;
    }

    function _execute(uint256 proposalId) view internal {
        Purpose storage curPurpose = proposals[proposalId].purpose;

        if (curPurpose.func == Function.setRewardPercent) {
            staking.setRewardPercent(uint16(curPurpose.data));
        } else {
            staking.setRewardTime(uint120(curPurpose.data));
        }
    }

    function getVoterInfo(address voter) external view returns(VoterInfo memory) {
        return voters[voter];
    }

    function getProposal(uint256 proposalId) external view
        returns(
            Purpose memory,
            uint256,
            uint256,
            uint256,
            string memory,
            bool
        ) {
            Proposal storage curProposal = proposals[proposalId];
            return (
                curProposal.purpose,
                curProposal.startTime,
                curProposal.forVotes,
                curProposal.againstVotes,
                curProposal.description,
                curProposal.finished
            );
    }


}