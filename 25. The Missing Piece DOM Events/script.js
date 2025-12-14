// Onclick
const secondBtn = document.querySelector("#btn2");
const thirdBtn = document.querySelector("#btn3");

secondBtn.onclick = () => {
  console.log("Second Button clicked!");
};

// addEventListener
thirdBtn.addEventListener("click", () => {
  console.log("Third Button clicked!");
});

// Random Color Exercise
const backgroundColor = document.querySelector("#bg-btn");

backgroundColor.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = randomColor;
});

// preventDefault
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page reload

  console.log("Form submitted!");
  console.log("Number:", event.target.username.value);
  event.target.username.value = "";
});

// input event
const inputText = document.querySelector("input[type='text']");
const h1 = document.querySelector("#input-headline");

inputText.addEventListener("input", (event) => {
  h1.innerText = event.target.value;
});
