package com.codingdojo.savetravels.repositories;

import java.util.List;

import com.codingdojo.savetravels.models.Expenses;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends CrudRepository<Expenses, Long> {
    List<Expenses> findAll();
}
