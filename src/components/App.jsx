import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Cast from './AdditionalInfo/Cast/Cast';
import Review from './AdditionalInfo/Review/Review';

const slicer = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`));
}

const HomePage = slicer('HomePage');
const MoviesPage = slicer('MoviesPage');
const MovieDetailsPage = slicer('MovieDetailsPage');



export const App = () => {
  return (
    <Suspense fallback="">
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
