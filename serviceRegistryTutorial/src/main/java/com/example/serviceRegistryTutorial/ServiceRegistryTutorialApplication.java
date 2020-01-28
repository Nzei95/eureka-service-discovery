package com.example.serviceRegistryTutorial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableEurekaClient
public class ServiceRegistryTutorialApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceRegistryTutorialApplication.class, args);
	}

	@RequestMapping(value = "/")
	public String home(){
		return "Eureka Service Registry";
	}

}
