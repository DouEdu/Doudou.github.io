package com.example.qqw.service.impl;

import com.example.qqw.dao.UserDao;
import com.example.qqw.pojo.User;
import com.example.qqw.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public boolean logon(User user) {
        return userDao.logon(user) > 0;
    }

    @Override
    public String ifName(String userName) {
        return userDao.ifName(userName);
    }

    @Override
    public User register(User user) {
       return userDao.register(user);
    }

    @Override
    public boolean xgpasswprd(User user){
        return userDao.xgpasswprd(user) > 0;
    }

    @Override
    public String namePassWord(String userName) {
        return userDao.namePassWord(userName);
    }

    @Override
    public User gerenzl(String userName) {
        return userDao.gerenzl(userName);
    }

    @Override
    public boolean gerenzl2(User user) {
        return userDao.gerenzl2(user) > 0;
    }

    @Override
    public boolean shangchuantx1(User user) {
        return userDao.shangchuantx1(user) > 0;
    }
}
