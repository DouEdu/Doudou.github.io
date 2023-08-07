package com.example.qqw.controller;

import com.example.qqw.pojo.User;
import com.example.qqw.service.UserService;
import com.example.qqw.utils.AvatarUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class ControllerClass {
    @Autowired
    private UserService userService;


    @RequestMapping("/logon")
    public String login(){
        return "logon";
    }

    @RequestMapping("/register")
    public String register(){
        return "register";
    }

    @RequestMapping("/")
    public String index(){
        return "index";
    }

    @RequestMapping("/xgpasswprd")
    public String xgpasswprd(){
        return "xgpasswprd";
    }

    @RequestMapping("/gerenzl")
    public String gerenzl(){
        return "gerenzl";
    }

    @RequestMapping("/collect")
    public String collect(){
        return "collect";
    }

    @RequestMapping("/indent")
    public String indent(){
        return "indent";
    }

    @RequestMapping("/jingxuansp")
    public String jingxuansp(){
        return "jingxuansp";
    }

    @RequestMapping("/shangchuantx")
    public String shangchuantx(){
        return "shangchuantx";
    }

    @RequestMapping("/Shopdetails")
    public String Shopdetails(){
        return "Shopdetails";
    }

    @RequestMapping("/ShoppingCart")
    public String ShoppingCart(){
        return "ShoppingCart";
    }

    @RequestMapping("/shouhuogl")
    public String shouhuogl(){
        return "shouhuogl";
    }

    @RequestMapping("/xinzengdz")
    public String xinzengdz(){
        return "xinzengdz";
    }

    @RequestMapping("/xiugaidz")
    public String xiugaidz(){
        return "xiugaidz";
    }


    @PostMapping("/uploadAvatar")
    public String updateLoadAvatar(MultipartFile file, HttpSession session, HttpServletRequest request) throws IOException {
        InputStream inputStream = file.getInputStream();
        String avatar = file.getOriginalFilename();
        String substring = avatar.substring(avatar.lastIndexOf("."),avatar.length());
        System.out.println(substring);
        if(substring.equals(".png") || substring.equals(".jpg") || substring.equals(".gif")){
            String uuid = AvatarUtils.getUUID(substring);
            String fileDir = AvatarUtils.getDir();
            File file1 = new File("D:/update"+fileDir);
            if(!(file1.exists())){
                file1.mkdirs();
            }
            File file2 = new File(file1,uuid);
            file.transferTo(file2);
            String avatar_tou = fileDir + "/" + uuid;
            User u = new User();
            u.setUserImg(avatar_tou);
            session.setAttribute("user",u);
            User u1 = (User) session.getAttribute("user");

            Cookie[] cookies =request.getCookies();
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("userName")){
                    u1.setUserName(cookie.getValue()) ;
                }
            }
            userService.shangchuantx1(u1);
            System.out.println(u1);
            return "redirect:userInfo";
        }
        return "redirect:userInfo";
    }
    @Autowired
    ResourceLoader resourceLoader;

    @GetMapping("/get/{dir1}/{dir2}/{filename:.+}")
    public ResponseEntity get(@PathVariable String dir1, @PathVariable String dir2, @PathVariable String filename){
        Path path = Paths.get("D:/update" + "/" + dir1 + "/" + dir2,filename);
        Resource resource = resourceLoader.getResource("file:"+path.toString());
        return ResponseEntity.ok(resource);
    }

    @RequestMapping(value = "/userInfo" , method = RequestMethod.GET)
    public String index(HttpSession session){
        User u = (User) session.getAttribute("user");
        if(u != null){
            return "index";
        }
        return "index";
    }
}
