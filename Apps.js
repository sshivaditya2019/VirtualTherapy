import React, { Component, useState, setState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NewsBlob from './app/components/NewsBlob/NewsBlob.component.js';
import ProfilePhoto from './app/components/ProfilePhoto/ProfilePhoto.component.js';
import WaterCounter from './app/components/WaterCounter/WaterCounter.component.js';
import Spacing from './app/utils/Spacing.component.js';

const UserInfo = () => {
  const [details,setUserInfo] = useState(() => {
    return ['Shivaditya','./app/assets/Images/profile.png']
  })
  return(
    <ProfilePhoto uris = {details[1]} username = {details[0]}/>
  )
};

class App extends Component {
  UserInfo
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <UserInfo />
          <NewsBlob />
          <Spacing spaceWidth={350} spaceHeight={20} />
          <WaterCounter />
        </Text>
      </View>
    );s
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(249, 235, 227)',
    padding:22.5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});


export default App;