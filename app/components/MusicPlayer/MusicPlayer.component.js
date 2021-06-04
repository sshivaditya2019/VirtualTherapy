import TrackPlayer from 'react-native-track-player';
import React, {Component,useState, createContext} from 'react'
import {View,Text,TextInput, TouchableOpacity,Button, Image, ImageBackground} from 'react-native'
import {StyleSheet} from 'react-native'
import { useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




function MusicPlayer(props) {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [PlayMusic,setPlayStt] = useState(true);
    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();
    
        // Add a track to the queue
        await TrackPlayer.add({
            url: 'https://res.cloudinary.com/dtsvavxcq/video/upload/v1619886991/songs/Anxeity/5_Beheafdian-Original_uzwgaa.mp3',
            title: 'Sample',
            artist: 'Ean Grimm',
            artwork: 'https://res.cloudinary.com/dtsvavxcq/image/upload/v1621441573/Assets/Images/Screenshot_2021-05-19_at_21.45.13_dl92ha.png'
        });
    
        // Start playing it
        
    };

    const play = async() => {
        await TrackPlayer.play()
        setPlayStt(false)
        console.log('State of Music Play made false')
    }
    const pause = async() => {
        await TrackPlayer.pause()
        setPlayStt(true)
        console.log('State of Music Play made true')
    }
    const imgh = Math.floor(windowWidth/2)
  
    start();
    return(
        <View>
            <View style={styles.container}>
            <ImageBackground source={{uri: 'https://res.cloudinary.com/dtsvavxcq/image/upload/v1621441573/Assets/Images/Screenshot_2021-05-19_at_21.45.13_dl92ha.png'}} style={styles.image}>
                <View style={{margin:175}}> 
                    <Text>
                        {PlayMusic ? <TouchableOpacity onPress={() => {play();}} style={{borderRadius:80,backgroundColor:'white',width:80, height:80,padding:25,justifyContent:'center'}}>
                        <View><Text><Icon name="play" size={30} color="grey" /></Text></View>
                    </TouchableOpacity> : <TouchableOpacity onPress={() => {pause();}} style={{borderRadius:80,backgroundColor:'white',width:80, height:80}}>
                        <View style={{margin:27, marginLeft:25}}><Text><Icon name="pause" size={29} color="grey" /></Text></View>
                    </TouchableOpacity>}
                    </Text>     
                </View>
                
            </ImageBackground>
           
            </View>
            <View style={{ flex:0,marginTop:400,backgroundColor: "rgb(242,242,242)", width:411, height:500, borderTopLeftRadius:50, borderTopRightRadius:50,padding:45}}>
                <Text>Hello World</Text>
                </View>
        </View>
    )
}

export default MusicPlayer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      resizeMode: "cover",
      justifyContent: "center",
      width: 500,
      height: 500
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });
  