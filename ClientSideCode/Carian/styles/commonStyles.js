import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F0F0E1",
      alignItems: "center",
      justifyContent:'center'
    },
    AppTitle: {
      fontWeight: "bold",
      fontSize: 40,
      color: "#D35400",
      fontStyle: "italic",
      paddingBottom: 30,
      paddingTop: 30,
    },
    inputView: {
      width: "80%",
      backgroundColor: "steelblue",
      borderRadius: 18,
      height: 50,
      marginTop: 20,
      justifyContent: "center",
      padding: 5,
      borderColor: "white",
      //borderWidth: 2,
    },
    input: {
      height: 100,
      color: "white",
      fontSize:20,
    },
    hyperlink: {
      color: "black",
      fontSize: 25,
      textDecorationLine: "underline",
    },
    button: {
      width: "80%",
      backgroundColor: "#CD6155",
      borderRadius: 18,
      borderColor: "white",
      borderWidth: 2,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 40,
    },
    buttonText: {
      color: "white",
      fontSize:25
    },
    image:{
        width: 250,
        height:300,
        borderRadius:20
    },
    dropdownstyle:{
      width: "80%",
      backgroundColor: "steelblue",
      borderRadius: 18,
      height: 50,
      marginTop: 20,
      //justifyContent: "center",
      //padding: 5,
      borderColor: "white",
    
    },
    ConfirmationText:{
        color:'black',
        fontSize: 30,
        fontStyle:"italic",
        alignItems:'center',
        backgroundColor:'steelblue',
        borderRadius: 15
    },
    errormessages:{
      width:'75%',
      color: 'red',
      textAlign:'left',
      alignItems:'flex-start',
      fontSize: 15

    }
  });