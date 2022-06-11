const { ethers } = require("hardhat");

const contract_address = "0x2f0a54264bb0aBe3e533cA742bdAEEc7E8A71A93"
const {abi} = require("../artifacts/contracts/Greeter.sol/Bidding.json")
const instance = new ethers.Contract(contract_address, abi, ethers.provider)

async function main() {
    // read events
    const HighestBidIncreasedEvents = await instance.queryFilter("HighestBidIncreased")
    console.log("HighestBidIncreasedEvents", HighestBidIncreasedEvents)

    const AuctionEndedEvents = await instance.queryFilter("AuctionEnded")
    console.log("AuctionEndedEvents", AuctionEndedEvents)

    // // subscribe events
    // instance.on("HighestBidIncreased", (...event) => {
    //     console.log("HighestBidIncreased event is ", event)
    // })

    // instance.on("AuctionEnded", (...event) => {
    //     console.log("AuctionEnded event is ", event)
    // })
}

main()