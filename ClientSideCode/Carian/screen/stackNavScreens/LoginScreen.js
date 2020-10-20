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
import fetch from 'node-fetch';
import { postLoginApi } from '../services/profileService'

export default class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {

      email: '',
      password: ''
    };
    this.onPressRegister = this.onPressRegister.bind(this);
    this.onPressLogin = this.onPressLogin.bind(this);
    this.isValidForm = this.isValidForm.bind(this);

  }

  onPressRegister = () => {
    this.props.navigation.navigate("RegistrationScreen");
  };

  onPressLogin = () => {
    if (this.isValidForm()) {
      body = JSON.stringify({ email: this.state.email,   password: this.state.password  });
      
      postLoginApi(body).then((res) => {
        console.log(res.message);
        if (res.message == 'Incorrect Username/Password') {
          return false;
        }
        else {
          this.props.navigation.navigate('DrawerNavigationRoutes', { login: 'user' })
        }
      });

    } else {
      return false;
    }
  };

  isValidForm = () => {
    return this.validate({
      email: { email: true, required: true },
      password: { password: true, required: true, minlength: 8 }

    });
  }

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
