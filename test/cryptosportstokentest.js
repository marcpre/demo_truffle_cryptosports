var CryptoSportsToken = artifacts.require("CryptoSportsToken");

contract('CryptoSportsToken', function (accounts) {
  const ceo = accounts[0]; // this is the account we deploy as ceo
  const coo = accounts[0]; // this is the account we deploy as coo
  const withdrawWallet = accounts[2];
  const account1 = accounts[3];
  const account2 = accounts[4];
  
  it("should show the transfer event", function () {
    var cryptoSportsToken;
    return CryptoSportsToken.deployed().then(function (instance) {
      cryptoSportsToken = instance;
      return cryptoSportsToken.createPromoPerson(accounts[1], "string _name", 100)
    }).then(function (result) {
      console.log(result.logs[0].event)
    })
  })
  
  it("should have an owner", function() {
    let cst;
    return CryptoSportsToken.new(owner, withdrawWallet)
      .then(function(instance) {
        cst = instance;

        return cst.contractOwner.call();
      })
      .then(function(result) {
        assert.equal(result, ceo);
      });
  });
  
});
