package com.codingdojo.dojosandninjas.controllers;

import javax.validation.Valid;

import com.codingdojo.dojosandninjas.Services.DojoService;
import com.codingdojo.dojosandninjas.Services.NinjaService;
import com.codingdojo.dojosandninjas.models.Dojos;
import com.codingdojo.dojosandninjas.models.Ninjas;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    private final DojoService dojoService;
    private final NinjaService ninjaService;

    public MainController(DojoService dojoService, NinjaService ninjaService) {
        this.dojoService = dojoService;
        this.ninjaService = ninjaService;
    }

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/dojos/new")
    public String newDojo(@ModelAttribute("dojo") Dojos dojo, Model model) {

        model.addAttribute("allDojos", dojoService.allDojos());
        return "newDojo";
    }

    // create a new dojo
    @PostMapping("/processDojo")
    public String processDojo(@Valid @ModelAttribute("dojo") Dojos dojo, BindingResult result) {
        if (result.hasErrors()) {
            return "newDojo";
        } else {
            dojoService.create(dojo);
            return "redirect:/dojos/new";
        }
    }

    // go to new ninjas page
    @GetMapping("/ninjas/new")
    public String newNinja(@ModelAttribute("ninja") Ninjas ninja, @ModelAttribute("dojo") Dojos dojo, Model model) {

        model.addAttribute("allDojos", dojoService.allDojos());

        model.addAttribute("allNinjas", ninjaService.allNinjas());
        return "newNinja";
    }

    // create a new ninja
    @PostMapping("/processNinja")
    public String processNinja(@Valid @ModelAttribute("ninja") Ninjas ninja, BindingResult result) {
        if (result.hasErrors()) {
            return "newNinja";
        } else {
            ninjaService.create(ninja);
            return "redirect:/ninjas/new";
        }
    }

    // see students for a specific dojo
    @GetMapping("/dojos/{id}")
    public String oneDojo(@PathVariable("id") Long id, Model model) {
        model.addAttribute("dojo", dojoService.findDojo(id));
        return "oneDojo";
    }


}
