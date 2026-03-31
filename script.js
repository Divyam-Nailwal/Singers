async function fetchData(){
  const data = await fetch('https://itunes.apple.com/search?term=arijit+singh&entity=musicArtist&limit=12')
  const result = await data.json()
  console.log(result)
}

fetchData()