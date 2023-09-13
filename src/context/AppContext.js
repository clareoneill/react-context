import { createContext, useContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, {
    movies: null,
    favorites: localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [],
  });

  const loadMovies = (movies) => {
    dispatch({ type: 'LOAD_MOVIES', payload: movies });
  };

  const addMovieToFavorites = (id) => {
    dispatch({ type: 'ADD_MOVIE_TO_FAVORITES', payload: id });
  };

  const removeMovieFromFavorites = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_FAVORITES', payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        loadMovies,
        addMovieToFavorites,
        removeMovieFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
