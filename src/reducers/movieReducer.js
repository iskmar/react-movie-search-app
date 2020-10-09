export const movieReducer = (movies, action) => {
  switch (action.type) {
    case "FILTER_MOVIES":
      if (action.movie) {
        return [...movies, action.movie];
      }
      break;
    case "REMOVE_MOVIES":
      return movies.filter((movie) => movie.id === action.id);
      break;
    default:
      return movies;
  }
};
