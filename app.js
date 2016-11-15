//Create all the things
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

console.log(hero + 'who is our lovable hero, who' + xp + 'with his trusty' + weapon)

// 1 fish 2 fish
var count;
var animal = "Shark"
function animalHouse(p1, p2) {
  return count = p1 + p2;
}

//1 Fish 2 Many Fish (cont.)
if (count > 2) {
  console.log('We have to many' + animal + 's')
}else {
  console.log('Welcome to the club');
}

//Assemble the Avengers
var hero = "Hulk";
function avengersAssemble(Avengers = "Thor") {
  if (Avengers = "Thor") {
    console.log(Avengers + "magnet");
  }else if (Avengers = "ironman") {
    console.log("Sorry, you are not needed for this mission");
  }else if (Avengers = "captain america") {
    console.log("Sorry, you are not needed for this mission");
  }else if (Avengers = "black widow") {
    console.log("Sorry, you are not needed for this mission");
  }
}
avengersAssemble(hero + 'smash')

//Lights out
var lights = True;
if (lights = True) {
  console.log("And then there was light");
}else (Lights = false) {
  console.log("Lights out");
}

//Vroom Vroom
var carType = "Toyota";
var color = "black";
var num = 31;
if (carType = "Toyota" && color = "blue") {
  console.log("we have" + carType + color);
}else if (carType = Lamborghini && color = "red") {
  console.log("We have" + carType + color);
}else if (carType = Tesla && color = black) {
  console.log("We have" + carType + color);
}else {
  console.log("We don't have any blue Toyotas in stock");
}