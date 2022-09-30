//https://eth-goerli.g.alchemy.com/v2/6X6uHUuSWJqkawitFREu9lRlqz9iSAZu

require('@nomicfoundation/hardhat-chai-matchers');
module.exports={
  solidity:'0.8.9',
  networks:{
    Goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/6X6uHUuSWJqkawitFREu9lRlqz9iSAZu',
      accounts : ['9b9890ae7e2b321e84c3e831cde1975522b29d4fda1a621716a043c1e9329bb5']
    }
  }
}