/* eslint-disable react-hooks/exhaustive-deps */
import {View, ScrollView, ActivityIndicator} from 'react-native';
import React, {memo, useEffect, useState} from 'react';

import MovieCard from '../../components/MovieCard';
import MovieCarousel from '../../components/MovieCarousel';

import {
  getDocumentaryMovies,
  getFamilyMovies,
  getPlayingNow,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../../Services/services';
import Error from '../../components/Error';

const Home = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState();
  const [playingNow, setPlayingNow] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPlayingNow(),
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
          playingNowData,
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
          setPlayingNow(playingNowData);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(true);
      });
  }, []);

  return (
    <>
      {loading && !error && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-1">
            <MovieCarousel moviesImages={moviesImages} />

            <View className="flex-1">
              <MovieCard
                title={'Movies Playing Now'}
                items={playingNow}
                onPress={() => navigation.navigate('Detail')}
              />
              <MovieCard title={'Popular TV Shows'} items={popularTv} />
              <MovieCard title={'Popular Movies'} items={popularMovies} />
              <MovieCard title={'Family Movies'} items={familyMovies} />
              <MovieCard
                title={'Documentary Movies'}
                items={documentaryMovies}
              />
            </View>
          </View>
        </ScrollView>
      )}
      {!loading && (
        <ActivityIndicator
          className="flex-1 justify-center items-center"
          size="large"
          color="#449cc6"
        />
      )}
      {error && <Error />}
    </>
  );
};

export default memo(Home);
