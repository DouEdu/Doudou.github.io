package com.example.qqw.controller;

import com.example.qqw.pojo.User;
import com.example.qqw.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@Controller
@RestController
//@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    //注册
    @PostMapping(value = "/logon1")
    public boolean logon(@RequestBody User user){
        return userService.logon(user);
    }
    //重复用户名
    @PostMapping(value = "/name")
    public boolean ifName(@RequestParam("userName") String userName){
        return userService.ifName(userName) != null;
    }
    //登录
    @PostMapping(value = "/register1")
    public boolean register1(@RequestBody User user, HttpServletResponse response){
//        System.out.println(user.getUserName());
//        System.out.println(user.getUserPassword());

        Cookie userName = new Cookie("userName", user.getUserName());
        userName.setMaxAge(60*60*24);
        response.addCookie(userName);

        if (userService.register(user) != null){
            Integer q =userService.register(user).getUserId();
            String id = q.toString();
            Cookie userId = new Cookie("userId",id);
            userId.setMaxAge(60*60*24);
            response.addCookie(userId);
            return true;
        }
        return false;
    }
    //修改密码
    @PostMapping(value = "/xgpasswprd1")
    public boolean xgpasswprd1(@RequestBody User user,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userName")){
                user.setUserName(cookie.getValue());
            }
        }
        return userService.xgpasswprd(user);
    }

    //根据用户名查询密码
    @PostMapping(value = "/namePassWord")
    public String namePassWord(String userName,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userName")){
                userName = cookie.getValue();
            }
        }
        return userService.namePassWord(userName).toString();
    }

    //查询用户个人资料数据
    @GetMapping(value = "/gerenzl1") //HttpServletRequest request
    public User gerenzl1(String userName,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userName")){
                userName = cookie.getValue();
            }
        }
        return userService.gerenzl(userName);
    }
    //修改个人资料
    @PostMapping(value = "/gerenzl2")
    public boolean gerenzl2(@RequestBody User user,HttpServletRequest request){
//        System.out.println(user.getUserName());
//        System.out.println(user.getUserPhone());
//        System.out.println(user.getUserEmail());
//        System.out.println(user.getUserSex());
        Cookie[] cookies =request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userName")){
                user.setPrimaryUserName(cookie.getValue()) ;
            }
        }
        return userService.gerenzl2(user);
    }



}