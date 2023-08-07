package com.example.qqw.controller;

import com.example.qqw.pojo.Cart;
import com.example.qqw.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    //添加到购物车
    @PostMapping("/addCart")
    public boolean addCart(Cart cart,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                cart.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        System.out.println(cart.getUserId());
        System.out.println(cart.getCommodityId());
        System.out.println(cart.getCommodityImg());
        System.out.println(cart.getCommodityNumber());
        return cartService.addCart(cart);
    }
    //同一个用户的购物车只能有一样的商品 多的要加到数量上
    @PostMapping("/addNumber")
    public boolean addNumber(Cart cart,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                cart.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }

        return cartService.addNumber(cart);
    }

    //查询用户商品是否有
    @PostMapping("/userCommodity")
    public boolean userCommodity(Cart cart,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                cart.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        return cartService.userCommodity(cart) == null;
    }

    //查询用户购物车
    @GetMapping("/seekUserCart")
    public List<Cart> seekUserCart(Cart cart,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                cart.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        return cartService.seekUserCart(cart);
    }
    //购物车减去商品数量
    @PostMapping("/delNumber")
    public boolean delNumber(Cart cart,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                cart.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        return cartService.delNumber(cart);
    }
    //添加购物车物品数量
    @PostMapping("/addNumber1")
    public boolean addNumber1(Cart cart,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                cart.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        return cartService.addNumber1(cart);
    }
    //删除购物车商品
    @PostMapping("/delCart")
    public boolean delCart(Cart cart,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                cart.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
        return cartService.delCart(cart);
    }
    //结算删除购物车内容
    @PostMapping("/delUserCart")
    public boolean delUserCart(HttpServletRequest request,Integer userId){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                userId = Integer.valueOf(cookie.getValue());
            }
        }
        return cartService.delUserCart(userId);
    }

}
