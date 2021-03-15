import React, {  Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';

import styles from '../../styles/commonStyles';     
import ValidationComponent from 'react-native-form-validator';

export default class MedicinesScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      selectedItems : [],
      profileId:'',
    };
  }

  

  
  render() {
    const { selectedItems } = this.state;
    const profileid = global.profileId;

    

    return ( 
        (
            <SafeAreaView style={styles.containerMultiSelecet}>
              <View style={styles.containerMultiSelecet}>             
             

             
        <TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.props.navigation.navigate('MedicineAddScreen',{profileid:profileid})}
            
          } >
          <Text style = {styles.appButtonText} > ADD MEDICINE </Text> 
          </TouchableOpacity>    
          <View style={styles.space} />

           <TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.props.navigation.navigate('MedicineAddScreen',{profileid:profileid})}
          } >
          <Text style = {styles.appButtonText} > DELETE MEDICINE </Text> 
          </TouchableOpacity> 
          <View style={styles.space} />    

            <TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.props.navigation.navigate('MedicineViewScreen',{profileid:profileid})}
          } >
          <Text style = {styles.appButtonText} > VIEW MEDICINE </Text> 
          </TouchableOpacity>       
      
          </View>
            </SafeAreaView>
          )
    );
        
    }  
}
        
