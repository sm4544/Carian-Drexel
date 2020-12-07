import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text , ScrollView} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';

import DatePicker from 'react-native-datepicker'
import { postAdminLabApi, editAdminLabApi } from '../services/adminLabService'
import ValidationComponent from 'react-native-form-validator';

export default class LabDetailsScreen extends ValidationComponent {
 
 
 
    constructor(props) {
   
      super(props)
   
      this.state = {

        labname: this.props.navigation.state.params.name,
        labadd1: this.props.navigation.state.params.addressine1,
        labadd2: this.props.navigation.state.params.addressine2,
        phonenumber: this.props.navigation.state.params.phonenumber,
        licensenumber: this.props.navigation.state.params.licence_number,
       date: this.props.navigation.state.params.originally_registered_date,
       city: this.props.navigation.state.params.city,
       state: this.props.navigation.state.params.state,
       pincode: this.props.navigation.state.params.pincode,
       hospitalid: this.props.navigation.state.params.hospital_id,
       id: this.props.navigation.state.params.id,
   
      //   labname: this.props.navigation.getParam('name'),

      };    
      
      this.onPressSubmit = this.onPressSubmit.bind(this);
      this.isValidForm = this.isValidForm.bind(this);

      
   
    }


   
    onPressSubmit = () => {
      var body;
      if (this.isValidForm()) {
        body = JSON.stringify({ name: this.state.labname,   addressine1: this.state.labadd1,
          addressine2: this.state.labadd2, area: this.state.area,
          city: this.state.city, state: this.state.state,
          pincode: this.state.pincode, licence_number: this.state.licensenumber, lab_phone_number: this.state.phonenumber,
          originally_registered_date: this.state.date, hospital_id: this.state.hospitalid });
        
          console.log(body); 
        postAdminLabApi(body).then((res) => {
          console.log(res);
          if (res.message == 'Incorrect') {
            return false;
          }
          else {
            this.props.navigation.navigate('LabScreen');
          }
        });
  
      } 

   };


   onPressUpdate = () => {
    var body;
    if (this.isValidForm()) {
      body = JSON.stringify({ name: this.state.labname,   addressine1: this.state.labadd1,
        addressine2: this.state.labadd2, area: this.state.area,
        city: this.state.city, state: this.state.state,
        pincode: this.state.pincode, licence_number: this.state.licensenumber, lab_phone_number: this.state.phonenumber,
        originally_registered_date: this.state.date, hospital_id: this.state.hospitalid, id: this.state.id });
      
        
        editAdminLabApi(body).then((res) => {
        console.log(res);
        if (res.message == 'Incorrect') {
          return false;
        }
        else {
          this.props.navigation.navigate('LabScreen');
        }
      });

    } 

 };



  
    isValidForm = () => {
      return this.validate({
        labname: { labname: true, required: true },
        labadd1: { labadd1: true, required: true },
        labadd2: { labadd2: true, required: true },
        phonenumber: { phonenumber: true, required: true },
        area: { area: true, required: true },
        city: { city: true, required: true },
        state: { state: true, required: true },
        pincode: { pincode: true, required: true },
        licensenumber: { licensenumber: true, required: true },
        date: { date: true, required: true },
		hospitalid: { hospitalid: true, required: true },
		
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
                placeholder="Lab Name"
                placeholderTextColor="white"
                ref="labname" 
                onChangeText={(labname) => this.setState({ labname })}
                value={this.state.labname}
               />
            </View>
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("labname")}
            </Text>:null}
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Lab Address1"
              placeholderTextColor="white"
              ref="labadd1" onChangeText={(labadd1) => this.setState({labadd1})}
              value={this.state.labadd1}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("labadd1")}
            </Text>:null}
		  
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Lab Address2"
              placeholderTextColor="white"
              ref="labadd2" onChangeText={(labadd2) => this.setState({labadd2})}
              value={this.state.labadd2}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("labadd2")}
            </Text>:null}
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="white"
              ref="phonenumber" onChangeText={(phonenumber) => this.setState({phonenumber})}
              value={this.state.phonenumber}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("phonenumber")}
            </Text>:null}
		  
		  
<View style={styles.inputView}>
<DatePicker 
    style={{width: 200}}    
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1900-05-01"
        maxDate="3000-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
      {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("date")}
            </Text>:null}
            
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="License Number"
              placeholderTextColor="white"
              ref="licensenumber" onChangeText={(licensenumber) => this.setState({licensenumber})}
              value={this.state.licensenumber}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("licensenumber")}
            </Text>:null}
		  

            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="City"
                placeholderTextColor="white"
                ref="city" onChangeText={(city) => this.setState({ city })}
                value={this.state.city}
              />
            </View>
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("city")}
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="State"
                placeholderTextColor="white"
                ref="state" onChangeText={(state) => this.setState({ state })}
                value={this.state.state}
              />
            </View>
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("state")}
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Pincode"
                placeholderTextColor="white"
                ref="pincode" onChangeText={(pincode) => this.setState({ pincode })}
                value={this.state.pincode}
              />
            </View>
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("pincode")}
            </Text>:null}
			
			<View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Hospital Id"
              placeholderTextColor="white"
              ref="hospitalid" onChangeText={(hospitalid) => this.setState({hospitalid})}
              value={this.state.hospitalid}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("hospitalid")}
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
  