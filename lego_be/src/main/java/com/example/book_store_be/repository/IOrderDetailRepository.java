package com.example.book_store_be.repository;

import com.example.book_store_be.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {

}
