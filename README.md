# Top 10 Songs Finder (iTunes API + HOF)

## Project Overview

This project allows users to search for a singer/artist and displays their **Top 10 songs** using the **iTunes Search API**. It demonstrates how to fetch real-time music data from an external API and process it efficiently using **Higher-Order Functions (HOFs)** in JavaScript.

---

## Features

* Search for any artist
* Fetch top songs dynamically using iTunes API
* Display top 10 tracks in a clean format
* Efficient data processing using Higher-Order Functions

---

## Tech Stack

* JavaScript (ES6+)
* Fetch API / Axios
* HTML & CSS (for UI)
* iTunes Search API

---

## iTunes API Usage

This project uses the **iTunes Search API** to fetch songs based on the artist's name.

### API Endpoint

```
https://itunes.apple.com/search?term={artistName}&entity=song&limit=10
```

### How It Works

1. User enters an artist name
2. A request is sent to the iTunes API
3. The API returns a JSON response containing song data
4. The data is parsed and displayed on the UI

### Example Code

```javascript
const fetchSongs = async (artist) => {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${artist}&entity=song&limit=10`
  );
  const data = await response.json();
  return data.results;
};
```

---

## Use of Higher-Order Functions (HOF)

Higher-Order Functions are functions that take other functions as arguments or return functions. In this project, they are used to process API data efficiently.

### Common HOFs Used

#### 1. `map()`

Used to transform song data into UI elements.

```javascript
songs.map(song => {
  return `<li>${song.trackName} - ${song.artistName}</li>`;
});
```

#### 2. `filter()`

Used to filter songs if needed (e.g., explicit content, duplicates).

```javascript
songs.filter(song => song.trackPrice > 0);
```

#### 3. `slice()`

Ensures only top 10 songs are displayed.

```javascript
songs.slice(0, 10);
```

---

## Data Flow

1. Input from user
2. API call to iTunes
3. Receive JSON data
4. Apply HOFs (`map`, `filter`, `slice`)
5. Render results on UI

---

## Sample Output

```
1. Song Name - Artist
2. Song Name - Artist
...
10. Song Name - Artist
```

---

## Project Structure

```
/project
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md
```

---

## Learning Outcomes

* Understanding API integration
* Working with asynchronous JavaScript (async/await)
* Practical use of Higher-Order Functions
* Data transformation and rendering

---

## Future Improvements

* Add audio preview playback
* Improve UI/UX design
* Add search history
* Pagination for more results

---

## Conclusion

This project is a simple yet powerful demonstration of combining **API integration** with **functional programming concepts** like HOFs to build dynamic web applications.

--