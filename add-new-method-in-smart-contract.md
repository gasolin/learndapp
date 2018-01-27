### 為智能合約加入新功能 {#加入新方法}

我們在`HelloWorld.sol`中再加入一個`echo`方法，`echo`方法接受輸入一個參數，並回傳傳送的參數。

```
function echo(string name) constant returns (string) {
    return name;
}
```

新的`echo`方法中傳入了一個`name`參數。我們也為`echo`方法加入一個`constant`宣告，表示呼叫這個方法並不會改變區塊鏈的狀態。如此一來，透過`truffle-contract`來呼叫此方法時，會自動選用`call`來呼叫，也不需要額外提供gas。

由於更新了合約內容，我們需要先重新新編譯一次，將編譯結果部署到testrpc上，再透過`truffle console`執行看看結果。

| $ truffle compile ... $ truffle migrate --reset ... $ truffle console &gt;let contract &gt; HelloWorld.deployed\(\).then\(instance =&gt; contract = instance\) &gt; contract.echo\("yo man"\) 'yo man' &gt;  |
| :--- |


`echo`方法確實將我們輸入的內容回傳了。同時因為宣告了`constant`，我們不需要直接呼叫`call()`方法，`truffle`會自動選用call來呼叫。

另一點需要注意的，是這次如果還是用`truffle migrate`命令，我們會得到如下訊息：

| $ truffle migrate Using network 'development'.  Network up to date.  |
| :--- |


Truffle會告訴你現在網路上的合約都已是最新的，但事實上剛剛程式中新增的方法並沒有更新到區塊鏈上。要更新區塊鏈上已部署的程式，需要改寫`migrations`中的腳本，但現在還不到介紹migration的時候。還好我們開發用的區塊鏈是怎麼修改都沒關係的testrpc，可以使用`truffle migrate --reset`命令直接重新在testrpc上部署一次🎉。

## 使用truffle develop命令 {#使用truffle-develop命令}

truffle 4.0.0 版本之後加入了`truffle develop`命令。這個命令讓我們不需要另外安裝testrpc等環境，就能直接上手開發。

例如

```
 truffle develop Truffle Develop started at http://localhost:9545/  Accounts: \(0\) 0x627306090abab3a6e1400e9345bc60c78a8bef57 \(1\) 0xf17f52151ebef6c7334fad080c5704d77216b732 \(2\) 0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef \(3\) 0x821aea9a577a9b44299b9c15c88cf3087f3b5544 \(4\) 0x0d1d4e623d10f9fba5db95830f7d3839406c6af2 \(5\) 0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e \(6\) 0x2191ef87e392377ec08e7c08eb105ef5448eced5 \(7\) 0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5 \(8\) 0x6330a553fc93768f612722bb8c2ec78ac90b3bbc \(9\) 0x5aeda56215b167893e80b4fe645ba6d5bab767de  Mnemonic: candy maple cake sugar pudding cream honey rich smooth crumble sweet treat  truffle\(develop\)&gt; compile truffle\(develop\)&gt; migrate Using network 'develop'. Running migration: 1\_initial\_migration.js   Deploying Migrations... ... Saving artifacts... Running migration: 2\_deploy\_contracts.js   Deploying HelloWorld... ... Saving artifacts... truffle\(develop\)&gt;let contract truffle\(develop\)&gt; HelloWorld.deployed\(\).then\(instance =&gt;contract = instance\) ... truffle\(develop\)&gt; contract.sayHello.call\(\) 'Hello World'  |
```

可以看到，在命令行中輸入`truffle develop`命令，可以直接在裡面執行`compile`，`migrate`指令，還可以直接使用`console`命令所提供的與區塊鍊互動等功能。

## 結語 {#結語}

本篇設計的範例[8](https://blog.gasolin.idv.tw/2017/09/06/howto-write-a-smart-contract/#fn:8)相當簡單，但已達到完整地帶大家快速⚡️走一遍智能合約開發流程的目的。要透過智能合約實現各種功能，可以參考[Solidity by example](https://solidity.readthedocs.io/en/latest/solidity-by-example.html) 和 [Truffle getting started](http://truffleframework.com/docs/getting_started/) 網站學習更多的內容。

