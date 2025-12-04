// Logical AND (&&)
// Both conditions must be true for the whole expression to be true.
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You are allowed to enter because you are 18+ AND have an ID.");
}

// Logical OR (||)
// Only one of the conditions needs to be true.
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can relax today because it's the weekend OR it's a holiday.");
}

// Logical NOT (!)
// Flips true to false, and false to true.
let isSleeping = false;

if (!isSleeping) {
  console.log("You are NOT sleeping.");
}