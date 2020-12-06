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
import { postAdminPharmacyApi, editAdminPharmacyApi } from '../services/adminPharmacyService'
import DatePicker from 'react-native-datepicker'

export default class PharmacyDetailsScreen extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {

<<<<<<< Updated upstream
        pharmacyname: '',
        pharmacyadd1: '',
        pharmacyadd2: '',
        phonenumber: '',
        registerdate: '',
        licensenumber: '',
=======
      pharmacyname: this.props.navigation.state.params.name,
      pharmacyadd1: this.props.navigation.state.params.addressine1,
      pharmacyadd2: this.props.navigation.state.params.addressine2,
      phonenumber: this.props.navigation.state.params.phonenumber,
      date: this.props.navigation.state.params.originally_registered_date,
      licensenumber: this.props.navigation.state.params.licence_number,
      area: this.props.navigation.state.params.area,
      city: this.props.navigation.state.params.city,
      state: this.props.navigation.state.params.state,
      pincode: this.props.navigation.state.params.pincode,
      id: this.props.navigation.state.params.id,

        // pharmacyname: this.props.navigation.getParam('name'),

>>>>>>> Stashed changes
      };

      this.onPressSubmit = this.onPressSubmit.bind(this);
      this.isValidForm = this.isValidForm.bind(this);
  }

<<<<<<< Updated upstream
=======
  onPressSubmit = () => {
    var body;
    if (this.isValidForm()) {
      body = JSON.stringify({ name: this.state.pharmacyname,   addressine1: this.state.pharmacyadd1,
        addressine2: this.state.pharmacyadd2, area: this.state.area,
        city: this.state.city, state: this.state.state,
        pincode: this.state.pincode, licence_number: this.state.licensenumber, pharmacy_phone_number: this.state.phonenumber,
        originally_registered_date: this.state.date, hospital_id_id: '2', medicine:"NA", regisrted_by_id: "13" });
            
        postAdminPharmacyApi(body).then((res) => {
        console.log(res);
        if (res.message == 'Incorrect') {
          return false;
        }
        else {
          this.props.navigation.navigate('PharmacyScreen');
       }
      });

    } 
  
 };

 onPressUpdate = () => {
  if (this.isValidForm()) {
    body = JSON.stringify({ name: this.state.pharmacyname,   addressine1: this.state.pharmacyadd1,
      addressine2: this.state.pharmacyadd2, area: this.state.area,
      city: this.state.city, state: this.state.state,
      pincode: this.state.pincode, licence_number: this.state.licensenumber, pharmacy_phone_number: this.state.phonenumber,
      originally_registered_date: this.state.date, id: this.state.id });
       
      editAdminPharmacyApi(body).then((res) => {
      console.log(res);
      if (res.message == 'Incorrect') {
        return false;
      }
      else {
        this.props.navigation.navigate('PharmacyScreen');

     }
    });

  } 

};


  isValidForm = () => {
    return this.validate({
      pharmacyname: { pharmacyname: true, required: true },
      pharmacyadd1: { pharmacyadd1: true, required: true },
      pharmacyadd2: { pharmacyadd2: true, required: true },
      phonenumber: { phonenumber: true, required: true },
      city: { city: true, required: true },
      state: { state: true, required: true },
      pincode: { pincode: true, required: true },
      licensenumber: { licensenumber: true, required: true },
      date: { date: true, required: true },
    });
  }



>>>>>>> Stashed changes
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Pharmacy Name"
              placeholderTextColor="white"
              ref="pharmacyname" onChangeText={(pharmacyname) => this.setState({ pharmacyname })}
              value={this.state.pharmacyname}
            />
          </View>
<<<<<<< Updated upstream
=======
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("pharmacyname")}
            </Text>:null}
>>>>>>> Stashed changes

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Pharmacy Address1"
              placeholderTextColor="white"
              ref="pharmacyadd1" onChangeText={(pharmacyadd1) => this.setState({ pharmacyadd1 })}
              value={this.state.pharmacyadd1}
            />
          </View>
<<<<<<< Updated upstream
=======
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("pharmacyadd1")}
            </Text>:null}

>>>>>>> Stashed changes
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Pharmacy Address2"
              placeholderTextColor="white"
              ref="pharmacyadd2" onChangeText={(pharmacyadd2) => this.setState({ pharmacyadd2 })}
              value={this.state.pharmacyadd2}
            />
          </View>
<<<<<<< Updated upstream
=======
          {this.isFormValid ? <Text style={styles.errormessages}>
                {this.getErrorsInField("pharmacyadd2")}
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
        onDateChange={(date) => {this.setState({date: date})}}
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

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('PharmacyScreen', {pharmacyname: this.state.pharmacyname,})}  >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
=======
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

            <View style={{ flexDirection:"row" }}>
          <TouchableOpacity
            style={styles2.button}
            onPress={this.onPressSubmit}  >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles2.button}
            onPress={this.onPressUpdate}  >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          </View>
>>>>>>> Stashed changes
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
