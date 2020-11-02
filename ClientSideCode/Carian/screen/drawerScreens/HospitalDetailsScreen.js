import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text , ScrollView} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';



export default class HospitalDetailsScreen extends Component {
 
 
 
    constructor(props) {
   
      super(props)
   
      this.state = {
   
        hospitalname: '',
        hospitaladd1: '',
        hospitaladd2: '',
        phonenumber: '',
        registerdate: '',
        licensenumber: '',
   
      }
   
    }

    
   
    Send_Data_Function = () => {

      // this.props.navigation.navigate("DisplayHospitalScreen", {
      //   NameOBJ: this.state.hospitalname,
        this.props.navigation.navigate('HospitalScreen', { login: this.state.hospitalname, });
   
      // this.props.navigation.navigate('DisplayHospitalScreen', {
      //   NameOBJ: this.state.hospitalname,
      // });
   
    }
   
    render() {
      return (
   
        <ScrollView>
        <View style={styles.container}>
  
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Name"
                placeholderTextColor="white"
                ref="hospitalname" 
                onChangeText={(hospitalname) => this.setState({ hospitalname })}
                value={this.state.hospitalname}
               />
            </View>
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Address1"
                placeholderTextColor="white"
                ref="hospitaladd1" onChangeText={(hospitaladd1) => this.setState({ hospitaladd1 })}
                value={this.state.hospitaladd1}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Address2"
                placeholderTextColor="white"
                ref="hospitaladd2" onChangeText={(hospitaladd2) => this.setState({ hospitaladd2 })}
                value={this.state.hospitaladd2}
              />
            </View>
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="white"
                ref="phonenumber" onChangeText={(phonenumber) => this.setState({ phonenumber })}
                value={this.state.phonenumber}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Registered Date"
                placeholderTextColor="white"
                ref="registerdate" onChangeText={(registerdate) => this.setState({ registerdate })}
                value={this.state.registerdate}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="License Number"
                placeholderTextColor="white"
                ref="licensenumber" onChangeText={(licensenumber) => this.setState({ licensenumber })}
                value={this.state.licensenumber}
              />
            </View>
   
            <TouchableOpacity onPress={this.Send_Data_Function} activeOpacity={0.7} style={styles.button} >
   
           <Text style={styles.buttonText}> Submit </Text>
 
            </TouchableOpacity>

            

  
          </View>         
          </ScrollView>
  
  
  

 
   
      );
    }
  }

  