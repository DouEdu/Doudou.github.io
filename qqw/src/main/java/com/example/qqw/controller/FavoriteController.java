package com.example.qqw.controller;

import com.example.qqw.pojo.Favorite;
import com.example.qqw.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;
    //添加收藏
    @PostMapping("/addFavorite")
    public boolean addFavorite(HttpServletRequest request, Favorite favorite){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userId")){
                favorite.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        System.out.println(favorite.getCommodityId());
        System.out.println(favorite.getUserId());
        System.out.println(favorite.getCommodityImg());
        System.out.println(favorite.getCommodityPrice());
        System.out.println(favorite.getCommodityOverview());
        return favoriteService.addFavorite(favorite);
    }
    //查询有没有重复
    @PostMapping("/ifRepeat")
    public boolean ifRepeat(HttpServletRequest request, Favorite favorite){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userId")){
                favorite.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        return favoriteService.ifRepeat(favorite);
    }
    //查询用户收藏
    @GetMapping("/seekUserFavorite")
    public List<Favorite> seekUserFavorite(HttpServletRequest request,Favorite favorite){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userId")){
                favorite.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        return favoriteService.seekUserFavorite(favorite);
    }
    //取消用户收藏
    @PostMapping("/delFavorite")
    public boolean delFavorite(Favorite favorite){
//        System.out.println(favorite.getFavoriteId());
        return  favoriteService.delFavorite(favorite);
    }
}
