import { useState, useEffect } from 'react';
import { MovieCard } from "./MovieCard";
import { Header } from './Header';

import { api } from '../services/api';
import '../styles/content.scss';
import { MovieProps, GenreResponseProps } from '../utils/types';

interface ContentProps {
  selectedGenreId: number;
}

export function Content(props: ContentProps) {
  const { selectedGenreId } = props;

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map(({imdbID, Title, Poster, Runtime, Ratings}) => (
            <MovieCard
              key={imdbID}
              title={Title}
              poster={Poster}
              runtime={Runtime}
              rating={Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}