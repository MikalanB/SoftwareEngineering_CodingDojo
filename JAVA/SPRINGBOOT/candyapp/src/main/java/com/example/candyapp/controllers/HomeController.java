package com.example.candyapp.controllers;

import javax.validation.Valid;

import com.example.candyapp.models.Candy;
import com.example.candyapp.models.Owner;
import com.example.candyapp.services.CandyService;
import com.example.candyapp.services.OwnerService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

    //injecting our candy service
    private final CandyService candyService;
    private final OwnerService ownerService;

    public HomeController(CandyService candyService, OwnerService ownerService) {
        super();
        this.candyService = candyService;
        this.ownerService = ownerService;
    }
    
     //Route to show all candies
    // Needs model, don't forget
    @GetMapping(value = "/dashboard")
    public String dashbord(Model model) {

        //send out candies to jsp using model
        model.addAttribute("allCandies", candyService.allCandys());

        return "dashboard";
    }

    //Route to make candy
    @GetMapping(value = "/newCandy")
    public String newCandy(@ModelAttribute("candy") Candy candy, Model model) {

        model.addAttribute("allOwners", ownerService.allOwners());
        return "newCandy";
    }

    @GetMapping(value = "/newOwner")
    public String newOwner(@ModelAttribute("owner") Owner owner ) {
        return "newOwner";
    }

    //post to process makingof candy
    @PostMapping("/processCandy")
    public String processCandy(@Valid @ModelAttribute("candy") Candy candy, BindingResult result, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "newCandy";
        } else {
            candyService.createCandy(candy);
            return "redirect:/dashboard";
        }
    }

    //ppost to process making of owner
    @PostMapping("/processOwner")
    public String processOwner(@Valid @ModelAttribute("owner") Owner owner, BindingResult result, @PathVariable("id") Long id) {
        if (result.hasErrors()) {
            return "newOwner";
        } else {
            ownerService.createOwner(owner);
            return "redirect:/dashboard";
        }
    }

    //Route to show one candies
    @GetMapping(value = "/oneCandy/{id}")
        public String oneCandy(@PathVariable("id") Long id, Model model, @ModelAttribute("candy") Candy candy) {
            model.addAttribute("candy", candyService.findCandy(id));
            return "oneCandy";
        }

    //Route to edit one candy
    @GetMapping(value = "/editCandy/{id}") 
        public String editCandy(@PathVariable("id") Long id, @ModelAttribute("candy") Candy candy, Model model) {

            model.addAttribute("candy", candyService.findCandy(id));

            return "editCandy";
        }

    //Route to process editing of candy
    @PostMapping(value = "/processEditCandy/{id}")
        public String processEditCandy(@PathVariable("id") Long id, @Valid @ModelAttribute("candy") Candy candy, BindingResult result, Model model) {
            if (result.hasErrors()) {
                return "editCandy";
            } else {
                candyService.updateCandy(candy);
                return "redirect:/dashboard";
            }
        }

    //Route to delete candy
    @GetMapping(value = "/deleteCandy/{id}") 
        public String deleteCandy(@PathVariable("id") Long id) {
            candyService.deleteCandy(id);
            return "redirect:/dashboard";
        }

}
