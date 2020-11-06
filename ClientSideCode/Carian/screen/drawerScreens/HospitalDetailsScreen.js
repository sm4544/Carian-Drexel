import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text , ScrollView} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
export default class HospitalDetailsScreen extends ValidationComponent {
 
    constructor(props) {   
      super(props);   
      this.state = {   
        hospitalname: '',
        hospitaladd1: '',
        hospitaladd2: '',
        phonenumber: '',
        registerdate: '',
        licensenumber: '',   
      };
      this.onPressHospitalInfo = this.onPressHospitalInfo.bind(this);
   
    }

    isValidForm = () => {
      return this.validate({  
        hospitalname: { required: true },
        hospitaladd1: { required: true },
        hospitaladd2:{ required: true },
        phonenumber: { numbers: true, required: true },
        registerdate: { required: true },       
        licensenumber: { numbers: true, required: true },          
      });
    };
    
   
    onPressHospitalInfo = () => {
      if (this.isValidForm()) {
        body = JSON.stringify({

          hospitalname: this.state.hospitalname,
          hospitaladd1: this.state.hospitaladd1,
          hospitaladd2: this.state.hospitaladd2,
          phonenumber: this.state.phonenumber,
          registerdate: this.state.registerdate,
          licensenumber: this.state.licensenumber
        });
             console.log(body);
        this.props.navigation.navigate('HospitalScreen', { login: this.state.hospitalname});          
      }
    };
   
    render() {
      return (
   
        <ScrollView>
        <View style={styles.container}>
  
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Name"
                placeholderTextColor="white"
                ref="hospitalname" 
                onChangeText={(hospitalname) => this.setState({ hospitalname })}
                value={this.state.hospitalname}
               />
              </View>
                {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("hospitalname")}
            </Text>:null}
            
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Address1"
                placeholderTextColor="white"
                ref="hospitaladd1" onChangeText={(hospitaladd1) => this.setState({ hospitaladd1 })}
                value={this.state.hospitaladd1}
              />
                </View>
               {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("hospitaladd1")}
            </Text>:null}
          
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Address2"
                placeholderTextColor="white"
                ref="hospitaladd2" onChangeText={(hospitaladd2) => this.setState({ hospitaladd2 })}
                value={this.state.hospitaladd2}
              />
                </View>
              {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("hospitaladd2")}
            </Text>:null}
               
          
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="white"
                ref="phonenumber" onChangeText={(phonenumber) => this.setState({ phonenumber })}
                value={this.state.phonenumber}
              />
              </View>
               {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("phonenumber")}
            </Text>:null}
            
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Registered Date"
                placeholderTextColor="white"
                ref="registerdate" onChangeText={(registerdate) => this.setState({ registerdate })}
                value={this.state.registerdate}
              />
              </View>
               {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("registerdate")}
            </Text>:null}
            
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="License Number"
                placeholderTextColor="white"
                ref="licensenumber" onChangeText={(licensenumber) => this.setState({ licensenumber })}
                value={this.state.licensenumber}
              />
               </View>
               {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("licensenumber")}
            </Text>:null}
           
   
            <TouchableOpacity onPress={this.onPressHospitalInfo} activeOpacity={0.7} style={styles.button} >
   
           <Text style={styles.buttonText}> Submit </Text>
 
            </TouchableOpacity>      

  
          </View>         
          </ScrollView> 
   
      );
    }
  }

  