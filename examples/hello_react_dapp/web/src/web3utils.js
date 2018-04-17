// ethjs wrap
import Eth from 'ethjs'

let web3 = null;
let accounts = [];

if (typeof window.web3 !== 'undefined') {
  web3 = new Eth(window.web3.currentProvider);

  // get accounts
  web3.accounts().then(accs => {
    accounts = accs;
  });
} else {
  console.error('No web3? You should consider trying MetaMask!');
}

export {
  accounts,
  web3
}
