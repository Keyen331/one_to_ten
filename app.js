var hero = "Superman";
var gender = "male";
var age = 23;
var weapon = "hammer"
var pronoun;
var xp;

if (gender === "male") {
  pronoun = "his";
} else if (gender === "female") {
  pronoun = "her";
} else{
  pronoun = "their";
}

// if age is less than or equal to 18 -> set xp "just beginning"
// if age is greater than or equal 21 && less than or equal to 40
  // -> set xp = "has seen a few battles"
// else set xp = "has live through epic battles"

if (age <= 18) {
  xp = "just beginning";
}else if (age >= 19 && <= 40) {
  xp = "has seen a few battles";
}else {
  xp = "has lived through many epic battles";
}

// 1 fish 2 fish
var count = undefined;
var animal = "Scary Shark"
function animalHouse()