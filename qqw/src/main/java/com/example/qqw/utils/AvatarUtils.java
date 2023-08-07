package com.example.qqw.utils;

import java.util.Random;
import java.util.UUID;

public class AvatarUtils {
//    获取UUID
    public static String getUUID(String name){
        int flag = name.lastIndexOf(".");
        if(flag != -1){
           return UUID.randomUUID().toString().replace("-","") + name;
        }else{
            return UUID.randomUUID().toString().replace("-","");
        }
    }
//    随机创建文件夹
    public static String getDir(){
        String str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return "/" + str.charAt(new Random().nextInt(str.length())+1) + "/" + str.charAt(new Random().nextInt(str.length())+1);
    }
}
