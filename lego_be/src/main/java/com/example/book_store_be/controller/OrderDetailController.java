package com.example.book_store_be.controller;

import com.example.book_store_be.model.OrderDetail;
import com.example.book_store_be.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;

    @GetMapping("")
    public ResponseEntity<?> listCart() {
        return new ResponseEntity<>(orderDetailService.listOrderDetail(), HttpStatus.OK);
    }

    @PostMapping("/saveOrderDetail")
    public ResponseEntity<?> saveOrderDetail(@RequestBody OrderDetail orderDetail) {
        orderDetailService.addOrderDetail(orderDetail);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteOrderDetail(@PathVariable("id") Integer id) {
        orderDetailService.remove(id);
    }
    @PutMapping()
//    public ResponseEntity<?> updateOrdetail

    @DeleteMapping("clear")
    @ResponseStatus(HttpStatus.OK)
    public void deleteOrderDetailClear() {
        orderDetailService.clear();
    }

    @GetMapping("total")
    public ResponseEntity<?> totalOrder() {
        return new ResponseEntity<>(orderDetailService.getAmount(), HttpStatus.OK);
    }
}
