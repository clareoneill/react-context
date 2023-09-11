import Typography from '@mui/material/Typography';
import React from 'react';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import Movie from '../../components/Movie';
import ResponsiveList from '../../components/ResponsiveList';
import './MovieList.css';

export default function MovieList({ movies }) {
  if (movies === null) {
    return <LoadingIndicator />;
  } else if (movies.length === 0) {
    return (
      <Typography className="no-results-message" component="p" variant="h6">
        No movies were found.
      </Typography>
    );
  } else {
    return (
      <ResponsiveList>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            posterUrl={movie.posterUrl}
          />
        ))}
      </ResponsiveList>
    );
  }
}
