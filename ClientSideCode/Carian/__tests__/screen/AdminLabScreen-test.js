import React from 'react';
import { shallow } from 'enzyme';
import LabScreen from '../../screen/drawerScreens/LabScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import ActionButton from 'react-native-action-button';
const navigation = { navigate: jest.fn() };
import { LabApi } from '../../screen/services/adminLabService';
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/adminLabService");

describe('<LabScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    LabApi.mockResolvedValue([{
      name: "hospital.name", area: "hospital.area", city: "hospital.city", phonenumber: "hospital.phonenumber"
      , addressine1: "hospital.addressine1", addressine2: "hospital.addressine2", state: "hospital.state", pincode: "hospital.pincode", licence_number: "hospital.licence_number", originally_registered_date: "hospital.originally_registered_date",
      hospital_id: "hospital.hospital_id", id: "hospital.id"
    }])
    wrapper = shallow(<LabScreen navigation={navigation}></LabScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
  });

  it('should contain Add Lab button', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to LabOverview screen component', () => {
    const register = wrapper.find(TouchableOpacity).at(0);
    console.log(register)
    register.simulate('press');
    sinon.assert.calledWith(spyon, "LabOverview");
    sinon.assert.calledOnce(spyon);
  })

  it('should navigate to Lab Detail screen component', () => {
    const register = wrapper.find(ActionButton).at(0);
    console.log(register)
    register.simulate('press');
    sinon.assert.calledWith(spyon, "LabDetailsScreen");
    sinon.assert.calledOnce(spyon);
  })

});