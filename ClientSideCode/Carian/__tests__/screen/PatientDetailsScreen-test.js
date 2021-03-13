import React from 'react';
import { shallow } from 'enzyme';
import PatientDetailsScreen from '../../screen/drawerScreens/PatientDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView,StyleSheet } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Feather';

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

describe('<PatientDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    patientDoctorDetailsApi.mockResolvedValue([{doctorname:"abc" + " " + "ghj", specialization:"mbbs", overall_work_experience:"7"
    , patientname:"tyu" + " " + "opl", patientage:"6",patientgender:"F",patient_blood_group:"A+", 
    patient_mobile_number:"1234", relation:"son", highest_qualification:"PG"
  , studied_at:"gandhi", doctor_fee:"200", registred_date:"1-2-20",
  date_of_birth:"1-6-20", doctor_work_phone_number:"45678", doctor_work_email_address:"ghjkkff", patientweight:"40", 
  patientheight:"5", patient_use_of_alcohol:"Y", patient_use_of_tobacco:"Y",
  recurring_problems:"headache",allergies_to_medicine:"y",  patientid:"1"}]);
    wrapper = shallow(<PatientDetailsScreen navigation={navigation}></PatientDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
});



it('should have Appointment time', () => {
  expect(wrapper.find( <Text style={styles.cardText}>Patient Details:</Text>));
  expect(wrapper.find( <Text >Appointment Time: {navigation.state.params.starttime}</Text>));
 
  
});

it('should have patient basic details section', () => {
    expect(wrapper.find( <Text style={styles.cardText}>Name: {doctorarray.patientname}</Text>));
    expect(wrapper.find( <Text style={styles.cardext}>Relation: {doctorarray.relation}</Text>));
    expect(wrapper.find( <Text style={styles.cardext}>Gender: {doctorarray.patientgender}</Text>));
    expect(wrapper.find(<Text style={styles.cardSubItalicText}>Age: {doctorarray.patientage} Years</Text>));
    expect(wrapper.find( <Text style={styles.cardSubItalicText}> Mob: {doctorarray.patient_mobile_number}</Text>));
    expect(wrapper.find( <Text style={styles.cardSubBoldText}>Blood Group: {doctorarray.patient_blood_group}</Text>));

    
  });


  it('should navigate to PatDoctorDetails screen', () => {
    wrapper.instance().onselecting("abc" + " " + "ghj", "mbbs", "7", "gandhi","200", "1-2-20", "45678" ,"ghjkkff", "PG", "1-6-20" )
    sinon.assert.calledWith(spyon, "PatDoctorDetails",{ doctorname: "abc" + " " + "ghj", specialization: "mbbs",overall_work_experience: "7", studied_at: "gandhi",
         doctor_fee: "200", registred_date: "1-2-20", doctor_work_phone_number: "45678", doctor_work_email_address: "ghjkkff", highest_qualification: "PG", date_of_birth: "1-6-20" });
  });
  

  it('should have Patient Helath Details text with icon', () => {
    expect(wrapper.find(  <Text style={styles.cardText}>Patient Helath Details:</Text>));
    expect(wrapper.find(  <Icon name='info' size={40} color="#900"/>));
   
    
  });

  it('should navigate to HealthInformationDetails screen', () => {
    wrapper.instance().onselecting1("O+", "40", "5", "Y","N", "Y", "Y"  )
    sinon.assert.calledWith(spyon, "HealthInformationDetails",{ patient_blood_group: "O+", patientweight: "40",
      patientheight: "5", patient_use_of_alcohol: "Y", patient_use_of_tobacco: "N",allergies_to_medicine: "Y",
      recurring_problems: "Y"});
  });

  
  it('should have Prescription text with icon', () => {
    expect(wrapper.find(  <Text style={styles.cardText}>Prescription</Text>   ));
    expect(wrapper.find(   <Icon name="heart" size={40} color="#900"/>));
   
    
  });

  it('should navigate to PrescriptionOrders screen', () => {
    wrapper.instance().onselecting2("1","2"  )
    sinon.assert.calledWith(spyon, "PrescriptionOrders",{ patientid: "1", appointment_id: "2"});
  });

  it('should have Lab Reports text with icon', () => {
    expect(wrapper.find(  <Text style={styles.cardText}>Lab Reports</Text>    ));
    expect(wrapper.find(   <Icon name="activity" size={40} color="#900"/>));
   
    
  });

  it('should navigate to Labreport screen', () => {
    wrapper.instance().onselecting3("1"  )
    sinon.assert.calledWith(spyon, "Labreport",{ patientid: "1"});
  });
  



















});