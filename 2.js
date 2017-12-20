const CryptoJS = require("crypto-js");

function signaturegeneration(){
    let accessKey = "GC0XS2E1ST1WXR7JL656";
    let merchantTxnId = "MTX1001";
    let orderAmount = "s10.00";
    let data = "merchantAccessKey=" + accessKey + "&" + "transactionId=" + merchantTxnId + "&" + "amount=" + orderAmount;
    var signature = CryptoJS.HmacSHA1(data, 'b2964e4af5f522ddf9774f2ac316abcbbc8dfb14');
    signature = CryptoJS.enc.Hex.stringify(signature);
    console.log(signature);
    return signature;
};

signaturegeneration();