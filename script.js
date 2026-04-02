const search = document.querySelector("#searching");

search.addEventListener("change", (e) => {
  let searchResult = "";
  // console.log(searchResult)
  searchResult = e.target.value;
  fetchApi(searchResult)
});


async function fetchApi(searchResult) {
  try {
    const data = await fetch(`https://itunes.apple.com/search?term=${searchResult}&entity=song&limit=12`);
    const result = await data.json();
    displaySongs(result.results);
    console.log(result.results)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displaySongs(songs) {
  let cards = document.querySelector("#songs");
  if (!cards) return;

  cards.innerHTML = songs.map((x) => 
    `
      <div class="song">
        <img src="${x.artworkUrl100}" alt="Song Image">
        <h3>${x.trackName}</h3>
        <p>${x.artistName}</p>
      </div>
    `
  ).join("")
}



fetchApi();