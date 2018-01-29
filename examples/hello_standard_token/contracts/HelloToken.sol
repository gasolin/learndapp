pragma solidity ^0.4.11;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract HelloToken is StandardToken {
  string public name = "HelloCoin";
  string public symbol = "H@";
  uint8 public decimals = 2;
  uint256 public INITIAL_SUPPLY = 88888;

  function HelloToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
