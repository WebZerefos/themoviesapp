import 'react-native-gesture-handler';
import React, {memo} from 'react';
import {View} from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  return (
    <View className="flex-1">
      <Home />
    </View>
  );
};

export default memo(App);
