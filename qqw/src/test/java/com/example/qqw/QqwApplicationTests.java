package com.example.qqw;

import com.example.qqw.controller.UserController;
import com.example.qqw.dao.UserDao;
import com.example.qqw.pojo.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class QqwApplicationTests {

    @Autowired
    private UserDao userDao;

    @Test
    public void test(){
        System.out.println(userDao.gerenzl("123"));
    }
}
