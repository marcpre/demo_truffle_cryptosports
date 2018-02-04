var CryptoSportsToken = artifacts.require("CryptoSportsToken");

contract('CryptoSportsToken', function (accounts) {
  const ceo = accounts[0]; // this is the account we deploy as owner, see 2_deploy_contracts.js
  const withdrawWallet = accounts[1];
  const account1 = accounts[2];
  const account2 = accounts[3];
  
  it("should show the transfer event", function () {
    var cryptoSportsToken;
    return CryptoSportsToken.deployed().then(function (instance) {
      cryptoSportsToken = instance;
      return cryptoSportsToken.createPromoPerson(accounts[1], "string _name", 100)
    }).then(function (result) {
      console.log(result.logs[0].event)
    })
  })
  
  it("should show the transfer event", function () {
    
  })
  
});
