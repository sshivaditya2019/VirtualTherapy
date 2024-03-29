import React, { Component,useState,setTimeOut} from 'react'
import {View,Text,Image,TouchableOpacity,TextInput,Button} from 'react-native'
import styles from './PhoneAuthPage.style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import emojiFlags from 'emoji-flags'
import PhoneFlag from '../../components/PhoneFlag/PhoneFlag.component.js'
import auth from '@react-native-firebase/auth';


import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';




const CELL_COUNT = 6;

function PhoneAuthPage() {
    const [errs,setErr] = useState('');
    const [stUsrOTP,setUsrOTP] = useState(false);
    const [timer,setTimer] = useState(40);
    const [value, setValue] = useState('');
    const [phno, setPhNo] = useState('');
    const [code, setCode] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
        });
    const [confirm,setConfirm] = useState(null);
    function printSet(phoneNumber){
        console.log(phoneNumber);
        setPhNo(phoneNumber);
    }


    async function signInWithPhoneNumber(phoneNumber) {
        setUsrOTP(true);
        setTimeOut(setUsrOTP(false),10000)
        console.log(phoneNumber);
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
        console.log(confirmation.confirm(code));
        }
        async function confirmCode() {

            try {
              await confirm.confirm(code);
            } catch (error) {
              setErr(error);
            }
            finally{
                console.log("Authed");
            }
          }
        
       return (
        <View style={styles.container}>
             <TouchableOpacity>
                <View style={styles.backbutton}>
                    <Text style={styles.txtico}><Icon name="arrow-left" size={30} color="grey" /></Text>
                </View>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={{fontFamily:'TTNorms-Bold',fontSize:30}}>Register</Text>
                </View>
                <View>
                    <View style={styles.phno}>
                        <Text style={{fontFamily:'TTNorms-Bold',fontSize:18}}>Phone Number</Text>
                        <View style={{flexDirection:'row',backgroundColor:"#f2f2f2",height:60,borderRadius:12,margin:24}}>
                            <View style={{borderRightWidth:0.15,borderColor:"#a3a5a4"}}><Text style={styles.CountryCode}>{emojiFlags.countryCode("IN")["emoji"]}</Text></View>
                            <TextInput type="number" style={styles.PhNoInpu} placeholder="Phone Number" keyboardType="number-pad" value={String(phno)} onChangeText={(phno) => printSet(phno)}></TextInput>
                        </View>
                        <View style={styles.VeriCode}>
                            <Text style={{fontFamily:'TTNorms-Bold',fontSize:20}} textContentType="oneTimeCode" keyboardType="numeric">Verification Code</Text>
                            <View style={{width:300}}>
                            <CodeField ref={ref} {...props} value={code} onChangeText={setCode} cellCount={CELL_COUNT} rootStyle={styles.codeFieldRoot} keyboardType="number-pad" textContentType="oneTimeCode" renderCell={({index, symbol, isFocused}) => (
                            <Text key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}> 
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                            )}
                            />
                            </View>
                        </View>
                        <Text>{!stUsrOTP ?<TouchableOpacity style={{width:100,height:100,backgroundColor:'red'}} title="Phone Number Sign In" onPress={() => signInWithPhoneNumber('+91 '+phno)}></TouchableOpacity> : null}</Text>
                        
                        <Text>{stUsrOTP ? <TouchableOpacity style={{width:100,height:100,backgroundColor:'green'}} title="Confirm code" onPress={() => confirmCode()}></TouchableOpacity> : null}</Text>
                        <Text>{console.log(errs)}</Text>
                    </View>
                    
                </View>
        </View>
       )
    }


export default PhoneAuthPage;