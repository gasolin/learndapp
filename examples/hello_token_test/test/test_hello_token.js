var HelloToken = artifacts.require('HelloToken');

const INITIAL_SUPPLY = 88888;
let _totalSupply;

contract('HelloToken', function(accounts) {
  it('should met initial supply', function() {
    var contract;
    HelloToken.deployed().then((instance) => {
        contract = instance;
        return contract.totalSupply.call();
    }).then((totalSupply) => {
        _totalSupply = totalSupply;
        assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
        return contract.balanceOf(accounts[0]);
    }).then((senderBalance) => {
        assert.equal(_totalSupply.toNumber(), senderBalance.toNumber());
    }).catch((err) => {
        assert.isNull(err, "should no error");
    });
  });
});
