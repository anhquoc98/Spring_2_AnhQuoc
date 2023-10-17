package com.example.book_store_be.model;

import javax.persistence.*;

@Table
@Entity
public class Lego {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private Double price;
    private String description;
    @ManyToOne
    private LegoType legoType;
    private String image;
    private Integer quantity;

    public Lego(Integer id, String name, Double price, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    public Lego() {
    }

    public Lego(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }


    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public LegoType getLegoType() {
        return legoType;
    }

    public void setLegoType(LegoType legoType) {
        this.legoType = legoType;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LegoType getElectroType() {
        return legoType;
    }

    public void setElectroType(LegoType legoType) {
        this.legoType = legoType;
    }
}
