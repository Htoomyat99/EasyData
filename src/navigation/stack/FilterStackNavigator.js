import {View, Text} from 'react-native';
import React from 'react';
import BtnComponent from '../../components/BtnComponent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilterLogin from '../../pages/FilterLogin';
import FilterRegister from '../../pages/FilterRegister';

const Stack = createNativeStackNavigator();

const FilterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FilterLogin" component={FilterLogin} />
      <Stack.Screen name="FilterRegister" component={FilterRegister} />
    </Stack.Navigator>
  );
};

export default FilterStackNavigator;
