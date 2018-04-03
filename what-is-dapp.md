# 分散式網頁應用(DApp)是什麼

DApp 和智能合約(Smart Contract) 的關聯性，就像開發大型網站時的前端/後端的關係一樣。以前的動態網頁大部分的工作都在網站伺服器（後端）上完成，使用者瀏覽時收到的是從網站伺服器回傳的一張張完整的網頁。現代的網站架構上前後端分離，使用者透過瀏覽器連上網站伺服器後，瀏覽器會從網站伺服器上下載並載入網頁內容。之後網頁端（前端）透過Javascript與其他網頁技術來提供與使用者互動的介面，透過非同步的API和網站後端程式溝通，然後動態呈現相關的內容。

透過將前後端分離考慮，後端服務器不需要和前端服務器擺在一起。前端只需要知道後端提供的API（應用程式介面）即可。

{% mermaid %}
graph LR

subgraph 使用者
瀏覽器

subgraph 前端
網頁應用
end
end

subgraph 網站伺服器
網站後端程式 --- API
end

網頁應用 --- 瀏覽器
API --> 網頁應用
網頁應用 --> API
{% endmermaid %}

而分散式網頁應用（DApp）也是使用相似的概念，只是將後端改為區塊鏈。瀏覽器需使用支援DApp的瀏覽器（如[Mist](https://github.com/ethereum/mist/releases)），或透過MetaMask等擴充功能套件，讓常用的瀏覽器支援DApp。

同樣地，使用者透過支援DApp的瀏覽器連上網站伺服器後，瀏覽器會從網站伺服器上下載並載入網頁內容。之後網頁端（前端）透過Javascript與其他網頁技術來提供與使用者互動的介面，

透過非同步的API和網站後端程式溝通，然後動態呈現相關的內容。網頁前端透過ABI（Application Binary Interface 應用程式二進制介面）和區塊鏈上的智能合約溝通（當然也仍然可以用API和一般網頁伺服器端程式溝通）。和區塊鏈上的智能合約溝通的過程稱為`transaction` (交易），使用二進制介面溝通不太方便，因此通常開發DApp時會使用諸如`web3.js`或`Ethjs`等函式庫提供的API來簡化與智能合約的溝通。這麼一來開發DApp的體驗其實與開發一般網頁應用已經相當接近。

和一般網頁上呼叫API的不同之處，在於操作一般網頁API往往使用的是明碼的網址，而與智能合約交易的過程中，所有的資料都要再經由個人加密金鑰加密過。為了簡化這個步驟，會透過使用`加密代幣錢包`來產生可與智能合約交易的加密資訊(並使用以太幣`Ether`作為手續費)。

{% mermaid %}
graph LR

subgraph 使用者
瀏覽器[DApp相容瀏覽器]
加密代幣錢包
subgraph 前端
網頁[網頁應用]
end
end

subgraph ethereum
Contract[智能合約]
end

網頁 --> 加密代幣錢包
加密代幣錢包 -- ABI --> Contract
Contract -- ABI --> 網頁
網頁 --- 瀏覽器
{% endmermaid %}

在移動裝置上，DApp瀏覽器與加密代幣錢包則往往會由同一個App提供，如[Toshi](http://www.toshi.org/)和[Status.im](https://status.im/)。

## DApp如何與智能合約溝通?

要和智能合約溝通，可以透過在網頁端引入[Web3.js](https://github.com/ethereum/wiki/wiki/JavaScript-API)、[ethjs](https://github.com/ethjs/ethjs)，或[ether.js](https://docs.ethers.io/ethers.js/html/)函式庫。若使用MetaMask錢包或支援DApp的瀏覽器，會在網頁中自動嵌入`web3.js`。

在接下來的章節中，將先使用常見的`Web3`函式庫，再改用`ethjs`函式庫。DApp可以透過`Web3`等函式庫來操作以太坊相關的加密貨幣帳戶與智慧合約。

* [深入智能合約 ABI](https://medium.com/taipei-ethereum-meetup/ethereum-%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84%E9%96%8B%E7%99%BC%E7%AD%86%E8%A8%98-%E6%B7%B1%E5%85%A5%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84-abi-268ececb70ae)
