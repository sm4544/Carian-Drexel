import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text , ScrollView} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';

import ValidationComponent from 'react-native-form-validator';
import DatePicker from 'react-native-datepicker';
import { postAdminStaffApi, editAdminStaffApi } from '../services/adminStaffService';


export default class StaffDetailsScreen extends ValidationComponent {
 
 
 
    constructor(props) {
   
      super(props)
   
      this.state = {

        highestdegree: this.props.navigation.state.params.highestDegree,
        collegename: this.props.navigation.state.params.college_name,
        specilization: this.props.navigation.state.params.specialization,
        overallexperience: this.props.navigation.state.params.overAllExperience,
        licensenumber: this.props.navigation.state.params.licence_number,
       phonenumber: this.props.navigation.state.params.phonenumber,
       email: this.props.navigation.state.params.email,
       doctorfee: this.props.navigation.state.params.doctor_fee,
       profileid: this.props.navigation.state.params.profile_id,
       hospital_id: this.props.navigation.state.params.hospital_id,
       id: this.props.navigation.state.params.id,
   
      //   highestdegree: this.props.navigation.getParam('highestDegree'),

      };    
      
      this.onPressSubmit = this.onPressSubmit.bind(this);
      this.isValidForm = this.isValidForm.bind(this);

      
   
    }

   
    onPressSubmit = () => {
      var body = "";
      if (this.isValidForm()) {
        body = JSON.stringify({ highest_degree: this.state.highestdegree,   college_name: this.state.collegename,
          specilization: this.state.specilization, overall_work_experience: this.state.overallexperience,
          licence_number: this.state.licensenumber, work_phone_number: this.state.phonenumber,
          work_email_address: this.state.email, doctor_fee: this.state.doctorfee, profileid: this.state.profile_id, 
          hospital_id: this.state.hospital_id,});
        
          console.log(body); 
        postAdminStaffApi(body).then((res) => {
          console.log(res);
          if (res.message == 'Incorrect') {
            return false;
          }
          else {
            this.props.navigation.navigate('ManageStaffScreen');
           }
        });
  
      } 

   };


   onPressUpdate = () => {
    var body = "";
    if (this.isValidForm()) {
      body = JSON.stringify({ highest_degree: this.state.highestdegree,   college_name: this.state.collegename,
        specilization: this.state.specilization, overall_work_experience: this.state.overallexperience,
        licence_number: this.state.licensenumber, work_phone_number: this.state.phonenumber,
        work_email_address: this.state.email, doctor_fee: this.state.doctorfee, profileid: this.state.profile_id, 
        hospital_id: this.state.hospital_id, id: this.state.id});
      
       
      editAdminStaffApi(body).then((res) => {
        console.log(res);
        if (res.message == 'Incorrect') {
          return false;
        }
        else {
          this.props.navigation.navigate('ManageStaffScreen');
         }
      });

    } 

 };

  
    isValidForm = () => {
      return this.validate({
        highestdegree: { highestdegree: true, required: true },
        collegename: { collegename: true, required: true },
        experience: { experience: true, required: true },
        overallexperience: { overallexperience: true, required: true },
        licensenumber: { licensenumber: true, required: true },
        phonenumber: { phonenumber: true, required: true },
        specilization: { specilization: true, required: true },
        email: { email: true, required: true },
         doctorfee: { doctorfee: true, required: true },
		
      });
    }
  

    render() {
      const { country, region } = this.state;
      return (
        <ScrollView>
  
  
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Highest Degree"
              placeholderTextColor="white"
              ref="highestdegree"
              onChangeText={(highestdegree) => this.setState({ highestdegree })}
              value={this.state.highestdegree}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("highestdegree")}
            </Text>:null}
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="collegeName"
              placeholderTextColor="white"
              ref="collegename"
              onChangeText={(collegename) => this.setState({ collegename })}
              value={this.state.collegename}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("collegename")}
            </Text>:null}
		  
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Specilization"
              placeholderTextColor="white"
              ref="specilization"
              onChangeText={(specilization) => this.setState({ specilization })}
              value={this.state.specilization}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("specilization")}
            </Text>:null}
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="OverallExperience"
              placeholderTextColor="white"
              ref="overallexperience"
              onChangeText={(overallexperience) => this.setState({ overallexperience })}
              value={this.state.overallexperience}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("overallexperience")}
            </Text>:null}
		  
            

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
              ref="phonenumber"
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
              ref="email"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("email")}
            </Text>:null}
		  
<View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="LicenseNumber"
              placeholderTextColor="white"
              ref="licensenumber"
              onChangeText={(licensenumber) => this.setState({ licensenumber })}
              value={this.state.licensenumber}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("licensenumber")}
            </Text>:null}
		  

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="DoctorFee"
              placeholderTextColor="white"
              ref="doctorfee"
              onChangeText={(doctorfee) => this.setState({ doctorfee })}
              value={this.state.doctorfee}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("doctorfee")}
            </Text>:null}

			

            <View style={{ flexDirection:"row" }}>
            <TouchableOpacity onPress={this.onPressSubmit} activeOpacity={0.7} style={styles2.button} >
   
           <Text style={styles.buttonText}> Submit </Text>
 
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressUpdate} activeOpacity={0.7} style={styles2.button} >
   
           <Text style={styles.buttonText}> Update </Text>

          </TouchableOpacity>
          </View>


          </View>    
 </ScrollView> 

   
      );
    }

  }

  const styles2 = StyleSheet.create({
    button: {
      width: "50%",
      backgroundColor: "#CD6155",
      borderRadius: 18,
      borderColor: "white",
      borderWidth: 2,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 40,
    },
  });