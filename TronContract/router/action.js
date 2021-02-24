let router = require('express').Router();
let actionService = require('../service/action');

router.post('/getAddressFromPrivateKey',async(req,res)=>{
    let privateKey = req.body.privateKey;
    let address=  await actionService.getAddressFromPrivateKey(privateKey);

    res.send(address)

});

router.post('/getTrxBalance',async(req,res)=>{
    let address = req.body.address;
    console.log('address:'+address)
    // let privateKey = req.body.privateKey;
    let balance=  await actionService.getTrxBalance(address);

    res.send(balance)

});

router.post('/sendTRX',async(req,res)=>{
    let from = req.body.from;
    let to   = req.body.to;
    let amount = req.body.amount;
    let privateKey = req.body.privateKey;
    let b =  await actionService.sendTRX(from,to,amount,privateKey);

    res.send(b)

});
//token
router.post('/getBalance',async(req,res)=>{
    let address = req.body.address;
    // let privateKey = req.body.privateKey;
    let balance =  await actionService.getBalance(address);
    console.log('balance:'+balance)
    res.send(balance)

});

// router.post('/approve',async(req,res)=>{
//     let spender   = req.body.spender;
//     let amount = req.body.amount;
//     let privateKey = req.body.privateKey;
//     let b =  await actionService.approve(spender,amount,privateKey);
//
//     res.send(b)
//
// });

router.post('/transfer',async(req,res)=>{
    let to   = req.body.to;
    let amount = req.body.amount;
    let privateKey = req.body.privateKey;
    let b =  await actionService.transfer(to,amount,privateKey);

    res.send(b)

});

// router.post('/transferFrom',async(req,res)=>{
//     let from = req.body.from;
//     let to   = req.body.to;
//     let amount = req.body.amount;
//     let privateKey = req.body.privateKey;
//     let b =  await actionService.transferFrom(from,to,amount,privateKey);
//
//     res.send(b)
//
// });
router.post('/getConfirmedTransaction',async(req,res)=>{
    let transactionID = req.body.transactionID;
    // console.log('transtionID:'+transactionID)
    console.log('transactionID:'+transactionID)
    // let privateKey = req.body.privateKey;
    let transaction=  await actionService.getConfirmedTransaction(transactionID);

    res.send(transaction)

});

module.exports = router;