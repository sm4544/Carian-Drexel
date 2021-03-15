import React, { Component } from 'react';

import { StyleSheet, Image,TextInput, View, TouchableOpacity, Text , ScrollView, ImageBackground} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Feather';

const image = {
  uri:
    'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
};
export default class PatientsInfoScreen extends ValidationComponent {
 
    constructor(props) {   
      super(props);   
      this.state = {   
        profileID: '',
        
        name:'',
        start_time:'',
        end_time:'',
        // patient_id:'',
        // hospitalname: '',
        // hospitaladd1: '',
        // hospitaladd2: '',
        // phonenumber: '',
        // registerdate: '',
        // licensenumber: '',   
      };
      this.onPressHospitalInfo = this.onPressHospitalInfo.bind(this);
   
    }

    // isValidForm = () => {
    //   return this.validate({  
    //     hospitalname: { required: true },
    //     hospitaladd1: { required: true },
    //     hospitaladd2:{ required: true },
    //     phonenumber: { numbers: true, required: true },
    //     registerdate: { required: true },       
    //     licensenumber: { numbers: true, required: true },          
    //   });
    // };
    onPressMedicines =(appointment_id,hospital_id,patient_id)=>{
      console.log(hospital_id);
      this.props.navigation.navigate('AddMedicinesScreen',{appointment_id:appointment_id,hospital_id:hospital_id,patient_id:patient_id,});
    };
    onPressLab =()=>{
      this.props.navigation.navigate('AddLabReportsScreen');
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
        // this.props.navigation.navigate('HospitalScreen', { login: this.state.name});          
      }
    };
   
    render() {
      const name = this.props.navigation.state.params.name;
      const start_time = this.props.navigation.state.params.start_time;
      const end_time = this.props.navigation.state.params.end_time;
      const profileId = this.props.navigation.state.params.profileId;
      const patient_id = this.props.navigation.state.params.patient_id;
      const appointment_id= this.props.navigation.state.params.appointment_id;
      const hospital_id= this.props.navigation.state.params.hospital_id;
      
      
      return (
        <ScrollView> 
   
        <View style={styles.calenderViewStyle}>
        
        <View style={styles.cardContainer,{paddingBottom:30,cornerRadius:50}}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.hospitalCard}>
                    <View style={styles.setFlexRow}>
                        <Text style={styles.cardText}>Patient Appointment Details:</Text>
                        <View style={styles.imageRightPosition,{flexDirection:'column',flex:1,paddingBottom:20} }>
                            <Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20, color:'red'}}>Name: {name}</Text>
                        </View>
                        <Text >From: {start_time}</Text>
                        <Text >To: {end_time} {appointment_id}</Text>
                        
                    </View>
                </CardView>
            </View>
            <Text style={styles.cardText}>Patient Helath Details:</Text>
            <View style={{flexDirection:'row',flex:1}}>
            
            <TouchableOpacity style={{flexDirection:'row',flex:1}}>          
            <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'lightcoral'}}>
                  <Icon name='info' size={40} color="#900"/>
                    <Text style={styles.cardText}> Health Information</Text>
                    
                                       
            </CardView></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPressMedicines(appointment_id,hospital_id,patient_id)}style={{flexDirection:'row',flex:1}}>          
         <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'mediumturquoise'}}>
                  <Icon name="heart" size={40} color="#900"/>
                    <Text style={styles.cardText}>Prescription</Text>                          
            </CardView></TouchableOpacity>
            <TouchableOpacity onPress={this.onPressLab}style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'lightsteelblue'}}>
                    <Icon name="activity" size={40} color="#900"/>
                      <Text style={styles.cardText}>Lab Reports</Text>                        
              </CardView>
             </TouchableOpacity></View>
             <View style={{flexDirection:'row',flex:1}}>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'cadetblue'}}>
                    <Icon name="server" size={40} color="#900"/>
                      <Text style={styles.cardText}>Insurence</Text>                        
              </CardView>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'pink'}}>
                    <Icon name="users" size={40} color="#900"/>
                      <Text style={styles.cardText}>Family</Text>                        
              </CardView>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'lightskyblue'}}>
                    <Icon name="x-octagon" size={40} color="#900"/>
                      <Text style={styles.cardText}>Food Allergies</Text>                        
              </CardView>
             </TouchableOpacity>
             </View>
             <View style={{flexDirection:'row',flex:1,alignContent:'center'}}>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'mediumaquamarine'}}>
                    <Icon name="plus" size={40} color="#900"/>
                      <Text style={styles.cardText}>Add New Appointment</Text>                        
              </CardView>
             </TouchableOpacity>
             </View>
             
             {/* ) : null} */}
</View>
</ScrollView>

      );
    }
  }

  