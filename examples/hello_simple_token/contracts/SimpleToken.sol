pragma solidity ^0.4.11;

contract SimpleToken {
  uint256 INITIAL_SUPPLY = 10000;
  mapping(address => uint256) balances;

  function SimpleToken() public {
    // constructor
    balances[msg.sender] = INITIAL_SUPPLY;
  }

  // transfer token for a specified address
  function transfer(address _to, uint256 _amount) public {
    require(balances[msg.sender] > _amount);
    balances[msg.sender] -= _amount;
    balances[_to] += _amount;
  }

  // Gets the balance of the specified address
  function balanceOf(address _owner) public constant returns (uint256) {
    return balances[_owner];
  }
}
