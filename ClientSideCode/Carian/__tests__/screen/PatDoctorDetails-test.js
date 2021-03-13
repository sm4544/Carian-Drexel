import React from 'react';
import { shallow } from 'enzyme';
import PatDoctorDetails from '../../screen/drawerScreens/PatDoctorDetails';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
const doctorname = { doctorname: doctorname };
const navigation = {
  navigate: jest.fn(),

  state: {
    params: {
      doctorname: "john",
      highest_qualification: "PG",
      date_of_birth: "1-1-20",
      specialization: "ortho",
      overall_work_experience: "5",
      studied_at: "gandhi",
      doctor_fee: "200",
      registred_date: "1-2-2",
      doctor_work_phone_number: "1234",
      doctor_work_email_address: "dd@carian.com"
    }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<PatDoctorDetails/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<PatDoctorDetails navigation={navigation}></PatDoctorDetails>);
    console.log(wrapper)
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(0);
  });

  it('should have doctor name', () => {
    expect(wrapper.find(<Text style={styles.name}>{navigation.state.params.doctorname}</Text>));
  });

  it('should have phone number with icon', () => {
    expect(wrapper.find(<Icon name="phone" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>{navigation.state.params.doctor_work_phone_number}</Text>));
  });

  it('should have email text with icon', () => {
    expect(wrapper.find(<Icon name="email" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>{navigation.state.params.doctor_work_email_address}</Text>));
  });

  it('should have Qualification text with icon', () => {
    expect(wrapper.find(<Icon1 name="user-graduate" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>Qualification: {navigation.state.params.highest_qualification}</Text>));
  });

  it('should have studied at with icon', () => {
    expect(wrapper.find(<Icon1 name="school" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>Studied at: {navigation.state.params.studied_at}</Text>));
  });

  it('should have Overall Experience with icon', () => {
    expect(wrapper.find(<Icon4 name="work" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>Experience: {navigation.state.params.overall_work_experience}</Text>));
  });

  it('should have Doctor Fee with icon', () => {
    expect(wrapper.find(<Icon2 name="money" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>Doctor Fee: {navigation.state.params.doctor_fee}</Text>));
  });

  it('should have dob with icon', () => {
    expect(wrapper.find(<Icon2 name="birthday-cake" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>DOB: {navigation.state.params.date_of_birth}</Text>));
  });

  it('should have Specialization with icon', () => {
    expect(wrapper.find(<Icon3 name="doctor" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>Specialization: {navigation.state.params.specialization}</Text>));
  });

  it('should have Registered date with icon', () => {
    expect(wrapper.find(<Icon3 name="date" color="darkblue" size={30} />));
    expect(wrapper.find(<Text style={styles.Icontext}>Registered Date: {navigation.state.params.registred_date}</Text>));
  });

});