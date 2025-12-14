let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess!");

while (guess !== targetNum) {
  if (guess > targetNum) {
    guess = parseInt(prompt("The number is too high!"));
  } else {
    guess = parseInt(prompt("The number is too low!"));
  }
}

alert("Your guess is right!");
