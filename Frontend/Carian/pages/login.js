import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image, Alert
} from "react-native";
import Register from './register';
import styles from '../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';

export default class Login extends ValidationComponent {
  state = {
    email: "",
    password: "",
  };

  onPressRegister = () => {
    this.props.navigation.navigate("Register");
  };
 
  onPressLogin = () => {
    const isvalid = this.validate({
      email: { email: true, required: true },
      password: { password: true, required: true, minlength: 8}

    });
    if(isvalid){
      this.props.navigation.navigate("CustomerDashboard");
    }

   
  };

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.AppTitle}>CARIAN</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"            
            ref="email" onChangeText={(email) => this.setState({ email })}
            value={this.state.email}/>
        </View>

        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            ref="password" onChangeText={(password) => this.setState({ password })}
            value={this.state.password}/>
        </View>
        {this.getErrorMessages?<Text style={styles.errormessages}>
            {this.getErrorMessages()}
          </Text>: null}
        

        <TouchableOpacity>
          <Text style={styles.frgtpassword}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPressLogin()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.onPressRegister()}>
          <Text style={styles.frgtpassword}>New user? Register Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
