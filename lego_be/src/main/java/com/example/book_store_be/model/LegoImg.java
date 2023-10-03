package com.example.book_store_be.model;

import javax.persistence.*;

@Entity
@Table
public class LegoImg {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String imgUrl;
    @ManyToOne
    private Lego lego;

    public LegoImg() {
    }

    public LegoImg(Integer id, String imgUrl) {
        this.id = id;
        this.imgUrl = imgUrl;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Lego getElectronic() {
        return lego;
    }

    public void setElectronic(Lego lego) {
        this.lego = lego;
    }
}
