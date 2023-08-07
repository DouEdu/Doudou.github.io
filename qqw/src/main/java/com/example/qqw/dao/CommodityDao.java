package com.example.qqw.dao;

import com.example.qqw.pojo.Commodity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommodityDao {

    List<Commodity> seekCommodity();
}
