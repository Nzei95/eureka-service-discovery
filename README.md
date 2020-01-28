# eureka-service-discovery
Service registration and discovery using Eureka (Service Discovery Server and Client) and NodeJS.

---

This project shows a basic implementation of the Eureka Service Discovery Server and service registration, having a Java client service and a NodeJS client. 

# Project Structure 

* **eurekaNode** : NodeJS Client
* **eurekaTutorial** : Eureka Discovery Server
* **serviceRegistryTutorial** : Java Client

clone the project

navigate to the **eurekaTutorial** folder, run the discovery server application 
    
    mvn spring-boot:run
    
eureka server runs on port 8761 

navigate to the **serviceRegistryTutorial** folder, run the java client application
  
    mvn spring-boot:run
   
navigate to the **eurekaNode** folder, run the NodeJS client application
  
    nodemon app.js
    
Open [http://localhost:8761/](http://localhost:8761/) on your local machine to very if the Java Client (**serviceRegistryTutorial**) and the NodeJS Client (**eurekaNode**)
have been register on your Eureka Discovery Server (**eurekaTutorial**).
