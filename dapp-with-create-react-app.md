## 使用 React 開發 DApp

我們知道一個DApp專案包含了`智能合約`與`網頁前端`兩個部份。兩者之間僅透過ABI來互動。因此，在之後的章節裡，我們的專案都會包含兩個獨立的資料夾，分別放置`智能合約`(contract)與`網頁前端`(web)的部份。

{% mermaid %}
graph LR

subgraph 前端
網頁[網頁(Web)]
end

subgraph ethereum
Contract[智能合約(contracts)]
end

subgraph 使用者
瀏覽器
end

網頁 --- 瀏覽器
Contract -- ABI --> 網頁
網頁 -- ABI --> Contract
{% endmermaid %}


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
subgraph local
cotracts/cotracts/**.sol -- compile --> bytecode[Contract Bytecode]
end

subgraph ethereum
Contract
end

bytecode -- deploy --> Contract
{% endmermaid %}

## 在 MetaMask 中導入代幣

照前面章節說明在MetaMask中加入`testrpc`或`ganache`的預設帳戶，並輸入合約地址以加入自訂的`HelloToekn`代幣。

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
subgraph 前端
網頁
end

subgraph local
web/src/** -- build --> 網頁1[網頁]
end

subgraph 使用者
瀏覽器
end

subgraph ethereum
Contract[智能合約]
end

Contract --> 網頁
網頁 --> Contract
網頁1 -- depoy --> 網頁
網頁 --- 瀏覽器
{% endmermaid %}

### 透過網頁連接智能合約

透過網頁連接智能合約需要提供三個參數：合約所在的網路，合約部署的地址，合約的ABI。

將conpile好的 `contracts/build/contracts/HelloToken.json`複製到`web/src/lib/HelloToken.json`中。

在`src`目錄下建立`constants.js`檔案，將部署好的`HelloToken`地址複製過來。

```js
export const CONTRACT_ADDRESS = '0x345cA3e014Aaf5dcA488057592ee47305D9B3e10';
```

### 連上乙太坊網路

```
npm install --save ethjs
```

`src/web3connection.js`

### 設定合約地址

import {eth} from './web3connection';
import {CONTRACT_ADDRESS} from './constants';
// Import our contract artifacts and turn them into usable abstractions.
import CONTRACT_ABI from './lib/HelloToken.json';

// HelloToken is our usable abstraction, which we'll use through the code below.
let contract = eth.contract(CONTRACT_ABI.abi);


完成畫面

![Imgur](https://i.imgur.com/H3UYGSU.png)



## 參考資料

* [1] Async Await with React Lifecycle methods https://medium.com/front-end-hacking/async-await-with-react-lifecycle-methods-802e7760d802
* [2] 範例網址 https://github.com/gasolin/learndapp/tree/master/examples/hello_react_dapp
