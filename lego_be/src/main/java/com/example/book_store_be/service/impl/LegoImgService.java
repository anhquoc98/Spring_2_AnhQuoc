package com.example.book_store_be.service.impl;

import com.example.book_store_be.model.LegoImg;
import com.example.book_store_be.repository.ILegoImageRepository;
import com.example.book_store_be.repository.ILegoRepository;
import com.example.book_store_be.service.ILegoImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LegoImgService implements ILegoImgService {
    @Autowired
    private ILegoImageRepository legoRepository;
    @Override
    public List<LegoImg> findByImgLego(Integer id) {
        return legoRepository.findAllByLego_Id(id);
    }
}
