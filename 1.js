const CryptoJS = require("crypto-js");

function signaturegeneration(){
    let orderAmount = '250.00';
    let mobile = "7687675645";
    let email = "a@abc.com";
    var signature = CryptoJS.HmacSHA1(mobile + email + orderAmount + 'INR', 'b2964e4af5f522ddf9774f2ac316abcbbc8dfb14');
    signature = CryptoJS.enc.Hex.stringify(signature);
    console.log(signature);
    return signature;
};

signaturegeneration();