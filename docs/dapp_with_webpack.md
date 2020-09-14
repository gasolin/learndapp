---
title: 使用 Webpack 編譯 DApp
---

用純HTML5手刻DApp固然可行，但更多的網頁開發者會選擇使用諸如`Webpack`等編譯工具來提昇開發體驗。使用`truffle unbox webpack`命令可以建立一個可運作的Weboack DApp。本書後續的DApp架構並不會再直接使用Webpack/web3.js，而會改用`create-react-app`(React)和`Ethjs`。因為手工維護Webpack設定的缺點，就是當Webpack和相關模組版本更新時需要跟著去手動更新和調整設定。因此本文只會專注在DApp相關部份，不會介紹Webpack的使用與設定細節，有興趣的讀者可另行找到許多Webpack相關參考資料。

## 設定環境

首先確保已啟動ganache/ganache-cli。若尚未啟動，可以使用以下命令啟動：

```sh
ganache-cli --seed apple banana cherry
```

## 建立專案

開啟一個命令列視窗，輸入以下命令以建立專案：

```sh
$ mkdir hello_webpack
$ cd hello_webpack
$ truffle unbox webpack
```

`truffle unbox webpack`命令會指定truffle下載webpack模板(box)[^1]來初始化專案。

專案建立好後，將`truffle.js`中的port設定修改為和之前專案一樣的`8545`，執行`truffle migrate`命令，將專案部署到`ganache`本地測試網路上。

接著我們用`npm install`來安裝專案所需的套件，再透過`npm run dev`命令啟動Webpack測試伺服器：

```sh
$ npm run dev
> truffle-init-webpack@0.0.2 dev ...
> webpack-dev-server

Project is running at http://localhost:8080/
webpack output is served from /
...
```

啟動後可以到瀏覽器中開啟`http://localhost:8080/`連結，可以看到Truffle預設範例的`MetaCoin`操作介面。

![Imgur](https://i.imgur.com/91KBMJh.png)

試試看配合MetaMask操作看看吧，當你在網頁介面上填入目的`帳戶地址`跟`MetaCoin轉出數目`後，MetaMask會被呼叫起來，在MetaMask上選擇同意交易後，這個帳戶所擁有的`MetaCoin`數目就改變了。

## 支援 HelloToken

接著我們來將`MetaCoin`合約的DApp改成支援`HelloToken`合約的DApp。只需要加入`HelloToken`合約，並對`app/index.html`網頁做相應的修改。

首先從之前範例中複製`contracts/HelloToken.sol`與`migrations/4_deploy_hellotoken.js`到對應資料夾中，並執行`npm install zeppelin-solidity --save`以在`package.json`中加入相應的函式庫。

接著需修改`app/javascripts/app.js`。參考前面的單元測試，有三個修改重點：

  1. 修改匯入合約，將匯入`MetaCoin`的地方改為匯入`HelloToken`。
  2. 修改取得代幣餘額的函式為`balanceOf`。
  3. 修改傳送代幣的函式為`transfer`。

### 存取合約

將程式碼

```js
import metacoin_artifacts from '../../build/contracts/MetaCoin.json'
```

修改為

```js
import metacoin_artifacts from '../../build/contracts/HelloToken.json'
```

要在DApp中引用合約，需要匯入編譯好的合約介面檔案(`.json`)，然後使用`truffle-contract`匯入。接下來的操作就跟在`truffle console`中的操作一樣了。

```js
import { default as contract } from 'truffle-contract'
import metacoin_artifacts from '../../build/contracts/HelloToken.json'

var MetaCoin = contract(metacoin_artifacts);
```

  本章選擇盡量減少修改行數以便讀者依循，因此並未將變數名稱一併修改。讀者在確定DApp運作正常後，可以自行嘗試修改變數名稱。

### 修改取得代幣餘額的函式

將程式碼

```js
return meta.getBalance.call(account, {from: account});
```

修改為

```js
return meta.balanceOf(account, {from: account});
```

### 修改傳送代幣的函式

將程式碼

```js
return meta.sendCoin(receiver, amount, {from: account});
```

修改為

```js
return meta.transfer(receiver, amount, {from: account});
```

執行`truffle migrate`將新的合約部署上本地測試網路，然後執行`npm run dev`運行網站。

可以看到修改後的網頁

![Imgur](https://i.imgur.com/hB87eRH.png)

我們可以在MetaMask中切換不同測試帳戶，然後在網頁上查看`HelloToken`代幣餘額。

接著我們可以嘗試從第一個帳戶(預設)轉一些`HelloToken`到第二個帳戶。

在按下頁面上的`Send Token`按鈕後，記得在`MetaMask`中確認送出。
![Imgur](https://i.imgur.com/Sddx7lX.png)

轉帳完成後，刷新頁面可以看到代幣餘額也更新了。

![Imgur](https://i.imgur.com/axQa9FA.png)

有了DApp代幣轉帳介面之後，連發代幣都變得簡單了！


## 參考資料

* [1] Truffle webpack box (template) http://truffleframework.com/boxes/webpack
* [2] Building and testing a frontend app with Truffle http://truffleframework.com/tutorials/building-testing-frontend-app-truffle-3
* [3] How to start developing on Ethereum for web developers http://jefflau.net/how-to-start-developing-on-ethereum-for-web-developers/
* [4] http://truffleframework.com/tutorials/how-to-install-truffle-and-testrpc-on-windows-for-blockchain-development
* [5] 範例網址 https://github.com/gasolin/learndapp/tree/master/examples/hello_webpack
