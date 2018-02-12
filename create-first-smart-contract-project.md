# 建立第一個智能合約專案 {#建立專案}

開啟另一個命令列視窗，輸入以下命令以建立專案：

```sh
$ mkdir hello
$ cd hello
$ truffle init
```

如此一來，我們已建立好第一份智能合約專案了。

在`hello/`資料夾下，可以看到`contracts/`資料夾，裡面放的是這個專案所包含的所有solidity程式。我們在`contracts/`資料夾中額外建立一個`HelloWorld.sol`檔案。（或者也可以用`truffle create contract HelloWorld`命令來建立）

`HelloWorld.sol`檔案內容如下：

```
pragma solidity ^0.4.11;

contract HelloWorld {
    function sayHello() public returns (string) {
        return ("Hello World");
    }
}
```

### 講解 {#講解}

將程式碼定義的合約畫成UML圖如下

```uml
@startuml

class HelloWorld {
+ sayHello()
}

@enduml
```

```
pragma solidity ^0.4.11;
```

第一行指名目前使用的solidity版本，不同版本的solidity可能會編譯出不同的bytecode。

想要知道當前的solidity版本，也可以用 `truffle version` 命令來查看當前使用的truffle與solidity版本：

```sh
$ truffle version
Truffle v4.0.5 (core: 4.0.5)
Solidity v0.4.18 (solc-js)
```

```
contract HelloWorld {
  ...
}
```

`contract`關鍵字類似於其他語言中較常見的`class`。因為solidity是專為智能合約\(Contact\)設計的語言，宣告`contract`後即內建了開發智能合約所需的功能。也可以把這句理解為`class HelloWorld extends Contract`。

雖然一個`.sol`檔案中可以定義多個Contract，但建議一個`.sol`檔案中僅單獨定義一個Contract，這麼做有利於後續的維護。

```
function sayHello() public returns (string) {
    return ("Hello World");
}
```

函式的結構與其他程式類似，但如果有傳入的參數或回傳值，需要指定參數或回傳值的型別\(type\)。所有支援的型別可以查看參考資料[^2]。

solidity官方推薦的縮排風格為4個空格[^5]。

## 編譯 {#編譯}

現在執行`truffle compile`命令，我們可以將`HelloWorld.sol`原始碼編譯成Ethereum bytecode。

```sh
$ truffle compile
```

編譯成功的話，在`build/contracts/`目錄下會多出`HelloWorld.json`這個檔案。（在Windows平台上執行truffle compile若遇到問題，可以查看參考資料[^1]來解決。）

## 部署 {#部署}

為了將寫好的solidity程式碼部署到區塊鍊上，我們需要做一些相應的設定。

### 遷移 {#遷移}

truffle框架中提供了方便部署合約的腳本。我們可以在`migrations/`目錄下維護這些腳本。這些腳本除了能部署合約，也可以用來遷移合約中的資料。建立`migrations/2_deploy_contracts.js`檔案\(這些腳本使用Javascript撰寫\)，將內容修改如下

```js
var HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
```

這些migration檔案會依照檔案的`編號`來執行。例如`2_`就會在`1_`之後執行。檔案後面的文字只為協助開發者理解之用。

在檔案中可使用`artifacts.require`語句來取得準備部署的合約。使用`deployer.deploy`語句將合約部署到區塊鏈上。這邊`HelloWorld`是`contract`的名稱而不是檔名。因此可以用此語法讀入任一`.sol`檔案中的任一合約。

### 區塊網路設定 {#區塊網路設定}

為了與`testrpc`連線，需要打開`truffle.js`檔案並加入以下設定：

```js
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
```

truffle 使用 Javascript 的 Object 格式來定義設定。這邊定義了`development`(開發用)網路為`localhost:8545`，即testrpc所提供的網路位址。

### 部署 {#部署-v2}

現在執行`truffle migrate`命令

```sh
$ truffle migrate
Using network 'development'.

Running migration: 1_initial_migration.js
...
Saving successful migration to network...
Running migration: 2_deploy_contracts.js
...
Saving successful migration to network...
...
Saving artifacts...

```

如此一來合約已經部署到testrpc中。切換到testrpc視窗，可以看到testrpc有反應了。

### 與合約互動 {#與合約互動}

truffle提供命令行工具，執行`truffle console`命令後，可用Javascript來呼叫剛剛部署的合約。

```sh
$ truffle console
> let contract
> HelloWorld.deployed().then(instance => contract = instance)
> contract.sayHello.call()
'Hello World'
>
```

#### 講解 {#講解-v2}

```js
> HelloWorld.deployed().then(instance => contract = instance)
```

`truffle console`中預載了`truffle-contract`[12](https://blog.gasolin.idv.tw/2017/09/06/howto-write-a-smart-contract/#fn:12)函式庫，以方便操作部署到區塊鏈上的合約。

這邊使用`HelloWorld.deployed().then`語句來取得HelloWorld合約的Instance\(實例\)，並存到`contract`變數中，以方便後續的呼叫。

上面用的是Javascript ES6+的語法，這句也可以寫成

```js
HelloWorld.deployed().then(function(instance) {
  hello = instance;
});
```

```sh
> contract.sayHello.call()
'Hello World'
```

這邊直接呼叫`contract.sayHello()`也會得到一樣的結果。`truffle-contract`提供使用`call()`來讀取唯讀\(read only\)的資料，這樣就不需提供gas。因此如果遇到的操作需要向區塊鏈寫入資料，我們就不能用`call`語句了。

如此一來，我們已寫好並部署完成了第一個智能合約，也驗證了合約確實可以運作。

## 參考資料 {#參考資料}

* [1]  Truffle issue on windows http://truffleframework.com/docs/advanced/configuration#resolving-naming-conflicts-on-windows
* [2] Solidity支援的型別\(Type\) [https://solidity.readthedocs.io/en/develop/types.html](https://solidity.readthedocs.io/en/develop/types.html)
* [3] Solium syntax check [https://github.com/duaraghav8/Solium](https://github.com/duaraghav8/Solium)
* [4] [http://truffleframework.com/docs/getting\_started/contracts](http://truffleframework.com/docs/getting_started/contracts)
* [5] Coding Style [http://solidity.readthedocs.io/en/develop/style-guide.html](https://solidity.readthedocs.io/en/develop/style-guide.html)
* [6] 範例網址 https://github.com/gasolin/learndapp/tree/master/examples/hello
