const { ethers } = require("hardhat");

const address1 = "0x0aC86d7d69c4145F6892A1035e24A3B30CC42e9f"
const address2 = "0x3103292AfDec94F71B7851D3f398D8cCDC9885FF"
const PRIVATE_KEY1="6b71fd551da47acd89809f1ba299293bc54145e57bae3958f8cf4f8215563968"
const PRIVATE_KEY2 = "eba1f1402f6b35394c0a0a2aedd986119f0973d7edf7bf06de66998bb0ea434a"

const wallet1 = new ethers.Wallet(PRIVATE_KEY1, ethers.provider)
const contract_address = "0x88f73a7cfEbaBf8e0A4d2c20017F127d7bC02C99"
const {abi} = require("../artifacts/contracts/Greeter.sol/Bidding.json")

async function main() {
    // const instance = new ethers.Contract(contract_address, abi, ethers.provider)
    // show account 1 balance before transfer
    const senderBalanceBefore = await ethers.provider.getBalance(address1)
    // show account 2 balance before transfer
    const receiverBalanceBefore = await ethers.provider.getBalance(address2)
    console.log("senderBalanceBefore ->", senderBalanceBefore)
    console.log("receiverBalanceBefore ->", receiverBalanceBefore)
    // Send Ether
    const tx = await wallet1.sendTransaction({
        to: address2,
        value: ethers.utils.parseEther("0.025")
    })

    // Fetch transactions 
    await tx.wait()  // wait for it to be mined
    console.log(tx)

    // show account 1 balance after transfer
    const senderBalanceAfter = await ethers.provider.getBalance(address1)
    // show account 2 balance before transfer
    const receiverBalanceAfter = await ethers.provider.getBalance(address2)
    console.log("senderBalanceAfter ->", senderBalanceAfter)
    console.log("receiverBalanceAfter ->", receiverBalanceAfter)
}

main()
