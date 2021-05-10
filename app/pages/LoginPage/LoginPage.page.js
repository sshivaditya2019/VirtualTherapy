import React, {Component,useState, createContext} from 'react'
import {View,Text,TextInput, TouchableOpacity,Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './LoginPage.style.js'
import auth from '@react-native-firebase/auth';


function LoginPage ( {navigation} ) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submitValue = () => {
        const frmdetails = {
            'email' : email,
            'password' : password,
        }
        console.log(frmdetails);
    }
    function onPress() {
        auth().createUserWithEmailAndPassword(email,password)
        navigation.navigate('HomePage');

    }

    return (
        <View style={styles.container}>
                <TouchableOpacity>
                <View style={styles.backbutton}>
                    <Text style={styles.txtico}><Icon name="arrow-left" size={30} color="grey" /></Text>
                </View>
                </TouchableOpacity>
                <Text style={styles.txtLogin}>Login</Text>
                <View style={styles.boxx}>
                    <Text style={styles.txtUSR}>Email Id</Text>
                    <TextInput style={styles.usrna} value={String(email)} placeholder="Email" onChangeText={(email) => setEmail(email)} ></TextInput>
                    <Text style={styles.txtPASS}>Password</Text>
                    <TextInput style={styles.pass} secureTextEntry value={String(password)} placeholder="Password" onChangeText={(password) => setPassword(password)}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => onPress(email,password)}>
                        <Text style={styles.ButTXT}>Signup</Text>
                </TouchableOpacity>
        </View>
    )
}




export default LoginPage;