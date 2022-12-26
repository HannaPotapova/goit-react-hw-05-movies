import { Link } from 'components/App.styled';

const TrendingFilmItems = ({ movieDay, state }) => {
  return (
    <ul>
      {movieDay.map(({ id, title, name }) => (
        <li key={id}>
          <Link
            to={`movies/${id}`}
            state={state}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingFilmItems;