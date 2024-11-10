import React from 'react';

const MovieCard = ({ movie: { Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">
      {/* Display movie release year */}
      <div>
        <p>{Year}</p>
      </div>

      {/* Display movie poster or placeholder if unavailable */}
      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      {/* Display movie type and title */}
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
