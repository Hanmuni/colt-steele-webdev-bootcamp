// getElementById
const toc = document.getElementById("toc");

// getElementsByTagName & className
const allLinks = document.getElementsByTagName("a");

for (let link of allLinks) {
  link.style.textDecoration = "underline wavy";
}

const allSquare = document.getElementsByClassName("square");

for (let square of allSquare) {
  square.style.border = "8px solid blue";
}

// querySelector
const banner = document.querySelector("#banner");

banner.style.width = "500px";

// innerHTML
const firstParagraph = document.querySelector("p");

firstParagraph.innerHTML = `
  The <b>Silkie</b> is a <em>unique</em> chicken breed.
  <a href="https://en.wikipedia.org/wiki/Silkie">Learn more</a>
`;

// innerText
const heading = document.querySelector("h1");
console.log(heading.innerText);
heading.innerText = "Silkie Chickys";

// textContent
console.log(toc.textContent);
toc.textContent = "Table of contents removed";

// attributes
const squareImagesAttributes = document.querySelectorAll("img.square");

squareImagesAttributes.forEach((img) => {
  img.setAttribute("class", "square rounded");
});
