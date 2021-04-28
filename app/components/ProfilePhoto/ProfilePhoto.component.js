import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import styles from './ProfilePhoto.style';

const ProfilePhot = (props) => {
    return (
        <View>
            <Image style = {styles.profimg} source={{uri: props.uri }}></Image>
        </View>
    )
}

const urri= 'https://homepages.cae.wisc.edu/~ece533/images/cat.png';
class ProfilePhoto extends Component {
    constructor(props) {
        super(props);
      
        
      }
      
    render() {
        return (
            <ProfilePhot source={urri} />
        )
    }
}

export default ProfilePhoto;