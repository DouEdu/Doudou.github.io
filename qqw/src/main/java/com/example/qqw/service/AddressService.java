package com.example.qqw.service;

import com.example.qqw.pojo.Address;
import com.example.qqw.pojo.User;

import java.util.List;

public interface AddressService {
    List<Address> seekUserAddress(Integer userId);
    boolean addAddress(Address address);
    int deleteAddress(Integer addressId);
    int updateAddress(Address address);
    Address seekUpdateAddress(Address address);
}
