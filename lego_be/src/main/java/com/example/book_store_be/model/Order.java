package com.example.book_store_be.model;

import javax.persistence.*;

@Entity
@Table(name = "`order`")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String code_order;
    private boolean isDelete;
    private Double total;
    private String userName;

    public Order() {
    }

    public Order(Long id, String code_order, boolean isDelete, Double total, String userName) {
        this.id = id;
        this.code_order = code_order;
        this.isDelete = isDelete;
        this.total = total;
        this.userName = userName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode_order() {
        return code_order;
    }

    public void setCode_order(String code_order) {
        this.code_order = code_order;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
