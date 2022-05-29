import { React, useEffect, useState } from "react";

import ReactDOM from "react-dom";
import "./App.css";
import Icon from "./search.png";

import Movie from "./Movie";

const API_URL = "http://www.omdbapi.com/?apikey=188f3ee";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('')

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Ware</h1>
      <div className="search">
        <input placeholder="Serach Movie"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={Icon} onClick={() => searchMovie(searchTerm)} alt="Search" />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((mov) => (
            <Movie movie={mov} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Searches Available</h2>
        </div>
      )}
    </div>
  );
}

export default App;
