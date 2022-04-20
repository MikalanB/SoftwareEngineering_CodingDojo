package com.codingdojo.plantkeeper.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.codingdojo.plantkeeper.models.LoginUser;
import com.codingdojo.plantkeeper.models.Plant;
import com.codingdojo.plantkeeper.models.User;
import com.codingdojo.plantkeeper.services.PlantService;
import com.codingdojo.plantkeeper.services.UserService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    private final UserService userService;
    private final PlantService plantService;

    public MainController(UserService userService, PlantService plantService) {
        super();
        this.userService = userService;
        this.plantService = plantService;
    }
    
    @GetMapping("/")
    public String index(Model model) {

        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index";
    }
z
    // create new plant get routwe
    @GetMapping("/new")
    public String newOne(@ModelAttribute("newPlant") Plant newPlant, HttpSession session, Model model) {
        if(session.getAttribute("user_id") != null) {
            model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
            return "new";
        } else {
            return "redirect:/";
        }
    }


    // create a new plant
    @PostMapping("/newPlant")
    public String newPlant(@Valid @ModelAttribute("newPlant") Plant newPlant, BindingResult result, HttpSession session) {
        if (result.hasErrors()) {
            return "newPlant";
        } else {
            plantService.create(newPlant, (Long) session.getAttribute("user_id"));
            return "redirect:/dashboard";
        }
    }

    // post route to create a plant

    // view one plant
    @GetMapping("/onePlant/{id}")
    public String onePlant(@PathVariable("id") Long id, Model model, HttpSession session) {

        model.addAttribute("user", userService.oneUser((Long) session.getAttribute("user_id")));
        model.addAttribute("plant", plantService.findOne(id));
        return "onePlant";
    }

    //delete a plant
    @GetMapping("/delete")
    public String delete() {
        return "delete";
    }

}
