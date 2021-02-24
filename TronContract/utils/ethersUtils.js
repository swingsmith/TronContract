
// import {utils} from 'ethers';
let utils = require('ethers')
// const keccak256 = utils.keccak256
// const sha256 = utils.sha256;
// const toUtf8Bytes = utils.toUtf8Bytes;
// const recoverAddress = utils.recoverAddress;
// const SigningKey = utils.SigningKey;
// const AbiCoder = utils.AbiCoder;

function keccak256(bytes){
    return utils.utils.keccak256(bytes)
}
function sha256(h){
    return utils.utils.sha256(h);
}
function toUtf8Bytes(v){
    utils.utils.toUtf8Bytes(v)
}
function recoverAddress(){
    return utils.utils.recoverAddress;
}
function SigningKey(){
    return utils.utils.SigningKey;
}
function AbiCoder(){
    return utils.utils.AbiCoder;
}

module.exports ={
    keccak256,
    sha256,
    toUtf8Bytes,
    recoverAddress,
    SigningKey,
    AbiCoder
}
