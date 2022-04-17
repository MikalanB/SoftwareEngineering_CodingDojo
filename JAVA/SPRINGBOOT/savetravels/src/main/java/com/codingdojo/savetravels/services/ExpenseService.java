package com.codingdojo.savetravels.services;

import java.util.List;
import java.util.Optional;

import com.codingdojo.savetravels.models.Expenses;
import com.codingdojo.savetravels.repositories.ExpenseRepository;

import org.springframework.stereotype.Service;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    //find all expenses that have been created
    public List<Expenses> allExpenses() {
        return expenseRepository.findAll();
    }

    //create a new expense
    public Expenses create(Expenses expense) {
        return expenseRepository.save(expense);
    }

    //find an expense by ID 
    public Expenses findById(Long id) {
        Optional<Expenses> optionalExpense = expenseRepository.findById(id);

        if (optionalExpense.isPresent()) {
            return optionalExpense.get();
        } else {
            return null;
        }
    }

    //delete expense by ID
    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    //update an expense
    public Expenses updateExpense(Expenses expense) {
        return expenseRepository.save(expense);
    }

}
