# 使用MetaMask錢包收送乙太幣

在開始DApp開發前，我們需要先熟悉如何使用瀏覽器上的「加密貨幣錢包」，然後再談如何開發DApp。

所謂加密貨幣錢包，是透過匯入私鑰或助憶碼，來取得對應帳戶管理權的應用程式，透過加密貨幣錢包，可以讓使用者用加密貨幣做交易。

## 安裝MetaMask錢包

我們將使用的是可在多家瀏覽器上運作的`MetaMask`插件。只要在瀏覽器上安裝`MetaMask`插件，就可以得到一個能交易以太幣和其相容代幣(包含我們寫的HelloToken)的錢包。安裝後也能使用一般桌面瀏覽器來和DApp互動。

`MetaMask`同時提供支援[Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)與[Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)版本的瀏覽器插件。

前往以上網站安裝完插件後，可在瀏覽器的右上角工具列區塊中，看到MetaMask的狐狸頭圖示。注意除非你清楚知道你在做什麼，否則千萬不要安裝非以上網址的錢包插件。

## 切換到本地測試網路

首先確保已啟動testrpc。若尚未啟動，可以使用以下命令啟動：

```sh
testrpc --seed apple banana cherry
```

接著回到 MetaTask，點選左上角`Main Network`，將網路切換到testrpc執行的`Localhost 8545`網路上。

![Imgur](https://i.imgur.com/32rikcB.png)

切換好網路之後，還要記得匯入測試網路上的帳戶。這樣我們才能用本地測試網路上的帳戶來互相交易代幣。

## 匯入本地測試網路帳戶

點選在右上角選單左側的帳戶圖示，選擇`Import Account`(匯入帳戶)

![Imgur](https://i.imgur.com/0aY0n1s.png)

在畫面上輸入私鑰帳戶(Private Key)，如果你跟我輸入一樣的`testrpc --seed ...`命令，那麼將使用以下的帳戶作為預設的帳戶(testrpc中的account 0)

```
bea70301d065cf7946f25251c73dbfff93d4320715e43bdc0d5087553074cb64
```

![Imgur](https://i.imgur.com/ZBBVDMF.png)

輸入完成後回到畫面，可以看到一個擁有100 ETH的帳戶已可使用。

![Imgur](https://i.imgur.com/uwKB3tD.png)

我們可以用同樣步驟匯入第二個帳戶(testrpc中的 account 1)來互相交易代幣。

```
8c90c6365f62ff46b3a04edc5dbae3f401f36a50ce5f6da03ba12c08d8a72478
```

完成後我的Metamask上有三個帳戶。第一個是Main Network的帳戶，後兩個是本地測試網路的帳戶。

## 開始交易

我們試試看在Metamask中，由第二個測試網路帳戶的以太幣轉帳轉到第一個測試網路帳戶。

首先，要取得第一個測試網路帳戶的公開地址。若要在Metamask中取得第一個測試網路帳戶的公開地址，首先得切換回第一個測試網路帳戶，並選擇`Copy Address to Clipboard`(將帳戶地址複製到剪貼簿)。

![Imgur](https://i.imgur.com/gbihVdp.png)

當然也可以直接看testrpc中`account 0`的公開地址(Available Account)，如果照本書操作的話公開地址應該是

```
0x1d489c3f8ed5ee71325a847888b2157c9ac29c05
```

然後切換到第二個測試網路的帳戶，按下「送出」按鈕，在「SEND TRANSACTION」(送出交易)畫面中輸入複製的地址，並指定要送出的以太幣數目。

![Imgur](https://i.imgur.com/Hwuqzj5.png)

在按下「送出」(submit)按鈕確認交易後，可以觀察到第二個測試網路帳戶中的以太幣數目減少了，而第一個測試網路帳戶中的以太幣相應增加了。

![Imgur](https://i.imgur.com/H2dix6h.png)

## 使用MetaMask錢包查看自製代幣

我們已經建立了相容ERC20的 `HelloToken`代幣合約，現在來驗證是否真的能在一般的錢包中查看我們的代幣。

要查看也不困難，首先打開MetaMask並切換到「TOKENS」分頁，按下`ADD TOKEN`(加入代幣)按鈕

![Imgur](https://i.imgur.com/8tOA5Fu.png)

從執行`truffle migrate`命令的紀錄中找出`HelloToken`合約部署到本地測試網路的地址(最後一行HelloToken後的地址，每次部署應該都會不一樣)。

```
Running migration: 4_deploy_hellotoken.js
  Deploying HelloToken...
  ... 0xc9a83dc4f03942ac6dd679a461aaf00a8e819cb61a3e69028114558ebd542886
  HelloToken: 0x0b2353191e7705b26a76d5222127a22a9c31e6bb
```

然後填入`Token Contract Address`（代幣合約地址）欄位，其他欄位會自動填入。

![Imgur](https://i.imgur.com/vlCrhIz.png)

按下`Add`按鈕。稍等一會，就可以在MetaMask中看到代幣餘額

![Imgur](https://i.imgur.com/cZD3rF5.png)

現在我們能在MetaMask中查看自製的代幣了。那麼要如何收送各種代幣呢？這就要靠下章介紹的DApp了[^2]。

## 參考資料

* [1] How to add Ethereum based ICO Tokens in Metamask https://steemit.com/ico/@devender/how-to-add-etheruem-based-ico-tokens-in-metamask
* [2] 也可以使用MyEtherWallet收送自製代幣 How To Send A Transaction https://myetherwallet.github.io/knowledge-base/send/how-to-send-transaction.html
