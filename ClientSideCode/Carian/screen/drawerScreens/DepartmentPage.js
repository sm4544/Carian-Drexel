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
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import ValidationComponent from "react-native-form-validator";
import { postDepartmentInfoApi } from '../services/DepartmentService';
var radio_props = [
  { label: 'Yes', value: true },
  { label: 'No', value: false }
];

export default class DepartmentPage extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      is_same_as_hospital_address: true,
      Department_name: '',
      addressine1: '',
      addressine2: '',
      city: '',
      state: '',
      pincode: '',
      department_phone_number: '',
      departmentAdmin_name: '',
      email: '',
    };
  }

  isValidForm = () => {
    return this.validate({
      Department_name: { required: true },
      is_same_as_hospital_address: { required: true },
      addressine1: { required: true },
      addressine2: { required: true },
      city: { required: true },
      state: { required: true },
      pincode: { required: true },
      department_phone_number: { numbers: true, required: true },
      departmentAdmin_name: { required: true },
      email: { required: true },

    });
  };


  onPressDepartmentInfo = () => {
    
    if (this.isValidForm()) {
      body = JSON.stringify({
        name: this.state.Department_name,
        is_same_as_hospital_address: this.state.is_same_as_hospital_address,
        addressine1: this.state.addressine1,
        addressine2: this.state.addressine2,
        city: this.state.city,
        state: this.state.state,
        pincode: this.state.pincode,
        department_phone_number: this.state.department_phone_number,
        departmentAdmin_name: this.state.departmentAdmin_name,
        email: this.state.email,
        hospital: 'Apolo',
      });
      console.log(body)
      postDepartmentInfoApi(body).then((res) => {
        if (res.Message == 'Added Department Staff'){

        this.props.navigation.navigate('DepartmentConfirmationScreen', { Department_name: this.state.Department_name });
        }
      }).catch((error) => {
        console.log(error);

      });

    }
    else {
      return false;
    }
  };

  render() {
    const hospital_id = this.props.navigation.state.params.hospital_id;
    const profileId = this.props.navigation.state.params.profileId;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="name of the department"
              placeholderTextColor="white"
              ref="Department_name" onChangeText={(Department_name) => this.setState({ Department_name })}
              value={this.state.Department_name}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("Department_name")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="contact person name"
              placeholderTextColor="white"
              ref="departmentAdmin_name" onChangeText={(departmentAdmin_name) => this.setState({ departmentAdmin_name })}
              value={this.state.departmentAdmin_name}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("departmentAdmin_name")}
          </Text> : null}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="contact email"
              placeholderTextColor="white"
              ref="email" onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("email")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
              ref="department_phone_number" onChangeText={(department_phone_number) => this.setState({ department_phone_number })}
              value={this.state.department_phone_number}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("department_phone_number")}
          </Text> : null}

          <Text>Address same as Hospital address ?</Text>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => { this.setState({ is_same_as_hospital_address: value }) }}
          />
          <View>
            {!this.state.is_same_as_hospital_address ? (
              <View>

                <View style={styles.inputView}>
                  <TextInput style={styles.input}
                    placeholder="Address line 1          "
                    placeholderTextColor="white"
                    ref="addressine1" onChangeText={(addressine1) => this.setState({ addressine1 })}
                    value={this.state.addressine1}
                  />
                </View>
                {this.isFormValid ? <Text style={styles.errormessages}>
                  {this.getErrorsInField("addressine1")}
                </Text> : null}

                <View style={styles.inputView}>
                  <TextInput style={styles.input}
                    placeholder="Address line 2          "
                    placeholderTextColor="white"
                    ref="addressine2" onChangeText={(addressine2) => this.setState({ addressine2 })}
                    value={this.state.addressine2}
                  />
                </View>
                {this.isFormValid ? <Text style={styles.errormessages}>
                  {this.getErrorsInField("addressine2")}
                </Text> : null}

                <View style={styles.inputView}>
                  <TextInput style={styles.input}
                    placeholder="City Name          "
                    placeholderTextColor="white"
                    ref="city" onChangeText={(city) => this.setState({ city })}
                    value={this.state.city}
                  />
                </View>
                {this.isFormValid ? <Text style={styles.errormessages}>
                  {this.getErrorsInField("city")}
                </Text> : null}

                <View style={styles.inputView}>
                  <TextInput style={styles.input}
                    placeholder="State Name          "
                    placeholderTextColor="white"
                    ref="state" onChangeText={(state) => this.setState({ state })}
                    value={this.state.state}
                  />
                </View>
                {this.isFormValid ? <Text style={styles.errormessages}>
                  {this.getErrorsInField("state")}
                </Text> : null}

                <View style={styles.inputView}>
                  <TextInput style={styles.input}
                    placeholder="Zip code          "
                    placeholderTextColor="white"
                    ref="pincode" onChangeText={(pincode) => this.setState({ pincode })}
                    value={this.state.pincode}
                  />
                </View>
                {this.isFormValid ? <Text style={styles.errormessages}>
                  {this.getErrorsInField("pincode")}
                </Text> : null}


              </View>

            ) : null}
          </View>


          <TouchableOpacity onPress={this.onPressDepartmentInfo} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.buttonText}> Submit </Text>

          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}
