module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: '127.0.0.1',
      port: 8545,
      network_id: 4,
      gasPrice: "20000000000", // 20 gwei
    },
    live: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1", // Only mainnet
      gasPrice: "10000000000", // 10 gwei
      gas: "5000000", // 0.02 eth at 4 gwei price
    }
  }
};
