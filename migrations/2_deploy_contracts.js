var CryptoSportsToken = artifacts.require("CryptoSportsToken");
//var erc721 = artifacts.require("ERC721");

module.exports = function(deployer, network, accounts) {
  console.log("Deploying to: ", network, accounts);
  // We deploy the contract with the ownder being the first address from accounts
  const ceo = accounts[0];
  const coo = accounts[1];

  if (network == "live") {
    const ceo = "";
    const coo = "";
    deployer.deploy(CryptoSportsToken, ceo, coo);
    return;
  }
  
  deployer.deploy(CryptoSportsToken, ceo, coo);
};
