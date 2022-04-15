package SPRINGBOOT.fullcrud.src.main.java.com.codingdojo.fullcrud.controllers;

import org.springframework.stereotype.Controller;

@Controller
public class HomeController {
    
    //Route to show all candies
    // Needs model, don't forget
    @RequestMapping(value = "/dashbord")
    public String dashbord() {
        return "dashbord";
    }

    //Route to make candy
    @RequestMapping(value = "/newCandy")
    public String newCandy() {
        return "newCandy";
    }

    //post to process makingof candy


    //Route to show one candies
    @RequestMapping(value = "/oneCandy") {
        return "oneCandy";
    }

    //Route to edit one candies
    @RequestMapping(value = "/editCandy") {
        return "editCandy";
    }

    //Route to delete candy
    @RequestMapping(value = "/deleteCandy") {
        return "deleteCandy";
    }

}
