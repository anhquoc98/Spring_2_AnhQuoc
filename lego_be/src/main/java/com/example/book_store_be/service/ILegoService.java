package com.example.book_store_be.service;

import com.example.book_store_be.model.Lego;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ILegoService {
    Page<Lego> findByAll(String name, Pageable pageable);
    Lego findById(Integer id);
}
