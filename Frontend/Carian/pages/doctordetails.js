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
import ValidationComponent from "react-native-form-validator";

export default class Doctordetails extends ValidationComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Doctor Id"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Qualification"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Experience"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Register Number"
              placeholderTextColor="white"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
