async function fetchData(){
  const data = await fetch('https://itunes.apple.com/search?term=arijit+singh&entity=song&limit=12')
  const result = await data.json()
  console.log(result)

  console.log(result.results[0].artworkUrl100)
  // result.
}

fetchData()

// function check(){
//   let data = fetchData();
//   console.log(data.results[0]);
// }

// check()