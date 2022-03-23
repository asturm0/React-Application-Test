import React, { Fragment } from 'react';
import { movies } from '../../models/movies';
import { sortByRatingDescending } from '../../utilities/utilities';

// Implement the sortByRatingDescending() function in utilities.ts
// You will use the returned value down below
const sortedMovies = sortByRatingDescending(movies);

const Dashboard: React.FC = () => {
  // #1
  // Render a list of MovieListItems (components/Movie/MovieList/MovieListItem)
  // for each movie of the << sortedMovies >> array

  // For these little cards you will only need a slim version of a movie: the MovieOverview.
  // To fish out only the necessary attributes of a movie you have to implement
  // the getMovieOverviews() function in utilities.ts

  // #2
  // Integrate the input element to be able to search for movies whose names include the provided query
  return (
    <Fragment>
      <h2>Movies & Series</h2>
      <input id="filter-input" placeholder="Enter query..." />
      <div id="movie-list-container">
        <pre
          style={{
            maxWidth: '450px',
            overflow: 'auto',
          }}
        >
          {JSON.stringify(sortedMovies, undefined, 2)}
        </pre>
      </div>
    </Fragment>
  );
};

export default Dashboard;
