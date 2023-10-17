package com.example.book_store_be.repository;

import com.example.book_store_be.model.Lego;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public interface ILegoRepository extends JpaRepository<Lego,Integer> {
    @Query(value = "SELECT * FROM lego WHERE name LIKE CONCAT('%', :name, '%')", nativeQuery = true)
    Page<Lego> findAllByNameAndPrice(String name, Pageable pageable );

}
