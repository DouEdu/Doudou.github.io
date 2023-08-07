package com.example.qqw.service;

import com.example.qqw.pojo.User;

public interface UserService {
        boolean logon(User user);
        String ifName(String userName);
        User register(User user);
        boolean xgpasswprd(User user);
        String namePassWord(String userName);
        User gerenzl(String userName);
        boolean gerenzl2(User user);
        boolean shangchuantx1(User user);
}