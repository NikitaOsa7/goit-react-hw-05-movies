import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import api from 'services/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(data => setMovies(data.results))
  }, [])

  return (
    <main>
      <h1>Trending today</h1>
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </main>
  );
}
