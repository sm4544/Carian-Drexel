import React, { Component, useState } from 'react';
import { postStaffInfoProfileApi } from '../services/StaffInfoService';
import { getAllHospitals } from '../services/hospitalService'
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
      hospital_id: '',
      College_name: '',
      overall_work_experience: '',
      work_phone_number: '',
      work_email_address: '',
      licence_number: '',
      doctor_fee: '',
      name: '',
      profileid: '',
      dropdowndata: []
    };
    this.onPressStaffProfile = this.onPressStaffProfile.bind(this);
  }

  onPressStaffProfile = (name, profileid, profile_type) => {
    console.log(name + profileid + profile_type)

    if (this.isValidForm()) {
      console.log("inside if "+ name + profileid + profile_type)
      const body = JSON.stringify({
        highest_degree: this.state.Highest_degree,
        specilization: this.state.Specilization,
        college_name: this.state.College_name,
        overall_work_experience: this.state.overall_work_experience,
        work_phone_number: this.state.work_phone_number,
        work_email_address: this.state.work_email_address,
        licence_number: this.state.licence_number,
        doctor_fee: this.state.doctor_fee,
        profileid: profileid,
        hospital_id: this.state.hospital_id,
        department_id: 1,
        pharmacy_id: 1,
        lab_id: 1,

      });
      postStaffInfoProfileApi(body).then((res) => {
        console.log(res);
        if(res.Message == 'Added Staff'){
          console.log("inside navigation "+ name + profileid + profile_type)
          this.props.navigation.navigate('ConfirmationScreen', { name: name });
        }else{
          console.log("inside else nav "+ name + profileid + profile_type)
          return false;
        }        
      });
    } else {
      console.log("inside else "+ name + profileid + profile_type)
      return false;
    }
  };

  isValidForm = () => {
    return this.validate({
      Highest_degree: { required: true },
      Specilization: { required: true },
      College_name: { required: true },
      overall_work_experience: { numbers: true, required: true },
      work_phone_number: { numbers: true, required: true },
      work_email_address: { email: true, required: true },
      licence_number: { numbers: true, required: true },
      doctor_fee: { numbers: true, required: true },
    });
  }

  componentDidMount() {
    var tempdata = []
    getAllHospitals()
      .then(results => {
        results.forEach((data) => {
          tempdata.push({
            value: data.value,
            label: data.label
          });

        });
      });
    this.setState({
      dropdowndata: tempdata
    });

  }
  render() {

    var name = this.props.navigation.state.params.name;
    var profileid = this.props.navigation.state.params.profileId;
    var profile_type = this.props.navigation.state.params.profile_type;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Additional Details</Text>
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

          <Text style={styles.text}>WORK</Text>

          <DropDownPicker
            items={this.state.dropdowndata}
            defaultValue={this.state.hospital_id}
            containerStyle={{ height: 50 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              hospital_id: item.value
            })}
          />

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
            onPress={() => this.onPressStaffProfile(name, profileid, profile_type)}>
            <Text style={styles.buttonText}>Register/Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={styles.hyperlink}> Already have an account? Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}