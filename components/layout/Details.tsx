import React from 'react';
import { getMovieById } from '../../utilities/utilities';
import MovieCard from '../Movie/MovieCard/MovieCard';

const Details: React.FC = () => {
  // Get the movie ID from the URL params and use your getMovieById() function from utilities.ts to grab the movie
  const movie = getMovieById('invalid-id');

  return (
    <div id="details-container">
      {/* A Back-Button would be quite useful here */}
      {movie ? <MovieCard movie={movie} /> : <h2>Movie Not Found</h2>}
    </div>
  );
};

export default Details;
