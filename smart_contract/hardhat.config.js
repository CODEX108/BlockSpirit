//https://eth-goerli.g.alchemy.com/v2/GjUraEdW2b2i0jtnceWGkfRoKy4jzlhE

require('@nomicfoundation/hardhat-chai-matchers');
module.exports={
  solidity:'0.8.9',
  networks:{
    Goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/GjUraEdW2b2i0jtnceWGkfRoKy4jzlhE',
      accounts : ['hidden']
    }
  }
}
