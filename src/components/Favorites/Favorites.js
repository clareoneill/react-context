import React from 'react';
import { useAppContext } from '../../context/AppContext';
import MovieList from '../MovieList';
import './Favorites.css';

export default function Favorites() {
  const { favorites } = useAppContext();

  return <MovieList movies={favorites} />;
}
