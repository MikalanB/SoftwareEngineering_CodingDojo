package com.codingdojo.bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.codingdojo.bookclub.models.LoginUser;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.UserService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    private final UserService userService;

    public MainController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index";
    }


    // Route to Register User
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
        
        if (result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index";
        } else {
            userService.register(newUser, result);
            session.setAttribute("user_id", newUser.getId());
            return "redirect:/dashboard";
        }
    }


    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index";
        } else {
            User user = userService.login(newLogin, result);
            session.setAttribute("user_id", user.getId());
            return "redirect:/dashboard";
        }
    }

    // logout user

    //create dashboard
    @GetMapping("/dashboard")
    public String dashboard(HttpSession session, Model model) {

        if(session.getAttribute("user_id") != null) {

            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            return "dashboard";
        } else {
            return "redirect:/";
        }
    }

}
