import React, {Component,useState, createContext} from 'react'
import {View,Text,TextInput, TouchableOpacity,Button,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as RootNavigation from '../../routes/RootNavigation.js';

export default function BottomNavBar() {
    return(
        <View style={{flexDirection:'row',justifyContent: 'space-between', margin:23, marginLeft:60, marginRight:60}}>
            <View><TouchableOpacity onPress={() => {RootNavigation.navigate("ChatPage")}}><Icon name="arrow-left" size={30} color="grey" /></TouchableOpacity></View>
            <View><TouchableOpacity><Icon name="arrow-left" size={30} color="grey" /></TouchableOpacity></View>
            <View><TouchableOpacity><Icon name="arrow-left" size={30} color="grey" /></TouchableOpacity></View>
        </View>
    )
}