import {
  MovieInitialization,
  MovieStatusTypes,
  MovieType,
} from '../architecture/Movie';

export class Movie {
  id: string;
  name: string;
  type: MovieType;
  genres: string[];
  status: MovieStatusTypes;
  runtime: number;
  summary: string;
  rating: number;
  constructor(init: MovieInitialization) {
    this.id = init.id;
    this.name = init.name;
    this.type = init.type;
    this.genres = init.genres;
    this.status = init.status;
    this.runtime = init.runtime;
    this.summary = init.summary;
    this.rating = init.rating;
  }
}
