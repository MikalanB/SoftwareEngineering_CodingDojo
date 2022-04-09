package com.example.firstspringbootdemo.firstspringbootdemo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication

@RestController
public class FirstspringbootdemoApplication {
	public static void main(String[] args) {
		SpringApplication.run(FirstspringbootdemoApplication.class, args);
	}

	// @RequestMapping("/")
	// public String hello() {
	// 	return "Hello world!";
	// }



}
