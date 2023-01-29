import {View, Text} from 'react-native';
import React from 'react';

const Detail = ({route}) => {
  const {movieDetail} = route?.params || {};
  console.log('MOVIE >>', movieDetail);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>{movieDetail.title}</Text>
    </View>
  );
};

export default Detail;
