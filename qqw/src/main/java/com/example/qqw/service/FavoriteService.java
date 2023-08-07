package com.example.qqw.service;

import com.example.qqw.pojo.Favorite;

import java.util.List;

public interface FavoriteService {

    boolean addFavorite(Favorite favorite);

    boolean ifRepeat(Favorite favorite);

    List<Favorite> seekUserFavorite(Favorite favorite);

    boolean delFavorite(Favorite FavoriteId);
}
