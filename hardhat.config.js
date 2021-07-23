require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "harmony_test0",
  networks: {
    hardhat: {
chainId: 1337
    },
    harmony_test0: {
      url: "https://api.s0.b.hmny.io",
      chainId: 1666700000,
      accounts: [process.env.ADDR_PRIV_KEY]
    },
    harmony0: {
      url: "https://api.harmony.one",
      chainId: 1666600000,
      accounts: [process.env.ADDR_PRIV_KEY]
    },
    harmony1: {
      url: "https://s1.api.harmony.one",
      chainId: 1666600001,
      accounts: [process.env.ADDR_PRIV_KEY]
    },
    harmony2: {
      url: "https://s2.api.harmony.one",
      chainId: 1666600002,
      accounts: [process.env.ADDR_PRIV_KEY]
    },
    harmony3: {
      url: "https://s3.api.harmony.one",
      chainId: 1666600003,
      accounts: [process.env.ADDR_PRIV_KEY]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  // paths: {
    // sources: "./contracts",
    // tests: "./test",
    // cache: "./cache",
    // artifacts: "./frontend/src/artifacts"
  // }
}
