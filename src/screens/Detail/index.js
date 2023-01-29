import {View, Text} from 'react-native';
import React from 'react';

const Detail = ({route}) => {
  console.log('ROUTE >>', route);
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Detail Screen</Text>
    </View>
  );
};

export default Detail;
