import {Image, Text, TouchableOpacity, View} from 'react-native';

import React, {memo, PureComponent} from 'react';

export class MovieCard extends PureComponent {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {movieDetail: item})}>
        <Image
          resizeMode="cover"
          className="rounded-2xl w-[120] h-[200] mx-1"
          source={
            item.poster_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }
              : require('../../assets/images/placeholder.png')
          }
        />

        {!item.poster_path && (
          <View className="flex-1 items-center justify-center absolute">
            <Text className="justify-center text-center ml-2 mt-3">
              {item.title}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

export default memo(MovieCard);
