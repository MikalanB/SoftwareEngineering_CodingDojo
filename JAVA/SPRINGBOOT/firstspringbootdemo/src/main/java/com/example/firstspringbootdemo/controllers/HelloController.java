package com.example.firstspringbootdemo.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "index.jsp";
    }

    // @RequestMapping("/greeting")
    // public String index(){
    //     return "Hello user!";
    // }
    // // you can be explicit about the request as well
    // @RequestMapping(value="/greeting/hello", method=RequestMethod.GET)
    // public String hello(){
    //     return "Hello world! What route did you use to access me?";
    // }
    // @RequestMapping("/greeting/goodbye")
    // public String world(){
    //     return "Goodbye world!";
    // }
}
