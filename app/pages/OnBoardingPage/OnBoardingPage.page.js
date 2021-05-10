import React, { Component} from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './OnBoardingPage.style';

class OnBoarding extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bo1}>
                        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <View style={styles.imgs}>
                <Image style = {styles.imgbg} source={require('/Users/shivaditya/dev/react-native/VirtualTherapy/app/assets/Images/5270601.jpg')}></Image>
                </View>
                <View style={styles.bo2}>
                    <TouchableOpacity style={styles.button1}>
                            <Text style={styles.txt2}>
                                Continue with Email
                            </Text>
                    </TouchableOpacity>
                    <View style = {{width:400,height:10}}></View>
                    <TouchableOpacity style={styles.button2}>
                            <Text style={styles.txt3}>
                                Continue with phone number
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default OnBoarding;