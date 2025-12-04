// "IF" checks a condition and runs its code only when the condition is true.
// Check if a number is positive
let number = 10;

if (number > 0) {
  console.log("The number is positive.");
}

// "ELSE IF" lets you check another condition when the previous "if" was false.
// Check multiple conditions about temperature
let temperature = 25;

if (temperature > 30) {
  console.log("It's very hot outside.");
} else if (temperature > 20) {
  console.log("The weather is nice and warm.");
} else if (temperature > 10) {
  console.log("It's a bit chilly.");
}

// "ELSE" runs only when none of the above conditions are true. IF
// Fallback condition when nothing above is true
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// A "SWITCH" statement checks one value and runs the matching case.
// Useful when comparing the same value against many possible options.

let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Tuesday":
    console.log("Second day of the week.");
    break;
  case "Wednesday":
    console.log("Midweek already!");
    break;
  case "Thursday":
    console.log("Almost the weekend.");
    break;
  case "Friday":
    console.log("Last working day for many.");
    break;
  default:
    console.log("It's the weekend!");
}
