package com.example.book_store_be.service.impl;

import com.example.book_store_be.config.JwtUserDetails;
import com.example.book_store_be.model.Users;
import com.example.book_store_be.repository.IUsersRepository;
import com.example.book_store_be.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UsersService implements IUsersService {
    @Autowired
    private IUsersRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


    @Override
    public Users findById(Integer id) {
        return userRepository.findById(id).get();
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = userRepository.findByUsername(username);
        if (users == null) {
            throw new UsernameNotFoundException("Không tìm thấy tài khoản: " + username);
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        String role = users.getRoles().getName();
        authorities.add(new SimpleGrantedAuthority(role));
        return new JwtUserDetails(users.getId(), users.getUsername(), users.getPassword(), authorities);
    }
}
