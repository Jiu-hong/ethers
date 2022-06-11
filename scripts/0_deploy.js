// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const { abi } = require("../artifacts/contracts/Greeter.sol/Bidding.json")

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Bidding = await ethers.getContractFactory("Bidding");
  const bidding = await Bidding.deploy();

  await bidding.deployed();

  console.log("Bidding deployed to:", bidding.address);

  // subscribe to events
  console.log("=====Events logs:===========");
  const instance = new ethers.Contract(bidding.address, abi, ethers.provider)
  instance.on("HighestBidIncreased", (...event) => {
    console.log("HighestBidIncreased event is ", event)
  })
  
  instance.on("AuctionEnded", (...event) => {
    console.log("AuctionEnded event is ", event)
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()

