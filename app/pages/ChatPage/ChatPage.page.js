import React, { Component, useState, useEffect } from 'react'
import {View,TextInput,Image, TouchableOpacity,Text,ScrollView, Alert} from 'react-native'
import styles from './ChatPage.style.js'
import * as RootNavigation from '../../routes/RootNavigation.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Keyboard } from 'react-native'

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
        let myFakeMap = myMap
        myFakeMap.set(inde,v);
        setMap(prev => new Map([...prev, [inde+1, v]]));
        setInde(inde+2)
        console.log(myFakeMap)
      }
    const FetchAPI = (umsg) => { 
        console.log(umsg)
      fetch('https://stormy-stream-56564.herokuapp.com/api/doctor/response?info='+umsg) 
       .then((response)=>(response.json())) 
       .then((json)=>{
        updateMap([String(json.Message),false]
        )
       })
     };
    return (  
        <View style={styles.container}>
            <View style={styles.bkbutsss}>
                    <TouchableOpacity onPress={() => {RootNavigation.navigate("HomePage")}}><Text style={styles.txtico}><Icon name="arrow-left" size={30} color="grey" /></Text></TouchableOpacity>
                </View>
             <View style={styles.msgBody}>
                <ScrollView style={styles.contentContainer}>
                <ChatBlob msg='Hi My name is Eliza How Can I help You today ?' usr='false' />
                {[...myMap.keys()].map(k => {
                   return <View style={{margin:10,paddingLeft:myMap.get(k)[1] ? 200 : 0}}><Text key={k}><ChatBlob msg={myMap.get(k)[0]} usr={myMap.get(k)[1]} /></Text></View>
                })}
                <View style={{height:100}}></View>
                </ScrollView>
            </View>
            <View style={styles.outer}>
       
                    <View style={styles.tb}>
                    <TextInput style={styles.textInput} value={String(txt)} placeholder="Enter" onChangeText={(txt) => setTxt(txt)} ></TextInput>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        updateMap([txt,true])
                        FetchAPI(txt);
                        Keyboard.dismiss()
                        setTxt('')
                    }}>
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

