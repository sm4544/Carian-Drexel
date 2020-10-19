import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
  Alert,
} from "react-native";
import { color } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Iconpharm from 'react-native-vector-icons/MaterialCommunityIcons'
import Icondoc from 'react-native-vector-icons/Fontisto'


export default class Dashboard extends Component {
  render(){

    const { navigate } = this.props.navigation;
    const hospitalbutton = (
      <Icon.Button name="hospital" backgroundColor="#2ed397" size ={100}  onPress={()=>navigate("Adminset")}>
         <Text style={{ color: 'white', fontSize: 30 }}>
           Hospital   </Text>
       </Icon.Button>
     );
     const pharmacybutton = (
     <Iconpharm.Button name="pharmacy" backgroundColor="blue" size ={100} onPress={()=>navigate("Pharmset")}>
         <Text style={{ color: 'white', fontSize: 30 }}>
           Pharmacy
         </Text>
       </Iconpharm.Button>
     );
     
     const doctorbutton = (
       <Icondoc.Button name="doctor" backgroundColor="#6d9581" size ={100} onPress={()=>navigate("Doctorset")}>
         <Text style={{ color: 'white', fontSize: 30 }}>
           Doctor       </Text>
       </Icondoc.Button>
     );
     
     const labbutton = (
       <Icondoc.Button name="laboratory" backgroundColor="#268fae"  size ={100} onPress={()=>navigate("Labset")}>
         <Text style={{ color: 'white', fontSize: 30 }}>
         Laboratory
         </Text>
       </Icondoc.Button>
     );
     
    return (
   // <Text style={styles.Textsize}>Welcome to Dashboard</Text>;
   <View style={styles.container}>
   <TouchableOpacity>  
            {hospitalbutton}  
         </TouchableOpacity>  
    
        <TouchableOpacity style={{marginTop: 50}}>  
           {pharmacybutton}  
         </TouchableOpacity>  
   
   
        <TouchableOpacity style={{marginTop: 50}}>  
           {doctorbutton}  
         </TouchableOpacity>  
         <TouchableOpacity style={{marginTop: 50}}>  
           {labbutton}  
         </TouchableOpacity>  
   </View>
    );
    

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0E1",    
    alignItems: 'center',   
    padding: 20  
  },
  Textsize: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D35400",
    paddingBottom: 30,
    paddingTop: 30,
  },
});
