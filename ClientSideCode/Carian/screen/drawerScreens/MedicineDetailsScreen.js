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
import { postMedicineApi } from '../services/MedicineService';

export default class MedicineDetailsScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
        drug_name:'',
        price: '',
        quantity:'',
        drug_content:'',                     
      };
  }

  isValidForm = () => {
    return this.validate({  
        drug_name: { required: true },       
        quantity: { numbers: true, required: true },    
        drug_content: { required: true },
        price:{ numbers: true, required: true },         
        
    });
  };
    
 
  onPressMedicineInfo = () => {
    if (this.isValidForm()) {
      body = JSON.stringify({
        pharmacy:1,
        drug_name: this.state.drug_name,
        dosage:this.state.drug_content,
        quantity:this.state.quantity,
        price:this.state.price         
      });
      postMedicineApi(body).then((results)=> {
     
    console.log(results);

        this.props.navigation.navigate('MedicineAddScreen');
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
              placeholder="name of the Medicine"
              placeholderTextColor="white"
              ref="drug_name" onChangeText={(drug_name) => this.setState({ drug_name:drug_name })}
              value={this.state.drug_name}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("drug_name")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="drug content"
              placeholderTextColor="white"
              ref="drug_content" onChangeText={(drug_content) => this.setState({ drug_content })}
              value={this.state.drug_content}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("drug_content")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="drug price"
              placeholderTextColor="white"
              ref="price" onChangeText={(price) => this.setState({ price })}
              value={this.state.price}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("price")}
          </Text> : null}

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="drug quantity"
              placeholderTextColor="white"
              ref="quantity" onChangeText={(quantity) => this.setState({ quantity })}
              value={this.state.quantity}
            />
          </View>
          {this.isFormValid ? <Text style={styles.errormessages}>
            {this.getErrorsInField("quantity")}
          </Text> : null}       
          <TouchableOpacity onPress={this.onPressMedicineInfo} activeOpacity={0.7} style={styles.button} >   
          <Text style={styles.buttonText}> Submit </Text>

    </TouchableOpacity>    
   
        </View>
      </ScrollView>
    );
  }
}
