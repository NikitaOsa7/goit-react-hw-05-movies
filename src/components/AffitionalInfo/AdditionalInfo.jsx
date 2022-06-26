import { useParams, Link, Outlet } from "react-router-dom";
import s from '../AffitionalInfo/AdditionalInfo.jsx';

export default function AdditionalInfo() {
    const { movieId } = useParams();
    const NAVIGATTION = ['Cast', 'Reviews'];

    return (
        <>
            <ul className={s.list}>
                {NAVIGATTION.map((page, index) => {
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