package com.example.book_store_be.service;

import com.example.book_store_be.model.Lego;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.util.List;


public interface ILegoService {
    Page<Lego> findAllByNameAndPrice(String name, Pageable pageable );
    Lego findById(Integer id);
    List<Lego> findByList();
}
