import React from 'react';
import { shallow } from 'enzyme';
import PharmacyDetailsScreen from '../../screen/drawerScreens/PharmacyDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView,Alert } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import DatePicker from 'react-native-datepicker';
import { postAdminPharmacyApi,editAdminPharmacyApi } from '../../screen/services/adminPharmacyService'
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

jest.mock("../../screen/services/adminPharmacyService");

describe('<PharmacyDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<PharmacyDetailsScreen navigation={navigation}></PharmacyDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });


  it('should have pharmacy detail boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(8);
  })


  it('should change state when text changed on pharmacyname box', () => {
    const pharmacyname = wrapper.find(TextInput).at(0);
    pharmacyname.simulate('ChangeText', 'abc');
    expect(wrapper.state('pharmacyname')).to.equal('abc');
  });


  it('should change state when text changed on pharmacyadd1 box', () => {
    const pharmacyadd1 = wrapper.find(TextInput).at(1);
    pharmacyadd1.simulate('ChangeText', 'abcad1');
    expect(wrapper.state('pharmacyadd1')).to.equal('abcad1');
  });


  it('should change state when text changed on pharmacyadd2 box', () => {
    const pharmacyadd2 = wrapper.find(TextInput).at(2);
    pharmacyadd2.simulate('ChangeText', 'abcad2');
    expect(wrapper.state('pharmacyadd2')).to.equal('abcad2');
  });


  it('should change state when text changed on phonenumber box', () => {
    const phonenumber = wrapper.find(TextInput).at(3);
    phonenumber.simulate('ChangeText', '1234');
    expect(wrapper.state('phonenumber')).to.equal('1234');
  });


    it('should change state when text changed on date box', () => {
    const date = wrapper.find(DatePicker).at(0);
    date.simulate('dateChange', '11-11-2020');
    expect(wrapper.state('date')).to.equal('11-11-2020');
  });


  it('should change state when text changed on licensenumber box', () => {
    const licensenumber = wrapper.find(TextInput).at(4);
    licensenumber.simulate('ChangeText', 'A1234');
    expect(wrapper.state('licensenumber')).to.equal('A1234');
  });


  it('should change state when text changed on city box', () => {
    const city = wrapper.find(TextInput).at(5);
    city.simulate('ChangeText', 'hyd');
    expect(wrapper.state('city')).to.equal('hyd');
  });


  it('should change state when text changed on state box', () => {
    const state = wrapper.find(TextInput).at(6);
    state.simulate('ChangeText', 'telangana');
    expect(wrapper.state('state')).to.equal('telangana');
  });


  it('should change pincode when text changed on state box', () => {
    const pincode = wrapper.find(TextInput).at(7);
    pincode.simulate('ChangeText', '12345');
    expect(wrapper.state('pincode')).to.equal('12345');
  });


  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Submit</Text>)).to.equal(true);

  })

  it('should contain update button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Update</Text>)).to.equal(true);
  
  })
 

    it('should navigate to Pharmacy component on submit', async() => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'name');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'add1');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'add2');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(4).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(6).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'test@test.com');

      const output = { "Message": "Invalid JSON-'name'" 
                    };
  
      postAdminPharmacyApi.mockResolvedValue(output);    
      await wrapper.instance().onPressSubmit();
      sinon.assert.calledWith(spyon, "PharmacyScreen");
      sinon.assert.calledOnce(spyon);
    
  })

  
  it('should navigate to Pharmacy component on update', async() => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'namek');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'add1');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'add2');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(4).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(6).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'test@test.com');

      const output = { "Message": "Invalid JSON-'name'" 
                    };
  
      editAdminPharmacyApi.mockResolvedValue(output);    
      await wrapper.instance().onPressUpdate();
      sinon.assert.calledWith(spyon, "PharmacyScreen");
      sinon.assert.calledOnce(spyon);
    
  })



});