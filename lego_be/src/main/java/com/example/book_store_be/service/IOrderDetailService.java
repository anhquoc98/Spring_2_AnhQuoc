package com.example.book_store_be.service;

import com.example.book_store_be.model.OrderDetail;


import java.util.List;


public interface IOrderDetailService {
    void addOrderDetail(OrderDetail orderDetail);
    void remove(Integer id);

    OrderDetail update(Integer legoId,Integer quantity);
    void clear();

    List<OrderDetail> listOrderDetail();

    int getCount();
    Double getAmount();
}
