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
      dropdowndata: [],
      
    };
    this.onPressStaffProfile = this.onPressStaffProfile.bind(this);
    
  }

  onPressStaffProfile = (name, profileid, profile_type) => {
    console.log(name + profileid + profile_type)

    if (this.isValidForm()) {
      console.log("inside if " + name + profileid + profile_type)
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
        department_id: 2,
        pharmacy_id: 1,
        lab_id: 1,

      });
      postStaffInfoProfileApi(body).then((res) => {
        console.log(res);
        if (res.Message == 'Added Staff') {
          console.log("inside navigation " + name + profileid + profile_type)
          this.props.navigation.navigate('ConfirmationScreen', { name: name });
        } else {
          console.log("inside else nav " + name + profileid + profile_type)
          return false;
        }
      });
    } else {
      console.log("inside else " + name + profileid + profile_type)
      return false;
    }
  };

  isValidForm = () => {
    return this.validate({
      Highest_degree: { required: true },
      
      College_name: { required: true },
      
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
    var overall_work_experience = [

      { label: '0', value: '0', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '1', value: '1', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '2', value: '2', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '3', value: '3', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '4', value: '4', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '5', value: '5', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '6', value: '6', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '7', value: '7', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '8', value: '8', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '9', value: '9', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '10', value: '10', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '11', value: '11', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '12', value: '12', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '13', value: '13', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '14', value: '14', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '15', value: '15', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '16', value: '16', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '17', value: '17', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '18', value: '18', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '19', value: '19', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: '20', value: '20', icon: () => <Icon name="flag" size={18} color="#900" /> },
  
      
    ]
    
    var specilization = [
      { label: 'Family physicians', value: 'Family physicians', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Pediatricians', value: 'Pediatricians', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Geriatric doctors', value: 'Geriatric doctors', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Allergists', value: 'Allergists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Dermatologists', value: 'Dermatologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Ophthalmologists', value: 'Ophthalmologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Infectious disease doctors', value: 'Infectious disease doctors', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Obstetrician/gynecologists', value: 'Obstetrician/gynecologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Cardiologists', value: 'Cardiologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Endocrinologists', value: 'Endocrinologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Gastroenterologists', value: 'Gastroenterologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Nephrologists', value: 'Nephrologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Urologists', value: 'Urologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Pulmonologists', value: 'Pulmonologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Otolaryngologists', value: 'Otolaryngologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Neurologists', value: 'Neurologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Psychiatrists', value: 'Psychiatrists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Oncologists', value: 'Oncologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Radiologists', value: 'Radiologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'General surgeons', value: 'General surgeons', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Orthopedic surgeons', value: 'Orthopedic surgeons', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Cardiac surgeons', value: 'Cardiac surgeons', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Anesthesiologists', value: 'Anesthesiologists', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Rheumatologists', value: 'Rheumatologists', icon: () => <Icon name="flag" size={18} color="#900" /> },

  ];
  

    return (
      <ScrollView>
        <View style={styles.container}>
          
          
          <Text style={styles.text}>Additional Details</Text>
          <Text style={styles.text}>Education</Text>
          <Text style={styles.label}>Highest Degree*</Text>
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

          <Text style={styles.label}>specilization*</Text>
          <DropDownPicker
            items={specilization}
            defaultValue={this.state.specilization}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom:20}}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              specilization: item.value
            })}
          />
         


         <Text style={styles.label}>College Name*</Text>
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
          <Text style={styles.label}>Select Hospital where you work*</Text>
          <DropDownPicker
            items={this.state.dropdowndata}
            defaultValue={this.state.hospital_id}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom:20}}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              hospital_id: item.value
            })}
          />

          <Text style={styles.label}>over all work experience*</Text>
          <DropDownPicker
            items={overall_work_experience}
            defaultValue={this.state.overall_work_experience}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom:20}}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              overall_work_experience: item.value
            })}
          />          


          <Text style={styles.label}>work email address*</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Test@Carian.com"
              placeholderTextColor="white"
              ref="work_email_address"
              onChangeText={(work_email_address) => this.setState({ work_email_address })}
              value={this.state.work_email_address}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("work_email_address")}
          </Text> : null}
          <Text style={styles.label}>work phone number*</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="123456789"
              placeholderTextColor="white"
              ref="work_phone_number"
              keyboardType="number-pad"
              onChangeText={(work_phone_number) => this.setState({ work_phone_number })}
              value={this.state.work_phone_number}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("work_phone_number")}
          </Text> : null}



          <Text style={styles.text}>License Details</Text>
          <Text style={styles.label}>License Number*</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Test100"
              placeholderTextColor="white"
              ref="licence_number"
              onChangeText={(licence_number) => this.setState({ licence_number })}
              value={this.state.licence_number}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("licence_number")}
          </Text> : null}

          <Text style={styles.label}>Your fee per visit*</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="100"
              placeholderTextColor="white"
              ref="doctor_fee"
              keyboardType="number-pad"
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