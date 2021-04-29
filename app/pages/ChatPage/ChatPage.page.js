import React, { Component} from 'react'
import {View,Text,TextInput,KeyboardAvoidingView,Image,Button,TouchableWithoutFeedback, SafeAreaView,Keyboard, TouchableOpacity, Platform} from 'react-native'
import styles from './ChatPage.style.js'

class ChatPage extends Component {
    state = { msg: ''}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <View style={styles.footer}>         
                        <TextInput style={styles.txtinput} placeholder="Enter"/>
                </View>
                <View style={styles.nbsp}>

                </View>
            </View>
        );
    }
}

export default ChatPage;