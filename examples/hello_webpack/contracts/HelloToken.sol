pragma solidity ^0.4.11;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract HelloToken is StandardToken {
  string public name = "HelloCoin";
  string public symbol = "H@";
  uint8 public decimals = 2;
  uint256 public INITIAL_SUPPLY = 88888;

  // uint256 public totalSupply;
  // mapping(address => uint256) balances;

  function HelloToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
