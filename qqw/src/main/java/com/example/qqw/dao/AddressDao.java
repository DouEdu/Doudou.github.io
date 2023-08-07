package com.example.qqw.dao;

import com.example.qqw.pojo.Address;
import com.example.qqw.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AddressDao {
    //查询用户地址
    List<Address> seekUserAddress(Integer userId);
    //添加地址
    int addAddress(Address address);
    //删除地址
    int deleteAddress(Integer addressId);
    //修改地址
    int updateAddress(Address address);
    //查询修改地址内容
    Address seekUpdateAddress(Address address);
}
