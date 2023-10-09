package com.example.book_store_be.repository;

import com.example.book_store_be.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsersRepository extends JpaRepository<Users,Integer> {
    Users findByUsername(String username);
}
