const { ethers } = require("hardhat");

const address1 = "0x0aC86d7d69c4145F6892A1035e24A3B30CC42e9f"
const address2 = "0x3103292AfDec94F71B7851D3f398D8cCDC9885FF"
const PRIVATE_KEY1="6b71fd551da47acd89809f1ba299293bc54145e57bae3958f8cf4f8215563968"
const PRIVATE_KEY2 = "eba1f1402f6b35394c0a0a2aedd986119f0973d7edf7bf06de66998bb0ea434a"

const wallet1 = new ethers.Wallet(PRIVATE_KEY1, ethers.provider)
const wallet2 = new ethers.Wallet(PRIVATE_KEY2, ethers.provider)
const contract_address = "0xC608BB03a4dFaCc47C9C5C1DDB91F9bB1053C168"
const {abi} = require("../artifacts/contracts/Greeter.sol/Bidding.json")
const instance = new ethers.Contract(contract_address, abi, ethers.provider)

async function main() {
    const contractwithWallet = await instance.connect(wallet1)
    const tx = await contractwithWallet.bid({ value: ethers.utils.parseUnits("0.022", "ether") })
    // const tx = await contractwithWallet.auctionEnd()
    await tx.wait()

    console.log(tx)
}

main()
