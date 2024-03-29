import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      const response = api.fetchCast(movieId);
      response.then(newData => {
        setCast(
          newData.data.cast.map(({ id, character, name, profile_path }) => ({
            id,
            character, 
            profile_path,
          }))
        )
      })
    } catch (error) {}
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ profile_path, name, character }, index) => {
        return (
          <li key={index}>
            {profile_path && (
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>{`Character: ${character}`}</p>
          </li>
        );
      })}
    </ul>
  );
}
