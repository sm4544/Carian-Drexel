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
   
        <View style={styles.calenderViewStyle}>
        
        <View style={styles.cardContainer,{backgroundColor:'mistyrose',paddingBottom:50,cornerRadius:50}}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.hospitalCard}>
                    <View style={styles.setFlexRow}>
                        <View style={styles.positionImage}>
                            <Image source={{uri: 'https://cdn6.f-cdn.com/contestentries/895802/20628095/584018e108bce_thumb900.jpg'}}  
         style={{width: 100, height: 100}} />
                        </View>
                        <View style={styles.imageRightPosition,{flexDirection:'column',flex:1} }>
                            <Text style={styles.cardText}>John</Text>
                            <Text style={styles.cardext}>Gender: Male</Text>
                            <Text style={styles.cardSubItalicText}>Age: 30 Years</Text>
                            <Text style={styles.cardSubItalicText}> Mob: +1 2155541786</Text>
                            <Text style={styles.cardSubBoldText}>Blood Group: B+</Text>
                            <Text style={styles.cardSubBoldText}>Organ Donar: YES</Text>
                        </View>
                    </View>
                </CardView>
            </View>
            <View style={{flexDirection:'row',flex:1,backgroundColor:'mistyrose'}}>
            <TouchableOpacity style={{flexDirection:'row',flex:1}}>          
            <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'lightcoral'}}>
                  <Icon name='info' size={40} color="#900"/>
                    <Text style={styles.cardText}> Health Information</Text>
                    
                                       
            </CardView></TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',flex:1}}>
           
         <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'mediumturquoise',paddingBottom:100}}>
                  <Icon name="heart" size={40} color="#900"/>
                    <Text style={styles.cardText}>Medication</Text>                          
            </CardView></TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'lightsteelblue'}}>
                    <Icon name="activity" size={40} color="#900"/>
                      <Text style={styles.cardText}>Lab Results</Text>                        
              </CardView>
             </TouchableOpacity></View>
             <View style={{flexDirection:'row',flex:1,backgroundColor:'mistyrose'}}>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'cadetblue',paddingBottom:100}}>
                    <Icon name="server" size={40} color="#900"/>
                      <Text style={styles.cardText}>Insurence</Text>                        
              </CardView>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'pink'}}>
                    <Icon name="users" size={40} color="#900"/>
                      <Text style={styles.cardText}>Family</Text>                        
              </CardView>
             </TouchableOpacity>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'lightskyblue'}}>
                    <Icon name="x-octagon" size={40} color="#900"/>
                      <Text style={styles.cardText}>Food Allergies</Text>                        
              </CardView>
             </TouchableOpacity>
             </View>
             <View style={{flexDirection:'row',flex:1,alignContent:'center',backgroundColor:'mistyrose'}}>
             <TouchableOpacity style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'80%', backgroundColor:'mediumaquamarine'}}>
                    <Icon name="plus" size={40} color="#900"/>
                      <Text style={styles.cardText}>Add New Complaint</Text>                        
              </CardView>
             </TouchableOpacity>
             </View>
             
             {/* ) : null} */}
</View>
</ScrollView>

      );
    }
  }

  