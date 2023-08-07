package com.example.qqw.service.impl;

import com.example.qqw.dao.FavoriteDao;
import com.example.qqw.pojo.Favorite;
import com.example.qqw.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteDao favoriteDao;

    @Override
    public boolean addFavorite(Favorite favorite) {
        return favoriteDao.addFavorite(favorite) > 0;
    }

    @Override
    public boolean ifRepeat(Favorite favorite) {
        return favoriteDao.ifRepeat(favorite) == null;
    }

    @Override
    public List<Favorite> seekUserFavorite(Favorite favorite) {
        return favoriteDao.seekUserFavorite(favorite);
    }

    @Override
    public boolean delFavorite(Favorite favorite) {
        return favoriteDao.delFavorite(favorite) > 0;
    }
}
