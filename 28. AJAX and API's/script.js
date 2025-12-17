// XMLHTTP
const request = new XMLHttpRequest();

request.onload = function () {
  console.log("XML LOADED!");
  const data = JSON.parse(this.responseText);
  console.log(data);
};
request.onerror = function () {
  console.log("ERRROR!!!");
  console.log(this);
};

request.open("GET", "https://swapi.tech/api/people/1/");
request.send();

// FETCH

fetch("https://swapi.tech/api/people/1/")
  .then((response) => {
    console.log("FETCH Response:", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR!", error);
  });

// Axios
const getStarWarsCharacters = async () => {
  try {
    const response = await axios.get("https://swapi.tech/api/people/1/");
    console.log("AXIOS Response:", response.data);
  } catch (error) {
    console.log("AXIOS ERROR!", error);
  }
};

getStarWarsCharacters();

// Dad Jokes Generator
const jokes = document.querySelector("#jokes");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", () => {
  getDadJoke();
  console.log("Joke Button clicked!");
});

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    displayJokes(response.data.joke);
    return response.data.joke;
  } catch (error) {
    console.error(error);
    displayJokes("Sorry failed to load dad joke.");
    return "Dad Jokes Error!";
  }
};

const displayJokes = (text) => {
  const liEl = document.createElement("li");
  liEl.innerText = text;
  jokes.append(liEl);
};
