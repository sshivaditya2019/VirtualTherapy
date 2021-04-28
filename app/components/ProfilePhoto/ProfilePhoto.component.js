import React, { Component } from 'react';
import { View, Image ,Text } from "react-native";
import styles from './ProfilePhoto.style';

const ProfilePhoto = (props) => {
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName=months[d.getMonth()]; 
    var date = d.getDate()
    return (
        <View style={styles.photocont}>
            <Image style = {styles.profimg} source={require('/Users/shivaditya/dev/react-native/VirtualTherapy/app/assets/Images/profile.png')}></Image>
            <View style = {styles.dateusr}>
                <Text style={styles.dates}>{monthName} {date}</Text>
                <Text style = {styles.usrname}>Hey, {props.username}!</Text>
            </View>
        </View>
    )
}


export default ProfilePhoto;