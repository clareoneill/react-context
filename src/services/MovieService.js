const movies = [
  {
    id: 0,
    title: "Harry Potter and the Sorcerer's Stone",
    releaseDate: 'November 16, 2001',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg',
  },
  {
    id: 1,
    title: 'The Matrix',
    releaseDate: 'March 31, 1999',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
  },
  {
    id: 2,
    title: 'How to Lose a Guy in 10 Days',
    releaseDate: 'February 7, 2003',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_.jpg',
  },
  {
    id: 4,
    title: 'The Princess Bride',
    releaseDate: 'October 9, 1987',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SY1000_CR0,0,676,1000_AL_.jpg',
  },
  {
    id: 5,
    title: "The Hitchhiker's Guide to the Galaxy",
    releaseDate: 'April 29, 2005',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BZmU5MGU4MjctNjA2OC00N2FhLWFhNWQtMzQyMGI2ZmQ0Y2YyL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
  },
];

export function getAllMovies() {
  // Normally this data would come from an API; we have simplified this logic with mock data for this exercise.
  return new Promise((resolve) => {
    setTimeout(() => {
      // Sort the movies alphabetically
      movies.sort((a, b) => {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1;
        } else if (a.title.toUpperCase() < b.title.toUpperCase()) {
          return -1;
        }
        return 0;
      });

      resolve(movies);
    }, 1000);
  });
}
