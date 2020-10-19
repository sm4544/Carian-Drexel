import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
} from "react-native";
export default class Doctordetails extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
<View style={styles.textval}>
<View style={styles.inputval}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Doctor Id</Text>
      <TextInput style={{width: 200 ,borderColor: '#008CBA',
    borderWidth: 2, marginLeft: 20, justifyContent: 'flex-start'}}/>
    </View>
    <View style={styles.inputval}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Qualification</Text>
      <TextInput style={{width: 200, borderColor: '#008CBA',
    borderWidth: 2, marginLeft: 20, justifyContent: 'flex-start'}}/>
    </View>
    <View style={styles.inputval}>
      <Text style={{fontSize: 20,fontWeight: "bold"}}>Experience</Text>
      <TextInput style={{width: 200, borderColor: '#008CBA',
    borderWidth: 2, marginLeft: 20}}/>
    </View>
    <View style={styles.inputval}>
      <Text style={{fontSize: 20,fontWeight: "bold"}}>Phone Number</Text>
      <TextInput style={{width: 200, borderColor: '#008CBA',
    borderWidth: 2, marginLeft: 20}}/>
    </View>
    <View style={styles.inputval}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Email</Text>
      <TextInput style={{width: 200, borderColor: '#008CBA',
    borderWidth: 2, marginLeft: 20}}/>
    </View>

    <View style={styles.inputval}>
      <Text style={{fontSize: 20,fontWeight: "bold"}}>Register Number</Text>
      <TextInput style={{width: 200, borderColor: '#008CBA',
    borderWidth: 2, marginLeft: 20}}/>
    </View>

    <TouchableOpacity style = {styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
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
  textval: {
    flexDirection: 'column',
     flex: 1, 
     justifyContent: 'flex-start',
     marginTop:50  
  },
  inputval: {
    flexDirection: 'row',
     marginBottom: 30,
      marginLeft: 10   
  },
});
