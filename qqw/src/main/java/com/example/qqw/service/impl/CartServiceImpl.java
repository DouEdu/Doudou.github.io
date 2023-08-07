package com.example.qqw.service.impl;

import com.example.qqw.dao.CartDao;
import com.example.qqw.pojo.Cart;
import com.example.qqw.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartDao;


    @Override
    public boolean addCart(Cart cart) {
        return cartDao.addCart(cart) > 0;
    }

    @Override
    public boolean addNumber(Cart cart) {
        return cartDao.addNumber(cart) > 0;
    }

    @Override
    public Cart userCommodity(Cart cart) {
        return cartDao.userCommodity(cart);
    }

    @Override
    public List<Cart> seekUserCart(Cart cart) {
        return cartDao.seekUserCart(cart);
    }

    @Override
    public boolean delNumber(Cart cart) {
        return cartDao.delNumber(cart) > 0;
    }

    @Override
    public boolean addNumber1(Cart cart) {
        return cartDao.addNumber1(cart) > 0;
    }

    @Override
    public boolean delCart(Cart cart) {
        return cartDao.delCart(cart) > 0;
    }

    @Override
    public boolean delUserCart(Integer userId) {
        return cartDao.delUserCart(userId) > 0;
    }
}
