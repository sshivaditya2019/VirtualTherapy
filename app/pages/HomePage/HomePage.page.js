import React, {Component,useState, createContext} from 'react'
import {View,Text,TextInput, TouchableOpacity,Button,ScrollView} from 'react-native'
import SongBlob from '../../components/SongBlob/SongBlob.component.js'
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto.component.js'
import styles from './HomePage.style'

function HomePage(props) {
    return(
        <View>
        <View style={{marginLeft:25}}><ProfilePhoto uris = {"https://homepages.cae.wisc.edu/~ece533/images/monarch.png"} username = {"Shivaditya"}/></View>
        <View style={{marginLeft:25}}><Text style={{fontFamily:'TTNorms-Bold',fontSize:35}}>Today's{"\n"} Selection</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{padding:10,flexDirection: 'row',flexGrow:1}}>
                <View style={{marginLeft:20}}><SongBlob contn="name" source="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width={150} height={150}/></View>
                <View style={{marginLeft:20}}><SongBlob contn="name" source="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width={150} height={150}/></View>
                <View style={{marginLeft:20}}><SongBlob contn="name" source="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width={150} height={150}/></View>
        </View>
        </ScrollView>
        <View style={{marginTop:20,marginLeft:29}}><Text style={{fontFamily:'TTNorms-Bold',fontSize:20}}>Explore Dailys</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{padding:10,flexDirection: 'row',flexGrow:1}}>
                <View style={{marginLeft:20}}><SongBlob contn="name" source="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width={250} height={150}/></View>
                <View style={{marginLeft:20}}><SongBlob contn="name" source="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width={250} height={150}/></View>
                <View style={{marginLeft:20}}><SongBlob contn="name" source="https://homepages.cae.wisc.edu/~ece533/images/monarch.png" width={250} height={150}/></View>
        </View>
        </ScrollView>
        </View>
    )
}

export default HomePage;