const { ethers } = require("hardhat");

const INFRUA_ID="c1705cd194dc4d8b9bad0ad140770896"
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFRUA_ID}`)
const address = "0x0aC86d7d69c4145F6892A1035e24A3B30CC42e9f"
const contract_address = "0xDCd5687cEc9F8b3d8DD318b2Af6603D7f540D9c9"
const {abi} = require("../artifacts/contracts/Greeter.sol/Bidding.json")

async function main() {
    const instance = new ethers.Contract(contract_address, abi, ethers.provider)
    const commission = await (await instance.commission()).toNumber()
    console.log("commision: ", ethers.utils.formatEther(commission))

    const auctionEndTime = await (await instance.auctionEndTime()).toNumber()
    var time = new Date(auctionEndTime * 1000);
    console.log(time)

    const getHighestBid = await (await instance.getHighestBid()).toString()
    console.log("getHighestBid: ", ethers.utils.formatEther(getHighestBid))

    const gettotalRewards = await (await instance.gettotalRewards()).toString()
    console.log("gettotalRewards: ", ethers.utils.formatEther(gettotalRewards))
}

main()
