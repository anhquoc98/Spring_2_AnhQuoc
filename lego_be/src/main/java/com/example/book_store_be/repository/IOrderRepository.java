package com.example.book_store_be.repository;

import com.example.book_store_be.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepository  extends JpaRepository<Order,Integer> {

}
