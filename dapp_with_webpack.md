# 使用Webpack編譯DApp

用純HTML5手刻DApp固然可行，但更多的網頁開發者會選擇使用諸如`Webpack`等編譯工具來提昇開發體驗。

## 設定環境

首先確保已啟動testrpc。若尚未啟動，可以使用以下命令啟動：

```sh
testrpc --seed apple banana cherry
```

## 建立專案

開啟一個命令列視窗，輸入以下命令以建立專案：

```sh
$ mkdir hello_webpack
$ cd hello_webpack
$ truffle unbox webpack
```

`truffle unbox webpack`命令會指定truffle下載webpack模板(box)[^1]來初始化專案。

專案建立好後，將`truffle.js`中的port設定修改為和之前專案一樣的`8545`，執行`truffle migrate`命令，將專案部署到`testrpc`本地測試網路上。

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

試試看配合MetaMask操作看看吧，當你在網頁介面上填入目的`帳戶地址`跟`MetaCoin轉出數目`後，MetaMask會被呼叫起來，在MetaMask上選擇同意交易後，這個帳號所擁有的`MetaCoin`數目就改變了。

## HelloToken

我們來將`MetaCoin`合約改成`HelloToken`合約，並對網頁做相應的修改以驗證。

TODO..待續

## 參考資料

* [] Truffle webpack box (template) http://truffleframework.com/boxes/webpack
* [1] Building and testing a frontend app with Truffle http://truffleframework.com/tutorials/building-testing-frontend-app-truffle-3
* [2] How to start developing on Ethereum for web developers http://jefflau.net/how-to-start-developing-on-ethereum-for-web-developers/
* [3] http://truffleframework.com/tutorials/how-to-install-truffle-and-testrpc-on-windows-for-blockchain-development