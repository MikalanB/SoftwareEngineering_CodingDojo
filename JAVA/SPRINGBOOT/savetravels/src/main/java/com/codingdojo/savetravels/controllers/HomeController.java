package com.codingdojo.savetravels.controllers;

import javax.validation.Valid;

import com.codingdojo.savetravels.models.Expenses;
import com.codingdojo.savetravels.services.ExpenseService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

    private final ExpenseService expenseService;

    public HomeController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/expenses")    
    public String newExpense(@ModelAttribute("expense") Expenses expense, Model model) {

        model.addAttribute("allExpenses", expenseService.allExpenses());

        return "index";
    }
    
    @PostMapping("/processExpense")
        public String processExpense(@Valid @ModelAttribute("expense") Expenses expense, BindingResult result) {
            if (result.hasErrors()) {
                return "index";
            } else {
                expenseService.create(expense);
                return "redirect:/expenses";
            }
        }
}
