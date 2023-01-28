/* eslint-disable react-hooks/exhaustive-deps */
import {View, ScrollView} from 'react-native';
import React, {memo, useEffect, useState} from 'react';

import MovieCard from '../../components/MovieCard';
import MovieCarousel from '../../components/MovieCarousel';

import {
  getDocumentaryMovies,
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../../Services/services';

const Home = () => {
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [error, setError] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(item => {
            moviesImagesArray.push(
              `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            );
          });

          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
        },
      )
      .catch(err => {
        setError(err);
        console.log('Error >> ', error.message);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1">
        <MovieCarousel moviesImages={moviesImages} />

        <View className="flex-1">
          <MovieCard title={'Popular Movies'} items={popularMovies} />
          <MovieCard title={'Popular TV Shows'} items={popularTv} />
          <MovieCard title={'Family Movies'} items={familyMovies} />
          <MovieCard title={'Documentary Movies'} items={documentaryMovies} />
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(Home);
