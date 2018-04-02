# 加入單元測試

因為智能合約一旦部署就難以修改，因此合約的安全性極其重要，要避免合約中出現一些基礎錯誤，除了透過第三方驗證外，完整地單元測試(unit test)也是必需的。

目前最成熟的智能合約單元測試方式，還是透過`Truffle`開發框架來達成。有趣的是Truffle主要使用Javascript來撰寫智能合約的單元測試（也可以用 solidity來寫）。

## 加入測試

接續上一篇建立的`HelloToken`合約，在`test/`目錄下加入`test_hello_token.js`測試檔案（如果覺得這份程式碼不易理解，可跳過這節，後面會介紹更簡潔的測試方法，到時再回來對照著看即可）。

```js
var HelloToken = artifacts.require('HelloToken');

const INITIAL_SUPPLY = 88888;
let _totalSupply;

contract('HelloToken', function(accounts) {
  it('should met initial supply', function() {
    var contract;
    HelloToken.deployed().then((instance) => {
        contract = instance;
        return contract.totalSupply.call();
    }).then((totalSupply) => {
        _totalSupply = totalSupply;
        assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
        return contract.balanceOf(accounts[0]);
    }).then((senderBalance) => {
        assert.equal(_totalSupply.toNumber(), senderBalance.toNumber());
    });
  });
});
```

運行`truffle test`可看到測試通過的結果。

```sh
Contract: HelloToken
    ✓ should met initial supply

1 passing (11ms)
```

### 講解

```js
var HelloToken = artifacts.require('HelloToken');
```
`artifacts.require`的用法和在`migrations/`中的用法相同，可以直接引入對應的智能合約。

```js
contract('HelloToken', function(accounts) {
  it('should met initial supply', function() {
  });
});
```

Truffle是使用Javascript開發中常見的[Mocha](https://mochajs.org/)測試框架和[Chai](http://chaijs.com/)斷言庫來做單元測試。差別只是把Mocha test中的 `describe`換成`contract`。根據官方文件[^1]，`contact`執行前會自動重新部署到testrpc(或測試網路)上，所以智能合約會是剛部署好乾淨的狀態。

此外，`contract`也會帶入`accounts`變數，裡面儲存了testrpc或其他你運行的測試網路所提供的帳號，開發者可以直接使用這些帳號來測試合約。

第一個測試是來測部署合約後預設的代幣數目是否正確。

```js
var contract;
HelloToken.deployed().then((instance) => {
    contract = instance;
    return contract.totalSupply.call();
}).then((totalSupply) => {
  ...
});
```

這邊內容和在`truffle console`中輸入的測試內容雷同，使用`Promise`來確定每個非同步的操作都在上一個操作完成後才繼續執行。

上一個操作可以透過 `return` 語句回傳下個操作需要的參數。例如這邊`then`裡面傳入的`totalSupply`參數，是來自上一行`return contract.totalSupply.call()`的結果。

```js
assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
...
assert.equal(_totalSupply.toNumber(), senderBalance.toNumber());
```

這邊我們透過`assert.equal`語句驗證了`HelloToken`合約中的初始代幣總額與`INITIAL_SUPPLY`參數的值相符，且與合約部署者(`accounts[0]`)帳戶中擁有的總額相符。

## 使用 async/await 簡化測試

要理解這樣的promise chain需要一些練習。但其實上面的測試用例中，我們只想做好最後的兩個assert驗證。有沒有比較直覺的測試方法呢？

有的！2017下半年，Javascript 語言支援了`async/await`語句[2]（只要安裝Node 7.6版以上即可使用），可以用更直覺的方式撰寫非同步的程式碼。

智能合約測試剛好也使用大量的非同步程式碼。在`test/`目錄下加入`test_hello_token_async.js`測試檔案。使用`async/await`語句改寫後的智能合約測試程式碼如下：

```js
var HelloToken = artifacts.require('HelloToken');

const INITIAL_SUPPLY = 88888;

contract('HelloToken Async', function(accounts) {
  it('should met initial supply', async function() {
    let contract = await HelloToken.deployed();
    let totalSupply = await contract.totalSupply.call();
    let senderBalance = await contract.balanceOf(accounts[0]);
    assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
    assert.equal(totalSupply.toNumber(), senderBalance.toNumber());
  });
});
```

運行`truffle test`可看到測試通過的結果。

```sh
  Contract: HelloToken
    ✓ should met initial supply

  Contract: HelloToken Async
    ✓ should met initial supply (67ms)


  2 passing (149ms)
```

### 講解

```js
it('should met initial supply', async function() {
});
```

要在程式碼中使用async/await，需要在函式前加入`async`宣告，這樣解譯器才會解析函式中的`await`語法。

```js
let contract = await HelloToken.deployed();
let totalSupply = await contract.totalSupply.call();
let senderBalance = await contract.balanceOf(accounts[0]);
```

透過在非同步的操作前加上`await`宣告，這三行程式會依照順序，等待第一行await語句執行完，取得`contract`變數後，再依序執行第二行語句。第二行語句執行完，取得`totalSupply`變數後，再繼續執行第三行語句以取得`senderBalance`變數。

後面兩個assert語句則與promise撰寫時完全一樣。這樣改寫後，程式碼的可讀性大大地提昇了！

## 加入轉帳測試

再透過`async/await`語句，試著加入轉帳測試：

```js
  it('should have right balance after transfer', async function() {
    const AMOUNT = 123;
    let contract = await HelloToken.deployed();
    // check init balance
    let account0Balance = await contract.balanceOf(accounts[0]);
    let account1Balance = await contract.balanceOf(accounts[1]);
    assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY);
    assert.equal(account1Balance.toNumber(), 0);
    // check balance after transferred
    await contract.transfer(accounts[1], AMOUNT);
    account0Balance = await contract.balanceOf(accounts[0]);
    account1Balance = await contract.balanceOf(accounts[1]);
    assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY - AMOUNT);
    assert.equal(account1Balance.toNumber(), AMOUNT);
  });
```

運行`truffle test`可看到測試通過的結果。

```
  Contract: HelloToken
    ✓ should met initial supply

  Contract: HelloToken Async
    ✓ should met initial supply (101ms)
    ✓ should have right balance after transfer (276ms)


  3 passing (506ms)
```

### 講解

```js
let account0Balance = await contract.balanceOf(accounts[0]);
let account1Balance = await contract.balanceOf(accounts[1]);
assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY);
assert.equal(account1Balance.toNumber(), 0);
```

範例的前半部測試`帳號0`與`帳號1`中的代幣餘額。`帳號0`即部署代幣的帳號，因此擁有所有的`HelloToken`代幣，而`帳號1`中則沒有`HelloToken`代幣。

```js
await contract.transfer(accounts[1], AMOUNT);
```

接著呼叫合約的`transfer`方法將一些代幣轉入`帳號1`。注意這些都是非同步的操作（送出傳輸命令後，要先等待區塊鏈確認），因此需要使用`await`語句。

```js
account0Balance = await contract.balanceOf(accounts[0]);
account1Balance = await contract.balanceOf(accounts[1]);
assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY - AMOUNT);
assert.equal(account1Balance.toNumber(), AMOUNT);
```

範例的後半部再次測試`帳號0`與`帳號1`中的代幣餘額。結果符合轉帳後兩個帳戶的預期代幣數額。


## 結語

`async/await`語句相當適合拿來寫非同步的程式，這特性太適合用來寫智能合約的測試了。因為`async/await`這語法太新，所以大部分的參考資料都還在用`Promise`來撰寫。我建議當你看到相關的智能合約測試時，可以用async/await改寫看看，會有很不一樣的感受。

# 參考資料

* [1] Writing Tests in Javascript http://truffleframework.com/docs/getting_started/javascript-tests
* [2] 6 Reasons Why JavaScript’s Async/Await Blows Promises Away (Tutorial)https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
* [3] 範例網址 https://github.com/gasolin/learndapp/tree/master/examples/hello_token_test
