import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop:100,
        width:150,
        height: 150,
        borderWidth: 2,
        borderRadius:20,
        borderColor: 'rgb(163, 165, 164)'
      },
      button: {
        alignItems: "center",
        marginLeft:16,
        width:40,
        height:40,
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius:100
      },
      countContainer: {
        flexDirection:"row",
        paddingTop: 40,
        paddingLeft: 25
      },
      watertxt: {
          padding:10,
          paddingLeft:25,
          fontSize:15,
          fontFamily:"TTNorms-Bold",
      },
      
      photobut: {
          paddingTop:10,
          flexDirection:'row',
          alignContent: 'space-between'
      }
});