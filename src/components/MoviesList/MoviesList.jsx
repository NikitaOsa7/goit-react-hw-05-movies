import MovieListItem from "./MoviesListItem/MoviesListItem";
import PropTypes from 'prop-types';

export default function MovieList({ movies }) {
    return (
        <ul>
            {movies.map(({ id, title }) => (
                <MovieListItem key={id} title={title} id={id} />
            ))}
        </ul>
    );
};


MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
};