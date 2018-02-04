var CryptoSportsToken = artifacts.require("CryptoSportsToken");
//var erc721 = artifacts.require("ERC721");

module.exports = function(deployer) {
  //deployer.deploy(erc721);
  deployer.deploy(CryptoSportsToken);
};
