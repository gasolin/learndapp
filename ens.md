## DApp應用：ENS網域

ENS (Ethereum Name Service)[^1] 的功能類似我們較熟悉的DNS(Domain Name Service)網域名稱服務，但提供的不是Internet網址，而是將以太坊(Ethereum)錢包地址和智能合約地址以`xxxxxxx.eth`網址的方式表示，可以用於轉帳或存取智能合約等地方。

## ENS網域的應用情境

我已拿到[gasolin.eth](https://etherscan.io/enslookup?q=gasolin.eth)這個ENS網域。例如有人想轉錢給我，就可以請他將以太幣轉到`gasolin.eth`這網址，`gasolin.eth`會自動轉址到我指定的錢包地址(0x....)，轉帳的人不需要記憶一串根本像亂碼的以太幣錢包地址。

![Imgur](http://i.imgur.com/nkbbryCl.png)

若我想要公開智能合約讓大眾使用，我可以公開諸如`service.gasolin.eth`這樣的網址，使用者只要連到`service.gasolin.eth`，就會自動轉到對應的智能合約地址。若這個智能合約所提供的是單次服務，我也可以透過修改`service.gasolin.eth`對應的智能合約地址，來"升級"這個智能合約服務。使用者依然是連到`service.gasolin.eth`使用這個服務，而不需要了解背後的機制。

## 查詢可申請的網域

因為`gasolin.eth`已經被我申請了，查詢可申請地址這部分將以搞笑的NMB(嫩模幣) ICO[^3]為例，我會以申請`nenmocoin.eth`當做例子，介紹整個申請ENS網域的流程。

嫩模幣的投資條件是`本次投資僅接受ETH，最少投資額0.0.1ETH,ETH錢包地址:0x74b7bafafd200a58e79b719f3565cbb43af7d6b7`。如果能將`0x74b7bafafd200a58e79b719f3565cbb43af7d6b7`換成`nenmocoin.eth`，投資者轉帳起來就更直覺了。

在寫作時`nenmocoin`(https://registrar.ens.domains/#nenmocoin)這個網域是可以申請的(目前ENS僅接受申請7個字母以上的網域)。

想查詢可用的網域，可以前往　http://registrar.ens.domains/　或連到[MyEtherWallet](https://www.myetherwallet.com/)[^2]並切換到`ENS`分頁，查詢可用的ENS網址。

![Imgur](http://i.imgur.com/HIUcvyDl.png)

如果在一般瀏覽器中查看，會看到黃色欄的警告提示。

![Imgur](http://i.imgur.com/I5rrWTHl.png)

這是因為ENS服務是跑在以太坊Ethereum區塊鏈上，要麼用專用的browser（如Mist），不然就是裝Parity，或瀏覽器擴充套件MetaMask(Chrome only)。還有個選擇就是用[MyEtherWallet](https://www.myetherwallet.com/)網頁錢包，裡面內建註冊ENS需要的功能。

我是使用[MyEtherWallet](https://www.myetherwallet.com/)網頁錢包來完成整個註冊gasolin.eth網域的流程。

## 競標網域須知

* 註冊ENS網域並不需要實名或其他認證流程，只要有一個以太幣錢包地址即可。
* 請參考[參與首次代幣發行(ICO)時要知道的事](https://blog.gasolin.idv.tw/2017/08/12/things-to-know-before-join-ico/)，絕對不要用交易所提供的錢包競標網域，不然即使競標到網域也會變成交易所的XD。
* ENS網域的最低起標價是0.01ETH(當前匯率是美金$2~3)

要註冊ENS網域，需要遵循ENS網域競標流程(bid)。

ENS網域競標流程模擬現實的競標，首先是寫下標價，並將相應數量的以太幣傳入ENS票箱。兩天後就可以公告這個網域競標(揭標)，其他人能看到這個網域已經開始競標了。如果他們有興趣，也可以加入這個網域的競標。最終價高者得，但出價最高的人只需要繳交第二高者的標價。ENS會自動退回所有參與者的標金，也會返回得標者標金的差額。如果得標者一年後未續約，ENS將釋出此網域並退回押金。

{% mermaid %}
graph LR
網域可註冊 --> 提出標金
提出標金 -- 2 天 --> 公告競標
公告競標 -- 2 天 --> 取得網域
取得網域 -. 1 年後未續約 .-> 釋出網域並退回押金
{% endmermaid %}

## 提出標金

確定"nenmocoin"網域可用，接下來就是打開錢包，開始競標吧。

![Imgur](http://i.imgur.com/YEHuJWHl.png)

打開錢包，輸入超過最低起標價0.01ETH的數字，勇敢按下`Start an Auction`按鈕，並照著指示完成競標手續。

記得將畫面上的資料複製留存，後面的手續中會用到。
完成競標手續後會進入2天的等待期。

## 公告競標

![Imgur](http://i.imgur.com/AaQPPa9.png)

其實照著[MyEtherWallet](https://www.myetherwallet.com/)上面的說明完成公告手續並不困難😤。最重要的事，就是在2天的等待期結束後，

**記得回來公告競標，**
**記得回來公告競標，**
**記得回來公告競標，**

如果沒做這個動作，前幾天提出的標金會被送到黑洞消失掉，沒辦法取回喔！我第一次試著註冊網域的時候就這樣被吃掉0.01ETH😭。

公告後其他人可以看到網域開始競標的訊息。這時有兩天的時間讓其他感興趣的人一起競標，當前最高價會顯示在查詢頁面上。

## 取得網域

公告期結束後，如果順利取得網域，可以看到如下訊息

![Imgur](http://i.imgur.com/hg9vHmo.png)

這時
**記得回來宣告取得網域，**
**記得回來宣告取得網域，**
**記得回來宣告取得網域，**

照著[MyEtherWallet](https://www.myetherwallet.com/)上面的說明完成宣告手續後，才能正式取得這個網域。

以後其他人查詢時，就會看到這個網域已經被註冊的訊息。

## 取得網域之後

取得網域之後，在[MyEtherWallet](https://www.myetherwallet.com/)上查看網域並打開錢包，就會看到如何設定網域的說明。

目前設定網域的方式比較複雜些，需要到`Contracts`(合約)目錄下，在`Select Existing Contract`（選擇已經存在的合約）選擇`ENS - Public Resolver`，並在`Read/Write Contract`(讀取/寫入合約)部分選擇`setAddr`(設定地址)功能，照著設定網域說明將錢包地址輸入，這樣網域才能正確解析到我們想要的錢包地址。

![Imgur](http://i.imgur.com/y6jvpAUl.png)

## 如何節省交易手續費

以上整套設定ENS的過程牽涉到5~6次交易。只有第一次需轉出標金，後面的各種動作都只收交易手續費。因此註冊一個ENS網域的成本其實是標金+多次手續費。標金在到期之後會返還，因此實際影響持有成本最大的是交易手續費。

[MyEtherWallet](https://www.myetherwallet.com/)右上角預設的交易手續費是21GWei（1 Ether = 10^9 GWei）。手續費是給分礦工（提供計算力協助以太幣記帳的人）的，調低的話，交易確認的速度會變慢，調高則變快。我剛開始不懂，因此就使用了預設值。後來看Youtube上的教學，才知道可以參考[Gas Station](http://ethgasstation.info/)網站即時的`SafeLow Cost`（最低安全交易手續費）來設置。只要我們提供的手續費高於這個數目，交易都會成功。

![Imgur](http://i.imgur.com/0loyakDl.png)

這陣子最低手續費大多是3 ~ 5 GWei。我照這個手續費做設定（並斟酌提高1 ~ 2 Gwei）交易都有成功。雖然不管用什麼標準來算，以太坊的手續費都已經很便宜，但多一步簡單的操作，就能感受到精打細算的樂趣。

## 結語

上面舉了嫩模幣ICO的轉帳地址當做例子。**我故意把引用的嫩模幣錢包地址，換成了我自己的錢包地址**。如果不提，應該沒幾個人會注意到吧？
如果錢包地址改用本文提到的`nenmocoin.eth`，參與者是不是更容易發現收款地址已被修改了呢？
ENS並沒有做身分認證，釣魚網站也可以申請相似的ENS域名來釣魚，要避免這樣的情況，也有賴服務提供者有在提供服務前，有優先註冊域名的保護意識。

ENS本身其實就是一系列基於以太坊的智能合約[^4]，內部的流程都是自動的，對於智能合約與DAPP開發者來說，也是很值得參考的架構。

## 參考資料

* [1] Ethereum Name Service https://ens.domains/
* [2] [Myetherwallet介紹](http://blockcast.it/2017/05/27/eth-and-eth-token-wallet-series-myetherwallet/)
* [3] 嫩模幣 http://nmb.fun/
* [4] ENS 原始碼　https://github.com/ethereum/ens
