import React from 'react';
import { shallow } from 'enzyme';
import HospitalDetailsScreen from '../../screen/drawerScreens/HospitalDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import ActionButton from 'react-native-action-button';
import DatePicker from 'react-native-datepicker';
import { postAdminHospitalApi, editAdminHospitalApi } from '../../screen/services/adminHospitalService';

const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };
const name =  {name: name};
const area =  {area: area};
const city =  {city: city};
const addressine1 =  {addressine1: addressine1};
const addressine2 =  {addressine2: addressine2};
const state = {state: state};
const pincode =  {pincode: pincode};
const licence_number =  {licence_number: licence_number};
const originally_registered_date =  {originally_registered_date: originally_registered_date};
const phonenumber =  {phonenumber: phonenumber};
const id =  {id: id};

const navigation = {

  navigate: jest.fn(),

  state: {

      params: {

          name : name,
          area :  area,
          city :  city,
          addressine1 :  addressine1,
          addressine2 :  addressine2,
          state : state,
          pincode :  pincode,
          phonenumber: phonenumber,
          originally_registered_date: originally_registered_date,
          licence_number:licence_number,
          

      }

  }

};

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/adminHospitalService");

describe('<HospitalDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<HospitalDetailsScreen navigation={navigation}></HospitalDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  
  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
});

it('should have hospital detail boxes', () => {
  expect(wrapper.find(TextInput)).to.have.length(9);
})

it('should change state when text changed on hospitalname box', () => {
  const hospitaladd1 = wrapper.find(TextInput).at(0);
  hospitaladd1.simulate('ChangeText', 'name');
  expect(wrapper.state('hospitalname')).to.equal('name');
});


it('should change state when text changed on hospitaladd1 box', () => {
  const hospitaladd1 = wrapper.find(TextInput).at(1);
  hospitaladd1.simulate('ChangeText', 'addressine1');
  expect(wrapper.state('hospitaladd1')).to.equal('addressine1');
});

it('should change state when text changed on hospitaladd2 box', () => {
  const hospitaladd2 = wrapper.find(TextInput).at(2);
  hospitaladd2.simulate('ChangeText', 'addressine2');
  expect(wrapper.state('hospitaladd2')).to.equal('addressine2');
});

it('should change state when text changed on phonenumber box', () => {
  const phonenumber = wrapper.find(TextInput).at(3);
  phonenumber.simulate('ChangeText', 'phonenumber');
  expect(wrapper.state('phonenumber')).to.equal('phonenumber');
});


it('should change state when text changed on date box', () => {
  const date = wrapper.find(DatePicker).at(0);
  date.simulate('dateChange', 'originally_registered_date');
  expect(wrapper.state('date')).to.equal('originally_registered_date');
});

it('should change state when text changed on licensenumber box', () => {
  const licensenumber = wrapper.find(TextInput).at(4);
  licensenumber.simulate('ChangeText', 'licence_number');
  expect(wrapper.state('licensenumber')).to.equal('licence_number');
});

it('should change state when text changed on area box', () => {
  const area = wrapper.find(TextInput).at(5);
  area.simulate('ChangeText', 'area');
  expect(wrapper.state('area')).to.equal('area');
});

it('should change state when text changed on city box', () => {
  const city = wrapper.find(TextInput).at(6);
  city.simulate('ChangeText', 'city');
  expect(wrapper.state('city')).to.equal('city');
});


it('should change state when text changed on state box', () => {
  const state = wrapper.find(TextInput).at(7);
  state.simulate('ChangeText', 'state');
  expect(wrapper.state('state')).to.equal('state');
});

it('should change pincode when text changed on pincode box', () => {
  const pincode = wrapper.find(TextInput).at(8);
  pincode.simulate('ChangeText', 'pincode');
  expect(wrapper.state('pincode')).to.equal('pincode');
});

it('should contain Submit button', () => {
  expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);

})

it('should contain update button', () => {
  expect(wrapper.contains(<Text style={styles.buttonText}> Update </Text>)).to.equal(true);

})


it('should navigate to hospital component on submit', async() => {
  wrapper.find(TextInput).at(0).simulate('ChangeText', 'name');
  wrapper.find(TextInput).at(1).simulate('ChangeText', 'addressine1');
  wrapper.find(TextInput).at(2).simulate('ChangeText', 'addressine2');
  wrapper.find(TextInput).at(3).simulate('ChangeText', 'phonenumber');
  wrapper.find(TextInput).at(4).simulate('ChangeText', 'licence_number');
  wrapper.find(TextInput).at(5).simulate('ChangeText', 'area');
  wrapper.find(TextInput).at(6).simulate('ChangeText', 'city');
  wrapper.find(TextInput).at(7).simulate('ChangeText', 'state');
  wrapper.find(TextInput).at(8).simulate('ChangeText', 'pincode');

    const output = { "message": "Invalid" 
                  };

    postAdminHospitalApi.mockResolvedValue(output);    
    await wrapper.instance().onPressSubmit();
    sinon.assert.calledWith(spyon, "HospitalScreen");
    sinon.assert.calledOnce(spyon);
  
})

it('should navigate to hospital component on update', async() => {
  wrapper.find(TextInput).at(0).simulate('ChangeText', 'name');
  wrapper.find(TextInput).at(1).simulate('ChangeText', 'addressine1');
  wrapper.find(TextInput).at(2).simulate('ChangeText', 'addressine2');
  wrapper.find(TextInput).at(3).simulate('ChangeText', 'phonenumber');
  wrapper.find(TextInput).at(4).simulate('ChangeText', 'licence_number');
  wrapper.find(TextInput).at(5).simulate('ChangeText', 'area');
  wrapper.find(TextInput).at(6).simulate('ChangeText', 'city');
  wrapper.find(TextInput).at(7).simulate('ChangeText', 'state');
  wrapper.find(TextInput).at(8).simulate('ChangeText', 'pincode');

    const output = { "message": "Invalid" 
                  };

   editAdminHospitalApi.mockResolvedValue(output);    
    await wrapper.instance().onPressUpdate();
    sinon.assert.calledWith(spyon, "HospitalScreen");
    sinon.assert.calledOnce(spyon);
  
})


});