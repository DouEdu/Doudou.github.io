package com.example.qqw.dao;

import com.example.qqw.pojo.Cart;
import com.example.qqw.service.CartService;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper
public interface CartDao {

    int addCart(Cart cart);
    int addNumber(Cart cart);
    Cart userCommodity(Cart cart);
    List<Cart> seekUserCart(Cart cart);
    int delNumber(Cart cart);
    int addNumber1(Cart cart);
    int delCart(Cart cart);
    int delUserCart(Integer userId);
}
