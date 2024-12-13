import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { time } from "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("DAO", function() {

    async function deploy() {
        const [acc1, acc2] = await ethers.getSigners();
        
        const RewardToken = await ethers.getContractFactory("Token");
        const rewardToken = await RewardToken.deploy("reward_test_token", "RTT");
        await rewardToken.waitForDeployment();
        const rewardTokenAddr = await rewardToken.getAddress();

        const LpToken = await ethers.getContractFactory("Token");
        const lpToken = await LpToken.deploy("lp_test_token", "LTT");
        await lpToken.waitForDeployment();
        const lpTokenAddr = await lpToken.getAddress();

        const Staking = await ethers.getContractFactory("Staking");
        const staking = await Staking.deploy(lpTokenAddr, rewardTokenAddr, 3600, 100, 3600);
        await staking.waitForDeployment();
        const stakingAddr = await staking.getAddress();

        const DAO = await ethers.getContractFactory("DAO");
        const dao = await DAO.deploy(3600, rewardToken, stakingAddr);
        await dao.waitForDeployment();


        return { acc1, acc2, rewardToken, lpToken, staking, dao};
    }

    describe("Deployment", function() {
        it("Should be deployed", async function() {
            const { rewardToken, lpToken, staking, dao } = await loadFixture(deploy);

            expect(rewardToken.target).to.be.properAddress;
            expect(lpToken.target).to.be.properAddress;
            expect(staking.target).to.be.properAddress;
            expect(dao.target).to.be.properAddress;
        });

        it("Should set correct data by constructor", async function() {
            const { rewardToken, lpToken, staking, dao } = await loadFixture(deploy);

            await expect(await rewardToken.name()).to.equal("reward_test_token");
            await expect(await rewardToken.symbol()).to.equal("RTT");

            await expect(await lpToken.name()).to.equal("lp_test_token");
            await expect(await lpToken.symbol()).to.equal("LTT");

            await expect(await staking.rewardTime()).to.equal(3600);
            await expect(await staking.rewardPercent()).to.equal(100);
            await expect(await staking.lockTime()).to.equal(3600);

            await expect(await dao.lockTime()).to.equal(3600);
        });
    });

    describe("Requirements", function() {

        it("Should not allow to add proposal with invalid function type", async function() {
            const { dao } = await loadFixture(deploy);

            await expect(dao.addProposal(3, 50, "test")).to.be.revertedWithoutReason();
        });

        it("Should not allow to vote in not exist voting", async function() {
            const { dao } = await loadFixture(deploy);

            await expect(dao.vote(1, true)).to.be.revertedWith("This proposal does not exist");
        });

        it("Should not allow to vote in finished voting", async function() {
            const { dao } = await loadFixture(deploy);

            await dao.addProposal(0, 50, "test");

            const timestamp = await time.latest();
            const twoHours = 2* 60 * 60;

            await time.increaseTo(timestamp + twoHours);

            await dao.finish(1);

            await expect(dao.vote(1, true)).to.be.revertedWith("This proposal is finished");
        });

        it("Should not allow to vote second time", async function() {
            const { dao } = await loadFixture(deploy);

            await dao.addProposal(0, 50, "test");

            await dao.vote(1, true);

            await expect(dao.vote(1, true)).to.be.revertedWith("You have already voted");
        });

        it("Should not allow to finish voting before unlock time", async function() {
            const { dao } = await loadFixture(deploy);

            await dao.addProposal(0, 50, "test");

            await dao.vote(1, true);

            await expect(dao.finish(1)).to.be.revertedWith("You can not finish voting now");
        });
    });

    describe("Logic", function() {
        it("Should set correct balance and active votes to user", async function() {
            const { acc2, rewardToken, dao } = await loadFixture(deploy);

            const daoAddress = await dao.getAddress();

            await rewardToken.mint(acc2.address, 100);
            await rewardToken.connect(acc2).approve(daoAddress, 100);

            await dao.addProposal(0, 50, "test");

            await dao.connect(acc2).deposit(100);
            await dao.connect(acc2).vote(1, true);

            const voterInfo = await dao.getVoterInfo(acc2.address);
            const proposal = await dao.getProposal(1);

            await expect(voterInfo[1]).to.equal(100);
            await expect(voterInfo[0][0]).to.equal(1);
            await expect(proposal[2]).to.equal(100);
            await expect(proposal[3]).to.equal(0);
        });

        it("Should set correct values during vote", async function() {
            const { acc1, acc2, rewardToken, dao } = await loadFixture(deploy);
            const daoAddress = await dao.getAddress();

            await dao.addProposal(0, 50, "test");

            await rewardToken.mint(acc1.address, 50);
            await rewardToken.mint(acc2.address, 100);
            await rewardToken.connect(acc1).approve(daoAddress, 50);
            await rewardToken.connect(acc2).approve(daoAddress, 100);

            await dao.connect(acc1).deposit(50);
            await dao.connect(acc2).deposit(100);
            await dao.connect(acc1).vote(1, true);
            await dao.connect(acc2).vote(1, false);

            const proposal = await dao.getProposal(1);

            await expect(proposal[0][0]).to.equal(0);
            await expect(proposal[0][1]).to.equal(50);
            await expect(proposal[2]).to.equal(50);
            await expect(proposal[3]).to.equal(100);
            await expect(proposal[4]).to.equal("test");
            await expect(proposal[5]).to.equal(false);
        });

        it("Should allow to withdraw", async function() {
            const { acc1, acc2, rewardToken, staking, dao } = await loadFixture(deploy);
            const daoAddress = await dao.getAddress();

            await staking.setRewardPercent(50);

            await staking.grantAdminRole(daoAddress);

            await dao.addProposal(0, 50, "test");

            await rewardToken.mint(acc1.address, 50);
            await rewardToken.connect(acc1).approve(daoAddress, 50);

            await dao.connect(acc1).deposit(50);
            await dao.connect(acc1).vote(1, true);

            const timestamp = await time.latest();
            const twoHours = 2* 60 * 60;

            await time.increaseTo(timestamp + twoHours);
            
            await dao.finish(1);
        });
    });
});