import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Search = ({navigation}) => {
  return (
    <View className="flex-1 mt-20 mr-6 items-end">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}>
        <Image
          className="w-8 h-8"
          source={require('../../assets/images/searchIcon2.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
