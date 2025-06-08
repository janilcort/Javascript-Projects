 function addition() {
      var add = 10+15;
      document.getElementById("add").innerHTML = "10 + 15 = " + add;
    }

function subtraction() {
      var sub = 20-5;
      document.getElementById("sub").innerHTML = "20 - 5 = " + sub;
    }

function multiplication() {
      var mul = 4*5;
      document.getElementById("mul").innerHTML = "4 * 5 = " + mul;
    }

function division() {
      var div = 20/4;
      document.getElementById("div").innerHTML = "20 / 4 = " + divide;
    }

function modulus() {
      var mod = 10%3;
      document.getElementById("mod").innerHTML = "10 % 3 = " + modulus;
    }

function increment() {  
      var inc = 5;
      value++;
      document.getElementById("incrementtext").innerHTML;
    }

function decrement() {
      var dec = 10;
      vslue--;
      document.getElementById("decrementtext").innerHTML;
    }

function random() {  
      var rand = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
      document.getElementById("ran").innerHTML = Math.random()*10;
    }
