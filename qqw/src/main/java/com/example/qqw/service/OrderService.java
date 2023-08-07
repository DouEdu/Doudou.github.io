package com.example.qqw.service;

import com.example.qqw.pojo.Order;

import java.util.List;

public interface OrderService {

    List<Order> seekUserOrder(Integer userId);

    boolean addUserOrder(Integer userId,String orderHao,String orderTime);
}