import React, {Component, useState} from 'react';
import {PostProfileApi} from '../services/profileService';
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
} from 'react-native';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default class DoctorScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      profile_type: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      password: '',
    };
    this.onPressRegister = this.onPressRegister.bind(this);
  }

  onPressRegister = () => {
    this.props.navigation.navigate('ConfirmationScreen', { profile_type: 'Staff', name: 'Test Test' });
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.AppTitle}>Doctor's Details</Text>
          <Text style={styles.text}> Education</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Highest Degree"
              placeholderTextColor="white"
              ref="degree"
              onChangeText={(degree) => this.setState({degree})}
              value={this.state.degreeName}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Specilization/ Course Name"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="GPA/CGPA"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="College Name"
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
              placeholder="University State"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="University Country"
              placeholderTextColor="white"
            />
          </View>
          <Text style={styles.text}>WORK</Text>
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
          <Text style={styles.text}> License Details</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="License Number"
              placeholderTextColor="white"
              ref="degree"
              onChangeText={(degree) => this.setState({degree})}
              value={this.state.degreeName}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressRegister()}>
            <Text style={styles.buttonText}>Register/Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
