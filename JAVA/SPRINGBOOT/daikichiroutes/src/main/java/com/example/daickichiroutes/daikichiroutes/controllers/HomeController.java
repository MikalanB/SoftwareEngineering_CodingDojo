package com.example.daickichiroutes.daikichiroutes.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.stereotype.Controller;

@RestController
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

    @RequestMapping(value="/daikichi/travel/{city}", method=RequestMethod.GET)
    public String travel(@PathVariable("city") String city) {
        return "Congratulations! You will soon travel to " + city;
    }
    
    @RequestMapping(value="/daikichi/lotto/{num}", method=RequestMethod.GET)
    public String lotto(@PathVariable("num") String num) {
        if (Integer.parseInt(num) / 2 == 0) {
            return "You will take a grand journey in the near future, but be weary of tempting offers.";
        } else {
            return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
        }
    }

}
