
import React from 'react';
import { Link } from 'react-router-dom';
function Movie({ movie, onRent, onReturn }) {
  return (
    <div className="movie">
      <img src={movie.img} alt={movie.title} />
      <div className="movie-info">
      <Link key={movie.id} to={`/movies/${movie.id}`} state={{ movie }}>
        <h3>{movie.title}</h3>
       </Link>
      </div>
      
      <div className="movie-actions">
        {movie.isRented ? (
         <button onClick={() => onReturn()}>-</button> 
        ) : (
         <button onClick={() => onRent()}>+</button> 
        )}
     
      </div>
    </div>
  );
}

export default Movie;




