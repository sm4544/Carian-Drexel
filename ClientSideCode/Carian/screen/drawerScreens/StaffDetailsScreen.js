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
        registernumber: ''
      }
  }

  isValidForm = () => {
    return this.validate({  
      doctorId: { required: true },
      qualification: { required: true },
      experience:{ required: true },
      phonenumber: { numbers: true, required: true },
      registerdate: { required: true },       
      email: {  email: true,required: true }       
    });
  };
  
 
  onPressDoctorStaffInfo = () => {
    if (this.isValidForm()) {
      body = JSON.stringify({
        doctorId: this.state.doctorId,
        qualification: this.state.qualification,
        experience: this.state.experience,
        phonenumber: this.state.phonenumber,
        registerdate: this.state.registerdate,
        email: this.state.email,
        
      });
   console.log(body);
   this.props.navigation.navigate('ManageStaffScreen',);          
    }
  };

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
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("doctorId")}
            </Text>:null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Qualification"
              placeholderTextColor="white"
              onChangeText={(qualification) => this.setState({ qualification })}
              value={this.state.qualification}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("qualification")}
            </Text>:null}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Experience"
              placeholderTextColor="white"
              onChangeText={(experience) => this.setState({ experience })}
              value={this.state.experience}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("experience")}
            </Text>:null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
              onChangeText={(phonenumber) => this.setState({ phonenumber })}
              value={this.state.phonenumber}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("phonenumber")}
            </Text>:null}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("email")}
            </Text>:null}
         

          
          <TouchableOpacity onPress={this.onPressDoctorStaffInfo} activeOpacity={0.7} style={styles.button} >   
          <Text style={styles.buttonText}> Submit </Text>

    </TouchableOpacity>  
        </View>
      </ScrollView>
    );
  }
}
