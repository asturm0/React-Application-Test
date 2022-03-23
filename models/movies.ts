import { Movie } from './Movie';
import { v4 } from 'uuid';
import { MovieType } from '../architecture/Movie';

export const movies = [
  new Movie({
    id: '123',
    name: 'The Shawshank Redemption',
    type: MovieType.Movie,
    genres: ['Drama'],
    status: 'Ended',
    runtime: 144,
    summary:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
    rating: 9.3,
  }),
  new Movie({
    id: v4(),
    name: 'The Godfather',
    type: MovieType.Movie,
    genres: ['Crime', 'Drama'],
    status: 'Ended',
    runtime: 175,
    summary:
      'The Godfather "Don" Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter\'s wedding. Michael, Vito\'s youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not.',
    rating: 9.2,
  }),
  new Movie({
    id: v4(),
    name: 'Back to the Future',
    type: MovieType.Movie,
    genres: ['Comedy', 'Sci-Fi'],
    status: 'Ended',
    runtime: 116,
    summary:
      "In 1985, Marty McFly is a typical teenager living in Hill Valley, California. At home, Marty's inept father George is bullied by his supervisor, Biff Tannen. His mother Lorraine is an overweight, depressed alcoholic, and his older siblings are professional and social failures. An aspiring musician, Marty's band is rejected for a music contest. He confides in his girlfriend Jennifer Parker about fears of becoming like his parents, despite his ambitions.",
    rating: 8.5,
  }),
  new Movie({
    id: v4(),
    name: 'Rocky',
    type: MovieType.Movie,
    genres: ['Drama', 'Sport'],
    status: 'Ended',
    runtime: 120,
    summary:
      'Rocky Balboa is a struggling boxer trying to make the big time, working as a debt collector for a pittance. When heavyweight champion Apollo Creed visits Philadelphia, his managers want to set up an exhibition match between Creed and a struggling boxer, touting the fight as a chance for a "nobody" to become a "somebody". The match is supposed to be easily won by Creed, but someone forgot to tell Rocky, who sees this as his only shot at the big time.',
    rating: 8.1,
  }),
  new Movie({
    id: v4(),
    name: 'Breaking Bad',
    type: MovieType.Series,
    genres: ['Drama', 'Crime', 'Thriller'],
    status: 'Ended',
    runtime: 49,
    summary:
      'When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose. He lives with his teenage son, who has cerebral palsy, and his wife, in New Mexico. Determined to ensure that his family will have a secure future, Walt embarks on a career of drugs and crime. He proves to be remarkably proficient in this new world as he begins manufacturing and selling methamphetamine with one of his former students.',
    rating: 9.4,
  }),
  new Movie({
    id: v4(),
    name: 'Supernatural',
    type: MovieType.Series,
    genres: ['Action', 'Adventure', 'Horror', 'Mystery', 'Drama'],
    status: 'Ended',
    runtime: 44,
    summary:
      "Supernatural is an American dark fantasy drama television series created by Eric Kripke. It was first broadcast on September 13, 2005, on The WB, and subsequently became part of successor The CW's lineup. Starring Jared Padalecki as Sam Winchester and Jensen Ackles as Dean Winchester, the series follows the two brothers as they hunt demons, ghosts, monsters, and other supernatural beings.",
    rating: 8.6,
  }),
];
