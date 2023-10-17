package com.example.book_store_be.repository;

import com.example.book_store_be.model.Order;
import com.example.book_store_be.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderRepository  extends JpaRepository<Order,Integer> {


}
