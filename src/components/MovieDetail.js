import React from 'react';
import { useParams } from 'react-router-dom';
function MovieDetail({ movies }) {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id.toString() === movieId);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Description: {movie.descrShort}</p>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default MovieDetail;



