import Eth from 'ethjs'

let eth = null;

if (typeof window.web3 !== 'undefined') {
  eth = new Eth(window.web3.currentProvider);
} else {
  console.log('No web3? You should consider trying MetaMask!')
  // eth = new Eth(new Eth.HttpProvider('http://localhost:8545'))
}

export {
  eth
}
