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

      username: '',
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
      body = JSON.stringify({ username: this.state.username,   password: this.state.password  });
      
      postLoginApi(body).then((res) => {
        console.log(res);
        if (res.Message == "Incorrect Username/Password") {
          return false;
        }
        else {

          this.props.navigation.navigate('DrawerNavigationRoutes', { login: res.Profile_Type, name: res.FirstName+ ' ' + res.LastName, profileId: res.ProfileID })
        }
      });

    } else {
      return false;
    }
  };

  isValidForm = () => {
    return this.validate({
      username: { required: true },
      password: { password: true, required: true, minlength: 3 }

    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.AppTitle}>CARIAN</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="white"
            ref="username" onChangeText={(username) => this.setState({ username })}
            value={this.state.username} />
        </View>
        {this.isFormValid ? <Text style={styles.errormessages}>
          {this.getErrorsInField("username")}
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