import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '2ec41caf41dc0eb9f17082a886b840b4';

export async function getTrending(page) {
  const url = `/trending/movie/day?api_key=${API_KEY}&page=${page}`;

  const { data } = await axios.get(url);
  return data.results;
}

export async function getMovieDetails(id) {
  const url = `/movie/${id}?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data;
}

export async function searchMovies(query) {
  const url = `/search/movie?api_key=${API_KEY}&query=${query}`;

  const { data } = await axios.get(url);
  return data.results;
}

export async function getMovieCredits(id) {
  const url = `/movie/${id}/credits?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data.cast;
}

export async function getMovieReviews(id) {
  const url = `/movie/${id}/reviews?api_key=${API_KEY}`;

  const { data } = await axios.get(url);
  return data.results;
}