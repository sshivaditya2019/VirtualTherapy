import React, {Component,useState, createContext} from 'react'
import {View,Text,TextInput, TouchableOpacity,Button} from 'react-native'
import styles from './LoginPage.style.js'
import auth from '@react-native-firebase/auth';


function LoginPage () {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };
    const submitValue = () => {
        const frmdetails = {
            'email' : email,
            'password' : password,
        }
        console.log(frmdetails);
    }
    function onPress() {
        const UsrCred = auth().createUserWithEmailAndPassword(email,password)
    }

    return (
        <View style={styles.container}>
                <TextInput style={styles.usrna} value={String(email)} placeholder="Email" onChangeText={(email) => setEmail(email)} ></TextInput>
                <TextInput style={styles.pass} secureTextEntry value={String(password)} placeholder="Password" onChangeText={(password) => setPassword(password)}></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => onPress(email,password)}>
                        <Text>Signup</Text>
                </TouchableOpacity>
           
               
        </View>
    )
}




export default LoginPage;