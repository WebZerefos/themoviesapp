import axios from 'axios';
import {TMDB_API} from '@env';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = TMDB_API;

// Get Playing Now
export const getPlayingNow = async () => {
  const response = await axios.get(
    `${baseUrl}movie/now_playing?api_key=${apiKey}&language=pt-BR`,
  );

  return response?.data?.results;
};

// Get popular movies
export const getPopularMovies = async () => {
  const response = await axios.get(
    `${baseUrl}movie/popular?api_key=${apiKey}&language=pt-BR`,
  );

  return response?.data?.results;
};

// Get upcoming movies
export const getUpcomingMovies = async () => {
  const response = await axios.get(
    `${baseUrl}movie/upcoming?api_key=${apiKey}&language=pt-BR`,
  );

  return response?.data?.results;
};

// Get Popular TV
export const getPopularTv = async () => {
  const response = await axios.get(
    `${baseUrl}tv/popular?api_key=${apiKey}&language=pt-BR`,
  );

  return response?.data?.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const response = await axios.get(
    `${baseUrl}discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=10751`,
  );

  return response?.data?.results;
};

// Get Documentary Movies
export const getDocumentaryMovies = async () => {
  const response = await axios.get(
    `${baseUrl}discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=99`,
  );

  return response?.data?.results;
};

// Get  Movie Details
export const getMovie = async id => {
  const response = await axios.get(
    `${baseUrl}/movie/${id}?api_key=${apiKey}&language=pt-BR`,
  );

  return response?.data;
};

// // Get  TV Details
// export const getTv = async id => {
//   const response = await axios.get(
//     `${baseUrl}discover/tv/${id}?api_key=${apiKey}&language=pt-BR`,
//   );

//   return response?.data;
// };
