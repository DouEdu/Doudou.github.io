package com.example.qqw.service.impl;

import com.example.qqw.dao.OrderDao;
import com.example.qqw.pojo.Order;
import com.example.qqw.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Override
    public List<Order> seekUserOrder(Integer userId) {
        return orderDao.seekUserOrder(userId);
    }

    @Override
    public boolean addUserOrder(Integer userId,String orderHao,String orderTime) {
        boolean flag = orderDao.addUserOrder(userId,orderHao,orderTime) > 0;
        return flag;
    }
}
