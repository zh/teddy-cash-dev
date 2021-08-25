const externalAddrs  = {
  // https://data.chain.link/avalanche/mainnet/crypto-usd/avax-usd
  CHAINLINK_ETHUSD_PROXY: "0x0a77230d17318075983913bc2145db16c7366156", 
  // https://docs.tellor.io/tellor/integration/reference-page
  // this address is not valid for Tellor. It is just a copy of the Chainlink one
  TELLOR_MASTER:"0x0a77230d17318075983913bc2145db16c7366156",
  // https://uniswap.org/docs/v2/smart-contracts/factory/
  // Pangolin 
  UNISWAP_V2_FACTORY: "0xefa94DE7a4656D787667C749f7E1223D71E9FD88",
  UNISWAP_V2_ROUTER02: "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106",
  WETH_ERC20: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
}

const liquityAddrsTest = {
  GENERAL_SAFE:"0x8be7e24263c199ebfcfd6aebca83f8d7ed85a5dd",  // Hardhat dev address
  LQTY_SAFE:"0x20c81d658aae3a8580d990e441a9ef2c9809be74",  //  Hardhat dev address
  // LQTY_SAFE:"0x66aB6D9362d4F35596279692F0251Db635165871",
  DEPLOYER: "0x5604d5Bf34e0347921264d5475C21e2BeAFBADf5" // Mainnet test deployment address
}

const liquityAddrs = {
  GENERAL_SAFE:"0x7B4a14CD122BFE2e717c27914a024D05eC3061B9", // TODO
  LQTY_SAFE:"0x41f8a18b165De90383bf23CbcE5c0244ECDeeaA7", // TODO
  DEPLOYER: "0x5604d5Bf34e0347921264d5475C21e2BeAFBADf5",
}

/*
const beneficiaries = {
  TEST_INVESTOR_A: "",
  TEST_INVESTOR_B: "",
  TEST_INVESTOR_C: ""
}
*/
const beneficiaries = [];

const OUTPUT_FILE = './mainnetDeployment/avalancheDeploymentOutput.json'

const delay = ms => new Promise(res => setTimeout(res, ms));
const waitFunction = async () => {
  return delay(90000) // wait 90s
}

const GAS_PRICE = 225000000000 //225000000000 // 1 Gwei
const TX_CONFIRMATIONS = 1

//C-chain explorer doesn't support verification api
//const ETHERSCAN_BASE_URL = 'https://cchain.explorer.avax-test.network/address'
const ETHERSCAN_BASE_URL = undefined;

module.exports = {
  externalAddrs,
  liquityAddrs,
  beneficiaries,
  OUTPUT_FILE,
  waitFunction,
  GAS_PRICE,
  TX_CONFIRMATIONS,
  ETHERSCAN_BASE_URL,
};