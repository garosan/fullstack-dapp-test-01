require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();
require("dotenv").config({ path: ".env.mainnet.prod" });
const SEPOLIA_API_URL = process.env.API_URL;
const SEPOLIA_PRIVATE_KEY = process.env.PRIVATE_KEY;
const BASE_API_URL = process.env.BASE_API_URL;
const BASE_MAIN_PRIVATE_KEY = process.env.BASE_MAIN_PRIVATE_KEY;
const ARBITRUM_API_URL = process.env.ARBITRUM_API_URL;
const ARBITRUM_MAIN_PRIVATE_KEY = process.env.ARBITRUM_MAIN_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  paths: {
    sources: "./src/backend/contracts",
    artifacts: "./src/backend/artifacts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
  networks: {
    // sepolia: {
    //   url: SEPOLIA_API_URL,
    //   accounts: [SEPOLIA_PRIVATE_KEY],
    // },
    baseMain: {
      url: BASE_API_URL,
      accounts: [BASE_MAIN_PRIVATE_KEY],
    },
    arbitrumMain: {
      url: ARBITRUM_API_URL,
      accounts: [ARBITRUM_MAIN_PRIVATE_KEY],
    },
  },
};
