function showMessage() {
   var sentence = "Showing a message"; //making variable
   sentence += " in a function";//using the += operator to add to the variable
   document.getElementById("showMessage").innerHTML = sentence;//using.getElementById to get the element with the id of showMessage and setting its innerHTML to the variable sentence
}