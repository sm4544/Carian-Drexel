import React, { Component, useState } from 'react';
import { postStaffInfoProfileApi } from '../services/StaffInfoService';
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
      Highest_degree: '',
      Specilization: '',
      GPA: '',
      College_name: '',
      University_name: '',
      College_address: '',
      overall_work_experience: '',
      work_phone_number: '',
      work_email_address: '',
      hospital_name: '',
      Hospital_address: '',
      licence_number: '',
      doctor_fee: ''
    };
    this.onPressStaffProfile = this.onPressStaffProfile.bind(this);
  }

  onPressStaffProfile = () => {

    if (this.isValidForm()) {
      body = JSON.stringify({
        Highest_degree: this.state.Highest_degree,
        Specilization: this.state.Specilization,
        GPA: this.state.GPA,
        College_name: this.state.College_name,
        University_name: this.state.University_name,
        College_address: this.state.College_address,
        overall_work_experience: this.state.overall_work_experience,
        work_phone_number: this.state.work_phone_number,
        work_email_address: this.state.work_email_address,
        hospital_name: this.state.hospital_name,
        Hospital_address: this.state.Hospital_address,
        licence_number: this.state.licence_number,
        doctor_fee: this.state.doctor_fee
      });

      postStaffInfoProfileApi(body).thend((res) => {
        console.log(res);
        this.props.navigation.navigate('ConfirmationScreen', { name: name });


      });

    } else {
      return false;
    }
  };

  isValidForm = () => {
    return this.validate({

      Highest_degree: { required: true },
      Specilization: { required: true },
      GPA: { numbers: true, required: true },
      College_name: { required: true },
      University_name: { required: true },
      College_address: { required: true },
      overall_work_experience: {numbers:true, required: true },
      work_phone_number: { numbers: true, required: true },
      work_email_address: { email: true, required: true },
      hospital_name: { required: true },
      Hospital_address: { required: true },
      licence_number: { numbers: true, required: true },
      doctor_fee: { numbers: true, required: true },

    });
  }
  render() {

    var name = this.props.navigation.state.params.name;
    var profileid = this.props.navigation.state.params.profileid;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Staff Additional Details</Text>
          <Text style={styles.text}>Education</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Highest Degree"
              placeholderTextColor="white"
              ref="Highest_degree"
              onChangeText={(Highest_degree) => this.setState({ Highest_degree })}
              value={this.state.Highest_degree}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("Highest_degree")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Specilization"
              placeholderTextColor="white"
              ref="Specilization"
              onChangeText={(Specilization) => this.setState({ Specilization })}
              value={this.state.Specilization}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("Specilization")}
          </Text> : null}
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="GPA/CGPA"
              placeholderTextColor="white"
              ref="GPA"
              onChangeText={(GPA) => this.setState({ GPA })}
              value={this.state.GPA}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("GPA")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="College Name"
              placeholderTextColor="white"
              ref="College_name"
              onChangeText={(College_name) => this.setState({ College_name })}
              value={this.state.College_name}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("College_name")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="University Name"
              placeholderTextColor="white"
              ref="University_name"
              onChangeText={(University_name) => this.setState({ University_name })}
              value={this.state.University_name}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("University_name")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="College Address"
              placeholderTextColor="white"
              ref="College_address"
              onChangeText={(College_address) => this.setState({ College_address })}
              value={this.state.College_address}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("College_address")}
          </Text> : null}

          <Text style={styles.text}>WORK</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Over all Experience in years"
              placeholderTextColor="white"
              ref="overall_work_experience"
              onChangeText={(overall_work_experience) => this.setState({ overall_work_experience })}
              value={this.state.overall_work_experience}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("overall_work_experience")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital Name"
              placeholderTextColor="white"
              ref="hospital_name"
              onChangeText={(hospital_name) => this.setState({ hospital_name })}
              value={this.state.hospital_name}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("hospital_name")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="work email address"
              placeholderTextColor="white"
              ref="work_email_address"
              onChangeText={(work_email_address) => this.setState({ work_email_address })}
              value={this.state.work_email_address}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("work_email_address")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="work phone number"
              placeholderTextColor="white"
              ref="work_phone_number"
              onChangeText={(work_phone_number) => this.setState({ work_phone_number })}
              value={this.state.work_phone_number}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("work_phone_number")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital address"
              placeholderTextColor="white"
              ref="Hospital_address"
              onChangeText={(Hospital_address) => this.setState({ Hospital_address })}
              value={this.state.Hospital_address}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("Hospital_address")}
          </Text> : null}

          <Text style={styles.text}>License Details</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="License Number"
              placeholderTextColor="white"
              ref="licence_number"
              onChangeText={(licence_number) => this.setState({ licence_number })}
              value={this.state.licence_number}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("licence_number")}
          </Text> : null}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="doctor fee"
              placeholderTextColor="white"
              ref="doctor_fee"
              onChangeText={(doctor_fee) => this.setState({ doctor_fee })}
              value={this.state.doctor_fee}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("doctor_fee")}
          </Text> : null}
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