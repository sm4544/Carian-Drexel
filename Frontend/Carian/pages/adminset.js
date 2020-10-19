import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
} from "react-native";
export default class Adminset extends Component {
//   state = {
//     Addhos: '',
//  }
//  handleAdd = (text) => {
//     this.setState({ Addhos: text })
//  }
//  Addbutn = (Addhos) => {
//     alert('hospital added: ' + Addhos)
//  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
            {/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Add hospital"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleAdd}/> */}
{/* 
<TouchableOpacity
               style = {styles.button}
               onPress = {
                  () => this.Addbutn(this.state.Addhos)
               }>
               <Text style = {styles.buttonText}> Add </Text>
               </TouchableOpacity>
      
               <TouchableOpacity style = {styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style = {styles.button} onPress={()=>navigate("Hospitaldetails")}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>    

        <TouchableOpacity style = {styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
   
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0E1",
    alignItems: "center",
    // flexDirection: 'column',
    // justifyContent: 'space-between'
  },
  Textsize: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D35400",
    paddingBottom: 30,
    paddingTop: 30,
  },
  button: {
    width: "50%",
    backgroundColor: "#CD6155",
    borderRadius: 30,
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
    fontSize: 20,
  },
  input: {
    margin: 30,
    height: 40,
    borderColor: '#008CBA',
    borderWidth: 1
 },
});
