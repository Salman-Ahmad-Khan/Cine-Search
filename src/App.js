

import React, { useState, useEffect } from "react";
import MovieCard from "./component/MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=93b92437";
const DEFAULT_SEARCH_TERM = "Pirates of the Caribbean";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const query = title.trim() || DEFAULT_SEARCH_TERM; 
    try {
      const response = await fetch(`${API_URL}&s=${query}`);
      const data = await response.json();
      setMovies(data.Search || []); 
    } catch (error) {
      console.error("Failed to fetch movies", error);
      setMovies([]);
    }
  };


  useEffect(() => {
    searchMovies(DEFAULT_SEARCH_TERM);
  }, []);

 
  useEffect(() => {
    if (searchTerm === "") {
      searchMovies(DEFAULT_SEARCH_TERM); 
    }
  }, [searchTerm]);

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <p className="subline">Find Your Next Favorite Movie</p>

      <div className="search">
        <input
          aria-label="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSearch}
          tabIndex={0}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;




