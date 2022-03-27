const { ethers } = require("hardhat");

const main = async () => {
  const tinderFactory = await ethers.getContractFactory("TinderERC721");
  const TinderContracts = await tinderFactory.deploy();
  console.log("Tinder Factory Deploy to:", TinderContracts.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
