require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const PRIVATE_KEY1="6b71fd551da47acd89809f1ba299293bc54145e57bae3958f8cf4f8215563968"
const PRIVATE_KEY2="eba1f1402f6b35394c0a0a2aedd986119f0973d7edf7bf06de66998bb0ea434a"
module.exports = {
  solidity: "0.8.4",
  networks: {
    kovan: {
      url: "https://kovan.infura.io/v3/c1705cd194dc4d8b9bad0ad140770896",
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2]
    },
  }
};
