import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'fecd7450ab2f3fb03c1527ccc730a3aa';

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
