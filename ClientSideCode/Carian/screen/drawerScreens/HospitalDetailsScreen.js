import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text , ScrollView} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';

<<<<<<< Updated upstream


export default class HospitalDetailsScreen extends Component {
=======
import DatePicker from 'react-native-datepicker'
import { postAdminHospitalApi, editAdminHospitalApi } from '../services/adminHospitalService'
import ValidationComponent from 'react-native-form-validator';


export default class HospitalDetailsScreen extends ValidationComponent {
>>>>>>> Stashed changes
 
 
 
    constructor(props) {
   
      super(props)
<<<<<<< Updated upstream
   
      this.state = {
   
        hospitalname: '',
        hospitaladd1: '',
        hospitaladd2: '',
        phonenumber: '',
        registerdate: '',
        licensenumber: '',
   
      }
   
    }

    
   
    Send_Data_Function = () => {

      // this.props.navigation.navigate("DisplayHospitalScreen", {
      //   NameOBJ: this.state.hospitalname,
        this.props.navigation.navigate('HospitalScreen', { login: this.state.hospitalname, });
   
      // this.props.navigation.navigate('DisplayHospitalScreen', {
      //   NameOBJ: this.state.hospitalname,
      // });
   
    }
=======

   
      this.state = {

        hospitalname: this.props.navigation.state.params.name,
        hospitaladd1: this.props.navigation.state.params.addressine1,
        hospitaladd2: this.props.navigation.state.params.addressine2,
        phonenumber: this.props.navigation.state.params.phonenumber,
        licensenumber: this.props.navigation.state.params.licence_number,
       date: this.props.navigation.state.params.originally_registered_date,
       area:this.props.navigation.state.params.area,
       city:this.props.navigation.state.params.city,
       state: this.props.navigation.state.params.state,
       pincode: this.props.navigation.state.params.pincode,
       id: this.props.navigation.state.params.id,

      //   hospitalname: this.props.navigation.getParam('name'),
      };    
      
      this.onPressSubmit = this.onPressSubmit.bind(this);
      this.isValidForm = this.isValidForm.bind(this);

      
   
    }


   
    onPressSubmit = () => {
      console.log("hi")
      if (this.isValidForm()) {
        body = JSON.stringify({ name: this.state.hospitalname,   addressine1: this.state.hospitaladd1,
          addressine2: this.state.hospitaladd2, area: this.state.area,
          city: this.state.city, state: this.state.state,
          pincode: this.state.pincode, licence_number: this.state.licensenumber, hospital_phone_number: this.state.phonenumber,
          originally_registered_date: this.state.date });
        
          console.log(body); 
        postAdminHospitalApi(body).then((res) => {
          console.log(res);
          if (res.message == 'Incorrect') {
            return false;
          }
          else {
            console.log("hello")
            this.props.navigation.navigate('HospitalScreen');
          }

        });

      } 
      else{
     console.log("hello")
      }

   };


   onPressUpdate = () => {
    console.log("hi")
    if (this.isValidForm()) {
      body = JSON.stringify({ name: this.state.hospitalname,   addressine1: this.state.hospitaladd1,
        addressine2: this.state.hospitaladd2, area: this.state.area,
        city: this.state.city, state: this.state.state,
        pincode: this.state.pincode, licence_number: this.state.licensenumber, hospital_phone_number: this.state.phonenumber,
        originally_registered_date: this.state.date, id: this.state.id });
      
        
        editAdminHospitalApi(body).then((res) => {
        console.log(res);
        if (res.message == 'Incorrect') {
          return false;
        }
        else {
          this.props.navigation.navigate('HospitalScreen');
        }

      });

    } 
    else{

    }

 };

  
    isValidForm = () => {
      return this.validate({
         hospitalname: { hospitalname: true, required: true },
        hospitaladd1: { hospitaladd1: true, required: true },
         hospitaladd2: { hospitaladd2: true, required: true },
         phonenumber: { phonenumber: true, required: true },
        date: { date: true, required: true },
         licensenumber: { licensenumber: true, required: true },
         area: { area: true, required: true },
         city: { city: true, required: true },
        state: { state: true, required: true },
         pincode: { pincode: true, required: true },
 
      
        
     });
>>>>>>> Stashed changes
   
     }
  

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
<<<<<<< Updated upstream
=======
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("hospitalname")}
            </Text>:null}
>>>>>>> Stashed changes
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Address1"
                placeholderTextColor="white"
                ref="hospitaladd1" onChangeText={(hospitaladd1) => this.setState({ hospitaladd1 })}
                value={this.state.hospitaladd1}
              />
            </View>
<<<<<<< Updated upstream
=======
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("hospitaladd1")}
            </Text>:null}

>>>>>>> Stashed changes
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Hospital Address2"
                placeholderTextColor="white"
                ref="hospitaladd2" onChangeText={(hospitaladd2) => this.setState({ hospitaladd2 })}
                value={this.state.hospitaladd2}
              />
            </View>
<<<<<<< Updated upstream
=======
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("hospitaladd2")}
            </Text>:null}
>>>>>>> Stashed changes
  
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="white"
                ref="phonenumber" onChangeText={(phonenumber) => this.setState({ phonenumber })}
                value={this.state.phonenumber}
              />
            </View>
<<<<<<< Updated upstream
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Registered Date"
                placeholderTextColor="white"
                ref="registerdate" onChangeText={(registerdate) => this.setState({ registerdate })}
                value={this.state.registerdate}
              />
            </View>
=======
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
        ref ="date" onDateChange={(date) => {this.setState({date: date})}}
      />
            </View>

            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("date")}
            </Text>:null}

            
>>>>>>> Stashed changes
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="License Number"
                placeholderTextColor="white"
                ref="licensenumber" onChangeText={(licensenumber) => this.setState({ licensenumber })}
                value={this.state.licensenumber}
              />
            </View>
<<<<<<< Updated upstream
   
            <TouchableOpacity onPress={this.Send_Data_Function} activeOpacity={0.7} style={styles.button} >
=======
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("licensenumber")}
            </Text>:null}

            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Area"
                placeholderTextColor="white"
                ref="area" onChangeText={(area) => this.setState({ area })}
                value={this.state.area}
              />
            </View>
            {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("area")}
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

            <View style={{ flexDirection:"row" }}>
   
            <TouchableOpacity onPress={this.onPressSubmit} activeOpacity={0.7} style={styles2.button} >
>>>>>>> Stashed changes
   
           <Text style={styles.buttonText}> Submit </Text>
 
            </TouchableOpacity>

<<<<<<< Updated upstream
            

  
          </View>         
          </ScrollView>
  
  
  

 
=======
            <TouchableOpacity onPress={this.onPressUpdate} activeOpacity={0.7} style={styles2.button} >
   
            <Text style={styles.buttonText}> Update </Text>

    </TouchableOpacity>
    </View>


          </View>    

          </ScrollView> 
>>>>>>> Stashed changes
   
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
  