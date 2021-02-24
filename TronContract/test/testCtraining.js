
var Web3= require('web3');
var config=require('./config');
var fs=require('fs');
var execSync =require('child_process').execSync;
var web3sync = require('./web3sync');
var BigNumber = require('bignumber.js');


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(config.HttpProvider));
}

console.log(config);




var filename="Ctraining";




var address=fs.readFileSync(config.Ouputpath+filename+'.address','utf-8');
var abi=JSON.parse(fs.readFileSync(config.Ouputpath/*+filename+".sol:"*/+filename+'.abi', 'utf-8'));
var contract = web3.eth.contract(abi);
var instance = contract.at(address);



console.log(filename+" address:"+address);



(async function(){

  
 var func = "createIdentification(string,string,string)";
 var params = ["test","test1","test2"];
 var receipt = await web3sync.sendRawTransaction(config.account, config.privKey, address, func, params);
console.log("test:" + JSON.stringify(receipt));
var p = "test2";
var name = instance.getIdentification(p);
console.log("name:" + name )
var t = instance.get();
console.log("t:" + t )

})()