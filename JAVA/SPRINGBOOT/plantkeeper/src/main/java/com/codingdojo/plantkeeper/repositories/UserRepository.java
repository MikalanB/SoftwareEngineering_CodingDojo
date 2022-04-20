package com.codingdojo.plantkeeper.repositories;

import java.util.List;
import java.util.Optional;

import com.codingdojo.plantkeeper.models.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    
    //find all users
    List<User> findAll();
    Optional<User> findByEmail(String email);

}
