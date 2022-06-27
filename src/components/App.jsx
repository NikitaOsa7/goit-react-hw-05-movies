import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from './Layout'
import Review from "./AffitionalInfo/Reviews/Review";
import Cast from "./AffitionalInfo/Cast/Cast";

const HomePage = lazy(() =>
    import('../pages/HomePage')
);

const MoviesPage = lazy(() =>
    import('../pages/MoviesPage')
);

const MovieDetailsPage = lazy(() =>
    import('../pages/MovieDetailsPage')
);

export const App = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="/goit-react-hw-05-movies/movies"
                        element={<MoviesPage />}
                    />
                    <Route
                        path="/goit-react-hw-05-movies/movies/:movieId"
                        element={<MovieDetailsPage />}
                    >
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Review />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
};