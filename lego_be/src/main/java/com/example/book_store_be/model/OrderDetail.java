package com.example.book_store_be.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean isDelete;
    private Double total;
    private int quantity;
    @ManyToOne
    private Order order;
    @ManyToOne
    private Lego lego;

    public OrderDetail() {
    }

    public OrderDetail(Integer id, boolean isDelete, Double total, Integer quantity) {
        this.id = id;
        this.isDelete = isDelete;
        this.total = total;
        this.quantity = quantity;
    }

    public OrderDetail(Double total, Integer quantity, Order order, Lego lego) {
        this.total = total;
        this.quantity = quantity;
        this.order = order;
        this.lego = lego;
    }

    public OrderDetail(Integer id, Double total, Integer quantity, Order order, Lego lego) {
        this.id = id;
        this.total = total;
        this.quantity = quantity;
        this.order = order;
        this.lego = lego;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Lego getLego() {
        return lego;
    }

    public void setLego(Lego lego) {
        this.lego = lego;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Lego getElectronic() {
        return lego;
    }

    public void setElectronic(Lego lego) {
        this.lego = lego;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "id=" + id +
                ", isDelete=" + isDelete +
                ", total=" + total +
                ", quantity=" + quantity +
                ", order=" + order +
                ", lego=" + lego +
                '}';
    }
}
