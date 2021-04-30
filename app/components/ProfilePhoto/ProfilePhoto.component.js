import React, { Component } from 'react';
import { View, Image ,Text,TouchableOpacity } from "react-native";
import styles from './ProfilePhoto.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfilePhoto = (props) => {
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName=months[d.getMonth()]; 
    var date = d.getDate()
    return (
        <View style={styles.photocont}>
            <Image style = {styles.profimg} source={{uri: props.uris}}></Image>
            <TouchableOpacity>
            <View style={{
                marginLeft:230,
                width:60,
                height:60,
                backgroundColor:'#f2f2f2',
                borderRadius:20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                }}>
                    <Text style={{padding:10,paddingLeft:18,paddingTop:15}}><Icon name="search" size={25} color="grey" /></Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default ProfilePhoto;