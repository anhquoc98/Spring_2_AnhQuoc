package com.example.book_store_be.repository;

import com.example.book_store_be.model.Lego;
import com.example.book_store_be.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
    OrderDetail findByLego(Lego lego);
    @Query(value = "select * from order_detail where is_delete = false", nativeQuery = true)
    List<OrderDetail> findAllBy();

}
