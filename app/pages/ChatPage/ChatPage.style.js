import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    container: {
        flexDirection: 'column', 
    },
    outer: {
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'center',
        width: 390,
        paddingTop:650,
        position: 'absolute',
        left: 10,
    },
    textInput: {
        paddingHorizontal: 15,
        backgroundColor: '#f0f2f0',
        height: 50,
        width: 350,
        borderRadius: 50,
    },
    button: {
        
    },
    imgbg: {
        padding: 10,
    },
    contentContainer: {
        flex: 2,
        backgroundColor:'#E2D4DF',
        paddingVertical: 50,
      },
    msgBody: {
        height:600,
                            
    }
})
