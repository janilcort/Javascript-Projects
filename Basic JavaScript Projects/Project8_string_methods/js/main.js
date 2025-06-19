function full_sentence() {
    var part1 = "I live ";
    var part2 = "in a small town, ";
    var part3 = "and I love it!";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "Hard work pays off";
    var Section = Sentence.slice(0, 9);
    document.getElementById("Slice").innerHTML = Section;
}

function myFunction() {
  let text = document.getElementById("Uppercase").innerHTML;
  document.getElementById("Uppercase").innerHTML =
  text.toUpperCase();
}

function string_Method() {
    var X = 1188;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.301298737;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}