import { useState, useEffect } from 'react';
import api from "services/api";
import MovieList from "components/MoviesList/MoviesList";


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    
     useEffect(() => {
        api.getTrendingMovies().then(data => setMovies(data.results))
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            {movies.length !== 0 && <MovieList movies={movies}/>}
        </main>
    );
}