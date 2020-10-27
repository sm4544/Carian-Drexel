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

export default class LabDetailsScreen extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {

      labname: '',
      labadd1: '',
      labadd2: '',
      phonenumber: '',
      licensenumber: '',
      registerdate: '',
      hospitalid: '',
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
              placeholder="Lab Name"
              placeholderTextColor="white"
              ref="labname" onChangeText={(labname) => this.setState({labname})}
              value={this.state.labname}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Lab Address1"
              placeholderTextColor="white"
              ref="labadd1" onChangeText={(labadd1) => this.setState({labadd1})}
              value={this.state.labadd1}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Lab Address2"
              placeholderTextColor="white"
              ref="labadd2" onChangeText={(labadd2) => this.setState({labadd2})}
              value={this.state.labadd2}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
              ref="phonenumber" onChangeText={(phonenumber) => this.setState({phonenumber})}
              value={this.state.phonenumber}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="License Number"
              placeholderTextColor="white"
              ref="licensenumber" onChangeText={(licensenumber) => this.setState({licensenumber})}
              value={this.state.licensenumber}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Registered Date"
              placeholderTextColor="white"
              ref="registerdate" onChangeText={(registerdate) => this.setState({registerdate})}
              value={this.state.registerdate}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital Id"
              placeholderTextColor="white"
              ref="hospitalid" onChangeText={(hospitalid) => this.setState({hospitalid})}
              value={this.state.hospitalid}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('LabScreen', {labname: this.state.labname,})}  >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
