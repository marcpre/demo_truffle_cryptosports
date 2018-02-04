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
    let KH;
    let watcher;
    let idx;
    return KetherHomepage.new(owner, withdrawWallet)
      .then(function(instance) {
        KH = instance;
        watcher = KH.Buy();

        return KH.buy(0, 0, 10, 10, { value: oneHundredCellPrice, from: account1 })
      })
      .then(function(result) {
        // Make sure we issued the right Buy() event
        assert.equal("Buy", result.logs[0].event);
        const buyEvent = result.logs[0].args;

        idx = buyEvent.idx;

        assert.equal(account1, buyEvent.owner)
        assert.equal(0, buyEvent.x.toNumber());
        assert.equal(0, buyEvent.y.toNumber());
        assert.equal(10, buyEvent.width.toNumber());
        assert.equal(10, buyEvent.height.toNumber());

        // make sure the grid is filled
        return KH.grid.call(0, 0);
      })
      .then(function(res) {
        assert.equal(true, res);

        return KH.grid.call(10, 10);
      })
      .then(function(res) {
        assert.equal(false, res);

        return KH.ads.call(idx);
      })
      .then(function(ad) {
        // Make sure we added the ad
        assert.equal(account1, ad[0]);
        assert.equal(0, ad[1].toNumber());
        assert.equal(0, ad[2].toNumber());
        assert.equal(10, ad[3].toNumber());
        assert.equal(10, ad[4].toNumber());
      })
  });
  
});
