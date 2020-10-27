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

export default class StaffDetailsScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
   
        doctorId: '',
        qualification: '',
        experience: '',
        phonenumber: '',
        email: '',
        registernumber: '',
   
      }

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
              onChangeText={(doctorId) => this.setState({ doctorId })}
              value={this.state.doctorId}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Qualification"
              placeholderTextColor="white"
              onChangeText={(qualification) => this.setState({ qualification })}
              value={this.state.qualification}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Experience"
              placeholderTextColor="white"
              onChangeText={(experience) => this.setState({ experience })}
              value={this.state.experience}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
              onChangeText={(phonenumber) => this.setState({ phonenumber })}
              value={this.state.phonenumber}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Register Number"
              placeholderTextColor="white"
              onChangeText={(registernumber) => this.setState({ registernumber })}
              value={this.state.registernumber}
            />
          </View>

          <TouchableOpacity
            style={styles.button} onPress={() => this.props.navigation.navigate('ManageStaffScreen',)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
