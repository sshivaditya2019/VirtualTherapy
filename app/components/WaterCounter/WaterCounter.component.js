import React, { Component, useState } from 'react';
import styles from './WaterCounter.style';
import { View, Text, Image, TouchableOpacity } from "react-native";


const WaterCounter = (() => {
    const [WaterQuant,updateWaterCounter] = useState(0);
    const onPress = () => updateWaterCounter(updateWaterCounter => updateWaterCounter + 100);
    return (
    <View style={styles.container}>
        <View style={styles.photobut}>
            <Text style={styles.watertxt}>Water</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text>W</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.countContainer}>
            <Text style={{fontFamily: 'TTNorms-Bold',fontSize:20}}>{WaterQuant}</Text>
            <Text style = {{fontFamily:'TTNorms-Light'}}>ml</Text>
        </View>
    </View>

    )
})


export default WaterCounter;