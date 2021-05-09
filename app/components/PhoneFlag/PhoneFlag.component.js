import React from 'react';
import {Text,View} from 'react-native'
import emojiFlags from 'emoji-flags'
import useGeoLocation from "react-ipgeolocation";



function PhoneFlag(props) {
    return (
        <View>
            <Text>{useGeoLocation().country}</Text>
        </View>
    )
}

export default PhoneFlag;