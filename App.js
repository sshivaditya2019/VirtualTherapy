// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingPage from './app/pages/OnBoardingPage/OnBoardingPage.page.js'
import NavStack from './app/routes/NavStack.navigation.js'


function App() {
  return (
    <NavStack />
  );
}

export default App;