var CryptoSportsToken = artifacts.require("CryptoSportsToken");

contract('CryptoSportsToken', function (accounts) {
  const ceo = accounts[0]; // this is the account we deploy as ceo
  const coo = accounts[1]; // this is the account we deploy as coo
  const withdrawWallet = accounts[2];
  const account1 = accounts[3];
  const account2 = accounts[4];
  
  it("should show the createPromoPerson event", function () {
    var cryptoSportsToken;
    return CryptoSportsToken.deployed().then(function (instance) {
      cryptoSportsToken = instance;
      return cryptoSportsToken.createPromoPerson(accounts[1], "string _name", 100)
    }).then(function (result) {
      console.log(result.logs[0].event) 
    })
  })
  
  it("should have an ceo", function() {
    let cst;
    return CryptoSportsToken.new(ceo, coo)
      .then(function(instance) {
        cst = instance;

        return cst.ceoAddress.call();
      })
      .then(function(result) {
        assert.equal(result, ceo);
      });
  });
  
  it("should have an coo", function() {
    let cst;
    return CryptoSportsToken.new(ceo, coo)
      .then(function(instance) {
        cst = instance;

        return cst.cooAddress.call();
      })
      .then(function(result) {
        assert.equal(result, coo);
      });
  });
  
  it("should let users buy if they send enough eth", function() {
    let cst;
    let watcherSold;
    let watcherBirth;
    let idx;
    return CryptoSportsToken.new(ceo, coo)
      .then(function(instance) {
        cst = instance;
        cst.createPromoPerson(accounts[1], "string _name", 100)

        watcherSold = cst.TokenSold();
        watcherBirth = cst.Birth();
        console.log("watcherBirth")
        console.log(watcherBirth)
        return watcherBirth;
      })
      .then(function(result) {
        
        console.log(result.logs[0].event)

      })
      
  });
  
});
