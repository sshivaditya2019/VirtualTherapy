import React, { Component} from 'react'
import {View,Text,TextInput,KeyboardAvoidingView,Image,Button,TouchableWithoutFeedback, SafeAreaView,Keyboard, TouchableOpacity} from 'react-native'
import styles from './ChatPage.style.js'

class ChatPage extends Component {
    state = { msg: ''}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.outer}>  
                    <Text>aa</Text>
                </View>

                <View style={styles.inner}>
                    <TextInput placeholder="Enter Text Here" style={styles.textInput} />

                </View>
            </View>
        );
    }
}

export default ChatPage;