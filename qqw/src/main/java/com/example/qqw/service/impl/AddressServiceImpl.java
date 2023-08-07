package com.example.qqw.service.impl;

import com.example.qqw.dao.AddressDao;
import com.example.qqw.pojo.Address;
import com.example.qqw.pojo.User;
import com.example.qqw.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressDao addressDao;

    @Override
    public List<Address> seekUserAddress(Integer userId) {
        return addressDao.seekUserAddress(userId);
    }

    @Override
    public boolean addAddress(Address address) {
        return addressDao.addAddress(address) > 0;
    }

    @Override
    public int deleteAddress(Integer addressId) {
        return addressDao.deleteAddress(addressId);
    }

    @Override
    public int updateAddress(Address address) {
        return addressDao.updateAddress(address);
    }

    @Override
    public Address seekUpdateAddress(Address address) {
        return addressDao.seekUpdateAddress(address);
    }

}
