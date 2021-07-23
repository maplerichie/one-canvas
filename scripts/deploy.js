const hre = require("hardhat");

async function main() {
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MillionPixel = await ethers.getContractFactory("MillionPixel");
  const millionPixel = await MillionPixel.deploy();
  await millionPixel.deployed();

  console.log("MillionPixel deployed to:", millionPixel.address);
  saveFrontendFiles(millionPixel);
}

function saveFrontendFiles(millionPixel) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ MillionPixel: millionPixel.address }, undefined, 2)
  );

  const MillionPixelArtifact = artifacts.readArtifactSync("MillionPixel");

  fs.writeFileSync(
    contractsDir + "/MillionPixel.json",
    JSON.stringify(MillionPixelArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
