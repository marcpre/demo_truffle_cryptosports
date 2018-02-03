var CryptoSportsToken = artifacts.require("CryptoSportsToken");

contract('CryptoSportsToken', function (accounts) {
  it("should show the transfer event", function () {
    var cryptoSportsToken;
    return CryptoSportsToken.deployed().then(function (instance) {
      cryptoSportsToken = instance;
      return cryptoSportsToken.createPromoPerson(accounts[1], "string _name", 100)
    }).then(function (result) {
      console.log(result.logs[0].event)
    })
  })
});
