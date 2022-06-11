const { ethers } = require("hardhat");

const INFRUA_ID="c1705cd194dc4d8b9bad0ad140770896"
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFRUA_ID}`)
const address = "0x0aC86d7d69c4145F6892A1035e24A3B30CC42e9f"

async function main() {
  // const balance = await ethers.provider.getBalance(address)
  // console.log("balance is ", ethers.utils.formatEther(balance))
  
  // const result = await provider.getTransactionCount("0xE0039b3516f690A3b7f8347d2282640Ba4f3Ca7C")
  // console.log("result is",result)
  // const block = await provider.getBlock(32088106)
  // console.log("block is ",block)
  // const transactions = await provider.getBlockWithTransactions(32088106)
  // console.log("transactions are",transactions)
  // const gasPrice = await provider.getGasPrice()
  // console.log("gasPrice is",gasPrice)
  // console.log("gasPrice is", ethers.utils.formatUnits(gasPrice, "gwei"))
  // console.log("gasPrice is", ethers.utils.formatUnits(gasPrice, "wei"))
  // console.log("gasPrice is", ethers.utils.formatUnits(gasPrice, "ether"))
  
  // const feeData = await provider.getFeeData()
  // console.log("feeData is", feeData)
  // const transaction = await provider.getTransaction("0x809d71829c15a86336305794452936999c700023795de66dfe06eb221a9260b4")
  // console.log("transaction is", transaction)
  
  // const transactionReceipt = await provider.getTransactionReceipt("0x809d71829c15a86336305794452936999c700023795de66dfe06eb221a9260b4")
  // console.log("transactionReceipt",transactionReceipt)

  // const network = await provider.getNetwork()
  // console.log("network is", network)

  provider.on("block", (blockNumber) => {
    console.log("blockNumber is ",blockNumber)
})
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  // .then(() => process.exit(0))
  // .catch((error) => {
  //   console.error(error);
  //   process.exit(1);
  // });    => when running a long running process like this script does with provider.on(), it causes the script to exit.
