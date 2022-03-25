const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x19ff1d21"
    }
]
const contractAddress = "0x6Fa29683D73B725dAe2f374B2c1C10307BE7c7A7"

const web3 = new Web3('http://127.0.0.1:7545')
const helloWorld = new web3.eth.Contract(contractABI, contractAddress) // helloWorld points to the deployed contract!

document.addEventListener('DOMContentLoaded', () => { // waiting for the page to fully load
    helloWorld.methods.hello().call().then((result) => {
        document.getElementById('container').innerHTML = result;
    })

})
