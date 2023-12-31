import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MonthDetailScreen from '../../pages/MonthDetailScreen';
import Example from '../../pages/Example';
import YearScreen from '../../pages/YearScreen';
import YearDetailScreen from '../../pages/YearDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Year" component={YearScreen} />
      <Stack.Screen name="YearDetail" component={YearDetailScreen} />
      <Stack.Screen name="MonthDetail" component={MonthDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
