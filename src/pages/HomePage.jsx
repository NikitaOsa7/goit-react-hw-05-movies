import { useEffect, useState } from "react";
import api from "services/api";
import MovieList from "components/MoviesList/MoviesList";


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        api.getTrendingMovies().then(data => {
            data.results.map(({ id, title }) =>
                setMovies(m => [...m, { id, title }])
            );
        })
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            {movies.length !== 0 && <MovieList movies={movies}/>}
        </main>
    );
}