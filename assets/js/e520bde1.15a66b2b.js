"use strict";(self.webpackChunklearndapp=self.webpackChunklearndapp||[]).push([[436],{1504:function(e,t,n){var a=n(7294),p=n(7273);p.Z.initialize({startOnLoad:!0});var l={startOnLoad:!0,logLevel:"fatal",securityLevel:"strict"};t.Z=function(e){var t=e.chart,n=e.config;return p.Z.initialize(Object.assign({},l,n)),(0,a.useEffect)((function(){p.Z.contentLoaded()}),[n]),t?a.createElement("div",{className:"mermaid"},t):null}},9814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),p=n(3366),l=(n(7294),n(3905)),r=n(1504),i=["components"],s={title:"\u5efa\u7acb\u7b2c\u4e00\u500bDApp"},o=void 0,c={unversionedId:"create-first-dapp",id:"create-first-dapp",title:"\u5efa\u7acb\u7b2c\u4e00\u500bDApp",description:"\u6211\u5011\u5c07\u7528\u50c5\u50c530\u884c\u4f86\u5b8c\u6210\u7b2c\u4e00\u500bDApp\u3002\u9019\u500bDApp\u53ef\u4ee5\u986f\u793a\u4f7f\u7528\u8005\u9810\u8a2d\u7684\u5e33\u6236\u5730\u5740\uff0c\u4e26\u4e14\u986f\u793a\u5e33\u6236\u4e0a\u7684\u4ee5\u592a\u5e63\u9918\u984d\u3002",source:"@site/docs/create-first-dapp.md",sourceDirName:".",slug:"/create-first-dapp",permalink:"/learndapp/create-first-dapp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/create-first-dapp.md",tags:[],version:"current",frontMatter:{title:"\u5efa\u7acb\u7b2c\u4e00\u500bDApp"},sidebar:"docs",previous:{title:"\u5206\u6563\u5f0f\u7db2\u9801\u61c9\u7528(DApp)\u662f\u4ec0\u9ebc",permalink:"/learndapp/what-is-dapp"},next:{title:"\u4f7f\u7528 Webpack \u7de8\u8b6f DApp",permalink:"/learndapp/dapp_with_webpack"}},d=[{value:"\u6574\u500b\u6e2c\u8a66\u74b0\u5883",id:"\u6574\u500b\u6e2c\u8a66\u74b0\u5883",children:[],level:2},{value:"\u8a2d\u5b9a\u74b0\u5883",id:"\u8a2d\u5b9a\u74b0\u5883",children:[],level:2},{value:"\u958b\u59cb\u5beb DApp",id:"\u958b\u59cb\u5beb-dapp",children:[{value:"\u8b1b\u89e3",id:"\u8b1b\u89e3",children:[],level:3}],level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,p.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6211\u5011\u5c07\u7528\u50c5\u50c530\u884c\u4f86\u5b8c\u6210\u7b2c\u4e00\u500bDApp\u3002\u9019\u500bDApp\u53ef\u4ee5\u986f\u793a\u4f7f\u7528\u8005\u9810\u8a2d\u7684\u5e33\u6236\u5730\u5740\uff0c\u4e26\u4e14\u986f\u793a\u5e33\u6236\u4e0a\u7684\u4ee5\u592a\u5e63\u9918\u984d\u3002"),(0,l.kt)("p",null,"\u672c\u66f8\u5f8c\u7e8c\u7684DApp\u67b6\u69cb\u4e26\u4e0d\u6703\u518d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"web3.js 1.x"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"web3.js 0.2x.x"),"\u7248\u672c\uff0c\u800c\u6703\u6539\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Ethjs"),"\uff08\u652f\u63f4promise\u4e14\u76f8\u5c0d\u7a69\u5b9a\uff09\uff0c\u5404\u7a2e\u51fd\u5f0f\u5eab\u5927\u540c\u5c0f\u7570\uff0c\u4f46\u5617\u8a66\u904e\u57fa\u672c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"web3.js"),"\u9084\u662f\u5c0d\u7406\u89e3\u5340\u584a\u93c8DApp\u958b\u767c\u6709\u5e6b\u52a9\u3002"),(0,l.kt)("h2",{id:"\u6574\u500b\u6e2c\u8a66\u74b0\u5883"},"\u6574\u500b\u6e2c\u8a66\u74b0\u5883"),(0,l.kt)("p",null,"\u5728\u958b\u59cb\u5bebDApp\u4e4b\u524d\uff0c\u6211\u5011\u9700\u8981\u6709\u500b\u7db2\u9801\u4f3a\u670d\u5668\u4f86\u653eDApp\uff0c\u700f\u89bd\u5668\u4e0a\u9700\u5b89\u88dd\u597d",(0,l.kt)("inlineCode",{parentName:"p"},"MetaMask"),"\u9322\u5305\uff0c\u4e26\u958b\u555f",(0,l.kt)("inlineCode",{parentName:"p"},"ganache-cli"),"\u672c\u5730\u6e2c\u8a66\u7db2\u8def\u3002\n\u5be6\u969b\u7684\u67b6\u69cb\u5982\u4e0b\uff1a"),(0,l.kt)(r.Z,{chart:"\ngraph TB\n\u700f\u89bd\u5668 --- ganache\nDApp --- \u700f\u89bd\u5668\nsubgraph  \u7db2\u9801\u4f3a\u670d\u5668\n    DApp\nend\nsubgraph  \u672c\u5730\n    \u52a0\u5bc6\u4ee3\u5e63\u9322\u5305  --- \u700f\u89bd\u5668\nend\nsubgraph  \u9060\u7aef\n    ganache\nend\n",mdxType:"Mermaid"}),(0,l.kt)("p",null,"\u9664\u4e86\u7db2\u9801\u4f3a\u670d\u5668\u7684\u90e8\u5206\u4e4b\u5916\uff0c\u95b1\u8b80\u5b8c\u524d\u9762\u7ae0\u7bc0\u7684\u8b80\u8005\uff0c\u5c0d",(0,l.kt)("inlineCode",{parentName:"p"},"MetaMask"),"\u9322\u5305\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"ganache"),"\u61c9\u8a72\u90fd\u5df2\u6709\u7d93\u9a57\u3002"),(0,l.kt)("h2",{id:"\u8a2d\u5b9a\u74b0\u5883"},"\u8a2d\u5b9a\u74b0\u5883"),(0,l.kt)("p",null,"\u9996\u5148\u78ba\u4fdd\u5df2\u555f\u52d5ganache/ganache-cli\u3002\u82e5\u5c1a\u672a\u555f\u52d5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u555f\u52d5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ganache-cli --seed apple banana cherry\n")),(0,l.kt)("p",null,"\u958b\u555f\u4e00\u500b\u65b0\u8cc7\u6599\u593e",(0,l.kt)("inlineCode",{parentName:"p"},"hello_web3"),"\uff0c\u4e26\u52a0\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u6a94\u6848\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "name": "helloweb3",\n  "version": "1.0.0",\n  "description": "hello web3 example",\n  "dependencies": {\n    "web3": "^1.0.0-beta.29"\n  }\n}\n')),(0,l.kt)("p",null,"\u57f7\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"npm install"),"\u547d\u4ee4\u5b89\u88ddweb3\u51fd\u5f0f\u5eab\u3002\u9019\u908a\u76f4\u63a5\u4f7f\u75281.x\u7248\u505a\u7bc4\u4f8b\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u9084\u9700\u8981\u5b89\u88dd\u4e00\u500b\u7c21\u6613\u7684\u7db2\u9801\u4f3a\u670d\u5668",(0,l.kt)("inlineCode",{parentName:"p"},"http-server"),"\uff0c\u4f86\u4e0b\u8f09\u6211\u5011\u7684DApp\u7db2\u9801\u5230\u700f\u89bd\u5668\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install http-server -g\n")),(0,l.kt)("h2",{id:"\u958b\u59cb\u5beb-dapp"},"\u958b\u59cb\u5beb DApp"),(0,l.kt)("p",null,"\u5efa\u7acb\u4e00\u500b",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\u6a94\u6848\uff0c\u5167\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset = "utf-8">\n        <title>Hello Web3</title>\n        <script type="text/javascript" src="node_modules/web3/dist/web3.min.js"><\/script>\n        <script type="text/javascript">\n          var web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");\n\n          async function start() {\n            try {\n              let defaultAccount = await web3.eth.getCoinbase();\n              let balance = await web3.eth.getBalance(defaultAccount);\n\n              var html_account = document.getElementById("account");\n              var html_balance = document.getElementById("balance");\n              html_account.textContent = defaultAccount;\n              html_balance.textContent = web3.utils.fromWei(balance, "ether");\n            } catch(err) {\n              console.error("Error:", err);\n            }\n          }\n\n          window.addEventListener("load", start);\n        <\/script>\n      </head>\n    <body>\n        <h1>Account: <span id="account"></span></h1>\n        <h3>You have <span id="balance"></span> Ether</h3>\n    </body>\n</html>\n\n')),(0,l.kt)("p",null,"\u57f7\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"http-server"),"\u547d\u4ee4\u4f86\u555f\u52d5\u4e00\u500b\u7c21\u6613\u7684\u7db2\u9801\u4f3a\u670d\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ http-server .\n")),(0,l.kt)("p",null,"\u5728\u700f\u89bd\u5668\u4e2d\u6253\u958b",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/"),"\u7db2\u5740\uff0c\u53ef\u4ee5\u770b\u5230\u5e33\u6236\u5730\u5740\u8207\u4ee5\u592a\u5e63\u9918\u984d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/1vqPwVI.png",alt:"Imgur"})),(0,l.kt)("h3",{id:"\u8b1b\u89e3"},"\u8b1b\u89e3"),(0,l.kt)("p",null,"\u9019\u908a\u5047\u8a2d\u8b80\u8005\u5df2\u5177\u5099HTML\u8207Javascript\u7684\u57fa\u790e\u77e5\u8b58\uff0c\u56e0\u6b64\u53ea\u6311\u91cd\u9ede\u8aaa\u660e\uff0c\u4e0d\u518d\u4e00\u4e00\u8b1b\u89e3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="node_modules/web3/dist/web3.min.js"><\/script>\n')),(0,l.kt)("p",null,"\u9019\u884c\u5f15\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"web3.js"),"\u51fd\u5f0f\u5eab\u3002"),(0,l.kt)("p",null,"  \u5beb\u4f5c\u6642\u4f7f\u7528npm install web3\u4e0b\u8f09\u7684\u51fd\u5f0f\u5eab\u4e2d\u4e26\u672a\u5305\u542bdist/\u76ee\u9304",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\uff0c\u6211\u5df2\u9001patch\u53bb\u4fee\u5fa9\u9019\u500b\u554f\u984c\u3002\n\u5728\u4fee\u5fa9\u4e4b\u524d\uff0c\u8b80\u8005\u53ef\u4ee5\u5148\u5230",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/blob/develop/dist/web3.js"},"github"),"\u4e0b\u8f09\u6a94\u6848\uff0c\u4e26\u5c07web3.js\u5c07\u653e\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/web3/dist/"),"\u76ee\u9304\u4e0b\u3002"),(0,l.kt)("p",null,"  \u53e6\u4e00\u500b\u65b9\u6cd5\u662f\u6539\u5f9egithub\u76f4\u63a5\u5b89\u88dd0.20.x\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install https://github.com/ethereum/web3.js.git#develop --save")," \u6ce8\u610f\u9019\u908a\u4f7f\u7528\u7684API\u548c\u672c\u66f8\u7bc4\u4f8b\u4e2d\u4f7f\u7528\u76841.x API\u4e0d\u540c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");\n')),(0,l.kt)("p",null,"\u6211\u5011\u9019\u908a\u900f\u904e",(0,l.kt)("inlineCode",{parentName:"p"},"web3.js"),"\u51fd\u5f0f\u5eab\u63d0\u4f9b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Web3"),"\u4f86\u5efa\u7acb\u8207\u5340\u584a\u93c8\u7db2\u8def\u7684\u9023\u7dda\u3002\u4e0d\u540c\u7684DApp\u700f\u89bd\u5668\u6703\u586b\u5165\u4e0d\u540c\u7684Provider\uff0c\u82e5",(0,l.kt)("inlineCode",{parentName:"p"},"Web3.givenProvider "),"\u7684\u503c\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5c31\u6703\u6539\u70ba\u5efa\u7acb\u8207\u672c\u5730\u7db2(",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8545"),")\u7684\u9023\u7dda\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("load", start);\n')),(0,l.kt)("p",null,"\u9019\u884c\u7684\u610f\u7fa9\u662f\u7b49\u9801\u9762\u8f09\u5165(load)\u5b8c\u6210\u5f8c\uff0c\u518d\u555f\u52d5",(0,l.kt)("inlineCode",{parentName:"p"},"start"),"\u51fd\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'async function start() {\n    try {\n        ...\n    } catch(err) {\n       console.error("Error:", err);\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"start"),"\u51fd\u5f0f\u524d\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"async"),"\u5ba3\u544a\uff0c\u8868\u793a\u51fd\u5f0f\u4e2d\u53ef\u4ee5\u4f7f\u7528await\u8a9e\u53e5\u3002\u7528async/await\u8a9e\u53e5\u53ef\u4ee5\u8b93\u975e\u540c\u6b65\u7a0b\u5f0f\u8b8a\u5f97\u66f4\u6613\u8b80\u3002\n\u7a0b\u5f0f\u7684\u4e3b\u9ad4\u5305\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"try..catch"),"\u8a9e\u53e5\u4e2d\uff0c\u82e5\u6709\u4efb\u4f55\u932f\u8aa4\u90fd\u53ef\u4ee5\u900f\u904e\u700f\u89bd\u5668\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"web console"),"\u5de5\u5177\u67e5\u770b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let defaultAccount = await web3.eth.getCoinbase();\nlet balance = await web3.eth.getBalance(defaultAccount);\n")),(0,l.kt)("p",null,"\u900f\u904e\u67e5\u770bweb3.js\u7684\u6587\u4ef6",(0,l.kt)("sup",{parentName:"p",id:"fnref-2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\uff0c\u53ef\u4ee5\u627e\u5230\u5982\u4f55\u53d6\u5f97\u9810\u8a2d\u5e33\u6236\u5730\u5740(",(0,l.kt)("a",{parentName:"p",href:"http://web3js.readthedocs.io/en/1.0/web3-eth.html#getcoinbase"},"web3.eth.getCoinbase"),")\uff0c\u548c\u5982\u4f55\u5f9e\u5e33\u6236\u5730\u5740\u67e5\u8a62\u9918\u984d(",(0,l.kt)("a",{parentName:"p",href:"http://web3js.readthedocs.io/en/1.0/web3-eth.html#getbalance"},"web3.eth.getBalance"),")\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var html_account = document.getElementById("account");\nvar html_balance = document.getElementById("balance");\nhtml_account.textContent = defaultAccount;\nhtml_balance.textContent = web3.utils.fromWei(balance, "ether");\n')),(0,l.kt)("p",null,"\u9019\u6bb5\u7a0b\u5f0f\u7684\u4f5c\u7528\u662f\u5c07\u67e5\u8a62\u7d50\u679c\u986f\u793a\u5230\u7db2\u9801\u4e0a\u3002",(0,l.kt)("a",{parentName:"p",href:"http://web3js.readthedocs.io/en/1.0/web3-utils.html#fromwei"},"web3.utils.fromWei"),"\u80fd\u5c07\u4e59\u592a\u5e63\u5f9e\u9810\u8a2d\u7684\u6700\u5c0f\u55ae\u4f4d(wei)\u8f49\u63db\u6210\u6307\u5b9a\u7684\u55ae\u4f4d(ether)\u4f86\u986f\u793a\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u518d\u8a66\u8a66\u770b\uff0c\u5728Meta\uff2dask\u4e2d\u5f9e\u6e2c\u8a66\u7db2\u8def\u5207\u63db\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"Main Network"),"\uff0c\u770b\u770b\u5e33\u6236\u5730\u5740\u8ddf\u4ee5\u592a\u5e63\u9918\u984d\u662f\u4e0d\u662f\u90fd\u80fd\u6b63\u5e38\u986f\u793a\u3002"),(0,l.kt)("p",null,"\u606d\u559c\uff01\u6211\u5011\u5b8c\u6210\u4e86\u7b2c\u4e00\u500bDApp\uff01"),(0,l.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[1]"," Issue: npm install web3 doesn't install /dist/web3.min.js ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ethereum/web3.js/issues/1041"},"https://github.com/ethereum/web3.js/issues/1041")),(0,l.kt)("li",{parentName:"ul"},"[2]"," web3.js - Ethereum JavaScript API ",(0,l.kt)("a",{parentName:"li",href:"http://web3js.readthedocs.io/en/1.0/"},"http://web3js.readthedocs.io/en/1.0/"))))}m.isMDXComponent=!0}}]);