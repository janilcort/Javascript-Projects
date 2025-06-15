var myVariable = 100;
document.write("The type of myVariable is: " + typeof myVariable);

document.write("15" + 5); 

function myfunction() {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test").innerHTML = isNaN("This is a string");
    document.getElementById("Test").innerHTML = isNaN("007");
}


    document.write(3E305); // Infinity
document.write(-3E305); // -Infinity

document.write(5>10) //boolean 

console.log(5 < 10); // true

console.log(5 > 10); // false

document.write(10 == 10); // true
document.write(10 == 5); // false

X = 5;
Y = 5;
document.write(X === Y); // true
document.write(5 === "5"); // false, because the types are different
document.write(5 === 5); // true, both are numbers
document.write(5 === 10); // false, because the values are different

document.write(6 > 3 && 10 > 5); // true, both conditions are true
document.write(6 > 3 && 10 < 5); // false, one condition is false
document.write(6 < 3 || 10 > 5); // true, one condition is true
document.write(6 < 3 || 10 < 5); // false, both conditions are false

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10); // true, because 5 is not greater than 10
    document.getElementById("Not").innerHTML = !(5 < 10); // false, because 5 is less than 10
}
