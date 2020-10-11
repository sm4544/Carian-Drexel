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
      firstName: '',
      lastName:'',
      mobileNumber:'',
      email:'',
      password:''
    };
  }
  onPressRegister = () => {
    const isvalid = this.validate({
      email: { email: true, required: true },
      password: { password: true, required: true, minlength: 8},
      firstName: {required: true},
      lastName: {required: true},
      mobileNumber: {numbers:true, required:true}
        
    });
    if(isvalid){
      this.props.navigation.navigate('ConfirmationScreen', { role: this.state.role, name: this.state.firstName + " " +this.state.lastName });
    }
  };
  render() {
    const { navigate} = this.props.navigation;
    
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
              ref="firstName" onChangeText={(firstName) => this.setState({ firstName })}
              value={this.state.fName} />
          </View>
          {this.isFormValid?<Text style={styles.errormessages}>
            {this.getErrorsInField("firstName")}
          </Text>: null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="white"
              ref="lastName" onChangeText={(lastName) => this.setState({ lastName })}
              value={this.state.lName} />
          </View>
          {this.isFormValid?<Text style={styles.errormessages}>
            {this.getErrorsInField("lastName")}
          </Text>: null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="white"
              keyboardType="number-pad"
              ref="mobileNumber" onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
              value={this.state.mobileNumber} />
          </View>
          {this.isFormValid?<Text style={styles.errormessages}>
            {this.getErrorsInField("mobileNumber")}
          </Text>: null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              ref="email" onChangeText={(email) => this.setState({ email })}
              value={this.state.email} />
          </View>
          {this.isFormValid?<Text style={styles.errormessages}>
            {this.getErrorsInField("email")}
          </Text>: null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              ref="password" onChangeText={(password) => this.setState({ password })}
              value={this.state.password} />
          </View>
          {this.isFormValid?<Text style={styles.errormessages}>
            {this.getErrorsInField("password")}
          </Text>: null}

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
        
          <TouchableOpacity style={styles.button}
            onPress={() => this.onPressRegister()}>

            <Text style={styles.buttonText}>Register/Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity

            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.hyperlink}> Already have an account? Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>



    );
  }
};
