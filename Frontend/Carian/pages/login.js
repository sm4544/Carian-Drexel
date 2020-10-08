import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Register from './register';
import styles from '../styles/commonStyles';

export default class Login extends Component {
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

  navigateToRegistration= () => {
    return <Register></Register>;
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
          onPress={() => navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.navigateToRegistration()}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
