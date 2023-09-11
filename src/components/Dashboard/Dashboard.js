import React from 'react';
import { useAppContext } from '../../context/AppContext';
import MovieList from '../MovieList';
import './Dashboard.css';

export default function Dashboard() {
  const { movies } = useAppContext();

  return <MovieList movies={movies} />;
}
