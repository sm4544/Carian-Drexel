import React from 'react';
import { shallow } from 'enzyme';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import PatientsCalendarScreen from '../../screen/drawerScreens/DoctorDashboardScreen';
import CalendarStrip from 'react-native-calendar-strip';
const name = { name: name };
const area = { area: area };
const city = { city: city };
const addressine1 = { addressine1: addressine1 };
const addressine2 = { addressine2: addressine2 };
const state = { state: state };
const pincode = { pincode: pincode };
const licence_number = { licence_number: licence_number };
const originally_registered_date = { originally_registered_date: originally_registered_date };
const phonenumber = { phonenumber: phonenumber };
const id = { id: id };
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      name: name,
      area: area,
      city: city,
      addressine1: addressine1,
      addressine2: addressine2,
      state: state,
      pincode: pincode,
      phonenumber: phonenumber,
      originally_registered_date: originally_registered_date,
      licence_number: licence_number,
    }
  }
};

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/doctorAppointmentService");

describe('<PatientsCalendarScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<PatientsCalendarScreen navigation={navigation}></PatientsCalendarScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(1);
  });

  it('should have CalendarStrip', () => {
    expect(wrapper.find(CalendarStrip)).to.have.length(1);
  });

  it('should display patient appointment details', () => {
    expect(wrapper.contains(<TouchableOpacity style={{ width: '100%', height: '30%', color: 'pink', paddingBottom: 100, borderRadius: 10, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }, 'Hello'}>
      <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>Patient: </Text>
      <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>From :  </Text>
      <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20 }}>To : </Text>
    </TouchableOpacity>)).to.equal(false);
  })

});