package com.example.qqw.service;

import com.example.qqw.pojo.Cart;

import java.util.List;

public interface CartService {

    boolean addCart(Cart cart);

    boolean addNumber(Cart cart);

    Cart userCommodity(Cart cart);

    List<Cart> seekUserCart(Cart cart);

    boolean delNumber(Cart cart);

    boolean addNumber1(Cart cart);

    boolean delCart(Cart cart);

    boolean delUserCart(Integer userId);
}
