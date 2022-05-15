import { useState, useEffect } from 'react';

import { Button } from "./Button";

import '../styles/sidebar.scss';
import { api } from '../services/api';
import { GenreResponseProps } from '../utils/types';

interface SideBarProps {
  onSelectGenreId: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  const {
    selectedGenreId,
    onSelectGenreId,
  } = props;

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}