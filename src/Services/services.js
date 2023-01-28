import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'fecd7450ab2f3fb03c1527ccc730a3aa';

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
