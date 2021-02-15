import ValidationComponent from 'react-native-form-validator';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native';
import styles from '../../styles/DoctorProfileStyles';
import SpecialityCard from './Cards/SpecialityCard';
import moment from 'moment';
import ReviewCard from './Cards/ReviewCard';
import {Table, Row, Rows} from 'react-native-table-component';
import CalendarStrip from 'react-native-calendar-strip';
import CardView from 'react-native-cardview';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
const image = {
  uri:
    'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
};

export default class PatientsCalendarScreen extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      city: '',
      show: false,
      profileD: {},
      selectedDate: moment().format('MM/DD/YYYY'),
      selectedTime: '',
      
    }),
      (this.displaySlots = this.displaySlots.bind(this));
  //   this.onPressingContinueButton = this.onPressingContinueButton.bind(this);
  }
  displaySlots = (date) => {
    this.setState({show:true});
    console.log(date.format('MM/DD/YYYY'));
    this.setState({selectedDate: date.format('MM/DD/YYYY')});
    
  };
  

  onPressHospitalInfo = () => {
    this.props.navigation.navigate('PatientsInfoScreen'); 
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
              onDateSelected={this.displaySlots}>
              </CalendarStrip>
              {this.state.show ? (
                
             <TouchableOpacity onPress={this.onPressHospitalInfo} style={{flexDirection:'column',
      flex:1}}>
         
             <CardView cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={10} style={{width:'100%',height:'70%', backgroundColor:'plum'}}>
                    
                    {/* <ImageBackground  style={{width:'10%',height:'10%'}}> */}
                        <Text style={styles.cardText}>Patient: John          Age: 30</Text>
                        <Text style={styles.cardText}>Gender: Male</Text>
                        <Text style={styles.cardText}>Appointment: 9:00 am to 9:30 am</Text>
                        <Text style={styles.cardText}>Reason: Fever</Text>
                    {/* </ImageBackground> */}
                </CardView></TouchableOpacity>) : null}
                {this.state.show ? (
                <TouchableOpacity style={{flexDirection:'column',
      flex:1}}>
               
             <CardView cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={10} style={{width:'100%',height:'70%', backgroundColor:'lightcoral'}}>
                        <Text style={styles.cardText}>Patient:  Sophia         Age: 50</Text>
                        <Text style={styles.cardText}>Gender: Female</Text>
                        <Text style={styles.cardText}>Appointment: 10:00 am to 10:30 am</Text>
                        <Text style={styles.cardText}>Reason: Check-Up</Text>                    
                </CardView></TouchableOpacity>) : null}
                {this.state.show ? (
                <TouchableOpacity style={{flexDirection:'column',
      flex:1}}>
               
             <CardView cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={10} style={{width:'100%',height:'70%', backgroundColor:'mediumturquoise'}}>
                        <Text style={styles.cardText}>Patient:  James         Age: 65</Text>
                        <Text style={styles.cardText}>Gender: Male</Text>
                        <Text style={styles.cardText}>Appointment: 11:00 am to 12:30 pm</Text>
                        <Text style={styles.cardText}>Reason: Dental</Text>                    
                </CardView></TouchableOpacity>) : null}
                {this.state.show ? (
                <TouchableOpacity style={{flexDirection:'column',
      flex:1}}>
              
               
               <CardView cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={10} style={{width:'100%',height:'70%', backgroundColor:'lightsteelblue'}}>
                          <Text style={styles.cardText}>Patient:  Mia         Age: 15</Text>
                          <Text style={styles.cardText}>Gender: Female</Text>
                          <Text style={styles.cardText}>Appointment: 1:00 pm to 2:00 pm</Text>
                          <Text style={styles.cardText}>Reason: Cough</Text>                    
                  </CardView>
                 </TouchableOpacity>) : null}
                
                 
                 {/* ) : null} */}
    </View>
    
          );
  }
}