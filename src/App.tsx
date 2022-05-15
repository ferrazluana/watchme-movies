import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/main.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleSelectGenreId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div className="main-container">
      <SideBar 
        selectedGenreId={selectedGenreId}
        onSelectGenreId={handleSelectGenreId}
      />

      <Content
        selectedGenreId={selectedGenreId}
      />
    </div>
  )
}