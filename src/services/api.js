import axios from 'axios';
import PropTypes from 'prop-types';

axios.defealt.baseURL = 'https://api.themoviedb.org/3';


export const getTrendingMovies = async () => {
    const response = axios.get('/trending/movie/day?api_key=be86064d3c6e1b3236c92193870a2f7c');
    return response.data;
};

function fetchMoviesById(id) {
    const response = axios.get(`/movie/${id}?api_key=be86064d3c6e1b3236c92193870a2f7c`);
    return response;
};

function fetchMovieByQuery(query) {
    const response = axios.get(`/search/movie?api_key=be86064d3c6e1b3236c92193870a2f7c&query=${query}`);
    return response;
};

function fetchCast(id) {
    const response = axios.get(`/movie/${id}/credits?api_key=be86064d3c6e1b3236c92193870a2f7c`);
    return response;
};

function fetchReviews(id) {
    const response = axios.get(`/movie/${id}/reviews?api_key=be86064d3c6e1b3236c92193870a2f7c`);
    return response;
};

const api = {
    getTrendingMovies,
    fetchMoviesById,
    fetchMovieByQuery,
    fetchCast,
    fetchReviews,
};

export default api;

fetchMoviesById.propTypes = {
    id: PropTypes.number.isRequired,
};

fetchMovieByQuery.propTypes = {
    query: PropTypes.string.isRequired
};

fetchCast.propTypes = {
    id: PropTypes.number.isRequired,
};

fetchReviews.propTypes = {
    id: PropTypes.number.isRequired,
};





