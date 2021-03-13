import React from 'react';
import { shallow } from 'enzyme';
import StaffDetailsScreen from '../../screen/drawerScreens/StaffDetailsScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { postAdminStaffApi, editAdminStaffApi } from '../../screen/services/adminStaffService';

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
jest.mock("../../screen/services/adminStaffService");

describe('<StaffDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<StaffDetailsScreen navigation={navigation}></StaffDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });

  it('should have doctor/staff detail boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(8);
  })

  it('should change state when text changed on highestdegree box', () => {
    const highestdegree = wrapper.find(TextInput).at(0);
    highestdegree.simulate('ChangeText', 'abc');
    expect(wrapper.state('highestdegree')).to.equal('abc');
  });

  it('should change state when text changed on collegename box', () => {
    const collegename = wrapper.find(TextInput).at(1);
    collegename.simulate('ChangeText', 'abcd');
    expect(wrapper.state('collegename')).to.equal('abcd');
  });

  it('should change state when text changed on specilization box', () => {
    const specilization = wrapper.find(TextInput).at(2);
    specilization.simulate('ChangeText', 'PG');
    expect(wrapper.state('specilization')).to.equal('PG');
  });

  it('should change state when text changed on overallexperience box', () => {
    const overallexperience = wrapper.find(TextInput).at(3);
    overallexperience.simulate('ChangeText', '15');
    expect(wrapper.state('overallexperience')).to.equal('15');
  });

  it('should change state when text changed on phonenumber box', () => {
    const phonenumber = wrapper.find(TextInput).at(4);
    phonenumber.simulate('ChangeText', '12345');
    expect(wrapper.state('phonenumber')).to.equal('12345');
  });

  it('should change state when text changed on email box', () => {
    const email = wrapper.find(TextInput).at(5);
    email.simulate('ChangeText', 'abc123@gmail.com');
    expect(wrapper.state('email')).to.equal('abc123@gmail.com');
  });

  it('should change state when text changed on licensenumber box', () => {
    const licensenumber = wrapper.find(TextInput).at(6);
    licensenumber.simulate('ChangeText', '111111');
    expect(wrapper.state('licensenumber')).to.equal('111111');
  });

  it('should change state when text changed on doctorfee box', () => {
    const doctorfee = wrapper.find(TextInput).at(7);
    doctorfee.simulate('ChangeText', '111111');
    expect(wrapper.state('doctorfee')).to.equal('111111');
  });

  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);
  })

  it('should contain update button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Update </Text>)).to.equal(true);

  })

  it('should navigate to staff component on submit', async () => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'name');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'add1');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'add2');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(4).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(6).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'test@test.com');

    const output = {
      "Message": "Invalid JSON-'name'"
    };

    postAdminStaffApi.mockResolvedValue(output);
    await wrapper.instance().onPressSubmit();
    sinon.assert.calledWith(spyon, "ManageStaffScreen");
    sinon.assert.calledOnce(spyon);

  })

  it('should navigate to Pharmacy component on update', async () => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'namek');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'add1');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'add2');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(4).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(6).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'test@test.com');

    const output = {
      "Message": "Invalid JSON-'name'"
    };

    editAdminStaffApi.mockResolvedValue(output);
    await wrapper.instance().onPressUpdate();
    sinon.assert.calledWith(spyon, "ManageStaffScreen");
    sinon.assert.calledOnce(spyon);

  })
});