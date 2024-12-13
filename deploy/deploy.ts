const hre = require("hardhat");

async function main_() {
    const stakingAddress = "0x052C4E69e0A7c2fCe168Ee6BA0B94dcAefdb06B6";
    const tokenAddress = "0xdF261b337F137646d010ae933Ab729fdfFb9f4e4";

    const DAO = await hre.ethers.getContractFactory("DAO");
    const dao = await DAO.deploy(60, stakingAddress, tokenAddress);
    await dao.waitForDeployment();

    console.log(`DAO contract deployed: ${dao}`);
}

main_().catch((error) => {
    console.error(error);
    process.exitCode = 1;
}); 

// 0.058618788960567208
// 1.662210835730958800