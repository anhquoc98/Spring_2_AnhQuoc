package com.example.book_store_be.service.impl;

import com.example.book_store_be.model.Lego;
import com.example.book_store_be.repository.ILegoRepository;
import com.example.book_store_be.service.ILegoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class LegoService implements ILegoService {

    @Autowired
    private ILegoRepository repository;
    @Override
    public Page<Lego> findAllByNameAndPrice(String name, Pageable pageable ) {
        return repository.findAllByNameAndPrice( name,  pageable);
    }

    @Override
    public Lego findById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Lego> findByList() {
        return repository.findAll();
    }
}
