package com.example.qqw.controller;

import com.example.qqw.pojo.Commodity;
import com.example.qqw.service.CommodityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommodityController {

    @Autowired
    private CommodityService commodityService;

    //查找数据库商品
    @GetMapping("/seekCommodity")
    public List<Commodity> seekCommodity(){
        return commodityService.seekCommodity();
    }


}
