import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/MaterialIcons'

import CardView from 'react-native-cardview' ;
import { ScrollView } from 'react-native-gesture-handler';
import { customerDetailsApi } from '../services/customerDetailsService'


export default class Profile extends Component {

  constructor(props) {
    super(props);
   


    this.state = {
 
    //  name: props.navigation.state.params.name,

      workingHours: [
      ],

      profileName: "",
      email: "",
      date_of_birth: "",
      patientsList:[

      ],



      };
    }

  
  


  render() {
    const doctorname=  this.props.navigation.state.params.doctorname
    const highest_qualification=  this.props.navigation.state.params.highest_qualification
    const date_of_birth=  this.props.navigation.state.params.date_of_birth
    const specialization=  this.props.navigation.state.params.specialization
    const overall_work_experience=  this.props.navigation.state.params.overall_work_experience
    const studied_at=  this.props.navigation.state.params.studied_at
    const doctor_fee=  this.props.navigation.state.params.doctor_fee
    const registred_date=  this.props.navigation.state.params.registred_date
    const doctor_work_phone_number=  this.props.navigation.state.params.doctor_work_phone_number
    const doctor_work_email_address=  this.props.navigation.state.params.doctor_work_email_address
    return (
      <View style={styles.container}>
           <ScrollView>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{doctorname}</Text>




              
            </View>
            {/* <View>
            <Text style={styles.name}>Age:25</Text>  
            </View> */}
            
                   <View style={styles.userInfoSection}>

        <View style={styles.row}>
        <Icon name="phone" color="darkblue" size={30}/>
        <Text style={styles.Icontext}>{doctor_work_phone_number}</Text>
       </View>
       <View style={styles.row}>
          <Icon name="email" color="darkblue" size={30}/>
         <Text style={styles.Icontext}>{doctor_work_email_address}</Text>
        </View>

        <View style={styles.row}>
          <Icon1 name="user-graduate" color="darkblue" size={30}/>       
          <Text style={styles.Icontext}>Qualification: {highest_qualification}</Text>
        </View>

        <View style={styles.row}>
          <Icon1 name="school" color="darkblue" size={30}/>       
          <Text style={styles.Icontext}>Studied at: {studied_at}</Text>
        </View>

        <View style={styles.row}>
          <Icon4 name="work" color="darkblue" size={30}/>       
          <Text style={styles.Icontext}>Experience: {overall_work_experience}</Text>
        </View>
       
    
        <View style={styles.row}>
          <Icon2 name="money" color="darkblue" size={30}/>       
          <Text style={styles.Icontext}>Doctor Fee: {doctor_fee}</Text>
        </View>

        <View style={styles.row}>
          <Icon2 name="birthday-cake" color="darkblue" size={30}/>       
          <Text style={styles.Icontext}>DOB: {date_of_birth}</Text>
        </View>

        <View style={styles.row}>
          <Icon3 name="doctor" color="darkblue" size={30}/>       
          <Text style={styles.Icontext}>Specialization: {specialization}</Text>
        </View>
      

        <View style={styles.row}>
          <Icon3 name="date" color="darkblue" size={30}/>       
          <Text style={styles.Icontext}>Registered Date: {registred_date}</Text>
        </View>
        
        
      </View>
  
        </View>
        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#59DFEC",
    height:130,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"darkblue",
    fontWeight:'500',
  },
  body:{
    marginTop:50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:20,
  },
  name:{
    fontSize:28,
    color: "darkblue",
    fontWeight: "600"
  },

    userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },

  Icontext:{
    color:"darkblue", 
    marginLeft: 20,
    fontWeight: 'bold'

  },

    row: {
    flexDirection: 'row',
    marginBottom: 10,

    
  },

  


  cardViewStyle:{
 
    width: 380, 
    height: 130,
    paddingLeft:20,
  margin:5,
   
    marginLeft:10,
    backgroundColor: '#93EAF2',
    borderRadius:15
   
 
  },
 
  cardView_InsideText:{
 
    fontSize: 20, 
    color: 'darkblue', 
    textAlign: 'center',
    marginTop:15 
    
  },

  cardText:{
    fontWeight: "bold",
    fontSize: 15,
    color: "darkblue",
    fontStyle: "italic",
    paddingBottom: 10,
    paddingTop: 10,
  },

});

