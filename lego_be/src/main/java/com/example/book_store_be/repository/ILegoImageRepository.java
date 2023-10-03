package com.example.book_store_be.repository;

import com.example.book_store_be.model.LegoImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ILegoImageRepository extends JpaRepository<LegoImg,Integer> {
    List<LegoImg> findAllByLego_Id(Integer legoId);
}
