import { useLocation } from 'react-router-dom';
import { Link } from 'components/App.styled';

const MoviesList = ({ visibleMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {visibleMovies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;