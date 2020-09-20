---
title: 什麼是區塊鏈？
---

import Mermaid from '@theme/Mermaid'

2017年比特幣(Bitcoin)[^1]與以太幣(Ether)[^2]價格紛紛到達新高。主因除了隨著更多支援加密貨幣(Crypto Currency)-當地貨幣的兌換/代購/交易所開張，取得虛擬貨幣/代幣的方式更加多元外，首次公開發行加密代幣(ICO, Initial Coin/Crypto Token Offering)[^3]這種創新的投資/募資方式愈加熱絡，也讓一些個人與機構意識到虛擬貨幣作為貨幣或貨品的投資價值。

這些虛擬幣背後所使用的技術叫做區塊鏈(blockchain)[^4]，可以用來解決各種「交易」相關的**「信任」**問題。

## 網際網路交換訊息，區塊鏈交換價值

網際網路出現之前，不同的系統之間沒辦法用標準的協定來互相通訊和傳遞訊息。網際網路讓不同連網方式（撥接、光纖、4G）、不同設備間可以互相連接，滿足人與人之間對訊息的即時需求。在電腦與手機網路普及後，個人生活與公司運作的各個層面，都深度地依靠電腦與網路。人們的生活在網際網路發展起來的這20多年間，產生了極大地改變。

2001年時，Napter[^5]開啟了透過點對點\(P2P\)網路交換MP3的風潮，這是第一次大眾意識到，除了透過中心化的網路，點對點網路也可以被廣泛地應用在資訊交換上。隨後BitTorrent\(BT\)[^6]接過大旗，透過BitTorrent與配合的磁力連結\(Magnet Link\)[^7]，2009年時已占據了近50%整體網際網路流量。

區塊鏈基於網際網路，點對點\(P2P\)網路，和以密碼學為基礎的共識紀錄機制，提供了一個可以不被地域限制，快速交換價值的方式，降低交易的不確定性\(uncertainty\)與風險。 網際網路和點對點網路解決了**資訊交換**的問題，而區塊鏈則進一步想解決**價值交換**與**交易信任**的問題。

<Mermaid chart={`
graph TD
公開加密貨幣 --- 區塊鏈
公開加密貨幣 --- 激勵機制
區塊鏈 --- P2P
區塊鏈 --- 共識機制
共識機制 --- 密碼學
P2P --- 網際網路
`}/>

區塊鏈不僅只是加密貨幣，透過區塊鏈，我們可以和各地的人做生意，用很低的手續費在不同國家收款與匯款\(都在同一個公開區塊鏈上\)，而且幾分鐘內就可到帳；交易的過程中，所有的合約都由網路上的節點自動執行\(智能合約 Smart Contract\)，避免了人為操縱與詐欺等潛在的信任問題，讓人們可以更安心地交易；使用者還可以透過桌面瀏覽器或手機上的應用來使用智能合約\(分散式應用 DAPP\)，就像現在使用網站和App一樣地容易。

暢想未來的商業模型，可能是顧客透過易用的手機或網頁DAPP取得商家提供的資訊，經由可信任的智能合約，讓彼此能快速地交換價值與服務。
由於可以直接在網上交換價值，杜拉克所謂的「知識工作者」可能也不再侷限於為單一公司或在單一地域服務，而可以接受來自世界各地，各式各樣符合能力的專案，並以加密貨幣作為報酬。

## 聯盟鏈

區塊鏈根據型態，大致分為公有鏈，私有鏈、聯盟鏈幾種。公有鏈就是大眾比較常聽到的各種加密代幣。可以在 [https://coinmarketcap.com/](https://coinmarketcap.com/) 查看所有已知的加密貨幣與交易所。除了公有鏈之外，多家銀行、支付機構、甚至IBM、微軟等科技公司也相繼投入資源，參與區塊鏈研究與發展。多數機構採用的是聯盟鏈的形式。Apache基金會下的Hyper Ledger[^9]計畫是目前發展較好的聯盟鏈。

聯盟鏈與公有鏈有許多不同點。其一是對資料一致性有更高地要求。其二因為相對來說聯盟鏈的節點比較可控，也不需要加入代幣激勵機制或浪費能源在比拚算力的Proof-of-Work\(PoW\)共識機制上。其三是需要對資源與智能合約存取設置權限，以符合企業內部的需求。

## 區塊鏈用到的加密技術

可以在Youtube上查看 [Blockchain 101 - A Visual Demo](https://youtu.be/_160oMzblY8)影片[^14]，或前往對應的[Block Chain Demo網站](https://anders.com/blockchain/)[^15]動手試驗。

<iframe width="560" height="315" src="https://www.youtube.com/embed/_160oMzblY8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 參考資料

* [1] 比特幣 https://zh.wikipedia.org/wiki/比特币
* [2] 以太坊 https://zh.wikipedia.org/wiki/以太坊
* [3] 首次公開發行加密代幣 https://zh.wikipedia.org/wiki/首次代币发售
* [4] 區塊鏈 https://zh.wikipedia.org/wiki/区块链
* [5] Napster  https://en.wikipedia.org/wiki/Napster
* [6] BitTorrent https://en.wikipedia.org/wiki/BitTorrent
* [7] 磁力連結 https://zh.wikipedia.org/wiki/磁力链接
* [8] [What Are Magnet Links, and How Do I Use Them to Download Torrents?](https://lifehacker.com/5875899/what-are-magnet-links-and-how-do-i-use-them-to-download-torrents)
* [9] https://www.hyperledger.org/
* [10] https://entethalliance.org/
* [11] https://en.wikipedia.org/wiki/Proof-of-work_system
* [12] How Bitcoin Works Under the Hood  https://www.youtube.com/watch?v=Lx9zgZCMqXE
* [13] TED [How the blockchain will radically transform the economy](https://www.youtube.com/watch?v=RplnSVTzvnU)
* [14] [Blockchain 101 - A Visual Demo](https://youtu.be/_160oMzblY8)
* [15] [Block Chain Demo網站](https://anders.com/blockchain/)
* [16] What is an Initial Coin Offering?
  [https://www.youtube.com/watch?v=iyuZ\_bCQeIE](https://www.youtube.com/watch?v=iyuZ_bCQeIE)
