package com.company;
import java.security.Security;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.Cipher;
import javax.crypto.Mac;

public class Main {

    public static void main(String[] args) throws Exception {
        String secret_key = "b2964e4af5f522ddf9774f2ac316abcbbc8dfb14";
        String orderAmount = "250.00";
        String mobile = "7687675645";
        String email = "a@abc.com";
        String data=mobile+email+orderAmount+"INR";
        javax.crypto.Mac mac = javax.crypto.Mac.getInstance("HmacSHA1");
            mac.init(new javax.crypto.spec.SecretKeySpec(secret_key.getBytes(), "HmacSHA1"));
        byte[] hexBytes = new org.apache.commons.codec.binary.Hex().encode(mac.doFinal(data.getBytes()));
        String signature = new String(hexBytes, "UTF-8");
        System.out.println(signature);
    }
}
