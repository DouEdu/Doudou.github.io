package com.example.qqw.dao;

import com.example.qqw.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
    //注册
    int logon( User user);
    //重复用户名
    String ifName(String userName);
    //登录
    User register(User user);
    //修改密码
    int xgpasswprd(User user);
    //根据用户名查询密码
    String namePassWord(String userName);
    //查看用户个人资料
    User gerenzl(String userName);
    //修改用户个人资料
    int gerenzl2(User user);
    //上传头像
    int shangchuantx1(User user);
}
