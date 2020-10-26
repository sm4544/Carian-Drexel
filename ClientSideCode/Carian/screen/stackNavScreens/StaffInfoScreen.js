import React, {Component, useState} from 'react';
import {postStaffInfoProfileApi} from '../services/StaffInfoService';
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

export default class StaffInfoScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      Experience: '',
      degree: '',
      Specilization: '',
      GPA: '',
      College: '',
      University: '',
      U_state:'',
      U_country:'',
      H_name:'',
      H_state:'',
      H_country:'',
      License:'',
    };
    this.onPressStaffProfile = this.onPressStaffProfile.bind(this);
  }

  onPressStaffProfile = () => {
    
    if (this.isValidForm()) {
      body = JSON.stringify({ Experience: this.state.Experience,   degree: this.state.degree  });
      postStaffInfoProfileApi(body).then((res) => {
        console.log(res);
        this.props.navigation.navigate('ConfirmationScreen');
        if (res.message == 'Incorrect Username/Password') {
          return false;
        }
        else{
          this.props.navigation.navigate('ConfirmationScreen');
        }
        
      });

    } else {
      return false;
    }
  };

  isValidForm = () => {
    return this.validate({
      Experience: { Experience: true, required: true },
      degree: { degree: true, required: true }

    });
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.AppTitle}>Doctor's Details</Text>
          <Text style={styles.text}>Education</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Highest Degree"
              placeholderTextColor="white"
              ref="degree"
              onChangeText={(degree) => this.setState({degree})}
              value={this.state.degree}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Specilization/ Course Name"
              placeholderTextColor="white"
              ref="Specilization"
              onChangeText={(Specilization) => this.setState({Specilization})}
              value={this.state.Specilization}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="GPA/CGPA"
              placeholderTextColor="white"
              ref="GPA"
              onChangeText={(GPA) => this.setState({GPA})}
              value={this.state.GPA}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="College Name"
              placeholderTextColor="white"
              ref="College"
              onChangeText={(College) => this.setState({College})}
              value={this.state.College}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="University Name"
              placeholderTextColor="white"
              ref="University"
              onChangeText={(University) => this.setState({University})}
              value={this.state.University}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="University State"
              placeholderTextColor="white"
              ref="U_state"
              onChangeText={(U_state) => this.setState({U_state})}
              value={this.state.U_state}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="University Country"
              placeholderTextColor="white"
              ref="U_country"
              onChangeText={(U_country) => this.setState({U_country})}
              value={this.state.U_country}
            />
          </View>
          <Text style={styles.text}>WORK</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Experience in years"
              placeholderTextColor="white"
              ref="Experience"
              onChangeText={(Experience) => this.setState({Experience})}
              value={this.state.Experience}
            />
          </View>
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital Name"
              placeholderTextColor="white"
              ref="H_name"
              onChangeText={(H_name) => this.setState({H_name})}
              value={this.state.H_name}
            />
          </View>

        
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital State"
              placeholderTextColor="white"
              ref="H_state"
              onChangeText={(H_state) => this.setState({H_state})}
              value={this.state.H_state}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital Country"
              placeholderTextColor="white"
              ref="H_country"
              onChangeText={(H_country) => this.setState({H_country})}
              value={this.state.H_country}
            />
          </View>
          <Text style={styles.text}>License Details</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="License Number"
              placeholderTextColor="white"
              ref="License"
              onChangeText={(License) => this.setState({License})}
              value={this.state.License}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressStaffProfile()}>
            <Text style={styles.buttonText}>Register/Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
