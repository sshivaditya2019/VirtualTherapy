import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import styles from './ChatBlob.style.js'

const ChatBlob = (props) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.UsrMsgs}>{props.msg}</Text>
            <Text style={styles.UsrMsgs}>{props.msg}</Text>
            <Text style={styles.UsrMsgs}>{props.msg}</Text>
            <Text style={styles.UsrMsgs}>{props.msg}</Text>
            <Text style={styles.UsrMsgs}>{props.msg}</Text>
            <Text style={styles.UsrMsgs}>{props.msg}</Text>
        </View>
        </ScrollView>
    );
}

export default ChatBlob;