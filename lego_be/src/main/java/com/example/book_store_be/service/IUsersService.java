package com.example.book_store_be.service;

import com.example.book_store_be.model.Users;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface IUsersService extends UserDetailsService {
    Users findByUsername(String username);
    Users findById(Integer id);

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
