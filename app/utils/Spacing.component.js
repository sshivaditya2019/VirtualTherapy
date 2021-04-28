import React, {Component, useState} from 'react';
import {View,Text} from "react-native";

const Spacing = (props) => {
    const [valsp,incSpace] = useState(() => {
        return [props.spaceWidth,props.spaceHeight]
    })
    return (
        <View style={{width: valsp[0],height: valsp[1] ,color:"red"}}>
            <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
        </View>
    )
}


export default Spacing