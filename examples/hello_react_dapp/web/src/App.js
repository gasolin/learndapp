import React, { Component } from 'react';
import './App.css';

import {eth} from './web3connection';
import {CONTRACT_ADDRESS} from './constants';
import CONTRACT_ABI from './lib/HelloToken.json';
let contract = eth.contract(CONTRACT_ABI.abi);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      balance: 0,
      status: ''
    };
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async componentWillMount() {
    try {
      let accounts = await eth.accounts();
      if (accounts.length === 0) {
        this.setStateAsync({status: 'There was an error fetching your accounts.'});
        return;
      }

      let account = accounts[0];
      let token = await contract.at(CONTRACT_ADDRESS);
      let balance = await token.balanceOf(account, {from: account});
      // let left = await eth.getBalance(account);
      this.setStateAsync({account, balance: balance.balance.toNumber() / 100});
    } catch(err) {
      // console.log(err);
      this.setStateAsync({status: err});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
          {this.state.status ? this.state.status : `Balance: ${this.state.balance} H@`}
          </h1>
        </header>
        <p className="App-intro">
          Account: {this.state.account}<br/>
        </p>
      </div>
    );
  }
}

export default App;
