import React from 'react';
import { shallow } from 'enzyme';
import HealthInformationDetails from '../../screen/drawerScreens/HealthInformationDetails';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';

import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Feather';

import CardView from 'react-native-cardview';

const doctorname =  {doctorname: doctorname};
const patient_blood_group=  {patient_blood_group: patient_blood_group};
const patientweight=  {patientweight: patientweight};
const patientheight=  {patientheight: patientheight};
const patient_use_of_alcohol=  {patient_use_of_alcohol: patient_use_of_alcohol};
const patient_use_of_tobacco=  {patient_use_of_tobacco: patient_use_of_tobacco};
const allergies_to_medicine= {allergies_to_medicine: allergies_to_medicine};
const recurring_problems=  {recurring_problems: recurring_problems};
const navigation = {

  navigate: jest.fn(),

  
  state: {

    params: {

        doctorname: doctorname,
        patient_blood_group: "O+",
        patientweight: "50",
        patientheight: "6",
        patient_use_of_alcohol: "Y",
        patient_use_of_tobacco:"N",
        allergies_to_medicine: "Y",
        recurring_problems: "Y"
   

    }
}

};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;


describe('<HealthInformationDetails/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');

    wrapper = shallow(<HealthInformationDetails navigation={navigation}></HealthInformationDetails>);
    console.log(wrapper)
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  


  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
});



it('should have health information text', () => {
  expect(wrapper.find(<Text style={styles.cardText}>Helath Information:</Text>));
});

it('should have TouchableOpacity ', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(5);
});


it('should have Cardview ', () => {
    expect(wrapper.find(CardView)).to.have.length(6);
});

it('should have Blood group text with icon', () => {
    expect(wrapper.find( <Icon3 name='blood-drop' size={30} color="#900"/>));
    expect(wrapper.find( <Text style={styles.cardText}> Blood Group: {navigation.state.params.patient_blood_group}</Text>));
  }); 

 
  it('should have height text with icon', () => {
    expect(wrapper.find(<Icon5 name="human-male-height" size={30} color="#900"/> ));
    expect(wrapper.find(  <Text style={styles.cardText}>Height: {navigation.state.params.patientheight}</Text>     ));
  }); 

  it('should have weight with icon', () => {
    expect(wrapper.find(<Icon1 name="weight" size={30} color="#900"/>  ));
    expect(wrapper.find( <Text style={styles.cardText}>Weight: {navigation.state.params.patientweight} </Text>  ));
  }); 


  it('should have use of alochol text with icon', () => {
    expect(wrapper.find( <Icon4 name="emoji-food-beverage" size={40} color="#900"/>  ));
    expect(wrapper.find(  <Text style={styles.cardText}>Use of Alcohol: {navigation.state.params.patient_use_of_alcohol} </Text> ));
  }); 


  it('should have Use of Tobaco text with icon', () => {
    expect(wrapper.find( <Icon name="users" size={40} color="#900"/>   ));
    expect(wrapper.find( <Text style={styles.cardText}>Use of Tobaco: {navigation.state.params.patient_use_of_tobacco} </Text> ));
  }); 


  it('should have dob with icon', () => {
    expect(wrapper.find( <Text style={styles.cardText}>Allergies to Medicine:</Text>  ));
    expect(wrapper.find(    <Text >{navigation.state.allergies_to_medicine} </Text>));
  }); 


  it('should have Specialization with icon', () => {
    expect(wrapper.find(<Text style={styles.cardText}>Recurring Problems:</Text>     ));
    expect(wrapper.find(<Text >{navigation.state.params.recurring_problems} </Text>));
  }); 



});