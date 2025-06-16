var x = 20; // Global variable
function Add_numbers_1() {
    var x = 10; // Local variable
    document.write(10 + x + "<br>"); // This will output 20
}

function Add_numbers_2() {
    document.write(x + 100 + "<br>"); // This will output 120
    console.log(x); // This will log 20 to the console
}

Add_numbers_1(); // Call the first function
Add_numbers_2(); // Call the second function

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Good day!";
}
}

function get_Reply() {
    var user_input = document.getElementById("User_Input").value;
    if (user_input % 2 == 0) {
       reply = "You entered an even number.";
       document.getElementById("feedback").innerHTML = reply;
}
}

function Time_function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        reply = "It is afternoon.";
    } else {
        reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = reply;
    console.log(reply); // Log the reply to the console
}