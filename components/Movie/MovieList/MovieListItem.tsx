import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MovieOverview } from '../../../architecture/Movie';

// There is nothing that you have to do here
const MovieListItem: React.FC<MovieOverview> = ({ id, name, rating }) => {
  return (
    <div className="movie-list-item">
      <div className="header">
        <h4 className="name">{name}</h4>
        <span className="rating">{rating}</span>
      </div>
      <div className="footer">
        <Link className="footer-details-button" to={`/details/${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default MovieListItem;
