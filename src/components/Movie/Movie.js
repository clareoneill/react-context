import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import './Movie.css';

export default function Movie({ id, title, releaseDate, posterUrl }) {
  const { favorites, addMovieToFavorites, removeMovieFromFavorites } = useAppContext();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === id));
  }, [id, favorites]);

  const handleClick = () => {
    isFavorite ? removeMovieFromFavorites(id) : addMovieToFavorites(id);
  };

  return (
    <Card className="movie">
      <CardHeader
        className="movie__heading"
        title={title}
        subheader={`Release Date: ${releaseDate}`}
      />
      <CardMedia className="movie__poster" image={posterUrl} alt={`${title} movie poster`} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => handleClick()}>
          <FavoriteIcon color={`${isFavorite ? 'error' : 'action'}`} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
