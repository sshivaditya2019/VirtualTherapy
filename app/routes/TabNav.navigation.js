import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatPage from '../../app/pages/ChatPage/ChatPage.page.js'
import HomePage from '../../app/pages/HomePage/HomePage.page.js'

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  const getTabBarVisible = (route) => {
    const params = route.params;
    if (params) {
      if (params.tabBarVisible === false) {
        return false;
      }
    }
    return true;
  };
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

export default function TabNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Home" component = {HomePage} />
                <Tab.Screen name = "Explore" component = {ChatPage}/>
                <Tab.Screen name = "Eliza" component = {ChatPage} options={({ route }) => ({tabBarVisible: getTabBarVisible(route),})}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

