// ForEach
const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

movies.forEach((movie) => {
  console.log(`${movie.title} - ${movie.score}/100`);
});

// Map
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers.map((num) => {
  return num * 2;
});

console.log(doubles);

// Arrow function
const add = (x, y) => {
  return x + y;
};

// Arrow functions with array methods

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

console.log(newMovies);

// setTimeout & setInterval
console.log("HELLO!!!...");
setTimeout(() => {
  console.log("...are you still there?");
}, 3000);

console.log("GOODBYE!!");

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

clearInterval(id);

// Filter
console.log(
  numbers.filter((number) => {
    return number < 10;
  })
);

// Some & Every
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 48];

console.log(exams.some((score) => score < 75));
console.log(exams.every((score) => score < 75));

// Reduce
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = prices.reduce((total, price) => total + price);
console.log(total);
