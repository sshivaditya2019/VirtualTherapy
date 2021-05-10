import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import styles from './SignupPage.style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';


function SignUpPage(){
    const [usrEmail,setEmail] = React.useState('');
    const [usrPass,setPass] = React.useState('');
    async function CreateUser(email,pass) {
        try {
            auth().createUserWithEmailAndPassword(email,pass);
        }
        catch (error) {
            
              console.error(error);
        }
        finally {
            console.log('User created')
        }

    
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.backbutton}>
                    <Text style={styles.txtico}><Icon name="arrow-left" size={30} color="grey" /></Text>
                </View>
                </TouchableOpacity>
            <Text style={{fontFamily:'TTNorms-Bold',fontSize:50}}>Sign Up</Text>
            <Text style={{fontFamily:'TTNorms-Bold',fontSize:20}}>Email</Text>
            <TextInput style={styles.email} value = {String(usrEmail)} onChangeText={(usrEmail) => setEmail(usrEmail)}></TextInput>
            <Text style={{fontFamily:'TTNorms-Bold',fontSize:20}}>Name</Text>
            <TextInput style={styles.name}></TextInput>
            <Text style={{fontFamily:'TTNorms-Bold',fontSize:20}} >Password</Text>
            <TextInput style={styles.pass} value = {String(usrPass)} onChangeText={(usrPass) => setPass(usrPass)}></TextInput>
            <TouchableOpacity style={styles.subButton} onPress={() => {
                        CreateUser(usrEmail,usrPass);
                    }}>
                <View style={styles.SubRegForm}>
                    <Text style={{fontFamily:'TTNorms-Bold',fontSize:20,color:'white'}}>Sign Up</Text>
                </View>
                </TouchableOpacity>
        </View>
    )
}

export default SignUpPage;