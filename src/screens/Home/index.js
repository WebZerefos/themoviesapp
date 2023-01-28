/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Dimensions,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';

import {getPopularMovies, getUpcomingMovies} from '../../Services/services';
import MovieCard from '../../components/MovieCard';

const {width, height} = Dimensions.get('window');

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
    <>
      <View className="flex-1 items-center justify-center mt-36">
        <Carousel
          loop
          width={width}
          height={height}
          autoPlay={true}
          data={moviesImages}
          scrollAnimationDuration={1000}
          onSnapToItem={index => index}
          renderItem={({item}) => (
            <View>
              <Image source={{uri: item}} className="h-[83%]" />
            </View>
          )}
        />
      </View>

      <View className="flex-1">
        <MovieCard title={'Popular Movies'} items={popularMovies} />
      </View>
    </>
  );
};

export default memo(Home);
