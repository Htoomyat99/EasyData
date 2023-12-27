import {View, Text} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <GestureHandlerRootView>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
