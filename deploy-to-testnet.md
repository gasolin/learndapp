# 將智能合約部署到公開測試網路

經過前面章節的學習，我們撰寫的智能合約可以在本地端運行，並有測試保證基本的運作正常，而且也有了MetaMask錢包帳號能查看合約中的代幣。接著我們可以嘗試將合約部署到公開測試網路上。

乙太坊目前除了主網路（Main Net）外，還提供多個公開測試網路以供試用。將智能合約部署到公開測試網路的流程，與之後部署到主網路（Main Net）的流程是一樣的。本篇將使用其中的`rinkeby`測試網路。

要將智能合約部署到部署到區塊鏈時需要花費Ether。測試網路用的Ether是測試用的Ether，使用相同的帳號連上不同的網路，可以看到不同的餘額。

## 部署的方式

要部署到測試網路或主網路，可以透過在本地自行安裝`Geth`等乙太坊節點，並透過`geth --rinkeby`命令將節點切換到公開測試網路[^1]。或者也可以透過Infura提供的公開節點來從truffle部署智能合約[^2]。

本章將主要介紹第二種方式。

### 申請 Infura 帳號

Infura 提供了可公開存取的乙太坊節點，前面介紹的MetaMask也是連線到Infura的公開節點。
可前往 https://infura.io/signup 註冊。註冊後網頁上會列出可用在各測試網路上的公開節點網址，並帶有剛剛註冊帳號的存取令牌(token)。我們將使用`https://rinkeby.infura.io/<TOKEN>`網址存取乙太坊節點。

### 從水龍頭取得測試Ether

前往 https://faucet.rinkeby.io 以取得免費的測試Ether。https://faucet.rinkeby.io 要求先從你的 Twitter, Google+, Facebook 帳戶中擇一貼上一則公開訊息。這則訊息需包含你的乙太坊帳戶地址(`0x...`)。在 MetaMask 中複製目前的帳戶地址後貼到上述任一社交網站上，然後將公開網址連結貼到 https://faucet.rinkeby.io ，等一陣子即可在帳戶中收到測試用的Ether。

如果過一陣子還沒看到，可以檢查一下 MetaMask 當前的網路是否為`rinkeby`測試網路。

### 修改 truffle.js 設定

若想透過 truffle 和 Infura 存取 rinkeby 網路，需要先稍作設定。
首先，需安裝`truffle-hdwallet-provider`好讓我們可以直接簽署交易。

`npm install truffle-hdwallet-provider`

然後修改`truffle.js`設定如下

```js
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "your account twelve words ...";
var infura_url = "https://rinkeby.infura.io/<YOUR_TOKEN>";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura_url)
      },
      network_id: "*"
    }
  }
};
```

#### 說明

```js
  rinkeby: {
    provider: function() {
      return new HDWalletProvider(mnemonic, infura_url)
    },
    network_id: "*"
  }
```

## 部署

要部署到公開測試網路一樣是使用`truffle migrate`命令，只需在其後加上`--network 測試網路代號` 即可。

```js
$ truffle migrate --network rinkeby
```

部署後的紀錄如下：

```js
$ truffle migrate --network rinkeby
Compiling ./contracts/HelloToken.sol...
Compiling ./contracts/HelloWorld.sol...
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/SimpleToken.sol...
Compiling zeppelin-solidity/contracts/math/SafeMath.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/BasicToken.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/ERC20.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol...
Compiling zeppelin-solidity/contracts/token/ERC20/StandardToken.sol...

Compilation warnings encountered:

....

Writing artifacts to ./build/contracts

Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xd911261e8e1dc94bad9d869575fdb7ed5799cfaba10ceb4a301595ee72d21f62
  Migrations: 0x44932dd610d67d4f09fb9d1e6f6f977d04f9cc93
Saving successful migration to network...
  ... 0x65b28cf89eea4f08c23d119d3a468a84dd934128bd43c63646741f7675093cf0
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying HelloWorld...
  ... 0x9ddf6afb68d07e6214d89a049c12a99c4f1818c285e75738816dc1247e880164
  HelloWorld: 0x6876d2b11e33ee4820c9f01e796d8b0275e4dc32
Saving successful migration to network...
  ... 0xac66fed12a2f46db687e911031447388398e879d3e0fefc750c1a3ab11f14daf
Saving artifacts...
Running migration: 3_deploy_simple_token.js
  Deploying SimpleToken...
  ... 0xa1a7a96bc7d51236a9c1b57db75376283980f1e0cf84e7f3cd589d95ede375dd
  SimpleToken: 0xea024fcb3a31966f64eb63a651d240b983af6f80
Saving successful migration to network...
  ... 0x2bee88ac101482ee7c82023946951551e0a0958d7441d586e15cf85c9b19e12a
Saving artifacts...
Running migration: 4_deploy_hellotoken.js
  Deploying HelloToken...
  ... 0x3a54bd1046e3dfa4e57a64078a9929052872d5ab5ed8448c60c63650eb0cb5ef
  HelloToken: 0xe32c8971fdab584a31814c834f1785307433ff2b
Saving successful migration to network...
  ... 0x9518d5cbaa86955f6b73265e6a2acf7c76693b38c0db517ddf1c9414fcfa1635
Saving artifacts...
```

透過記錄可以看到`HelloToken`已部署到`0xe32c8971fdab584a31814c834f1785307433ff2b`上了。
我們可以前往 https://rinkeby.etherscan.io 查詢到剛部署的HelloToken智能合約。

![Imgur](https://i.imgur.com/GPDlYEml.png)
https://rinkeby.etherscan.io/address/0xE32C8971fdab584A31814C834f1785307433FF2B

## 參考資料

* [1] [How to get on Rinkeby Testnet in less than 10 minutes](https://gist.github.com/cryptogoth/10a98e8078cfd69f7ca892ddbdcf26bc)
* [2] [Using Infura (or a custom provider)](http://truffleframework.com/tutorials/using-infura-custom-provider)
