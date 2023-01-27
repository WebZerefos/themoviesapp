import React, {memo, useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/tv/popular?api_key=fecd7450ab2f3fb03c1527ccc730a3aa&language=pt-BR',
  );

  return response?.data?.results;
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(items => {
        setMovies(items);
      })
      .catch(err => {
        setError(err);
        console.log('ERROR >>>', error.message);
      });
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center ">
      {movies?.map(item => (
        <Text className="">{item?.name}</Text>
      ))}
    </SafeAreaView>
  );
};

export default memo(App);
