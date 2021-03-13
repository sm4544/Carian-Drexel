import React from 'react';
import { shallow } from 'enzyme';
import PharmacyScreen from '../../screen/drawerScreens/PharmacyScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import ActionButton from 'react-native-action-button';
import { PharmacyApi } from '../../screen/services/adminPharmacyService';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

jest.mock("../../screen/services/adminPharmacyService");

describe('<PharmacyScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    PharmacyApi.mockResolvedValue([{
      name: "hospitalname", area: "hospitalarea", city: "hospitalcity", phonenumber: "1234",
      addressine1: "hospitaladdressine1", addressine2: "hospitaladdressine2", state: "hospitalstate", pincode: "12678", licence_number: "907", originally_registered_date: "12-12-2020",
      id: "2"
    }])
    wrapper = shallow(<PharmacyScreen navigation={navigation}></PharmacyScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
  });

  it('should contain Add pharmacy button', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to PharmacyOverview screen component', () => {
    const register = wrapper.find(TouchableOpacity).at(0);
    console.log(register)
    register.simulate('press');
    sinon.assert.calledWith(spyon, "PharmacyOverview");
    sinon.assert.calledOnce(spyon);
  })

  it('should navigate to Hospital Detail screen component', () => {
    const register = wrapper.find(ActionButton).at(0);
    console.log(register)
    register.simulate('press');
    sinon.assert.calledWith(spyon, "PharmacyDetailsScreen", {
      name: "", area: "", city: "", phonenumber: "",
      addressine1: "", addressine2: "", state: "", pincode: "", licence_number: "", originally_registered_date: "",
      id: ""
    });
    sinon.assert.calledOnce(spyon);
  })
});