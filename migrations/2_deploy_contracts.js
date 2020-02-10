const F1ExchangeToken = artifacts.require("F1ExchangeToken");

module.exports = function(deployer) {
    deployer.deploy(F1ExchangeToken).then(() => {
        console.log("F1ExchangeToken contract address is: ", F1ExchangeToken.address)
    });
}