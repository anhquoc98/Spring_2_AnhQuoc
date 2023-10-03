package com.example.book_store_be.service;

import com.example.book_store_be.model.LegoImg;

import java.util.List;

public interface ILegoImgService {
    List <LegoImg> findByImgLego(Integer id);
}
