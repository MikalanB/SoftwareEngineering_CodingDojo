package com.example.hoppersreceipt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController
public class HoppersreceiptApplication {

	public static void main(String[] args) {
		SpringApplication.run(HoppersreceiptApplication.class, args);
	}

}
