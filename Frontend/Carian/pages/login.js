import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from "react-native";
import Register from './register';
import styles from '../styles/commonStyles';

export default class Login extends React.Component{
  state = {
    email: "",
    password: "",
  };

  email = (text) => {
    this.setState({ email: text });
  };

  password = (text) => {
    this.setState({ password: text });
  };

  onPressRegister= () => {
    this.props.navigation.navigate("Register");
  };

  onPressLogin = () => {
    
    this.props.navigation.navigate("CustomerDashboard");
  };

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Text style={styles.AppTitle}>CARIAN</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            onChangeText={this.email}
          />
        
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            onChangeText={this.password}
          />
        </View>
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
