const TronWeb = require('tronweb');


function getTronWeb(){
    // const TronWeb = require('tronweb')
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider("https://api.trongrid.io");
    const solidityNode = new HttpProvider("https://api.trongrid.io");
    const eventServer = new HttpProvider("https://api.trongrid.io");
    const  privateKey = "ebfab1b28a33629a2a883eff76cb0d0601a67cb2219edf7751bfe65336c479c0";
    const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

    return tronWeb
}

function getContract(){
    let tronWeb = getTronWeb();
    const trc20ContractAddress = "TQQg4EL8o1BSeKJY4MJ8TB8XK7xufxFBvK";//contract address
    let contract = await tronWeb.contract().at(trc20ContractAddress);

    return contract
}

module.exports = {
    getTronWeb,
    getContract

};