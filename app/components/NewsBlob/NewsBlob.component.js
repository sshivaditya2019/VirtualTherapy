import React, { Component } from 'react';
import styles from './NewsBlob.style';
import { View, Text, Image, SVG } from "react-native";

class NewsBlob extends Component {
    render() {
        return (
        <View style={styles.cont}>
            <View style={styles.textcont}>
                <Text style={styles.blobtext}>How to recover{"\n"} from Covid 19</Text>
                
            </View>
            <View style={styles.illucont}>
                <Image style={styles.imgilu} source={require('/Users/shivaditya/dev/react-native/VirtualTherapy/app/assets/Images/13044-removebg-preview.png')} />
            </View>
        </View>
        )
    }
}

export default NewsBlob;