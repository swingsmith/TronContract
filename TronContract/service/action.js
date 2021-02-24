// import {pkToAddress} from '../utils/crypto';
const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");

let crypto = require('../utils/crypto');
// // // let tronWeb = require('../utils/myUtils').getTronWeb();
// // // let contract = require('../utils/myUtils').getContract();
async function getAddressFromPrivateKey(privateKey){
    const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
    let address = tronWeb.address.fromPrivateKey(privateKey);
    // let address = crypto.pkToAddress(privateKey)
    return  address.toString()
}

async function getTrxBalance(address){
    // const TronWeb = require('tronweb')
    // const HttpProvider = TronWeb.providers.HttpProvider;
    // const fullNode = new HttpProvider("https://api.trongrid.io");
    // const solidityNode = new HttpProvider("https://api.trongrid.io");
    // const eventServer = new HttpProvider("https://api.trongrid.io");
    // const  privateKey = "de71c1da35b76034e461cc026692b5f9083928e73d1fb4e464a519a102883f53";
    const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);
    await tronWeb.setAddress(address);
    let balance = await tronWeb.trx.getBalance(address);
    console.log('balance：'+ balance )
    return  balance.toString()
}

async function sendTRX(from,to,value,privateKey){
    try {
        // const TronWeb = require('tronweb')
        // const HttpProvider = TronWeb.providers.HttpProvider;
        // const fullNode = new HttpProvider("https://api.trongrid.io");
        // const solidityNode = new HttpProvider("https://api.trongrid.io");
        // const eventServer = new HttpProvider("https://api.trongrid.io");
        // const  privateKey = "ebfab1b28a33629a2a883eff76cb0d0601a67cb2219edf7751bfe65336c479c0";
        const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);

        const tradeobj = await tronWeb.transactionBuilder.sendTrx(to , value,from);
        // tradeobj.setRawData('0x123')
        // console.log(tradeobj)
        const signedTxn = await tronWeb.trx.sign(tradeobj, privateKey);
        // const txnStr = JSON.stringify(signedTxn);
        // console.log('txnStr'+txnStr)
        const receipt = await tronWeb.trx.sendRawTransaction(signedTxn);
        // rst = tronWeb.trx.getConfirmedTransaction(receipt)
        console.log('receipt:'+JSON.stringify(receipt))
        if (receipt.result) return receipt.txid.toString()
        else return false
        // return true
    }
    catch (e) {
        return false
    }
}
//token
async function getBalance(address){
    // const TronWeb = require('tronweb')
    // const HttpProvider = TronWeb.providers.HttpProvider;
    // const fullNode = new HttpProvider("https://api.trongrid.io");
    // const solidityNode = new HttpProvider("https://api.trongrid.io");
    // const eventServer = new HttpProvider("https://api.trongrid.io");
    // const privateKey = "de71c1da35b76034e461cc026692b5f9083928e73d1fb4e464a519a102883f53";
    const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);
    // set the owner address
    await tronWeb.setAddress(address);
    const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";//contract address
    let contract = await tronWeb.contract().at(trc20ContractAddress);
    // await contract.setOwnerAddress(address);
    let result = await contract.balanceOf(address).call();
    console.log('result: ', result.toString());

    return result.toString();

}

// async function approve(spender,amount,privateKey){
//     const TronWeb = require('tronweb')
//     const HttpProvider = TronWeb.providers.HttpProvider;
//     const fullNode = new HttpProvider("https://api.trongrid.io");
//     const solidityNode = new HttpProvider("https://api.trongrid.io");
//     const eventServer = new HttpProvider("https://api.trongrid.io");
//     // const privateKey = "ebfab1b28a33629a2a883eff76cb0d0601a67cb2219edf7751bfe65336c479c0";
//     const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
//
//     const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";//contract address
//     // let contract = await tronWeb.contract().at(trc20ContractAddress);
//     try {
//         let contract = await tronWeb.contract().at(trc20ContractAddress);
//         //Use send to execute a non-pure or modify smart contract method on a given smart contract that modify or change values on the blockchain.
//         // These methods consume resources(bandwidth and energy) to perform as the changes need to be broadcasted out to the network.
//         await contract.approve(
//             spender, //address _spender
//             amount //amount
//         ).send({
//             feeLimit: 100000000
//         }).then(output => {console.log('- Output:', output, '\n');});
//     } catch(error) {
//         console.error("trigger smart contract error",error)
//     }
//     return true;
// }

// async function transfer(to,amount,privateKey){
//     // const TronWeb = require('tronweb')
//     // const HttpProvider = TronWeb.providers.HttpProvider;
//     // const fullNode = new HttpProvider("https://api.trongrid.io");
//     // const solidityNode = new HttpProvider("https://api.trongrid.io");
//     // const eventServer = new HttpProvider("https://api.trongrid.io");
//     // const privateKey = "ebfab1b28a33629a2a883eff76cb0d0601a67cb2219edf7751bfe65336c479c0";
//     const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
//
//     const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";//contract address
//     // let contract = await tronWeb.contract().at(trc20ContractAddress);
//     try {
//         let contract = await tronWeb.contract().at(trc20ContractAddress);
//         //Use send to execute a non-pure or modify smart contract method on a given smart contract that modify or change values on the blockchain.
//         // These methods consume resources(bandwidth and energy) to perform as the changes need to be broadcasted out to the network.
//         await contract.transfer(
//             to, //address _to
//             amount   //amount
//         ).send({
//             feeLimit: 1000000
//         }).then(output => {
//             console.log('- Output:', output, '\n');
//             // if (output) return output.toString()
//             // else return false
//         });
//         // console.log('result: ', result);
//     } catch(error) {
//         console.error("trigger smart contract error",error)
//     }
//
//     return true;
// }
async function transfer(from,to,value,privateKey){
    try {
        // const TronWeb = require('tronweb')
        // const HttpProvider = TronWeb.providers.HttpProvider;
        // const fullNode = new HttpProvider("https://api.trongrid.io");
        // const solidityNode = new HttpProvider("https://api.trongrid.io");
        // const eventServer = new HttpProvider("https://api.trongrid.io");
        // const  privateKey = "ebfab1b28a33629a2a883eff76cb0d0601a67cb2219edf7751bfe65336c479c0";
        const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);

        const trc20ContractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';//contract address
        const parameter1 = [{type:'address',value:to},{type:'uint256',value:value}]
        const transaction = await tronWeb.transactionBuilder.triggerSmartContract(trc20ContractAddress, 'transfer(address,uint256)', {},
            parameter1,from);
        console.log(transaction)
        const signedTxn = await tronWeb.trx.sign(transaction.transaction, privateKey);
        console.log(signedTxn)
        const broadcast = await tronWeb.trx.sendRawTransaction(signedTxn);
        // rst = tronWeb.trx.getConfirmedTransaction(receipt)
        console.log('rst:'+JSON.stringify(broadcast))
        if (broadcast.result) return broadcast.txid.toString()
        else return false
    }catch (e) {
        return false;
    }
}

// async function transferFrom(from,to,amount,privateKey){
//     const TronWeb = require('tronweb')
//     const HttpProvider = TronWeb.providers.HttpProvider;
//     const fullNode = new HttpProvider("https://api.trongrid.io");
//     const solidityNode = new HttpProvider("https://api.trongrid.io");
//     const eventServer = new HttpProvider("https://api.trongrid.io");
//     // const privateKey = "ebfab1b28a33629a2a883eff76cb0d0601a67cb2219edf7751bfe65336c479c0";
//     const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
//
//     const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";//contract address
//     // let contract = await tronWeb.contract().at(trc20ContractAddress);
//     try {
//         let contract = await tronWeb.contract().at(trc20ContractAddress);
//         //Use send to execute a non-pure or modify smart contract method on a given smart contract that modify or change values on the blockchain.
//         // These methods consume resources(bandwidth and energy) to perform as the changes need to be broadcasted out to the network.
//         await contract.transferFrom(
//             from, //address _from
//             to, //address _to
//             amount //amount
//         ).send({
//             feeLimit: 10000000
//         }).then(output => {console.log('- Output:', output, '\n');});
//     } catch(error) {
//         console.error("trigger smart contract error",error)
//     }
//
//     return true;
// }

// sendBid();
async function getConfirmedTransaction(transactionID){
    // const TronWeb = require('tronweb')
    // const HttpProvider = TronWeb.providers.HttpProvider;
    // const fullNode = new HttpProvider("https://api.trongrid.io");
    // const solidityNode = new HttpProvider("https://api.trongrid.io");
    // const eventServer = new HttpProvider("https://api.trongrid.io");
    // const  privateKey = "de71c1da35b76034e461cc026692b5f9083928e73d1fb4e464a519a102883f53";
    const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);

    let rst = await tronWeb.trx.getConfirmedTransaction(transactionID);
    console.log('rst:'+JSON.stringify(rst))
    return  JSON.stringify(rst)
}
// let nowBlockID = '';
// async function getNowBlockNum(){
//     const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);
//     await tronWeb.trx.getBlock('').then(result => {
//         console.log(result)
//         if (result.blockID && result.blockID != nowBlockID) {
//             let packJson = result.transactions;
//             for (var p in packJson) {//遍历json数组时，这么写p为索引，0,1
//                 console.log(packJson[p].txID);
//                 let tx = tronWeb.trx.getTransactionInfo(packJson[p].txID);
//                 console.log(JSON.stringify(tx).toString())
//             }
//             return result.blockID;
//         }
//         else return false;
//     });
// }

module.exports ={
    getAddressFromPrivateKey,

    getTrxBalance,
    sendTRX,

    getBalance,
    transfer,
    // transferFrom
    getConfirmedTransaction
    // getNowBlockNum
}
