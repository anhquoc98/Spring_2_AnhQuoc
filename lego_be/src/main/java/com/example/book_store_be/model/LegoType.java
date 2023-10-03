package com.example.book_store_be.model;

import javax.persistence.*;

@Entity
@Table
public class LegoType {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;

    public LegoType(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public LegoType() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
