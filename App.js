import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import NewsBlob from './app/components/NewsBlob/NewsBlob.component.js';
import ProfilePhoto from './app/components/ProfilePhoto/ProfilePhoto.component.js';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <ProfilePhoto uri = 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'/>
          <NewsBlob />
          
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:22.5,
    flexDirection: 'column',
  },
});

export default App;