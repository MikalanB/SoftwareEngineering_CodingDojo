package com.example.daickichiroutes.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String index(){
        return "Welcome!";
    }
    
    @RequestMapping("/daikichi")
    public String daikichi(){
        return "Welcome!";
    }

    @RequestMapping("/daikichi/today")
    public String today(){
        return "Today you will find luck in all of your endeavors!";
    }

    @RequestMapping(value="/daikichi/tomorrow", method=RequestMethod.GET)
    public String tomorrow(){
        return "Hello world! What route did you use to access me?";
    }

}
