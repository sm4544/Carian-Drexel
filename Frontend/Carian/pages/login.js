import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.AppTitle}>CARIAN</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Email / Username"
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
          onPress={() => navigate("Register")}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0E1",
    alignItems: "center",
  },
  AppTitle: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#D35400",
    fontStyle: "italic",
    paddingBottom: 30,
    paddingTop: 30,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderColor: "white",
    borderWidth: 2,
  },
  input: {
    height: 50,
    color: "white",
  },
  frgtpassword: {
    color: "black",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  button: {
    width: "80%",
    backgroundColor: "#CD6155",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
  },
});
