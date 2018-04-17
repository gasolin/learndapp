import React, { Component } from 'react';
import './App.css';

import {
  accounts,
  web3
} from './web3utils';
import {CONTRACT_ADDRESS} from './constants';
import CONTRACT_JSON from './lib/contracts/HelloToken.json';

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
      if (accounts.length === 0) {
        this.setStateAsync({status: 'There was an error fetching your accounts.'});
        return;
      }

      let account = accounts[0];
      let token = web3.contract(CONTRACT_JSON.abi).at(CONTRACT_ADDRESS);
      let balance = await token.balanceOf(account, {from: account});
      this.setStateAsync({account, balance: balance.balance.toNumber() / 100, status: ''});
    } catch(err) {
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
