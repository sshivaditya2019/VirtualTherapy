import React, {Component,useState, createContext} from 'react'
import {View,Text,TextInput, TouchableOpacity,Button, Image} from 'react-native'
import {StyleSheet} from 'react-native'



function SongBlob(props) {
    return (
        <View>
            <View style={{
                width:props.width+14,
                height:props.height+50,
                backgroundColor:'#f2f2f2',
                borderRadius:20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 13,
            }}>
                    <View style={{
                        margin:7,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    
                        elevation: 5,
                    }}>
                    <Image source={{uri: props.source}} style={{width:props.width,height:props.height,borderRadius:20}}></Image>
                    </View>
            </View>
        </View>
    )
}
export default SongBlob;

