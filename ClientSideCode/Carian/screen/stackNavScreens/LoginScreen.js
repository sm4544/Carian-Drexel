import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image, Alert
} from "react-native";
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';

export default class LoginScreen extends ValidationComponent {

  state = {
    email: "",
    password: "",
  };

  onPressRegister = () => {
    this.props.navigation.navigate("RegistrationScreen");
  };

  onPressLogin = () => {

    const isvalid = this.validate({
      email: { email: true, required: true },
      password: { password: true, required: true, minlength: 8 }

    });
    if (isvalid) {
      try {
        fetch("http://127.0.0.1:8000/login", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({            
            email: this.state.email,
            password: this.state.password            
          }),
        }).then(resp => {
          setTimeout(function () {
            if (resp.status != 200) {            
              alert("Error occured while posting data :" + resp.status + " : " + resp.statusText);
              return false;
            } else{
              alert("sucess" + resp.status);
            }
          }, 0);
        });
      } catch (e) {
        console.log(e);
      }    
    this.props.navigation.navigate('DrawerNavigationRoutes', { login: 'user' })
  }else{
    return false;
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
          value={this.state.email} />
      </View>
      {this.isFormValid ? <Text style={styles.errormessages}>
        {this.getErrorsInField("email")}
      </Text> : null}

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          ref="password" onChangeText={(password) => this.setState({ password })}
          value={this.state.password} />
      </View>
      {this.isFormValid ? <Text style={styles.errormessages}>
        {this.getErrorsInField("password")}
      </Text> : null}


      <TouchableOpacity>
        <Text style={styles.hyperlink}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => this.onPressLogin()}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => this.onPressRegister()}>
        <Text style={styles.hyperlink}>New user? Register Here</Text>
      </TouchableOpacity>
    </View>
  );
}
};
