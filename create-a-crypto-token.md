# 建立第一個加密代幣合約

我們已寫好並部署完成了第一個智能合約，也驗證了合約確實可以運作。在閱讀完本篇後，你將學會建立一個簡易的加密代幣🔒💵。本篇目的並非為了寫出一個安全可用的加密代幣，而是以介紹代幣合約的相關概念為主， 是以對合約做了適當地簡化，好更易於理解。

## 開發前的準備

延續上一篇的內容，在開發的過程中，我們將繼續使用`testrpc`[^1]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

首先確保已啟動testrpc，若尚未啟動，可以使用以下命令啟動

```sh
$ testrpc
...
```

這樣我們就可以開始建立加密代幣智能合約專案了。

## 代幣合約的基礎概念

代幣合約扮演像是銀行:bank:的角色。使用者在代幣合約中，用自己的乙太幣帳戶地址當作銀行帳戶，可以透過代幣合約執行轉帳(transfer，將代幣由一個帳戶傳送到另一個帳戶)，查詢餘額(balanceOf，查詢指定帳戶中擁有的代幣)等原本由銀行負責的工作。因為合約部署在公開區塊鏈上，所有的交易都是公開透明，可供檢驗的。

## 建立一個代幣合約

在`contracts/`目錄下建立一個`SimpleToken.sol`檔案。也可以使用以下命令來產生檔案：

```sh
$ truffle create contract SimpleToken
```

`SimpleToken.sol`檔案內容如下：

```
pragma solidity ^0.4.11;

contract SimpleToken {
  uint256 INITIAL_SUPPLY = 10000;
  mapping(address => uint256) balances;

  function SimpleToken() public {
    balances[msg.sender] = INITIAL_SUPPLY;
  }

  // transfer token for a specified address
  function transfer(address _to, uint256 _amount) public {
    require(balances[msg.sender] > _amount);
    balances[msg.sender] -= _amount;
    balances[_to] += _amount;
  }

  // Gets the balance of the specified address
  function balanceOf(address _owner) public constant returns (uint256) {
    return balances[_owner];
  }
}

```

### 講解

```
pragma solidity ^0.4.11;
```

第一行指名目前使用的solidity版本，不同版本的solidity可能會編譯出不同的bytecode。

```
uint256 INITIAL_SUPPLY = 10000;
mapping(address => unit256) balances;
```

我們定義了初始代幣數目`INITIAL_SUPPLY`。這邊隨意選擇了一個數字`10000`。

我們用`mapping`來定義一個可以儲存鍵值對(key-value pair)的資料結構(類似Javascript中的`{"0xaabbccddeeff": 888}`)，同時也需要分別指定`address`作為鍵的型別，指定`uint256`作為值的型別。和Javascript不同，型別定義好後不能隨時更改要儲存的型別。

```
contract SimpleToken {
  function SimpleToken() public {
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
```

和合約同名的`SimpleToken`函式，就是`SimpleToken`這個合約的建構函式(constructor)。函式中我們拿`msg.sender`當作key，`INITIAL_SUPPLY`當作值，將所有的初始代幣`INITIAL_SUPPLY`都指定給`msg.sender`帳號。
`msg`是一個全域(Global)物件[^2]，`msg.sender`表示用作呼叫當前函式的帳號。由於建構函式只有在合約部署時會被執行，因此這邊用到的`msg.sender`，也就代表著用來部署這個合約的帳號。

```
function transfer(address _to, uint256 _amount) public {
  require(balances[msg.sender] > _amount);
  balances[msg.sender] -= _amount;
  balances[_to] += _amount;
}
```

`transfer`函式定義了如何`轉帳`，只要指定要傳送的帳號與數目，就會從呼叫者手上把對應數目的代幣移轉到指定的帳號上。

{% mermaid %}
graph LR
傳送者 -- 轉帳 --> 代幣合約
代幣合約 -.-> 修改傳送者和接收者餘額
{% endmermaid %}

`require(balances[msg.sender] > _amount);`語句判斷帳戶中是否還有足夠轉出的餘額，若存款小於想轉出的數目，就丟出錯誤。

這個函式這麼寫當然還是過度簡化了，若要能實際使用，需要檢查更多可能的狀況。但就先這樣吧。

```
function balanceOf(address _owner) public constant returns (uint256) {
  return balances[_owner];
}
```

`balanceOf`函式的作用，是讓使用者可以查詢任一帳號的餘額。透過傳入`_owner`帳號，可以查詢`_owner`帳號儲存在`balances`對照表中的值。

{% mermaid %}
graph LR
傳送者 --> 代幣合約
代幣合約 -. 查詢結果 .-> 傳送者
{% endmermaid %}

如此一來，我們就寫好一個新加密代幣🔒💵合約囉！接下來將要編譯合約並部署到區塊鏈上。

### 編譯與部署

在`migrations/`目錄下建立一個`3_deploy_token.js`檔案，內容如下：

```js
var SimpleToken = artifacts.require("SimpleToken");

module.exports = function(deployer) {
  deployer.deploy(SimpleToken);
};
```

現在可執行compile與migrate命令

```sh
$ truffle compile
...
$ truffle migrate
Using network 'development'.

Running migration: 3_deploy_token.js
  Deploying HelloToken...
  ... 0x2c4659528c68b4e43d1edff6c989fba05e8e7e56cc4085d408426d339b4e9ba4
  SimpleToken: 0x352fa9aa18106f269d944935503afe57a00a9a0d
Saving successful migration to network...
  ... 0x1434c1b61e9719f410fc6090ce37c0ec141a1738aba278dd320738e4a5d229fa
Saving artifacts...
```

如此一來我們已將`SimpleToken`代幣合約部署到testrpc上。

## 驗證

合約部署完成後，我們可以使用`truffle console`命令開啟console，輸入以下命令來驗證合約是否能照我們設計的方式運作。

```sh
$ truffle console
> let contract
> SimpleToken.deployed().then(instance => contract = instance)
> contract.balanceOf(web3.eth.coinbase)
BigNumber { s: 1, e: 4, c: [ 10000 ] }
> contract.balanceOf(web3.eth.accounts[1])
BigNumber { s: 1, e: 0, c: [ 0 ] }
> contract.transfer(web3.eth.accounts[1], 123)
...
> contract.balanceOf(web3.eth.coinbase)
BigNumber { s: 1, e: 3, c: [ 9877 ] }
> contract.balanceOf.call(web3.eth.accounts[1])
BigNumber { s: 1, e: 2, c: [ 123 ] }
>
```

### 講解

```sh
> let contract
> SimpleToken.deployed().then(instance => contract = instance)
```

這邊使用`SimpleToken.deployed().then`語句來取得SimpleToken合約的Instance(實例)，並存到`contract`變數中，以方便後續的呼叫。

```sh
> contract.balanceOf(web3.eth.coinbase)
BigNumber { s: 1, e: 4, c: [ 10000 ] }
> contract.balanceOf(web3.eth.accounts[1])
BigNumber { s: 1, e: 0, c: [ 0 ] }
```

還記得啟動testrpc後預設會產生10個帳號(Accounts)嗎?。`web3.eth.coinbase` 代表操作者預設的帳號，即10個帳號中的第一個帳號`web3.eth.accounts[0]`，所以這邊呼叫`web3.eth.coinbase`或`web3.eth.accounts[0]`結果是一樣的。

```sh
> contract.balanceOf(web3.eth.accounts[0])
BigNumber { s: 1, e: 4, c: [ 10000 ] }
```

這兩句的目的是在進行轉帳操作前，先查詢前兩個帳號所擁有的代幣餘額。透過呼叫`balanceOf`函式，可以看到第一個帳號(部署合約的帳號)裡存著所有的代幣。

```sh
> contract.transfer(web3.eth.accounts[1], 123)
...
```

接著使用`transfer`函式來傳送`123`個代幣到第二個帳號`web3.eth.accounts[1]`。如果轉帳成功，傳送者預設帳號中會減少123個代幣，接收者帳號中會增加123個代幣。

```sh
> contract.balanceOf(web3.eth.coinbase)
BigNumber { s: 1, e: 3, c: [ 9877 ] }
> contract.balanceOf.call(web3.eth.accounts[1])
BigNumber { s: 1, e: 2, c: [ 123 ] }
>
```

我們再次透過呼叫`balanceOf`函式，查詢傳送者帳號和接收者帳號各自剩下的SimpleToken數目。發現轉帳真的成功了。

## 你知道剛剛的程式碼裡有一堆安全漏洞💣嗎?

寫智能合約看起來並不困難吧？但因為智能合約的運作是透明公開的，而且其中牽涉了代幣或金錢的流動，這提供了駭客很強的挑戰動機。

因此如果要妥善處理智能合約，會遇到的諸多安全問題。即使單純如本篇中的`SimpleToken`，也至少會遇到幾個問題：例如`transfer`函式中沒有禁止傳入負數金額，因此傳送者反過來可以從接收者那邊取得代幣。同時也沒有檢查接收者帳號是否合法，因此傳送者可能會傳送失敗或因為送到黑洞中，白白損失了代幣。

有著一堆安全漏洞的合約，輕則執行失敗白花交易費用，嚴重則影響到合約中的代幣或以太幣。已有多起因為合約的漏洞，造成儲存在合約中的代幣或以太幣被駭客轉走，使得ICO失敗的案例。

有興趣的人可以進一步查看參考資料[^4]和[^5]了解智能合約當前的一些最佳實現。

## 結語

看完這篇除了學到本篇講解的`SimpleToken`外，應該也可以大致看得懂truffle預設的`MetaCoin.sol`合約了。不同的細節可以查看solidity相關語法[^2]。
下一篇會接著介紹如何使用經過驗證的函式庫，來建立一份可以放到乙太幣錢包👛的加密代幣🔒💵合約。

## 參考資料

* [1] https://github.com/ethereumjs/testrpc
* [2] Units and Globally Available Variables http://solidity.readthedocs.io/en/develop/units-and-global-variables.html
* [3] An Ethereum Hello World Smart Contract for Beginners [part 1](http://www.talkcrypto.org/blog/2017/04/17/an-ethereum-hello-world-smart-contract-for-beginners-part-1/), [part 2](http://www.talkcrypto.org/blog/2017/04/22/an-ethereum-hello-world-smart-contract-for-beginners-part-2/)
* [4] Onward with Ethereum Smart Contract Security https://blog.zeppelin.solutions/onward-with-ethereum-smart-contract-security-97a827e47702
* [5] Ethereum Contract Security Techniques and Tips https://github.com/ConsenSys/smart-contract-best-practices
