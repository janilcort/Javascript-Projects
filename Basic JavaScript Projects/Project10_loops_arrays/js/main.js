function count_to_ten() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Count_to_ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Piano", "Drums", "Flute", "Violin"];
var Content ="";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}


function displaySingleColor() {
    var colors = ["Red", "Green", "Blue", "Yellow"];
    document.getElementById("Single_Color").innerHTML = colors[2]; // Displays "Blue"
}

function car() {
    let car = {
        make: "infiniti",
        model: "QX80",
        year: "2023",
        color: "black",
    };
    document.getElementById("car").innerHTML = 
    "The car is a " + car.year + " " + car.make + " " + car.model + 
    " in " + car.color + "."; 
 }
