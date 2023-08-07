package com.example.qqw.dao;

import com.example.qqw.pojo.Order;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderDao {
    //查询用户订单
    List<Order> seekUserOrder(Integer userId);
    //添加用户订单
    int addUserOrder(Integer userId,String orderHao,String orderTime);
}
