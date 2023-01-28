/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';

import {getPopularMovies, getUpcomingMovies} from '../../Services/services';
import MovieCard from '../../components/MovieCard';
import MovieCarousel from '../../components/MovieCarousel';

const Home = () => {
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(items => {
        setPopularMovies(items);
      })
      .catch(err => {
        setError(err);
        console.log('ERROR >>>', error.message);
      });
  }, []);

  useEffect(() => {
    getUpcomingMovies()
      .then(items => {
        const moviesImagesArray = [];
        items.forEach(item => {
          moviesImagesArray.push(
            `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          );
        });

        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
        console.log('ERROR >>>', error.message);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1">
        <MovieCarousel moviesImages={moviesImages} />

        <View className="flex-1">
          <MovieCard title={'Popular'} items={popularMovies} />
          <MovieCard title={'Popular'} items={popularMovies} />
          <MovieCard title={'Popular'} items={popularMovies} />
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(Home);
