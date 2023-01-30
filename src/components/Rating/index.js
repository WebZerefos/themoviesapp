import {Image, View} from 'react-native';

import React from 'react';

const Rating = ({rating}) => {
  const arr = [1, 2, 3, 4, 5];

  const renderStars = () => {
    return arr?.map((star, index) => {
      if (rating >= star) {
        return (
          <Image
            key={index}
            source={require('../../assets/images/starfill.png')}
            className="h-6 w-6 "
          />
        );
      }

      return (
        <Image
          key={index}
          source={require('../../assets/images/starempty.png')}
          className="h-6 w-6 "
        />
      );
    });
  };
  return (
    <View className="flex-1 flex-row items-center p-3 gap-1">
      {renderStars()}
    </View>
  );
};

export default Rating;
