let router = require('express').Router();
let ethersUtils = require('../utils/ethersUtils');
let codeUtil = require('../utils/code')
let actionService = require('../service/action');
// console.log('ether:'+ethersUtils.sha256(codeUtil.hexStr2byteArray('0x12345')))
// //stone
// let privateKey = 'de71c1da35b76034e461cc026692b5f9083928e73d1fb4e464a519a102883f53';
// let address = actionService.getAddressFromPrivateKey(privateKey);//TAKsuJ5LVEHb9CFgL9R4KgxTnxyi8uS4LZ
// console.log(address)                                             //TAKsuJ5LVEHb9CFgL9R4KgxTnxyi8uS4LZ

// let address = 'TAKsuJ5LVEHb9CFgL9R4KgxTnxyi8uS4LZ';
// let privateKey = "de71c1da35b76034e461cc026692b5f9083928e73d1fb4e464a519a102883f53";
// let balance= actionService.getTrxBalance(address);
// console.log('balance：'+ JSON.stringify(balance))

let from = 'TAKsuJ5LVEHb9CFgL9R4KgxTnxyi8uS4LZ';
let to   = 'TSCAS54FF1kfkoQhr35odze8cXc3FoodiV';
let value = 10**2;
let privateKey = 'de71c1da35b76034e461cc026692b5f9083928e73d1fb4e464a519a102883f53';
let b =  actionService.sendTRX(from,to,value,privateKey);
console.log('转账成功:'+JSON.stringify(b));
//
//token
// let address = 'TAKsuJ5LVEHb9CFgL9R4KgxTnxyi8uS4LZ';
// let balance =   actionService.getBalance(address);
// console.log('balance12565:'+JSON.stringify(balance));
//
// let spender3   = 'TAKsuJ5LVEHb9CFgL9R4KgxTnxyi8uS4LZ';
// let amount3 = 10**8;
// // let privateKey3 = req.body.privateKey;
// let b =   actionService.approve(spender3,amount3,privateKey);
//
// let to   = req.body.to;
// let amount = req.body.amount;
// let privateKey = req.body.privateKey;
// let b =   actionService.transfer(from,to,value,privateKey);
// console.log('转账USDT:'+b)
// let from = req.body.from;
// let to   = req.body.to;
// let amount = req.body.amount;
// let privateKey = req.body.privateKey;
// let b =  await actionService.transferFrom(from,to,amount,privateKey);

// module.exports = router;
// let transtionID = 'ccb6778804c0b8908a4096f0dc7fd480c50da1f1cc7972afc79787c40c660184';
// // let privateKey = 'de71c1da35b76034e461cc026692b5f9083928e73d1fb4e464a519a102883f53';
// let tx= actionService.getConfirmedTransaction(transtionID);
// console.log(JSON.stringify(tx));
// actionService.getNowBlockNum();