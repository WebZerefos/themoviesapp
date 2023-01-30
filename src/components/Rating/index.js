import {Image, View} from 'react-native';
import React, {memo, PureComponent} from 'react';

export class Rating extends PureComponent {
  render() {
    const arr = [1, 2, 3, 4, 5];

    const {rating} = this.props;

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
  }
}

export default memo(Rating);
