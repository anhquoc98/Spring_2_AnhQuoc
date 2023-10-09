package com.example.book_store_be.service.impl;

import com.example.book_store_be.model.OrderDetail;
import com.example.book_store_be.repository.IOrderDetailRepository;
import com.example.book_store_be.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {

    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public void addOrderDetail(OrderDetail orderDetail) {
        OrderDetail orderDetail1 = orderDetailRepository.getReferenceById(orderDetail.getLego().getId());
        if (orderDetail1 == null) {
            orderDetailRepository.save(orderDetail1);
        } else {
            orderDetail1.setQuantity(orderDetail1.getQuantity() + 1);
        }
    }

    @Override
    public void remove(Integer id) {
        OrderDetail orderDetail = orderDetailRepository.findById(id).get();
        orderDetailRepository.delete(orderDetail);
    }

    @Override
    public OrderDetail update(Integer legoId, Integer quantity) {
        OrderDetail orderDetail = orderDetailRepository.findById(legoId).get();
        orderDetail.setQuantity(quantity);
        return orderDetail;
    }

    @Override
    public void clear() {
        orderDetailRepository.deleteAll();
    }

    @Override
    public List<OrderDetail> listOrderDetail() {
        return orderDetailRepository.findAll();
    }

    @Override
    public int getCount() {
        int count = (int) orderDetailRepository.count();
        return count;
    }

    @Override
    public Double getAmount() {

        double totalAmount = orderDetailRepository.findAll().stream()
                .mapToDouble(orderDetail -> orderDetail.getQuantity() * orderDetail.getLego().getPrice())
                .sum();

        return totalAmount;

    }

}
