import React, { Component, useState } from 'react'
import {View,TextInput,Image,Keyboard, TouchableOpacity,Text} from 'react-native'
import styles from './ChatPage.style.js'
import ChatBlob from 'C:/Users/mgiri/OneDrive/Documents/GitHub/VirtualTherapy/app/components/ChatBlob/ChatBlob.component.js'

class ChatPage extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <ChatBlob msg={this.state}/>
                <View style={styles.outer}>      
                    <TextInput style={styles.textInput} placeholder="Enter" 
                    onChangeText={val => this.onChangeText('usrmsg',usrmsg)}/>
                    <View  style = {styles.imgbg}>
                        <TouchableOpacity onPress={()=>Keyboard.dismiss()}>
                            <Image source={require('./send.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default ChatPage;