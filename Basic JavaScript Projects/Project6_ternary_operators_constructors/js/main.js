function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = (Height < 52) ? "You are too short to ride." : "You are tall enough to ride.";
    document.getElementById("Ride").innerHTML = Can_ride + " Enjoy the ride!";
}

function Age_Function() {
    var Age, Can_vote;
    Height = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote." : "You are old enough to vote.";
    document.getElementById("Age").innerHTML = Can_vote + " Vote wisely!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Eric drives a " + Eric.Vehicle_Color + "-colored " + Eric.Vehicle_Model +
    " manufactured in " + Eric.Vehicle_Year + ".";
}

function New_and_this(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Alice

function add_Strings() {
    var start_string = "Hello";
function adding(str) {
    start_string = start_string + " " + str;
}
adding("World");
document.getElementById("Nested_Function").innerHTML = start_string;
}