export function AppReducer(state, action) {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'ADD_MOVIE_TO_FAVORITES':
      const addedFavorites = [
        ...state.favorites,
        state.movies.find((movie) => movie.id === action.payload),
      ];
      localStorage.setItem('favorites', JSON.stringify(addedFavorites));
      return {
        ...state,
        favorites: addedFavorites,
      };
    case 'REMOVE_MOVIE_FROM_FAVORITES':
      const removedFavorites = state.favorites.filter((movie) => movie.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(removedFavorites));
      return {
        ...state,
        favorites: removedFavorites,
      };
    default:
      return state;
  }
}
