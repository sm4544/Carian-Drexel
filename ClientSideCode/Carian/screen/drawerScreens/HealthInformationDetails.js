import React, { Component } from 'react';

import { StyleSheet, Image,TextInput, View, TouchableOpacity, Text , ScrollView, ImageBackground} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import CardView from 'react-native-cardview';

import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Feather';

const image = {
  uri:
    'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
};
export default class HealthInformationDetails extends ValidationComponent {
 
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
      
   
    }

   
    render() {

        const patient_blood_group=  this.props.navigation.state.params.patient_blood_group
        const patientweight=  this.props.navigation.state.params.patientweight
        const patientheight=  this.props.navigation.state.params.patientheight
        const patient_use_of_alcohol=  this.props.navigation.state.params.patient_use_of_alcohol
        const patient_use_of_tobacco=  this.props.navigation.state.params.patient_use_of_tobacco
        const allergies_to_medicine=  this.props.navigation.state.params.allergies_to_medicine
        const recurring_problems=  this.props.navigation.state.params.recurring_problems
        return (
        <ScrollView> 
   
        <View style={styles.calenderViewStyle}>
        

            <Text style={styles.cardText}>Helath Information:</Text>
            <View style={{flexDirection:'row',flex:1}}>
            
            <TouchableOpacity style={{flexDirection:'row',flex:1}}>          
            <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'lightcoral'}}>
                  <Icon3 name='blood-drop' size={30} color="#900"/>
                    <Text style={styles.cardText}> Blood Group: {patient_blood_group}</Text>
                    
                                       
            </CardView></TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',flex:1}}>          
         <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'mediumturquoise'}}>
                  <Icon5 name="human-male-height" size={30} color="#900"/>
                    <Text style={styles.cardText}>Height: {patientheight}</Text>                          
            </CardView></TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'lightsteelblue'}}>
                    <Icon1 name="weight" size={30} color="#900"/>
                      <Text style={styles.cardText}>Weight: {patientweight} </Text>                        
              </CardView>
             </TouchableOpacity></View>
             <View style={{flexDirection:'row',flex:1}}>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'cadetblue'}}>
                    <Icon4 name="emoji-food-beverage" size={40} color="#900"/>
                      <Text style={styles.cardText}>Use of Alcohol: {patient_use_of_alcohol} </Text>                        
              </CardView>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'pink'}}>
                    <Icon name="users" size={40} color="#900"/>
                      <Text style={styles.cardText}>Use of Tobaco: {patient_use_of_tobacco} </Text>                        
              </CardView>
             </TouchableOpacity>

             </View>

             <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.hospitalCard}>

                      {/* {this.state.patientdetails.map(patients => ( */}
                    <View style={styles.setFlexRow}>
                        <Text style={styles.cardText}>Allergies to Medicine:</Text>
                        <Text >{allergies_to_medicine} </Text>
                        

                    </View>

                    <View style={styles.setFlexRow}>
                        <Text style={styles.cardText}>Recurring Problems:</Text>
                        <Text >{recurring_problems} </Text>
                        

                    </View>

                </CardView>

             
</View>
</ScrollView>

      );
    }
  }

  