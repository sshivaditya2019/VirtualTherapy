// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingPage from '../../app/pages/OnBoardingPage/OnBoardingPage.page.js'
import LoginPage from '../../app/pages/LoginPage/LoginPage.page.js'
import PhoneAuthPage from '../../app/pages/PhoneAuthPage/PhoneAuthPage.page.js'
import SignUpPage from '../../app/pages/SignUpPage/SignUpPage.page.js'
import HomePage from '../../app/pages/HomePage/HomePage.page.js'



const Stack = createStackNavigator();
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="OnBoarding" component={OnBoardingPage} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="PhoneAuthPage" component={PhoneAuthPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;