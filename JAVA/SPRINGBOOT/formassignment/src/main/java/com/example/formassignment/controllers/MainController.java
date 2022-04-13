package com.example.formassignment.controllers;

import org.springframework.stereotype.Controller;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "index.jsp";
    }
}
