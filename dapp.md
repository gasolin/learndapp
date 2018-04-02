# 分散式網頁應用\(DApp\)

介紹了區塊鏈和乙太坊程式開發後，我們繼續進入開發DApp的階段

DApp 和智能合約(Smart Contract) 的關聯性，就像開發大型網站時的前端/後端的關係一樣。以前的動態網頁大部分的工作都在伺服器（後端）上完成，使用者瀏覽時收到的是從伺服器回傳的一張張完整的網頁。現代的網站架構上前後端分離，在使用者端的瀏覽器上載入一次，之後網頁（前端）透過非同步的API來呼叫伺服器端提供的服務，然後動態呈現相關的內容。

透過將前後端分離考慮，後端服務器不需要和前端服務器擺在一起。前端只需要知道後端提供的API（應用程式介面）即可。

{% mermaid %}
graph LR

subgraph 使用者
瀏覽器
end

subgraph 前端
網頁
end

subgraph 後端
網頁伺服器 --- API
end

網頁 --> 瀏覽器
瀏覽器 --> 網頁
API --> 網頁
網頁 --> API
{% endmermaid %}

DApp 開發也是使用相似的概念，只是將後端改為區塊鏈。

網頁前端只需要知道後端提供的ABI（Application Binary Interface 應用程式二進制介面）即可。

{% mermaid %}
graph LR

subgraph 前端
網頁
end

subgraph ethereum
Contract[智能合約]
end

subgraph 使用者
瀏覽器
end

網頁 --- 瀏覽器
Contract -- ABI --> 網頁
網頁 -- ABI --> Contract
{% endmermaid %}

接下來我們來試試看各種開發網頁DApp的方式。

## 參考資料

* 深入智能合約 ABI https://medium.com/taipei-ethereum-meetup/ethereum-%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84%E9%96%8B%E7%99%BC%E7%AD%86%E8%A8%98-%E6%B7%B1%E5%85%A5%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84-abi-268ececb70ae
