import React from 'react';
import { shallow } from 'enzyme';
import PatientDetailsScreen from '../../screen/drawerScreens/PatientDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView,StyleSheet } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Feather';
import PatientsInfoScreen from '../../screen/drawerScreens/PatientsInfoScreen'
import { patientDoctorDetailsApi } from '../../screen/services/customerDetailsService';
import CardView from 'react-native-cardview';

const styles2 = StyleSheet.create({
    header:{
      height:10,
    },
    avatar: {
      width: 110,
      height: 120,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      position: 'absolute',
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
      marginTop:15 ,
      marginLeft:60
    }
  });
  const appointment_id =  {appointment_id: appointment_id};
  const doctorarray =  {doctorarray: doctorarray};
  const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      appointment_id: appointment_id,
      starttime:"11:00",
      doctorarray:[{patientname:"john", relation:"son", patientgender:"F", patientage: "5", patient_mobile_number: "1234",patient_blood_group: "o+"}]
    }
}
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/customerDetailsService");

describe('<PatientsInfoScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<PatientsInfoScreen navigation={navigation}></PatientsInfoScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have ScrollView ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(0);
});
it('should have View ', () => {
  expect(wrapper.find(View)).to.have.length(7);
});

it('should have CardView ', () => {
  expect(wrapper.find(CardView)).to.have.length(8);
});
it('should have Appointment details', () => {
  expect(wrapper.find( <Text style={styles.cardText}>Patient Appointment Details:</Text>));
 });
 it('should have Patient Name', () => {
  expect(wrapper.find( <Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20, color:'red'}}>Name: {navigation.state.params.name}</Text>));
 });
 it('should have Appointment Time details', () => {
  expect(wrapper.find( <Text >From: {navigation.state.params.start_time}</Text>));
  expect(wrapper.find( <Text >From: {navigation.state.params.end_time}</Text>));
 });
 it('should have Health details', () => {
  expect(wrapper.find( <Text style={styles.cardText}>Patient Helath Details:</Text>));
 });
 it('should have TouchableOpacity ', () => {
  expect(wrapper.find(TouchableOpacity)).to.have.length(7);
});
it('should have Icon ', () => {
  expect(wrapper.find(Icon)).to.have.length(7);
});
it('should have different tabs', () => {
  expect(wrapper.find(<Text style={styles.cardText}> Health Information</Text>));
  expect(wrapper.find(<Text style={styles.cardText}>Prescription</Text>));
  expect(wrapper.find(<Text style={styles.cardText}>Lab Reports</Text>));
  expect(wrapper.find(<Text style={styles.cardText}>Insurence</Text>));
  expect(wrapper.find(<Text style={styles.cardText}>Family</Text>));
  expect(wrapper.find(<Text style={styles.cardText}>Food Allergies</Text>));
  expect(wrapper.find(<Text style={styles.cardText}>Add New Appointment</Text>));
});




















}); 