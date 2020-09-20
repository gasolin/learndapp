---
title: 使用 React 開發 DApp
---

import Mermaid from '@theme/Mermaid'

就前面的經驗，我們理解一個DApp專案通常包含了`智能合約`與`網頁前端`兩個部份。兩者之間僅透過ABI來互動。因此，在之後的章節裡，我們的專案都會包含兩個獨立的資料夾，分別放置`智能合約`(contract)與`網頁前端`(web)的部份。

<Mermaid chart={`
graph LR
subgraph 使用者
  瀏覽器[DApp相容瀏覽器]
  加密代幣錢包
  subgraph 前端
    網頁[網頁應用]
  end
end
subgraph ethereum
  Contract[智能合約]
end
網頁 --> 加密代幣錢包
加密代幣錢包 -- ABI --> Contract
Contract -- ABI --> 網頁
網頁 --- 瀏覽器
`}/>


## 建立智能合約資料夾

這邊一樣使用 truffle 來建立智能合約資料夾。首先建立`hello_react_dapp`專案資料夾。

```sh
$ mkdir hello_react_dapp
$ cd hello_react_dapp
```

接著在專案資料夾中建立`contracts`資料夾。

```sh
$ mkdir contracts
$ cd contracts
$ truffle init
```

從其他範例中把`contracts/HelloToken.sol`、`migrations/4_deploy_hellotoken.js`、`package.json`、`truffle.js`這幾個檔案複製到`hello_react_dapp/contracts`資料夾下，再執行`npm install`命令安裝相關函式庫。安裝好後可以使用`truffle compile`或`truffle migrate`命令編譯或部署`HelloToken`合約。

```
$ npm install
$ truffle migrate
```

在編譯或部署合約後，需記下`HelloToken`合約部署的地址。此外，在`build/contracts`資料夾下可以看到產生的`HelloToken.json`檔。裡面包含`HelloToken.json`智能合約的ABI。這兩個資料在DApp中將會用到。

{% mermaid %}
graph LR
subgraph 本地開發機器
cotracts/cotracts/**.sol -- compile --> bytecode[Contract Bytecode]
end

subgraph ethereum
Contract
end

bytecode -- migrate --> Contract
{% endmermaid %}

## 在 MetaMask 中導入代幣

照前面章節說明在MetaMask中加入`ganache`的預設帳戶，並輸入合約地址以加入自訂的`HelloToekn`代幣。

![Imgur](https://i.imgur.com/hSruOUQl.png)

## 建立 DApp資料夾

建立`hello_react_dapp`資料夾

```sh
$ mkdir hello_react_dapp
$ cd hello_react_dapp
```

使用`npx create-react-app`命令來建立`web`資料夾。`Ethjs`（支援promise且相對穩定）。

```sh
$ npx create-react-app web
$ cd web
$ npm install --save ethjs
$ npm install
```

這時已可使用`npm start`命令開啟預設網頁（但還沒連接到智能合約）。

```sh
npm start
```

執行`npm start`命令後會在本機開啟一個網頁伺服器，並會在修改`web`資料夾中的內容時自動再次編譯。完成時可使用`npm build`命令輸出網頁成品。

`npx`是`npm`提供的新功能。過去要執行`create-react-app`或`gulp`等指令時，需要先使用`npm install -g xxx` 將這些指令安裝到 global namespace。對於`create-react-app`這種產生器（generator）性質的命令，由於只有在建立新專案時會用到。因為`create-react-app`更新頻繁，下次不知什麼時候要用到時，又要重新升級一次才能使用到最新的功能。現在用`npx`可以即時下載並執行 node 指令，而不需要預先安裝。


{% mermaid %}
graph LR

subgraph 使用者
瀏覽器[DApp相容瀏覽器]
加密代幣錢包
subgraph 前端
網頁[網頁應用]
end
end

subgraph ethereum
Contract[智能合約]
end

subgraph 本地開發機器
web/src/** -- build --> 網頁1[網頁]
end

網頁 --> 加密代幣錢包
加密代幣錢包 -- ABI --> Contract
Contract -- ABI --> 網頁
網頁 --- 瀏覽器
網頁1 --> 網頁
{% endmermaid %}

### 透過網頁連接智能合約

透過網頁連接智能合約需要提供三個參數：合約所在的網路，合約部署的地址，合約的ABI。

將編譯好的 `contracts/build/contracts/HelloToken.json`複製到`web/src/lib/contracts/HelloToken.json`中。並在`src`目錄下建立`constants.js`檔案，將部署好的`HelloToken`地址複製過來。

```js
export const CONTRACT_ADDRESS = '0x345cA3e014Aaf5dcA488057592ee47305D9B3e10';
```

### 連上乙太坊網路

```sh
npm install --save ethjs
```

建立 `src/web3utils.js` 檔案，內容如下

```js
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
```

#### 講解

```js
if (typeof window.web3 !== 'undefined') {}
```

當網頁中存在`window.web3`物件，可假設此瀏覽器支援DApp。

```js
web3 = new Eth(window.web3.currentProvider);
```

這時我們可透過`web3.js`或`Ethjs`協助我們連到瀏覽器/MetaMask擴充功能套件當前所連接的網路(即`window.web3.currentProvider`)。

```js
web3.accounts().then(accs => {
  accounts = accs;
});
```

因為所有會改變區塊鏈上狀態的交易都需要附上來源帳戶地址，因此在這邊順便取得本機的所有帳戶。

```
export {
  accounts,
  web3
}
```

最後匯出`accounts`和`web3`，在`component`中可透過`import { accounts, web3 } from '../web3utils'`取得web3和本機的所有帳戶。



### App.js

`App.js`內容如下：

```js
import React, { Component } from 'react';
import './App.css';

import { accounts, web3 } from './web3utils';
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
      let token = eth.contract(CONTRACT_JSON.abi).at(CONTRACT_ADDRESS);
      let balance = await token.balanceOf(account, {from: account});
      this.setStateAsync({account, balance: balance.balance.toNumber() / 100});
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
```

#### 講解

```js
import { accounts, web3 } from './web3utils';
```

取得web3和本機的所有帳戶。

```js
import {CONTRACT_ADDRESS} from './constants';
import CONTRACT_JSON from './lib/contracts/HelloToken.json';
```

取得合約地址和從`truffle`編譯得到的JSON資料。

```js
class App extends Component {
  constructor(props) {}
  componentWillMount()
  render()
}
```

透過 class 語句宣告 React 元件(component)。在`constructor`建構函式中加入預設值。在`render`函式中定義網頁介面來展示帳戶與餘額。`componentWillMount`是React提供的預設lifecycle函式之一[^4]，可在元件實際顯示前預先執行一些動作。


```js
let token = eth.contract(CONTRACT_JSON.abi).at(CONTRACT_ADDRESS);
```

JSON資料中存有此合約的ABI。可透過`eth.contract`函式將ABI轉換成易於使用的API。透過`at`可設定呼叫此合約的地址。

```js
let balance = await token.balanceOf(account, {from: account});
this.setStateAsync({account, balance: balance.balance.toNumber() / 100});
```

取得帳戶與帳戶餘額。


完成畫面

![Imgur](https://i.imgur.com/H3UYGSU.png)



## 參考資料

* [1] Async Await with React Lifecycle methods https://medium.com/front-end-hacking/async-await-with-react-lifecycle-methods-802e7760d802
* [2] Detect global web3 object https://github.com/MetaMask/faq/blob/master/detecting_metamask.md
* Calling a Smart Contract With a Button https://medium.com/metamask/calling-a-smart-contract-with-a-button-d278b1e76705
* [3] Ethjs User Guide https://github.com/ethjs/ethjs/blob/master/docs/user-guide.md
* [4] React Lifecycle https://reactjs.org/docs/react-component.html
* [5] 範例網址 https://github.com/gasolin/learndapp/tree/master/examples/hello_react_dapp
