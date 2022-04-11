package com.example.daickichiroutes.daikichiroutes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DaikichiroutesApplication {

		// @RequestMapping("/")
		// public String index(){
		// 	return "Welcome!";
		// }
		
		// @RequestMapping("/daikichi")
		// public String daikichi(){
		// 	return "Welcome!";
		// }
	
		// @RequestMapping("/daikichi/today")
		// public String today(){
		// 	return "Today you will find luck in all of your endeavors!";
		// }
	
		// @RequestMapping(value="/daikichi/tomorrow", method=RequestMethod.GET)
		// public String tomorrow(){
		// 	return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!'";
		// }
		
	public static void main(String[] args) {
		SpringApplication.run(DaikichiroutesApplication.class, args);
	}

}
