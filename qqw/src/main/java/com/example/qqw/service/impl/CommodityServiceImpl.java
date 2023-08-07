package com.example.qqw.service.impl;

import com.example.qqw.dao.AddressDao;
import com.example.qqw.dao.CommodityDao;
import com.example.qqw.pojo.Commodity;
import com.example.qqw.service.CommodityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommodityServiceImpl implements CommodityService {

    @Autowired
    private CommodityDao commodityDao;

    @Override
    public List<Commodity> seekCommodity() {
        return commodityDao.seekCommodity();
    }
}
