// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingPage from '../../app/pages/OnBoardingPage/OnBoardingPage.page.js'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="OnBoarding" component={OnBoardingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;