function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
var Jason = new Vehicle("Toyota", "Rav4", 2009, "Gray");
function newFunction(){
    document.getElementById("New_and_This").innerHTML = 
    "Jason drives a " + Jason.Vehicle_Color + "-colored " + Jason.Vehicle_Model + 
    " manufactured in " + Jason.Vehicle_Year;
}