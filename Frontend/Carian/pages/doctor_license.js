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
  style,
} from "react-native";

import styles from "../styles/commonStyles";
import DropdownMenu from "react-native-dropdown-menu";
import ValidationComponent from "react-native-form-validator";

export default class DoctorLicense extends ValidationComponent {
  constructor(props) {
    super(props);
    // this.state = {
    //   role: "",
    //   firstName: "",
    //   lastName: "",
    //   mobileNumber: "",
    //   email: "",
    //   password: "",
    // };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="License Number"
              placeholderTextColor="white"
              ref="degree"
              onChangeText={(degree) => this.setState({ degree })}
              value={this.state.degreeName}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressRegister()}
          >
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
