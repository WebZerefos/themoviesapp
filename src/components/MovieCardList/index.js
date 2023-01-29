/* eslint-disable no-shadow */
import React, {memo, PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import MovieCard from '../MovieCard';

export class MovieCardList extends PureComponent {
  render() {
    const {navigation, item, title} = this.props;
    return (
      <>
        {item && (
          <View className="bg-white">
            <View>
              <Text className="text-lg ml-6 my-2 font-semibold tracking-widest text-zinc-800">
                {title}
              </Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={item}
                keyExtractor={index => String(index.id)}
                renderItem={({item, index}) => {
                  return <MovieCard item={item} navigation={navigation} />;
                }}
              />
            </View>
          </View>
        )}
      </>
    );
  }
}

export default memo(MovieCardList);
