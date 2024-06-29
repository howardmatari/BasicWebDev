public with sharing class Vehicle {
    // Class is a blueprint for an object
    //state -variables methods-behaviors
    //Vehicle state make model
    public String make{get;set;}
    public String model{get;private set;}
    public static String message = 'Hello World';
    public Vehicle(String make, String model) {
        this.make = make;
        this.model = model;
  //static member could be a variable or method
  //static keyword allows access to class member without instantiating object of the class-get it directly
  //above applies to methods as well

    }
    public static void printMessage (){
        system.debug('Hello Mars');
    }
}





public String make;
public String model;
public Car(String make, String model){
    this.make = make;
    this.model = model;
}