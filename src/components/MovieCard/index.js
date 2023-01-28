import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const MovieCard = ({items, title}) => {
  return (
    <View className="h-[200px] relative">
      <View>
        <Text className="items-start mb-3 text-xl font-semibold text-slate-700 ml-3">
          {title}
        </Text>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Image
                  resizeMode="cover"
                  className="ml-2 mb-3 rounded-2xl w-[120] h-[200]"
                  source={
                    item.poster_path
                      ? {
                          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        }
                      : require('../../assets/images/placeholder.png')
                  }
                />

                {!item.poster_path && (
                  <View className="absolute w-[110] self-center items-center mt-3">
                    <Text className="ml-1">{item.title}</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MovieCard;
