pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    function hello() pure public returns(string memory){
        return 'Hello world!';
    }

    // pure = Read only function
    // public = visibility of the function(can be accessed outside of the contract)
    // returns = type of the returned value
    // memory = data location(temporary on the memory)
}