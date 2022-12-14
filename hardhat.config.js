require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
// const { network } = require("hardhat")

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL_HTTP1;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY;
const ETHMAIN_RPC_URL = process.env.ETHMain_RPC_URL_HTTP;
const ETHMAIN_PRIVATE_KEY = process.env.ETHMAIN_PRIVATE_KEY;

const AVAXMAIN_PRC_URL = process.env.AVAX_MAIN_RPC_URL_HTTP;
const AVAXMAIN_PRIVATE_KEY = process.env.AVAXMAIN_PRIVATE_KEY;

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.4.22",
            },
            {
                version: "0.6.12",
            },
            {
                version: "0.8.0",
                settings: {},
            },
            {
                version: "0.8.2",
                settings: {},
            },
        ],

        settings: {
            optimizer: {
                enabled: true,
                runs: 1000,
            },
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            // chainId: 31337,
            url: "http://127.0.0.1:8545",
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: GOERLI_PRIVATE_KEY ? [GOERLI_PRIVATE_KEY] : [],
            chainId: 5,
        },
        main: {
            url: ETHMAIN_RPC_URL,
            accounts: ETHMAIN_PRIVATE_KEY ? [ETHMAIN_PRIVATE_KEY] : [],
            chainId: 1,
        },
        avax_main: {
            url: AVAXMAIN_PRC_URL,

            accounts: AVAXMAIN_PRIVATE_KEY ? [AVAXMAIN_PRIVATE_KEY] : [],
            chainId: 43114,
            gasPrice: 100000000000,
            gasLimit: 10000000,
        },
        // fork_url: {
        //     url: "http://127.0.0.1:8545",
        //     // chainId: 1,
        //     forking: {
        //         url: "https://orbital-evocative-slug.discover.quiknode.pro/ffb89f4ad188fa8aa5aa20e027f3e93af8e654d3",
        //     },
        // },
        hardhat: {
            forking: {
                url: "https://orbital-evocative-slug.discover.quiknode.pro/ffb89f4ad188fa8aa5aa20e027f3e93af8e654d3",
            },
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_KEY,
    },
};
