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

export default class ReportsScreen extends ValidationComponent {
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
            this.props.navigation.navigate('LabTestsAddScreen',{profileid:profileid})}
            
          } >
          <Text style = {styles.appButtonText} >ADD LAB TESTS</Text> 
          </TouchableOpacity>    
          <View style={styles.space} />

           <TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.props.navigation.navigate('LabTestsAddScreen',{profileid:profileid})}
          } >
          <Text style = {styles.appButtonText} >DELETE LAB TESTS</Text> 
          </TouchableOpacity> 
          <View style={styles.space} />   

            <TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.props.navigation.navigate('LabTestsViewScreen',{profileid:profileid})}
          } >
          <Text style = {styles.appButtonText} >VIEW LAB TESTS</Text> 
          </TouchableOpacity>       
      
          </View>
            </SafeAreaView>
          )
    );
        
    }  
}
        
