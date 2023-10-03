package com.example.book_store_be.repository;

import com.example.book_store_be.model.Lego;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ILegoRepository extends JpaRepository<Lego,Integer> {
    @Query(value = "select * from lego where name LIKE CONCAT('%', :name, '%')",nativeQuery = true)
    Page<Lego> findAllByName(String name, Pageable pageable);
}
