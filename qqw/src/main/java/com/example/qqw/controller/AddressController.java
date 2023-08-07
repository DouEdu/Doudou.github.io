package com.example.qqw.controller;

import com.example.qqw.pojo.Address;
import com.example.qqw.service.AddressService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
//@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    //查询用户地址
    @GetMapping("/addressuser")
    public List<Address> seekUserAddress(HttpServletRequest request, Integer userId){
        Cookie[] cookies =request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("userId")){
                userId = Integer.valueOf(cookie.getValue());
            }
        }
//        System.out.println(userId);
        return addressService.seekUserAddress(userId);
    }

    //添加地址
    @PostMapping("/add")
    public boolean addAddress(@RequestBody Address address,HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if(cookie.getName().equals("userId")){
                address.setUserId(Integer.valueOf(cookie.getValue()));
            }
        }
//        System.out.println(address.getUserId());
//        System.out.println(address.getName());
//        System.out.println(address.getAddressProvince());
//        System.out.println(address.getAddressCity());
//        System.out.println(address.getAddressDistrict());
//        System.out.println(address.getPostcode());
//        System.out.println(address.getDetailAddress());
//        System.out.println(address.getAddressPhone());
//        System.out.println(address.getTelepHone());
//        System.out.println(address.getAddressType());
        return addressService.addAddress(address);
    }
    //删除地址
    @PostMapping("/deleteAddress")
    public boolean deleteAddress(@RequestParam("addressId") Integer addressId){
//        System.out.println(addressId);
        return addressService.deleteAddress(addressId) > 0;
    }
    //修改地址
    @PostMapping("/updateAddress")
    public int updateAddress(@RequestBody Address address){
        System.out.println(address.getAddressId());
        System.out.println(address.getName());
//        System.out.println(address.getAddressProvince());
//        System.out.println(address.getAddressCity());
//        System.out.println(address.getAddressDistrict());
//        System.out.println(address.getPostcode());
//        System.out.println(address.getDetailAddress());
//        System.out.println(address.getAddressPhone());
//        System.out.println(address.getTelepHone());
//        System.out.println(address.getAddressType());
        return addressService.updateAddress(address);
    }
    //查询修改地址内容
    @GetMapping("/seekUpdateAddress")
    public Address seekUpdateAddress(Address address){

        return addressService.seekUpdateAddress(address);
    }


}
