package com.example.counter.counter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpSession;

@Controller
public class HomeController {
    
    @RequestMapping("/")
    public String index(HttpSession session, Model model) {
        return "index";
    }

    @RequestMapping("/counter")
    public String counter(HttpSession session, Model model) {
        if (session.getAttribute("counter") == null) {
            session.setAttribute("counter", 0);
        } else {
            session.setAttribute("counter", (int) session.getAttribute("counter") + 1);
            // int currentCount = (int) session.getAttribute("counter");
            // session.setAttribute("counter", currentCount + 1);
        }
        model.addAttribute("counter", session.getAttribute("counter"));
        return "counter";
    }
}
