/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Navbar from './src/components/Navbar';
import Search from './src/components/Search';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: ({navigation}) => <Search navigation={navigation} />,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            header: ({navigation}) => <Navbar navigation={navigation} />,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(App);
// screenOptions={{headerShown: false}}
