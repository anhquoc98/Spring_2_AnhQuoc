package com.example.book_store_be.controller;

import com.example.book_store_be.model.OrderDetail;
import com.example.book_store_be.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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

    @GetMapping("/saveOrderDetail")
    public ResponseEntity<?> saveOrderDetail(@RequestBody @Validated OrderDetail orderDetail) {
        orderDetailService.addOrderDetail(orderDetail);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void deleteOrderDetail(@PathVariable Integer id) {
        orderDetailService.remove(id);
    }

    @DeleteMapping("clear")
    @ResponseStatus(HttpStatus.OK)
    public void deleteOrderDetailClear() {
        orderDetailService.clear();
    }
    @GetMapping("total")
    @ResponseStatus(HttpStatus.OK)
    public void totalOrder(){
        orderDetailService.getAmount();
    }
}
