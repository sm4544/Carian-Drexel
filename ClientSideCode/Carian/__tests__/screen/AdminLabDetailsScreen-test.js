import React from 'react';
import { shallow } from 'enzyme';
import LabDetailsScreen from '../../screen/drawerScreens/LabDetailsScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import DatePicker from 'react-native-datepicker';
import { postAdminLabApi, editAdminLabApi } from '../../screen/services/adminLabService'

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
const hospitalid = { hospitalid: hospitalid };
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
      hospitalid: hospitalid,
    }
  }
};

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/adminLabService");

describe('<LabDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<LabDetailsScreen navigation={navigation}></LabDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });

  it('should have lab detail boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(9);
  })

  it('should change state when text changed on labname box', () => {
    const labname = wrapper.find(TextInput).at(0);
    labname.simulate('ChangeText', 'name');
    expect(wrapper.state('labname')).to.equal('name');
  });

  it('should change state when text changed on labadd1 box', () => {
    const labadd1 = wrapper.find(TextInput).at(1);
    labadd1.simulate('ChangeText', 'addressine1');
    expect(wrapper.state('labadd1')).to.equal('addressine1');
  });

  it('should change state when text changed on labadd2 box', () => {
    const labadd2 = wrapper.find(TextInput).at(2);
    labadd2.simulate('ChangeText', 'addressine2');
    expect(wrapper.state('labadd2')).to.equal('addressine2');
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

  it('should change state when text changed on city box', () => {
    const city = wrapper.find(TextInput).at(5);
    city.simulate('ChangeText', 'city');
    expect(wrapper.state('city')).to.equal('city');
  });

  it('should change state when text changed on state box', () => {
    const state = wrapper.find(TextInput).at(6);
    state.simulate('ChangeText', 'state');
    expect(wrapper.state('state')).to.equal('state');
  });

  it('should change pincode when text changed on pincode box', () => {
    const pincode = wrapper.find(TextInput).at(7);
    pincode.simulate('ChangeText', 'pincode');
    expect(wrapper.state('pincode')).to.equal('pincode');
  });

  it('should change state when text changed on hospitalid box', () => {
    const hospitalid = wrapper.find(TextInput).at(8);
    hospitalid.simulate('ChangeText', 'hospitalid');
    expect(wrapper.state('hospitalid')).to.equal('hospitalid');
  });

  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);
  })

  it('should contain update button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Update </Text>)).to.equal(true);
  })

  it('should navigate to lab component on submit', async () => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'name');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'add1');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'add2');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(4).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(6).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(8).simulate('ChangeText', '123456789632');
    const output = {
      "Message": "Invalid JSON-'name'"
    };
    postAdminLabApi.mockResolvedValue(output);
    await wrapper.instance().onPressSubmit();
    sinon.assert.calledWith(spyon, "LabScreen");
    sinon.assert.calledOnce(spyon);
  })

  it('should navigate to hospital component on update', async () => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'name');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'addressine1');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'addressine2');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'phonenumber');
    wrapper.find(TextInput).at(4).simulate('ChangeText', 'licence_number');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'area');
    wrapper.find(TextInput).at(6).simulate('ChangeText', 'city');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'state');
    wrapper.find(TextInput).at(8).simulate('ChangeText', 'pincode');

    const output = {
      "message": "Invalid"
    };

    editAdminLabApi.mockResolvedValue(output);
    await wrapper.instance().onPressUpdate();
    sinon.assert.calledWith(spyon, "LabScreen");
    sinon.assert.calledOnce(spyon);
  })
});