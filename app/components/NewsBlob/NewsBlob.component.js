import React, { Component } from 'react';
import styles from './NewsBlob.style';
import { View, Text } from "react-native";

class NewsBlob extends Component {
    render() {
        return (
        <View style={styles.cont}>
            <View style={styles.textcont}>
                <Text style={styles.blobtext}>How to recover from {"\n"} Covid 19</Text>
            </View>
            <View style={styles.illucont}></View>
        </View>
        )
    }
}

export default NewsBlob;