// Default params

function greet(name = "friend", mood = "great") {
  console.log(`Hey ${name}, hope you're having a ${mood} day!`);
}

console.log(greet());

console.log(greet("Sam"));

console.log(greet("Marty", "decent"));

// Spread in function calls
const coords = [10, 20, 30];

function printCoordinates(x, y, z) {
  console.log("x =", x);
  console.log("y =", y);
  console.log("z =", z);
}

printCoordinates(coords); // without spread

printCoordinates(...coords); // with spread

// Spread in array literals
const cats = ["Maine Coon", "Siamese", "British Shorthair"];
const dogs = ["Golden Retriever", "German Shepherd", "Border Collie"];

const breeds = [...cats, ...dogs];
console.log(breeds);

// Spread in objects
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine };

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

// Rest Params
function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

// Destructuring Arrays
const finalResult = ["Bayern Munich", "Paris Saint-Germain", "1–0"];

const [winner, runnerUp, score] = finalResult;
console.log(winner);
console.log(runnerUp);
console.log(score);

// Destructuring Objects
const playerStats = {
  player: "Jamal Musiala",
  club: "Bayern Munich",
  position: "Attacking Midfielder",
};

const { player, club, position } = playerStats;
console.log(player);
console.log(club);
console.log(position);

// Destructuring Params
function logPerformance({ player, club, goals = 0, assists = 0 }) {
  console.log(
    `${player} from ${club} contributed ${goals} goals and ${assists} assists.`
  );
}
const musialaMatch = {
  player: "Jamal Musiala",
  club: "Bayern Munich",
  goals: 1,
  assists: 3,
};

logPerformance(musialaMatch);
