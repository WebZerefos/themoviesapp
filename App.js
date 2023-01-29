import 'react-native-gesture-handler';
import React, {memo} from 'react';
import {StatusBar, View} from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  return (
    <View className="flex-1">
      <Home />
      <StatusBar barStyle={'light-content'} />
    </View>
  );
};

export default memo(App);
