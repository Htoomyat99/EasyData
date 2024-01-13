import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './tab/HomeTabNavigator';
import FilterStackNavigator from './stack/FilterStackNavigator';
import {AuthContext} from '../context/Context';
import {appStorage} from '../utils/appStorage';

const AppNavigator = () => {
  const [auth, setAuth] = useState(null);

  const context = {
    auth,

    getAuth: val => {
      setAuth(val);
    },
  };

  useEffect(() => {
    const userData = appStorage.getItem('@userData');
    if (userData) {
      setAuth(JSON.parse(userData));
    } else {
      setAuth(null);
    }
  }, []);

  if (!auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <FilterStackNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={context}>
      <NavigationContainer>
        <HomeTabNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigator;
