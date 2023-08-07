package com.example.qqw.controller;

import com.example.qqw.pojo.Order;
import com.example.qqw.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    //查询用户订单
    @GetMapping("/seekUserOrder")
    public List<Order> seekUserOrder(HttpServletRequest request, Integer userId){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                userId = Integer.valueOf(cookie.getValue());
            }
        }
        System.out.println(userId);
        return orderService.seekUserOrder(userId);
    }

    //添加订单
    @PostMapping("/addUserOrder")
    public boolean addUserOrder(HttpServletRequest request, Integer userId,String orderHao,String orderTime){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                userId = Integer.valueOf(cookie.getValue());
            }
        }
        orderHao = UUID.randomUUID().toString().replace("-", "");
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        orderTime = now.format(formatter);
        return orderService.addUserOrder(userId,orderHao,orderTime);
    }
}
