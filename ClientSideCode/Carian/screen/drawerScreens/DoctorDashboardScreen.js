import ValidationComponent from 'react-native-form-validator';
import React, {Component} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler' ;
import styles from '../../styles/DoctorProfileStyles';
import SpecialityCard from './Cards/SpecialityCard';
import moment from 'moment';
import ReviewCard from './Cards/ReviewCard';
import {Table, Row, Rows} from 'react-native-table-component';
import CalendarStrip from 'react-native-calendar-strip';
import CardView from 'react-native-cardview';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import {getAppointmentDetails} from '../services/doctorAppointmentService';
const image = {
  uri:
    'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
};

export default class PatientsCalendarScreen extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      city: '',
      name:'',
      start_time:'',
      end_time:'',
      show: false,
      profileD: {},
      selectedDate: moment().format('MM/DD/YYYY'),
      selectedTime: '',
      appointmentDetails:[]
      
    }),
      (this.displaySlots = this.displaySlots.bind(this));
  //   this.onPressingContinueButton = this.onPressingContinueButton.bind(this);
  }
  displaySlots = () => {
    this.setState({show:true});
    this.displayAppointment();
  };

  displayAppointment=()=>{
    console.log(this.state.selectedDate);
    const body = JSON.stringify({
      doctor_id:13,
      date: this.state.selectedDate
    })
    getAppointmentDetails(body).then(results =>{
      console.log(results);
      list1 =[]
      for (i = 0; i < results.length; i++) {
        list1.push({
          name: results[i].name,
          start_time: results[i].start_time,
          end_time: results[i].end_time
        });
      }
      this.setState({appointmentDetails: list1});
      
      
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

  onPressHospitalInfo = (name, start_time,end_time) => {
    
    this.props.navigation.navigate('PatientsInfoScreen',{name : name, start_time:start_time,end_time:end_time});
  }

      
        
       
  render() {
    let customDatesStyles = [];
    let startDate = moment();
    let endDate = moment(startDate).add(30, 'days');
    let datesWhitelist = [{start: startDate, end: endDate}];
    

    for (let i = 0; i < 40; i++) {
      customDatesStyles.push({
        startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided

        dateNameStyle: styles.dateNameStyle,
        dateNumberStyle: styles.dateNumberStyle,
        dateContainerStyle: {
          backgroundColor: `#${`#00000${(
            (Math.random() * (1 << 24)) |
            0
          ).toString(16)}`.slice(-6)}`,
        },
      });
    }
    return (
    <View style={styles.calenderViewStyle}>
            <CalendarStrip
              style={styles.calenderStrip}
              customDatesStyles={customDatesStyles}
              maxDate={endDate}
              datesWhitelist={datesWhitelist}
              onDateSelected={date => {this.setState({selectedDate: date.format('YYYY-MM-DD')}),this.displaySlots()}} >
              </CalendarStrip>
              {this.state.show ? (
                
                <View>
                {this.state.appointmentDetails.map((hospital) => (
                  <View style={styles.cardContainer,{backgroundColor:'powderblue',paddingBottom:30,cornerRadius:100}}>
                   
                  <TouchableOpacity onPress={()=>this.onPressHospitalInfo(hospital.name,hospital.start_time,hospital.end_time)}style={{width:'100%',height:'30%', color:'pink', paddingBottom:100, borderRadius:10,flexDirection:"row",alignItems:'center',justifyContent:'center'},'Hello'}> 
                    <Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20}}>Patient: {hospital.name} </Text>
                    <Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20}}>From : {hospital.start_time} </Text>
                    <Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20}}>To : {hospital.end_time} </Text>
                   
                    </TouchableOpacity>
                    
                 </View>
                ))}</View>
               ): null} 
  </View>
  
        );
  }
}