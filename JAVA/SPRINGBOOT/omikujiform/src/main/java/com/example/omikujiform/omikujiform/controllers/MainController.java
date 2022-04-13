package com.example.omikujiform.omikujiform.controllers;

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }
    @RequestMapping("/omikuji")
    public String omikuji(HttpSession session) {
        session.setAttribute("omikuji", 1);
        return "index";
    }
    @PostMapping("/omikuji/send")
    public String showResult(
        @RequestParam(value="inputNumber") Integer inputNumber,
        @RequestParam(value="city") String city,
        @RequestParam(value="person") String person,
        @RequestParam(value="hobby") String hobby,
        @RequestParam(value="living") String living,
        @RequestParam(value="nice") String nice, 
        HttpSession session, Model model) {

        session.setAttribute("inputNumber", inputNumber);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("hobby", hobby);
        session.setAttribute("living", living);
        session.setAttribute("nice", nice);

        return "redirect:/omikuji/show";
    }
    
    @RequestMapping(value="/omikuji/show", method=RequestMethod.GET)
    public String showResult( Model model, HttpSession session) {
        if (session.getAttribute("city") == null) {
            return "redirect:/omikuji";
        }
        model.addAttribute("inputNumber", session.getAttribute("inputNumber"));
        model.addAttribute("city", session.getAttribute("city"));
        model.addAttribute("person", session.getAttribute("person"));
        model.addAttribute("hobby", session.getAttribute("hobby"));
        model.addAttribute("living", session.getAttribute("living"));
        model.addAttribute("nice", session.getAttribute("nice"));

        return "showResult";
    }
}
