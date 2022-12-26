import noFoto from './no-image-available-226.png';

export const imagePast = path => {
  if (path === null || path === undefined) {
    return noFoto;
  }

  return `https://image.tmdb.org/t/p/w300${path}`;
};