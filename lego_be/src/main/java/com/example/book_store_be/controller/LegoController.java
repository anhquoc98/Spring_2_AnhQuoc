package com.example.book_store_be.controller;

import com.example.book_store_be.model.Lego;
import com.example.book_store_be.service.ILegoImgService;
import com.example.book_store_be.service.ILegoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

@CrossOrigin("*")
@RestController
@RequestMapping("/lego")
public class LegoController {
    @Autowired
    private ILegoService legoService;

    @Autowired
    private ILegoImgService legoImgService;

    @GetMapping("/legoImgs/{imgId}")
    public ResponseEntity<?> findByImg(@PathVariable Integer imgId){
        return new ResponseEntity<>(legoImgService.findByImgLego(imgId),HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<?> findByLego(@PageableDefault Pageable pageable,
                                        @RequestParam(defaultValue = "0") Integer page,
                                        @RequestParam(required = false, defaultValue = "") String name) {
        pageable = PageRequest.of(page,7, Sort.by("id").descending());
        Page<Lego> legos=legoService.findByAll(name,pageable);
        return new ResponseEntity<>(legos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id){
        return new ResponseEntity<>(legoService.findById(id),HttpStatus.OK);
    }
}
