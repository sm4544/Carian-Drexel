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
import { postLabApi } from '../services/LabService';

export default class LabTestsDetailsScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
        test_name:'',
        price: '',
        category:'',                   
      };
  }

  isValidForm = () => {
    return this.validate({  
        test_name: { required: true },       
        category: { required: true },    
        price:{ numbers: true, required: true },         
        
    });
  };
    
 
  onPressLabTestInfo = () => {
    if (this.isValidForm()) {
      const body = JSON.stringify({
        lab_id:1,
        name: this.state.test_name,
        category:this.state.category,
        price:this.state.price         
      });
      postLabApi(body).then((results)=> {
     
    console.log(results);
        this.props.navigation.navigate('LabTestsAddScreen');
      });
            
    }
    else {
        return false;
    }
  };

  render() {
    const selectedItems = this.props.navigation.state.params.selectedItems;
    const profileid = this.props.navigation.state.params.profileid;
   
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputView}>
       
            <TextInput
              style={styles.input}
              placeholder="name of the test"
              placeholderTextColor="white"
              ref="test_name" onChangeText={(test_name) => this.setState({ test_name })}
              value={this.state.test_name}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("test_name")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="category of test"
              placeholderTextColor="white"
              ref="category" onChangeText={(category) => this.setState({ category })}
              value={this.state.category}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("category")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="test price"
              placeholderTextColor="white"
              ref="price" onChangeText={(price) => this.setState({ price })}
              value={this.state.price}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("price")}
          </Text> : null}

                   
          <TouchableOpacity onPress={this.onPressLabTestInfo} activeOpacity={0.7} style={styles.button} >   
          <Text style={styles.buttonText}> Submit </Text>

    </TouchableOpacity>    
   
        </View>
      </ScrollView>
    );
  }
}
