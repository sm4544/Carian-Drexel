import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  style
} from "react-native";

import styles from '../styles/commonStyles';
import DropdownMenu from 'react-native-dropdown-menu';
import ValidationComponent from 'react-native-form-validator';

export default class Register extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {      
      role: '',
      fName: '',
      lName:'',
      mnumber:'',
      email:'',
      password:''
    };
  }
  onPressRegister = () => {
    const isvalid = this.validate({
      email: { email: true, required: true },
      password: { password: true, required: true, minlength: 8},
      fName: {required: true},
      lName: {required: true},
      mnumber: {numbers:true}
        
    });
    if(isvalid){
      this.props.navigation.navigate('ConfirmationScreen', { role: this.state.role, name: this.state.fName + " " +this.state.lName });
    }
  };
  render() {
    
    var data = [["Customer", "Admin", "Doctor", "Hospital Staff", "Pharmacy Assistant", "Lab Assistant"]];
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.AppTitle}>CARIAN</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="white"
              ref="fName" onChangeText={(fName) => this.setState({ fName })}
              value={this.state.fName} />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="white"
              ref="lName" onChangeText={(lName) => this.setState({ lName })}
              value={this.state.lName} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="white"
              keyboardType="number-pad"
              ref="mnumber" onChangeText={(mnumber) => this.setState({ mnumber })}
              value={this.state.mnumber} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              ref="email" onChangeText={(email) => this.setState({ email })}
              value={this.state.email} />

          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              ref="password" onChangeText={(password) => this.setState({ password })}
              value={this.state.password} />
          </View>

          <View style={styles.dropdownstyle}>
            <DropdownMenu
              style={{ flexHorizantal: 1 }}
              bgColor={"steelblue"}
              tintColor={"#666666"}
              activityTintColor={"green"}
              handler={(selection, row) =>
                this.setState({ role: data[selection][row] })
              }
              data={data}>
            </DropdownMenu>
          </View>
          <Text style={styles.errormessages}>
            {this.getErrorMessages()}
          </Text>

          <TouchableOpacity style={styles.button}
            onPress={() => this.onPressRegister()}>

            <Text style={styles.buttonText}>Register/Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity

            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.frgtpassword}> Already have an account? Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>



    );
  }
};
