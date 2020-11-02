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

import styles from '../../styles/commonStyles';
import ValidationComponent from "react-native-form-validator";

export default class PharmacyDetailsScreen extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {

        pharmacyname: '',
        pharmacyadd1: '',
        pharmacyadd2: '',
        phonenumber: '',
        registerdate: '',
        licensenumber: '',
      };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Pharmacy Name"
              placeholderTextColor="white"
              ref="pharmacyname" onChangeText={(pharmacyname) => this.setState({ pharmacyname })}
              value={this.state.pharmacyname}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Pharmacy Address1"
              placeholderTextColor="white"
              ref="pharmacyadd1" onChangeText={(pharmacyadd1) => this.setState({ pharmacyadd1 })}
              value={this.state.pharmacyadd1}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Pharmacy Address2"
              placeholderTextColor="white"
              ref="pharmacyadd2" onChangeText={(pharmacyadd2) => this.setState({ pharmacyadd2 })}
              value={this.state.pharmacyadd2}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
              ref="phonenumber" onChangeText={(phonenumber) => this.setState({ phonenumber })}
              value={this.state.phonenumber}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Registered Date"
              placeholderTextColor="white"
              ref="registerdate" onChangeText={(registerdate) => this.setState({ registerdate })}
              value={this.state.registerdate}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="License Number"
              placeholderTextColor="white"
              ref="licensenumber" onChangeText={(licensenumber) => this.setState({ licensenumber })}
              value={this.state.licensenumber}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('PharmacyScreen', {pharmacyname: this.state.pharmacyname,})}  >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
