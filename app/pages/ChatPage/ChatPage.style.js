import {StyleSheet} from 'react-native'

export default StyleSheet.create ({
    container: {
        flexDirection: 'column', 
        backgroundColor: '#f0f2f0',
    },
    outer: {
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'center',
        width: 390,
        top:680,
        position: 'absolute',
        left: 10,
    },
    tb: {
        backgroundColor: '#E2D4DF',
        width:420,
        height:90,
        flexDirection:'row',
    },
    textInput: {

        marginLeft:20,
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
        borderColor:'black'
    },
    contentContainer: {
        flex: 2,
        padding:12,
        backgroundColor:'#E2D4DF',
        paddingVertical: 30,

      },
    msgBody: {
        height:655,                 
    },
    txtico: {
        padding: 10,
        paddingLeft:12,
        height:80,
        backgroundColor: '#E2D4DF',
    },
    bkbut: {
        flex:1,
        margin:15,
        width:60,
        height:60,
        borderRadius:10,
        backgroundColor:'#ffff'
        
    },
    bkbutsss: {
        height:80,
        backgroundColor: '#E2D4DF',
    }
})
