import {Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Navbar = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      className="mt-16 ml-5">
      <Image
        className="w-8 h-8"
        source={require('../../assets/images/back.png')}
      />
    </TouchableOpacity>
  );
};

export default Navbar;
