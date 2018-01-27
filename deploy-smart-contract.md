edit metadata

# 如何部署智能合約？

Ethereum上的智能合約需要使用solidity[2](https://www.gitbook.com/book/gasolin/learn-ethereum-dapp/edit#)語言來撰寫。之前還有其他能用來撰寫智能合約的語言如Serpent\(類Python\)、lll\(類Fortran\)，但目前看到所有公開的智能合約都是使用solidity撰寫。官方宣傳上說solidity是一種類似Javascript的語言，而且圍繞著solidity的各種開發工具鏈都是使用屬於Javascript生態系的npm來提供的。

## 將智能合約部署到區塊鏈的流程

寫好solidity程式碼\(.sol\)後，需要先將程式碼編譯\(compile\)成EVM\(Ethereum Virtual Machine\)能讀懂的二進位Contract ByteCode，才能部署到Ethereum的區塊鏈上執行。部署到區塊鏈上的合約會有一個和錢包地址（Address）一樣格式的合約地址（Contract Address）。

{% mermaid %}
graph LR
subgraph local
.sol -- compile --> bytecode[Contract Bytecode]
end
subgraph ethereum
bytecode -- deploy --> Contract
end
{% endmermaid %}

部署後智能合約可自動執行。後續呼叫智能合約的時候，使用者可以使用部署合約的錢包地址\(Owner Account\)，或依據撰寫的智能合約條件，讓其他錢包地址也能呼叫這個智能合約。 所謂的"呼叫智能合約"，其實就是向這個合約地址發起交易，只是交易的不只是代幣，而可以是智能合約提供的呼叫方法。

{% mermaid %}
graph LR
subgraph local
Account
end
subgraph ethereum
Account -- call --> Contract
Contract --> EVM
end
{% endmermaid %}

## 有點抽象，來個例子？ 🌰

在[收到我的ENS網域啦gasolin.eth](https://www.gitbook.com/book/gasolin/learn-ethereum-dapp/edit#)這篇文章中，我介紹了申請Ethereum Name Service的心得。其實ENS本身就是一堆智能合約的集合，透過這些智能合約，一起提供了Ethereum Name Service從申請，競價，到設定地址對應的服務。

要和智能合約互動，除了需要有合約地址外，還需要知道合約所提供的操作介面\(Application Binary Interface，ABI\)，即知道如何呼叫程式提供的功能，和如何解釋程式回傳的資料。 ABI（JSON格式）檔案在從原始碼編譯成ByteCode時會一併產生。

下圖即是ENS Public Resolver這個合約的地址和ABI。​![](https://i.imgur.com/y6jvpAUl.png)​

準備好合約地址和ABI後，我們才能呼叫對應功能來存取合約。​![](https://i.imgur.com/5550HgNl.png)​

在下一章中，我們將開始介紹如何撰寫Solidity程式。
