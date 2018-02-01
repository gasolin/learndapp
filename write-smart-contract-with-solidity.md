# 使用solidity語言撰寫智能合約 {#使用solidity語言撰寫智能合約}

前幾章介紹了智能合約📒是什麼，也概略描述了從編譯到部署智能合約的流程，接下來將介紹如何使用solidity語言來寫智能合約。

## Solidity 語言

Ethereum上的智能合約需要使用`solidity`[^1]語言來撰寫。雖然還有其他能用來撰寫智能合約的語言如`Serpent`\(類Python\)、`lll`\(類Fortran\)，但目前看到所有公開的智能合約都是使用solidity撰寫。

宣傳上說，solidity是一種類似Javascript的語言，而且圍繞著solidity的各種開發工具鏈，都是使用屬於Javascript生態系的npm來提供的。但我覺得solidity還是比較像Java或Go語言。 因為和Javascript不同，solidity與Java或Go同屬於強型別\(Strong Type，在定義變數時需要指定型別\)語言、在定義函式\(function\)時同樣需指定回傳的型別\(type\)、同樣也需要先編譯才能執行。這些特性都是Javascript所不具備的。

## 開發前的準備 {#開發前的準備}

本文將使用當前最活躍的智能合約開發框架`truffle`[^3]為基礎來開發。之前提到過的ENS\(Ethereum Name Service\)[^5]也是採用truffle框架。其他選擇還有`embark`[^4]等。

就像一般網站或App開發一樣，在提供公開服務之前，開發者會在自己用於寫程式的電腦\(又稱作本機\)💻或透過測試網路🕸來測試程式執行的效果，測試完成後，才會部署到公開的網路上提供服務。 開發區塊鏈智能合約\(程式\)的過程也是如此。特別是公開鏈上所有寫入或讀取計算結果的操作都需要真金白銀\(虛擬代幣\)💸，而且根據網路狀況，每個公開鏈上的操作都需要要一小段反應時間\(15秒 ~ 數分鐘\)，這些等待頗浪費寶貴的開發時間⏳。 因此在開發的過程中，我們將使用`testrpc`[^6]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

testrpc中也包含了Javascript版本的Ethereum虛擬機\(Ethereum Virtual Machine\)[^7]，因此可以完整地執行智能合約😇。

此外，開發前還需準備一個合手的編輯器。我目前是使用[Visual Studio Code](https://code.visualstudio.com)搭配[solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)插件來開發。solidity插件除了支援語法高亮之外，也會透過Solium[^11]檢查並提示基本的語法錯誤，相當方便。其他編輯器應該也有類似的插件可選擇。

### 安裝所需工具 {#安裝所需工具}

首先開發機上必須裝好Node.js，再使用以下命令安裝所需的工具：

```sh
$ npm install -g ethereumjs-testrpc truffle
```

### 啟動 Testrpc {#啟動-testrpc}

安裝好後隨時可以使用`testrpc`命令來啟動乙太坊測試環境。

```sh
$ testrpc
Available Accounts
==================
(0) 0xa4d7ce9137e6f8de4fb1311595b33230be15be50
(1) 0x26c231bdd7c8a7304983b04694c3437b30331019
(2) 0xe238ccca936dcdbd48f0cf3a1e6f147d04b55527
(3) 0x769ed341bf83cc86e5037cb78388012d6e2d9cc9
(4) 0x72a084c80195de79e5cd8dca59488e67982f65d7
(5) 0xcfda0765b0a82721d2f59581f53846a12e392999
(6) 0x4b0349aea768b4e1ed4cec683f8f7dd112729fea
(7) 0x643c305f0b3844984d7f1f7b9f3ab93a73dfdfcf
(8) 0x2ee0a7974326604442dca127d02fac4957ab3e8a
(9) 0xe00e57db1772f6e81bcccc982e565a10ae26ab92

Private Keys
==================
(0) 7de56fb677edc8d0c7a1f3a6d5bcb8f73ce257d44996e9b5fc8ad414af38a22a
(1) 4401de20cf287d15d1c062005d866a35cd82e2a73f8cb43ec0cb90b117d1ec38
(2) 8f51f9100a81218343d44a047ae3b0be5d80d262a13fbef24dc569b3e335e820
(3) 241a0ff98dfb6f290dbee909c9a7a4eea2de3a2174e7cddf834868ea03f80fa9
(4) ce1108cc6763bc74658068a55b080c6ccbfb1bd26e609588b81c07d13affc70d
(5) f9614c1fd34224787e6c95bbe881fb28fd0fdc00808ef85d0430505f4a348690
(6) 4c1baad08f720f5c5754bb185e66490b45e3480aa3ec419e4b76f7a81118b296
(7) af9af2c6b519d49605cc58b719240299e5e8b9a89a7e94a85625734fc30c46bd
(8) 55ab79ae6de4fad5b98bc1dfd795b945ba8e7d92dcc88073f9e3fdfef471f69f
(9) e9299fb391c8830370991659780933e6b62269e32a8cbc55a29aa5f73df995a2

HD Wallet
==================
Mnemonic:      addict cherry medal cupboard bless reduce oven beauty egg gift pledge exact
Base HD Path:  m/44'/60'/0'/0/{account_index}
```

可以看到testrpc啟動後自動建立了10個帳號\(Accounts\)，與每個帳號對應的私鑰\(Private Key\)🔑。每個帳號中都有100個測試用的以太幣\(Ether\)💵。要注意testrpc僅運行在記憶體中，因此每次重開時都會回到全新的狀態。

如果不習慣命令行界面，也可以試試同樣是Truffle團隊開發的圖形化區塊鍊測試軟體`ganache`[^8]。雖然界面圖形化了，但基本的概念都是相通的。

一切準備就緒，我們可以開始建立第一份智能合約專案了。

## 參考資料

* [1] Solidity http://solidity.readthedocs.io/en/latest/index.html
* [2] Solidity線上編輯器　https://ethereum.github.io/browser-solidity/
* [3] Truffle Framework http://truffleframework.com/
* [4] Embark Framework https://github.com/iurimatias/embark-framework
* [5] ENS也使用Truffle框架 https://github.com/ethereum/ens
* [6] https://github.com/ethereumjs/testrpc
* [7] https://github.com/ethereumjs/ethereumjs-vm
* [8] http://truffleframework.com/docs/ganache/using