---
title: 什麼是以太坊(Ethereum)
---

import Mermaid from '@theme/Mermaid'

以太坊(Ethereum)是2015年才發展起來的一種新的底層[區塊鏈](https://blog.gasolin.idv.tw/2017/08/10/what-is-blockchain/)技術。以太幣(Ether)是以太坊公有鏈上產生的🔒💵加密貨幣(Crypto　Currency)，除了可以拿來像比特幣(Bitcoin)一樣做交易外，還具有實際的用途。

以太坊和比特幣一樣是基於P2P網路與密碼學建立起的區塊鏈機制，不同之處是，以太坊在每個運作的節點上都運行著一個以太坊虛擬機(Ethereum Virtual Machine, EVM)，可以用來執行完整的程式。這些程式在以太坊中被稱為⚖📒**智能合約**(Smart Contract)。

智能合約除了可以處理資料，還內建轉帳功能，可以很容易地透過智能合約來交易加密貨幣。由於智能合約可在每個以太坊的節點上執行並進行驗證，所以計算結果被認為是可信任的。以太坊還開發出了[web3.js](https://github.com/ethereum/wiki/wiki/JavaScript-API)讓開發者可以使用網頁技術撰寫智能合約的操作介面。這樣的網頁操作介面又稱為🕸🅰**分散式應用程式**(DAPP)。目前DAPP必須在支援DAPP的瀏覽器中才能使用。(如電腦上的[Mist](https://github.com/ethereum/mist/releases)或[Parity](https://parity.io/))，或透過安裝[Metamask](http://metamask.io/)瀏覽器插件在桌面瀏覽器上使用。手機上可用[Toshi](http://www.toshi.org/)或Status等。

使用智能合約技術製作的服務，也構成了以太坊生態圈的一環。例如[Ethereum Name Service\(ENS\)](https://blog.gasolin.idv.tw/2017/08/13/got-my-ens-domain/)就提供了讓使用者更容易尋找到轉帳對象、智能合約，和DAPP的方式。

以太坊提供了便於交易的加密貨幣**以太幣\(Ether\)**，可透過智能合約解決交易上的信任問題，同時也可撰寫DAPP來提供友善的資訊彙總與操作介面，讓以太坊成為一個目前最理想的區塊鏈底層技術。

<Mermaid chart={`
graph TD
分散式APP -.- DAPP瀏覽器
DAPP瀏覽器 -.- 智能合約
錢包 -.- 智能合約
智能合約 --- 以太坊
錢包 -.- 以太幣
以太幣 --- 以太坊
以太幣 --- 激勵機制
以太坊 --- P2P
以太坊 --- 共識機制
共識機制 --- 密碼學
P2P --- 網際網路
分散式APP -.- ENS
智能合約 -.- ENS
以太幣 -.- ENS
`}/>

## 以太幣(Ether)在以太坊生態中扮演的角色

在電腦上執行的一般的程式碼，寫出來可能會有迴圈不斷執行\(死迴圈\)的情況，搬到區塊鏈上亦然。那麼以太坊怎麼解決這個問題呢？以太坊開發者想到的辦法，是讓執行每段程式碼都有代價。以太坊虛擬機\(EVM\)裡支援的所有的指令碼\(OPCODE\)都有[明碼標價](https://github.com/ethereum/pyethereum/blob/develop/ethereum/opcodes.py)，執行智能合約需要消耗與執行的指令數量相當的以太幣。在智能合約的術語中，這些拿來消耗的以太幣被稱為"gas"\(燃料\)。此外，部署合約到區塊鏈上時，也需要附加一定數量的gas\(燃料\)作為給礦工的交易費用。當燃料消耗完而程式還沒執行完，就會出現"Out of Gas"\(燃料耗盡\)錯誤。智能合約透過這樣的方式來避免死迴圈等情況。

## 智能合約能做什麼事？

因為區塊鏈讓交換價值變得更容易，因此從金融創新領域開始應用是很自然的。

可以透過 https://cryptofees.info/ 查詢每天/每週各公鏈或線上服務收到的手續費排行。

### 創造新的加密代幣 (TOKEN)

智能合約最基本的應用，就是創造出新的加密代幣！只要[遵循一定的規範](https://theethereum.wiki/w/index.php/ERC20_Token_Standard)\(ERC20\)，部署一份智能合約到以太坊區塊鏈上，任何人都可以可以很容易地創造出自己的加密代幣。

不用像比特幣的山寨幣一樣需要自行徵募礦工。你的加密代幣會以"以太坊的一個智能合約"的形式存在於以太坊的區塊鏈中。現有支援以太幣的錢包與交易所，也可以快速地接入你的加密代幣。只要你發行的加密代幣與代幣背後所代表的服務具有交易的價值，代幣也可能變貨幣。

### 募資 (ICO)

此外，在募資上，智能合約也有無與倫比的優勢。新創公司[ICO](https://cointelegraph.com/news/the-ico-mania-and-its-consequences-on-ethereum)可透過以太坊的智能合約，在收到資助者的以太幣時，自動發出等值的加密代幣。

由於這些加密代幣可交易，如果公司的服務有價值，早期投資人在投資的前期，就可以透過交易加密代幣來調整持有量。

普通的投資人也第一次有機會直接支持自己感興趣的創業者，並可能從而獲得豐厚\([或歸零](https://blog.gasolin.idv.tw/2017/08/12/things-to-know-before-join-ico/)\)的回報。

> 2018 年後 ICO 受到監管，在 2019 後被 DEFI 取代

### 去中心化金融應用 (DEFI)

透過鏈上交易所（Uniswap, Sushiswap），當鋪(MakerDAO)，錢莊（AAVE, Compound）等自助服務，達成金融交易。
類似ATM或販賣機，在無人服務的情況下，這些透過智能合約建立的自助服務可以用來換匯（交換代幣），存款領息（借貸）。

### 非同質化代幣（NFT）

將數位或實體資產綁定成獨一無二的加密化證書，可用作身分證明，參與證明，擁有證明等。
將圖片，音樂等NFT化可在如 [OpenSea](https://opensea.io/) 交易所上買賣。

### 程式能做的事

當你需要公開，可被信任的紀錄時，都可以透過智能合約達成。

## 以太坊的缺點

目前以太坊區塊鏈的速度和電腦執行速度無法相比，不適合快速交易，或是需要儲存較大資料的情境。

此外，因為缺乏即時調控區塊大小的手段，在一些很熱門的交易時段\(如某些熱門的ICO開放認購時\)，整個網路的交易延遲會變地很長。

~~諸如[plasma](http://www.investopedia.com/news/what-plasma-and-how-will-it-strengthen-ethereum-blockchain/)，分片(Sharding)，或改採用PoS(Prove of Stake)等提案，都有望進一步解決快速交易的問題。~~

現正透過第二層（Layer 2）網路和側鏈（SideChain）的方式提升交易數量，可透過查看 [Ethhole.link](https://ethhole.link) 觀察鏈上資產大致的分佈去向。

智能合約一經部署就永遠存在，除非擁有者啟動智能合約中的自毀\(selfdestruct\)功能。如何升級合約並保存其中的參數與代幣，也是值得探討的課題。

以太坊網路節點上並不適合儲存較大的檔案。目前有~~[Swarm](https://github.com/ethersphere/swarm)與~~[IPFS](https://ipfs.io/)與[Arweave](https://www.arweave.org/)等分散式檔案儲存方式可供選擇。

## 參考資料 {#其他參考資料}

* 以太坊設計原理 [http://ethfans.org/posts/510](http://ethfans.org/posts/510)
* 以太坊工作原理https://lilymoana.github.io/ethereum_theory.html
* ethereum [https://github.com/ethereum/wiki/wiki](https://github.com/ethereum/wiki/wiki)
* 挖礦教學 [https://www.ptt.cc/bbs/DigiCurrency/M.1495624721.A.6A8.html](https://www.ptt.cc/bbs/DigiCurrency/M.1495624721.A.6A8.html)
* 以太坊、以太幣是什麼？ETH電腦挖礦圖文教程[http://www.gooread.com/article/20122396003/](http://www.gooread.com/article/20122396003/)
* [https://github.com/vinsgo/awesome-ethereum](https://github.com/vinsgo/awesome-ethereum)
* Ethereum Overview [http://truffleframework.com/tutorials/ethereum-overview](http://truffleframework.com/tutorials/ethereum-overview)
* [A Prehistory of the Ethereum Protocol](http://vitalik.ca/general/2017/09/14/prehistory.html)
