---
title: 建立標準代幣
---

我們已寫好並部署完成了簡單的加密代幣🔒💵合約。在閱讀完本文後，你將學會建立一個可以放到乙太幣錢包:purse:的加密代幣🔒💵。

## 開發前的準備

延續上一篇的內容，在開發的過程中，我們將繼續使用`ganache-cli`[^1]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

首先確保已啟動ganache-cli。若尚未啟動，可以使用以下命令啟動：

```sh
$ ganache-cli
...
```

這邊有個值得一學的小技巧：在啟動ganache-cli時加上`--seed`參數，例如

```sh
ganache-cli --seed apple banana cherry
```

這樣之後重新啟動ganache-cli時可以產生一樣的帳戶(accounts)和私鑰(private key)。

## ERC20標準

建立的代幣若要能透過乙太幣錢包:purse:來收送，必須相容於以太坊的ERC20標準[^2]。ERC20標準定義了支援錢包所必須的合約介面。

本篇將使用`OpenZeppelin`[^2]函式庫來簡化建立加密代幣🔒💵的過程。`OpenZeppelin`(zeppelin-solidity)是一套協助撰寫安全的加密合約的函式庫，裡面也提供了相容ERC20標準的智能合約。

我們會使用到Node.js的套件管理工具`npm`(Node Package Manager)來安裝`zeppelin-solidity`套件。在執行安裝命令前，需要先建立`npm`所需的`package.json`檔案：

```
{
  "name": "hellotoken",
  "version": "1.0.0",
  "description": "hello token example"
}
```

然後再透過`npm`工具將`zeppelin-solidity`安裝到專案目錄`node_modules/zeppelin-solodity/`中：

```sh
$ npm install zeppelin-solidity
```

準備完成，我們可以開始建立新的加密代幣智能合約了。

## 建立一個標準代幣合約

在`contracts/`目錄下建立一個`HelloToken.sol`檔案。也可以使用以下命令來產生檔案：

```sh
$ truffle create contract HelloToken
```

`HelloToken.sol`檔案內容如下：

```
pragma solidity ^0.4.19;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract HelloToken is StandardToken {
  string public name = "HelloCoin";
  string public symbol = "H@";
  uint8 public decimals = 2;
  uint256 public INITIAL_SUPPLY = 88888;

  function HelloToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
```

### 講解


{% plantuml %}
ERC20Basic <|-- BasicToken
ERC20Basic <|-- ERC20
SafeMath <|-- BasicToken
BasicToken <|-- StandardToken
ERC20 <|-- StandardToken
StandardToken <|-- HelloToken

class SafeMath {
}

interface ERC20Basic

class BasicToken {
+ balances : map
+ totalSupply_ : uint256
+ totalSupply()
+ transfer()
+ balanceOf()
}

interface ERC20

class StandardToken {
- allowed : map
+ transferFrom()
+ approve()
+ allowance()
+ increaseApproval()
+ decreaseApproval()
}

class HelloToken {
  name : string
  symbol : string
  decimals : uint8
  INITIAL_SUPPLY : uint256
}
{% endplantuml %}

```
pragma solidity ^0.4.19;
```

第一行指名目前使用的solidity版本，不同版本的solidity可能會編譯出不同的bytecode。

```
import "zeppelin-solidity/contracts/token/StandardToken.sol";
```

接著我們使用`import`語句，來讀入`zeppelin-solidity`提供的`StandardToken`合約。

```
contract HelloToken is StandardToken {
}
```

建立`HelloToken`合約時，使用`is`語句繼承了[StandardToken](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/StandardToken.sol)合約。因此`HelloToken`合約繼承了`StandardToken`合約所包含的資料與呼叫方法。

當我們繼承了`StandardToken`合約，也就支援了以下ERC-20標準中[^2]規定的函式

| 函式 | 描述 |
| ------------- | ------------- |
| totalSupply() | 代幣發行的總量 |
| balanceOf(A) | 查詢A帳戶下的代幣數目 |
| transfer(A,x) | 傳送x個代幣到A帳戶 |
| transferFrom(A,x) | 從A帳戶提取x個代幣 |
| approve(A,x) | 同意A帳戶從我的帳戶中提取代幣 |
| allowance(A,B) | 查詢B帳戶可以從A帳戶提取多少代幣 |

和前一篇一樣，後面驗證時會用到`balanceOf`和`transfer`兩個函式。因為`StandardToken`合約中已經幫我們實做了這些函式，因此我們不需要自己從頭再寫一次。

```
string public name = "HelloCoin";
string public symbol = "H@";
uint8 public decimals = 2;
uint256 public INITIAL_SUPPLY = 100000;
```

這邊設定參數的目的是指定這個代幣的一些特性。以美元為例，美元的名稱(`name`)是`dollar`，美元的代號為`$`，拿一美元去找零最小可以拿到零錢是一美分(cent)，也就是0.01元。因為一美元最小可分割到小數點後2位(0.01)，因此最小交易單位(decimals)為2。

這邊將這個加密代幣取名(name)為`HelloCoin`(哈囉幣)，代幣的代號(symbol)為`H@`，最小分割單位是2(最小可以找0.01個哈囉幣)。

以下為美金，比特幣，以太幣，哈囉幣的對照表供參考：

| Name | Symbol | decimals |
| ------------ | ------------- | ------------- |
| Dollar | $ | 2 |
| Bitcoin | BTC | 8 |
| Ethereum | ETH | 18 |
| HelloCoin | H@ | 2 |

最後也定義了初始代幣數目`INITIAL_SUPPLY`為`100000`。當我們把全域變數設為`public`(公開)，編譯時就會自動新增一個讀取公開變數的ABI接口，我們在`truffle console`中也可以讀取這些變數。

```
function HelloToken() public {
  totalSupply_ = INITIAL_SUPPLY;
  balances[msg.sender] = INITIAL_SUPPLY;
}
```

和合約同名的`HelloToken`方法，就是`HelloToken`合約的建構函式(constructor)。
在建構式裡指定了`totalSupply_`數目，並將所有的初始代幣`INITIAL_SUPPLY`都指定給`msg.sender`帳戶，也就是用來部署這個合約的帳戶。‵`totalSupply_`與`balances`都定義於[BasicToken.sol](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/ERC20/BasicToken.sol)中。

```
import "./ERC20Basic.sol";
import '../math/SafeMath.sol';
...
using SafeMath for uint256;

mapping(address => uint256) balances;
uint256 totalSupply_;
```

進一步追去看[BasicToken.sol](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/BasicToken.sol)合約的內容，可以發現`BasicToken.sol`合約中匯入了`SafeMath.sol`合約[^7]。`SafeMath`對各種數值運算加入了必要的驗證，讓合約中的數字計算更安全。

如此一來，我們已寫好一個可透過以太幣錢包交易的新加密代幣🔒💵合約。如果將這個合約部署到乙太坊公開區塊鏈上，這個代幣合約就會一直存在，世界上從此也就多了一種新的加密代幣。只要你能找到人想擁有這種代幣，這種代幣就有交易的價值。

### 編譯與部署

在`migrations/`目錄下建立一個`4_deploy_hellotoken.js`檔案，內容如下：

```js
var HelloToken = artifacts.require("HelloToken");

module.exports = function(deployer) {
  deployer.deploy(HelloToken);
};

```

現在執行compile與migrate命令

```sh
$ truffle compile
...
$ truffle migrate --reset
Using network 'development'.

Running migration: 4_deploy_hellotoken.js
  Deploying HelloToken...
  ... 0x2c4659528c68b4e43d1edff6c989fba05e8e7e56cc4085d408426d339b4e9ba4
  HelloToken: 0x352fa9aa18106f269d944935503afe57a00a9a0d
Saving successful migration to network...
  ... 0x1434c1b61e9719f410fc6090ce37c0ec141a1738aba278dd320738e4a5d229fa
Saving artifacts...
```

如此一來我們已將HelloCoin代幣合約部署到ganache上。

## 驗證

我們一樣可以透過`truffle console`來驗證`HelloToken`是否部署成功。

```sh
$ truffle console
> let contract
> HelloToken.deployed().then(instance => contract = instance)
> contract.address
'0x352fa9aa18106f269d944935503afe57a00a9a0d'
> contract.balanceOf(web3.eth.coinbase)
BigNumber { s: 1, e: 5, c: [ 100000 ] }
> contract.balanceOf(web3.eth.accounts[1])
BigNumber { s: 1, e: 0, c: [ 0 ] }
> contract.transfer(web3.eth.accounts[1], 123)
...
> contract.balanceOf(web3.eth.accounts[0])
BigNumber { s: 1, e: 4, c: [ 99877 ] }
> contract.balanceOf(web3.eth.accounts[1])
BigNumber { s: 1, e: 2, c: [ 123 ] }
>
```

### 講解

```sh
> let contract
> SimpleToken.deployed().then(instance => contract = instance)
```

這邊使用`HelloToken.deployed().then`語句來取得HelloToken合約的Instance(實例)，並存到`contract`變數中，以方便後續的呼叫。

```sh
> contract.balanceOf(web3.eth.coinbase)
BigNumber { s: 1, e: 5, c: [ 100000 ] }
> contract.balanceOf(web3.eth.accounts[1])
BigNumber { s: 1, e: 0, c: [ 0 ] }
```

`web3.eth.coinbase` 代表操作者預設的帳戶，即ganache所提供的10個帳戶中的第一個帳戶，也可以透過`web3.eth.accounts[0]`取得。
這兩句的目的是在進行轉帳操作前，先查詢前兩個帳戶所擁有的代幣餘額。透過呼叫`balanceOf`函式，可以看到第一個帳戶(部署合約的帳戶)裡存著所有的代幣。

```
> contract.transfer(web3.eth.accounts[1], 123)
...
```

接著使用`transfer`函式來傳送`123`個代幣到第二帳戶`web3.eth.accounts[1]`。如果轉帳成功，傳送者預設帳戶中會減少`123`個代幣，接收者帳戶中會增加`123`個代幣。

```
> contract.balanceOf(web3.eth.accounts[0])
BigNumber { s: 1, e: 4, c: [ 99877 ] }
> contract.balanceOf(web3.eth.accounts[1])
BigNumber { s: 1, e: 2, c: [ 123 ] }
>
```

我們再次透過呼叫`balanceOf`函式，查詢傳送者帳戶接收者帳戶各自剩下的HelloToken數目。發現轉帳真的成功了。

## 結語

我們用到 `OpenZeppelin`提供的函式庫來簡化撰寫加密代幣合約的工作。要實際投入使用前，還是建議將呼叫到的程式碼都再審查幾遍。可以從 OpenZeppelin 自己提供的Audit開始看[^4]，可以學到一些觀念。

## 參考資料

* [1] https://github.com/trufflesuite/ganache-cli
* [2] ERC20 https://theethereum.wiki/w/index.php/ERC20_Token_Standard 或 https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
* [3] OpenZeppelin https://github.com/OpenZeppelin/zeppelin-solidity
* [4] OpenZeppelin Audit https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/audit/ZeppelinAudit.md
* [5] An Ethereum Hello World Smart Contract for Beginners part 1 http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/
* [6] http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/
* [7] OpenZeppelin [SafeMath 合約](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/math/SafeMath.sol)
* [8] 範例網址 https://github.com/gasolin/learndapp/tree/master/examples/hello_standard_token
