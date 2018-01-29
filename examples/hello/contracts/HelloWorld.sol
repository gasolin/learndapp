pragma solidity ^0.4.11;

contract HelloWorld {
    function sayHello() public returns (string) {
        return ("Hello World");
    }

    function echo(string name) constant returns (string) {
        return name;
    }
}
