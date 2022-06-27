import { useState, useRef } from 'react';
import { useEffect } from 'react';
import s from './MoviesPage.module.css'
import { Link, useParams, useLocation } from 'react-router-dom';
import AdditionalInfo from 'components/AffitionalInfo/AdditionalInfo';
import api from 'services/api';


export default function MovieDetailsPage() {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();

    const locationRef = useRef(useLocation().state);


    useEffect(() => {
        try {
            const response = api.fetchMoviesById(movieId);
            response.then(data => {
                const {
                    title,
                    overview,
                    poster_path,
                    vote_average,
                    genres,
                    release_date,
                } = data.data;
                setMovieDetails({
                    title,
                    poster_path,
                    overview,
                    genres,
                    release_date,
                    vote_average,
                });
            });
        } catch (error) { }
    }, [movieId]);

    if (movieDetails) {
        const { title, genres, overview, release_date, poster_path, vote_average } = movieDetails;

        return (
            <>
                {locationRef.current && (
                    <Link
                        className={s.link}
                        to={locationRef.current.location}
                        state={locationRef.current.search}
                    >
                        Go back
                    </Link>
                )}
                <div className={s.info}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        className={s.img}
                        alt={title}
                    />
                    <div className={s.text}>
                        <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
                        <p>{`User score: ${vote_average * 10}%`}</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{genres.map(({ name }) => `${name} `)}</p>
                    </div>
                </div>
                <p>Additional information</p>
                <AdditionalInfo />
            </>
        );
    }
}