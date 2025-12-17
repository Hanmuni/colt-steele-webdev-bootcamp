const form = document.querySelector("#searchForm");
const query = document.querySelector("#query");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const queryValue = document.querySelector("#query").value;
  const config = { params: { q: queryValue } };

  const response = await axios.get(
    `http://api.tvmaze.com/search/shows`,
    config
  );

  document.querySelector("#query").value = "";
  displayShow(response.data);
});

function displayShow(shows) {
  for (let display of shows) {
    const img = document.createElement("img");
    img.src = display.show.image.medium;
    document.body.append(img);
  }
}
