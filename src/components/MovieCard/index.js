import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import React, {PureComponent} from 'react';

export default class MovieCard extends PureComponent {
  render() {
    const {items, title, onPress} = this.props;
    return (
      <>
        {items && (
          <>
            <View>
              <Text className="text-lg ml-6 my-2 font-semibold tracking-widest text-zinc-800">
                {title}
              </Text>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                keyExtractor={index => String(index.id)}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity onPress={onPress}>
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
                        <View className="">
                          <Text className="">{item.title}</Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        )}
      </>
    );
  }
}
