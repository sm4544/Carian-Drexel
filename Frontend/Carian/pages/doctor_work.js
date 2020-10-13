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

export default class DoctorWork extends ValidationComponent {
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
              placeholder="Experience in years"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Specilization"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital Name"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="University Name"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital State"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital Country"
              placeholderTextColor="white"
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
