/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

import {getMovie} from '../../Services/services';
import Rating from '../../components/Rating';

const height = Dimensions.get('window').height;

const Detail = ({route}) => {
  const movieId = route?.params.movieId || {};

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movie => {
      setMovieDetail(movie);
      setLoaded(true);
    });
  }, [movieId, setMovieDetail]);

  return (
    <ScrollView className="flex-1 bg-white">
      {loaded && (
        <ScrollView>
          <Image
            height={height / 2.3}
            resizeMode="cover"
            source={
              movieDetail.poster_path
                ? {
                    uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
                  }
                : require('../../assets/images/placeholder.png')
            }
          />

          {movieDetail.genres && (
            <View className="flex-1 items-center gap-2 mt-3">
              <Text className="text-lg font-bold">{movieDetail.title}</Text>

              <View className="flex-1 flex-row gap-2 mb-3">
                {movieDetail.genres.map(genre => (
                  <Text key={genre.id}>{genre.name}</Text>
                ))}
              </View>

              <Rating rating={movieDetail.vote_average / 2} />

              <Text className="text-sm p-3 text-center">
                {movieDetail.overview}
              </Text>

              <Text className="text-sm font-bold ">
                {'Data lançamento: ' +
                  moment(movieDetail.release_date).format('DD-MM-YYYY')}
              </Text>
            </View>
          )}

          {/* If any error */}
          {!movieDetail.poster_path && (
            <View className="flex-1 items-center justify-center absolute">
              <Text className="justify-center text-center ml-2 mt-3">
                {movieDetail.title}
              </Text>
            </View>
          )}
          {/* If any error */}

          {!loaded && (
            <ActivityIndicator
              className="flex-1 justify-center items-center"
              size="large"
              color="#449cc6"
            />
          )}
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Detail;
