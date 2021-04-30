import React, { Component, useState, useEffect } from 'react'
import {View,TextInput,Image, TouchableOpacity,Text,ScrollView, Alert} from 'react-native'
import styles from './ChatPage.style.js'
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatBlob = (props) => {
    return (
            <View style={{backgroundColor:props.usr ? '#f2f2f2' : 'rgb(232, 157, 173)',flexDirection:'row',flexShrink: 1,width:170}}>
            <Text style={{borderRadius:20,padding:10,fontFamily:"TTNorms-Bold",flexShrink: 1 }}>{props.msg}</Text>
        </View>
        
    );
}
var msgs = ['Hello'];
const ChatPage = () => {

    const [txt,setTxt] = useState('')
    const [inde,setInde] = useState(0)
    const [myMap,setMap] = useState(new Map())
    const updateMap = (v) => {
        setMap(myMap.set(inde,v));
        setInde(prev => prev+1)
        console.log(myMap)
      }
    return (  
        <View style={styles.container}>
            <View style={styles.bkbutsss}>
                    <TouchableOpacity><View style={styles.bkbut}><Text style={styles.txtico}><Icon name="arrow-left" size={30} color="grey" /></Text></View></TouchableOpacity>
                </View>
             <View style={styles.msgBody}>
                <ScrollView style={styles.contentContainer}>
                {[...myMap.keys()].map(k => {
                    return <View style={{margin:10,paddingLeft:myMap.get(k)[1] ? 200 : 0}}><Text key={k}><ChatBlob msg={myMap.get(k)[0]} usr={myMap.get(k)[1]} /></Text></View>
                })}
                <View style={{height:50}}></View>
                </ScrollView>
            </View>
            <View style={styles.outer}>
       
                    <View style={styles.tb}>
                    <TextInput style={styles.textInput} value={String(txt)} placeholder="Enter" onChangeText={(txt) => setTxt(txt)} ></TextInput>
                    <TouchableOpacity style={styles.button} onPress={() => updateMap([txt,true])}>
                    <Image source={require('./send.png')}></Image>
                </TouchableOpacity>
                    </View>
                          
            </View>
           
        </View>

    )
}
export default ChatPage;

//
//

