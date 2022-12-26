import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'TMDB_API/TMDB_API';
import TrendingFilmItems from './TrendingFilmItems';

const TrendingFilm = () => {
  const [movieDay, setMovieDay] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function searchPopularFilms() {
      try {
        const films = await getTrending(1);

        setMovieDay(films);
      } catch (error) {
        console.log(error);
      }
    }

    searchPopularFilms();
  }, []);

  return (
    <>
      {movieDay.length > 0 && (
        <TrendingFilmItems movieDay={movieDay} state={{ from: location }} />
      )}
    </>
  );
};

export default TrendingFilm;