// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingPage from './app/pages/OnBoardingPage/OnBoardingPage.page.js'
import NavStack from './app/routes/NavStack.navigation.js'
import TabNav from './app/routes/TabNav.navigation.js'
import ChatPage from './app/pages/ChatPage/ChatPage.page.js'
import HomePage from './app/pages/HomePage/HomePage.page'
import MusicPlayer from './app/components/MusicPlayer/MusicPlayer.component.js'


function App() {
  return (
    <NavStack />
  );
}

export default App;