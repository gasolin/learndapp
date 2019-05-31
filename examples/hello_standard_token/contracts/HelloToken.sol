pragma solidity ^0.4.19;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract HelloToken is StandardToken {
  string public name = "HelloCoin";
  string public symbol = "H@";
  uint8 public decimals = 2;
  uint256 public INITIAL_SUPPLY = 88888;

  function HelloToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
