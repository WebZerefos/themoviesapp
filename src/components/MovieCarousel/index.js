import {View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React from 'react';

const {width, height} = Dimensions.get('window');

const MovieCarousel = ({moviesImages}) => {
  return (
    <View className="flex-1">
      <Carousel
        loop
        width={width}
        height={height / 1.5}
        autoPlay={true}
        data={moviesImages}
        scrollAnimationDuration={1000}
        onSnapToItem={index => index}
        renderItem={({item}) => (
          <View>
            <Image source={{uri: item}} className="w-full h-full" />
          </View>
        )}
      />
    </View>
  );
};

export default MovieCarousel;
