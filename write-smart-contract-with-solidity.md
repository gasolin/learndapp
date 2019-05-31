# 使用solidity語言撰寫智能合約

前幾章介紹了智能合約📒是什麼，也概略描述了從編譯到部署智能合約的流程，接下來將介紹如何使用solidity語言來寫智能合約。

## Solidity 語言

Ethereum上的智能合約需要使用`solidity`[^1]語言來撰寫。雖然還有其他能用來撰寫智能合約的語言如`Serpent`(類Python)、`lll`(類Fortran)，但目前看到所有公開的智能合約都是使用solidity撰寫。

宣傳上說，solidity是一種類似Javascript的語言，但我覺得solidity還是比較像Java或Go語言。因為和Javascript不同，solidity與Java或Go同屬於強型別(Strong Type，在定義變數時需要指定型別)語言、在定義函式(function)時同樣需指定回傳的型別(type)、同樣也需要先編譯才能執行。這些特性都是Javascript所不具備的。

圍繞著solidity的各種開發工具鏈，都是使用屬於Javascript生態系的npm來提供的。在後續開發DApp時，能運用同一套建構(Build)環境的優勢就突顯出來了。

## 開發前的準備

本文將使用當前最活躍的智能合約開發框架`truffle`[^3]為基礎來開發。目前多數智能合約皆採用truffle框架開發。其他選擇還有`embark`[^4]等。

就像一般網站或App開發一樣，在提供公開服務之前，開發者會在自己用於寫程式的電腦(又稱作本機)💻或透過測試網路🕸來測試程式執行的效果，測試完成後，才會部署到公開的網路上提供服務。 開發區塊鏈智能合約(程式)的過程也是如此。特別是公開鏈上所有寫入或讀取計算結果的操作都需要真金白銀(虛擬代幣)💸，而且根據網路狀況，每個公開鏈上的操作都需要要一小段反應時間(15秒 ~ 數分鐘)，這些等待頗浪費寶貴的開發時間⏳。 因此在開發的過程中，我們將使用`ganache-cli`[^9]工具在電腦上模擬智能合約所需的乙太坊區塊鏈測試環境。

`ganache-cli`中也包含了Javascript版本的Ethereum虛擬機(Ethereum Virtual Machine)[^7]，因此可以完整地執行智能合約😇。

此外，開發前還需準備一個合手的編輯器。我目前是使用[Visual Studio Code](https://code.visualstudio.com)搭配[solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)插件來開發。solidity插件除了支援語法高亮之外，也會透過Solium[^11]檢查並提示基本的語法錯誤，相當方便。其他編輯器應該也有類似的插件可選擇。

### 安裝所需工具

首先開發機上必須裝好Node.js，再使用以下命令安裝所需的工具：

```sh
$ npm install -g truffle ganache-cli
```

### 啟動 ganache-cli

安裝好後隨時可以使用`ganache-cli`[^9]命令來啟動乙太坊測試環境。`ganache-cli`的前身是`ethereumjs-testrpc`(testrpc)[^6]。可以在很多地方看到這個工具。

```sh
$ ganache-cli
Ganache CLI v6.4.3 (ganache-core: 2.5.5)

Available Accounts
==================
(0) 0xc9caaa064d688aebcd38ed2a6b8331cc677e58af
(1) 0x227591bc0ad6405e1872a65be4dedf43ac9d887d
(2) 0x1d656818acfe449d000b270a40ef642e7db16756
(3) 0x6f5cc46b12b79e61decf52e22d2212aaa198eebb
(4) 0xea8037431fb895d8486d702bf45b1740f68c50e8
(5) 0x1725197577c94c318aa1d9b948a6de6c36975e19
(6) 0x641e7cdefdff32b6c829d548c8b7f09efecf28cd
(7) 0x0c7f8c8e4f1cdc9f80ae555b4af8abd4afb129bd
(8) 0x4678c54cccd849e3e8e493511f7740ffc8a63943
(9) 0xbae12ea1b761b8bee6e21c4379c0da6411206073

Private Keys
==================
(0) aede214f4da9c155d2ad27c37b6e491d51255fa8d5b123f9d325a2c098646910
(1) 47963c15c1f7153a81af4abeabefabd64ab3e1e738372301b8f5d109afb32f86
(2) 8fca5773c047cda6a88a7c8f9922282d2b52f4589395832ce547674198338251
(3) 4e164f1cdede376c4f0f6a35fe219e8084ca2134c1ef92fd6fa614a26167745f
(4) c7f88f379bd8d48e47a8b6f527d524bf5657ed9cf1f64e75c6d130e01dc8d4b9
(5) 666a5e244bc092266908f355405be2d850abe056c50b5ce7691f1f8d200f6c46
(6) 344709a8596627fb14160fa1e90ec6fd995ca13468d78f34a2d999ad30e96826
(7) 1e21bd0b40587b06a513c59217174fc960a943c219b86ada7593665a8528682b
(8) dc8f0890d08c1d2139d2102159ddea1b7d7cc6d820b6af8e0ef4df4c7509ef73
(9) 1f413b8917d3701e494c866687082f3b3aceb03fd2c949c3accb8b3d452e045b
```

可以看到`ganache-cli`啟動後自動建立了10個帳戶\(Accounts\)，與每個帳戶對應的私鑰\(Private Key\)🔑。每個帳戶中都有100個測試用的以太幣\(Ether\)💵。要注意`ganache-cli`僅運行在記憶體中，因此每次重開時都會回到全新的狀態。

如果不習慣命令行界面，也可以試試同樣是Truffle團隊開發的圖形化區塊鏈測試軟體`ganache`[^8]。雖然界面圖形化了，但基本的概念都是相通的。


## 升級truffle

由於Ethereum仍在快速發展階段，開發工具也不斷地在更新。要安裝新版本的truffle時，需要先反安裝後再重新安裝。輸入以下命令即可重新安裝truffle：

```
$ npm uninstall -g truffle
$ npm install -g truffle
```

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
* [9] https://github.com/trufflesuite/ganache-cli
