# 建立第一個DApp {#建立專案}

我們將用僅僅30行來完成第一個DApp。這個DApp可以顯示使用者預設的帳戶地址，並且顯示帳戶上的以太幣餘額。

## 整個測試環境

在開始寫DApp之前，我們需要有個網頁伺服器來放DApp，瀏覽器上需安裝好`MetaMask`錢包，並開啟`testrpc`本地測試網路。
實際的架構如下：

{% mermaid %}
graph TB
瀏覽器 --- testrpc
DApp --- 瀏覽器
subgraph  網頁伺服器
    DApp
end
subgraph  本地
    加密代幣錢包  --- 瀏覽器
end
subgraph  遠端
    testrpc
end
{% endmermaid %}

除了網頁伺服器的部分之外，閱讀完前面章節的讀者，對`MetaMask`錢包和`testrpc`應該都已有經驗。

## 設定環境

首先確保已啟動testrpc。若尚未啟動，可以使用以下命令啟動：

```sh
testrpc --seed apple banana cherry
```

開啟一個新資料夾`hello_web3`，並加入`package.json`檔案：

```
{
  "name": "helloweb3",
  "version": "1.0.0",
  "description": "hello web3 example",
  "dependencies": {
    "web3": "^1.0.0-beta.29"
  }
}
```

執行`npm install`命令安裝web3函式庫。這邊直接使用1.x版做範例。

此外，還需要安裝一個簡易的網頁伺服器`http-server`，來下載我們的DApp網頁到瀏覽器上。

```sh
$ npm install http-server -g
```

## 開始寫 DApp

建立一個`index.html`檔案，內容如下：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title>Hello Web3</title>
        <script type="text/javascript" src="node_modules/web3/dist/web3.js"></script>
        <script type="text/javascript">
          var web3 = new Web3("http://127.0.0.1:8545");

          async function start() {
            try {
              let defaultAccount = await web3.eth.getCoinbase();
              let balance = await web3.eth.getBalance(defaultAccount);

              var html_account = document.getElementById("account");
              var html_balance = document.getElementById("balance");
              html_account.textContent = defaultAccount;
              html_balance.textContent = web3.utils.fromWei(balance, "ether");
            } catch(err) {
              console.error("Error:", err);
            }
          }

          window.addEventListener("load", start);
        </script>
      </head>
    <body>
        <h1>Account: <span id="account"></span></h1>
        <h3>You have <span id="balance"></span> Ether</h3>
    </body>
</html>

```

執行`http-server`命令來啟動一個簡易的網頁伺服器。

```
$ http-server .
```

在瀏覽器中打開`http://127.0.0.1:8080/`網址，可以看到帳號地址與以太幣餘額。

![Imgur](https://i.imgur.com/1vqPwVI.png)

### 講解

這邊假設讀者已具備HTML與Javascript的基礎知識，因此只挑重點說明，不再一一講解。

```html
<script type="text/javascript" src="node_modules/web3/dist/web3.js"></script>
```

這行引用了`web3.js`函式庫。

  寫作時使用npm install web3下載的函式庫中並未包含dist/目錄[^1]，我已送patch去修復這個問題。
  在修復之前，讀者可以先到[github](https://github.com/ethereum/web3.js/blob/develop/dist/web3.js)下載檔案，並將web3.js將放到`node_modules/web3/dist/`目錄下。

```js
window.addEventListener("load", start);
```

這行的意義是等頁面載入(load)完成後，再啟動`start`函式。

```js
async function start() {
    try {
        ...
    } catch(err) {
       console.error("Error:", err);
    }
}
```

`start`函式前加上`async`宣告，表示函式中可以使用await語句。用async/await語句可以讓非同步程式變得更易讀。
程式的主體包在`try..catch`語句中，若有任何錯誤都可以透過瀏覽器的`web console`工具查看。

```js
let defaultAccount = await web3.eth.getCoinbase();
let balance = await web3.eth.getBalance(defaultAccount);
```

透過查看web3.js的文件[^2]，可以找到如何取得預設帳戶地址([web3.eth.getCoinbase](http://web3js.readthedocs.io/en/1.0/web3-eth.html#getcoinbase))，和如何從帳戶地址查詢餘額([web3.eth.getBalance](http://web3js.readthedocs.io/en/1.0/web3-eth.html#getbalance))的方法。

```js
var html_account = document.getElementById("account");
var html_balance = document.getElementById("balance");
html_account.textContent = defaultAccount;
html_balance.textContent = web3.utils.fromWei(balance, "ether");
```

把查詢結果顯示到網頁上。[web3.utils.fromWei](http://web3js.readthedocs.io/en/1.0/web3-utils.html#fromwei)能將乙太幣從預設的最小單位(wei)轉換成指定的單位(ether)來顯示。

## 參考資料

* [1] Issue: npm install web3 doesn't install /dist/web3.min.js https://github.com/ethereum/web3.js/issues/1041
* [2] web3.js - Ethereum JavaScript API http://web3js.readthedocs.io/en/1.0/
