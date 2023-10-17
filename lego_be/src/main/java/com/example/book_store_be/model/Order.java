package com.example.book_store_be.model;

import javax.persistence.*;

@Entity
@Table(name = "`order`")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String codeOrder;
    private boolean isDelete;
    private Double total;
    private String userName;

    public Order() {
    }

    public Order(Integer id) {
        this.id = id;
    }

    public Order(Integer id, String codeOrder, boolean isDelete, Double total, String userName) {
        this.id = id;
        this.codeOrder = codeOrder;
        this.isDelete = isDelete;
        this.total = total;
        this.userName = userName;
    }

    public Order(String codeOrder, boolean isDelete, Double total, String userName) {
        this.codeOrder = codeOrder;
        this.isDelete = isDelete;
        this.total = total;
        this.userName = userName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodeOrder() {
        return codeOrder;
    }

    public void setCodeOrder(String codeOrder) {
        this.codeOrder = codeOrder;
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
