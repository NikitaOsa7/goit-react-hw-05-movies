import { useParams, Link, Outlet } from 'react-router-dom';
import s from './AdditionalInfo.module.css';

export default function AdditionalInfo() {
  const { movieId } = useParams();
  const NAVIGATION = ['Cast', 'Reviews'];

  return (
    <>
      <ul className={s.list}>
        {NAVIGATION.map((page, index) => {
          return (
            <li key={index}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${movieId}/${page.toLowerCase()}`}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}
