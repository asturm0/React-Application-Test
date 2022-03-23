import React from 'react';
import { Movie } from '../../../models/Movie';

interface CardProps {
  movie: Movie;
}

const MovieCard: React.FC<CardProps> = ({ movie }) => {
  // Make me pretty!
  return (
    <div id="movie-details-card">
      <div id="header">
        <h2>{movie.name}</h2>
        <span>{movie.rating}</span>
      </div>
      <div id="body">
        <p>{movie.summary}</p>
      </div>
      <div id="footer">
        <p>{movie.genres.join(' ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
