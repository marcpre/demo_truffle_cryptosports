App = {
  web3Provider: null,
  contracts: {},

  init: function () {
    return App.initWeb3();
  },

  initWeb3: function () {

    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function () {

    $.getJSON('CryptoSportsToken.json', function (data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var CryptoSportsTokenArtifact = data;
      App.contracts.CryptoSportsToken = TruffleContract(CryptoSportsTokenArtifact);

      // Set the provider for our contract
      App.contracts.CryptoSportsToken.setProvider(App.web3Provider);

    });

    //App.contracts.CryptoSportsToken.setProvider(App.web3Provider);

    return App.bindEvents();
  },

  bindEvents: function () {
    var owner = $('#owner').val();
    var name = $('#name').val();
    var price = $('#price').val();
    
    console.log("App: \n");      
    console.log(App);
    console.log(App.contracts);

    console.log(owner + " " + name + " " + price)

    //createPromoPerson(address _owner, string _name, uint256 _price)
    $(document).on('click', '.btn-create', App.createPromoPerson(owner, name, price));
  },
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
