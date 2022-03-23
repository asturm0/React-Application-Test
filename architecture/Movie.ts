import { Movie } from '../models/Movie';

export type MovieStatusTypes =
  | 'Running'
  | 'In Development'
  | 'To Be Determined'
  | 'Ended';

export enum MovieType {
  Movie = 'Movie',
  Series = 'Series',
}

export interface MovieInitialization {
  id: string;
  name: string;
  type: MovieType;
  genres: string[];
  status: MovieStatusTypes;
  runtime: number;
  summary: string;
  rating: number;
}

export interface MovieOverview
  extends Pick<MovieInitialization, 'id' | 'name' | 'rating'> {}

export type GroupedByType = {
  [type in MovieType]: Movie[];
};
