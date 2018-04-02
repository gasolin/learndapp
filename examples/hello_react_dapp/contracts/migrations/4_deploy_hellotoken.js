var HelloToken = artifacts.require("HelloToken");

module.exports = function(deployer) {
  deployer.deploy(HelloToken);
};
