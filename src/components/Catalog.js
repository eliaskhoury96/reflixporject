
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

function Catalog({ movies, setMovies }) {
  const [budget, setBudget] = useState(10);
  const [searchInput, setSearchInput] = useState('');
  const [rentedMovies, setRentedMovies] = useState([]); 

  const handleRent = (movieId, isRented) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);

    if (selectedMovie) {
      const movieCost = isRented ? -3 : 3;

      if (budget + movieCost >= 0) {
        selectedMovie.isRented = isRented;
        setBudget((prevBudget) => prevBudget + movieCost);

        const updatedMovies = [...movies];
        const movieIndex = updatedMovies.findIndex((movie) => movie.id === movieId);
        if (movieIndex !== -1) {
          updatedMovies[movieIndex] = selectedMovie;
          setMovies(updatedMovies);
        }

        if (isRented) {
          setRentedMovies((prevRentedMovies) => [...prevRentedMovies, selectedMovie]);
        } else {
          setRentedMovies((prevRentedMovies) =>
            prevRentedMovies.filter((movie) => movie.id !== movieId)
          );
        }
      } else {
        alert('Not enough budget to perform this action.');
      }
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <h1>Movies Catalog</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <p>Budget remaining: {budget} ₪</p>
      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onRent={() => handleRent(movie.id,true)}
            onReturn={() => handleRent(movie.id, false)}
          />
        ))}
      </div>

  
      <div>
        <h2>Rented Movies</h2>
        {rentedMovies.map((movie) => (
           <Movie
           key={movie.id}
           movie={movie}
           onRent={() => handleRent(movie.id,true)}
           onReturn={() => handleRent(movie.id, false)}
         />
        ))}
      </div>
    </div>
  );
}

export default Catalog;







