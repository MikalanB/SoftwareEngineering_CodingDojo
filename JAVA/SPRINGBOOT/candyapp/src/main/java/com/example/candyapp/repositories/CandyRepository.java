package com.example.candyapp.repositories;

import java.util.List;

import com.example.candyapp.models.Candy;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandyRepository extends CrudRepository<Candy, Long> {

    List<Candy> findAll();

    
}

