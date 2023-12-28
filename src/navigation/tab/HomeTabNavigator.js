import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../stack/HomeStackNavigator';
import FilterStackNavigator from '../stack/FilterStackNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="FilterStack" component={FilterStackNavigator} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
