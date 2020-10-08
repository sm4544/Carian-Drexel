import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F0F0E1",
      alignItems: "center",
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
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
      borderColor: "white",
      borderWidth: 2,
    },
    input: {
      height: 50,
      color: "white",
    },
    frgtpassword: {
      color: "black",
      fontSize: 20,
      textDecorationLine: "underline",
    },
    button: {
      width: "80%",
      backgroundColor: "#CD6155",
      borderRadius: 25,
      borderColor: "white",
      borderWidth: 2,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10,
    },
    buttonText: {
      color: "white",
    },
  });