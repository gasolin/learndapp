
開啟一個命令列視窗，輸入以下命令以建立專案：

```sh
$ mkdir hello_webpack
$ cd hello_webpack
$ truffle unbox webpack
```

`truffle unbox webpack`命令會指定truffle下載webpack模板(box)[^1]來初始化專案。

專案建立好後，將`truffle.js`中的port設定修改為和之前專案一樣的`8545`，執行`truffle compile`與`truffle migrate`命令，將專案部署到`testrpc`本地測試網路上。

接著我們來安裝專案所需的套件，並啟動Webpack測試伺服器

```sh
$ npm install
$ npm run dev
> truffle-init-webpack@0.0.2 dev ...
> webpack-dev-server

Project is running at http://localhost:8080/
webpack output is served from /
...
```

啟動後可以到瀏覽器中開啟`http://localhost:8080/`連結，可以看到truffle預設範例的MetaCoin操作介面。

![Imgur](https://i.imgur.com/91KBMJh.png)


## 參考資料

* [] Truffle webpack box (template) http://truffleframework.com/boxes/webpack
* [1] Building and testing a frontend app with Truffle http://truffleframework.com/tutorials/building-testing-frontend-app-truffle-3
* [2] How to start developing on Ethereum for web developers http://jefflau.net/how-to-start-developing-on-ethereum-for-web-developers/
* [3] http://truffleframework.com/tutorials/how-to-install-truffle-and-testrpc-on-windows-for-blockchain-development
