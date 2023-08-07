package com.example.qqw.dao;

import com.example.qqw.pojo.Favorite;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FavoriteDao {

    int addFavorite(Favorite favorite);
    Favorite ifRepeat(Favorite favorite);
    List<Favorite> seekUserFavorite(Favorite favorite);
    int delFavorite(Favorite favorite);
}
