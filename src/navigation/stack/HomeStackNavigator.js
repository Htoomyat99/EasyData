import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../pages/HomeScreen';
import HomeDetailScreen from '../../pages/HomeDetailScreen';
import Example from '../../pages/Example';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Example} />
      <Stack.Screen name="HomeDetal" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
