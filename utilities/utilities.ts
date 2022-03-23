import { GroupedByType, MovieOverview } from '../architecture/Movie';
import { Movie } from '../models/Movie';
import { movies } from '../models/movies';

function initGetMovieById(movies: Movie[]): (id: string) => Movie | undefined {
  // Find the movie with the provided id
  return (id: string) => {
    return undefined;
  };
}

export const getMovieById = initGetMovieById(movies);

// Write an algorithm that sorts the movies descending by their rating
// Do NOT mutate the original array
export function sortByRatingDescending(movies: Movie[]): Movie[] {
  return movies;
}

// Return an array of objects which contain only the id, the name and the rating of the movies
export function getMovieOverviews(movies: Movie[]): MovieOverview[] {
  return [{ id: 'invalid-id', name: 'solveMe', rating: 0 }];
}

export function groupByType(movies: Movie[]): GroupedByType | undefined {
  return;
}
