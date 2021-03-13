import ValidationComponent from 'react-native-form-validator';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StyleSheet, ScrollView, ImageBackground} from 'react-native';
import styles from '../../styles/DoctorProfileStyles';

import moment from 'moment';

import CardView from 'react-native-cardview';

import { appointmentDetailsApi } from '../services/customerDetailsService'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Fontisto'
const image = {
  uri:
    'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
};



export default class PatientsAppointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      show: false,
      profileD: {},
      selectedDate: moment().format('MM/DD/YYYY'),
      selectedTime: '',
      flag: true,
      name : global.name,
      workingHours: [
      ],

      profileName: "",
      email: "",
      date_of_birth: "",
      appointmentsList:[

      ],

      
    };
    

  }

  



  componentDidMount(){
    this.onPressSubmit();
  }


  onPressSubmit = () => {
    var body;
    body = JSON.stringify({ profile_id: "11"  });
    var i;
    var tableData = [];

 
    appointmentDetailsApi().then((res) => {
 

      res.forEach((data) => {
        if(data.profile_id == "11"){
        
        
        tableData.push(data);
        }
      });
      this.setState({ appointmentsList: tableData });
      console.log(this.state.appointmentsList)
    
      });


  }


  onselecting = (start_time, id) => {
 
    this.props.navigation.navigate('PatientDetailsScreen', {start_time: start_time, id: id});

}
      
        
       
  render() {


 

   
    return (
      <View style={styles.calenderViewStyle}>



<ScrollView>
{this.state.appointmentsList.map(appointments => (
//  key={appointments.appointment_status}
                  
               <TouchableOpacity key={appointments.id} onPress={() => this.onselecting(appointments.start_time, appointments.id)} style={{flexDirection:'column',
        }}>

           
               <CardView cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={10} style={{width:380,height:130, backgroundColor:'lightsteelblue', marginTop:20}}>
                      <View style={styles.userInfoSection}>
                      <View style={styles.row}>
          <Icon name="clock" color="black" size={30}/>       
        
          <Text style={styles.cardText}>Appointment Time: {appointments.start_time}</Text>
          
        </View>

        <View style={styles.row}>
          <Icon1 name="date" color="black" size={30}/>       
          <Text style={styles.cardText}>Appointment Date: {appointments.date}</Text>
        </View>
        </View> 
              
                         
                 
                  </CardView>
             
                  </TouchableOpacity>
                   
                   ))}
                    </ScrollView>

       </View>
      
            );
  
  }
}

const styles2 = StyleSheet.create({
  button: {
    width: "50%",
    backgroundColor: "#CD6155",
    borderRadius: 18,
    borderColor: "steelblue",
    
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
});