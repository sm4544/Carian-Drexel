import React from 'react';
import { shallow } from 'enzyme';
import ManageStaffScreen from '../../screen/drawerScreens/ManageStaffScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import ActionButton from 'react-native-action-button';
import { StaffApi } from '../../screen/services/adminStaffService';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/adminStaffService");


describe('<ManageStaffScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    StaffApi.mockResolvedValue([{
      name: "doctorname", specialization: "ortho", highestDegree: "mbbs", overAllExperience: "10",
      phonenumber: "1234", email: "xyz", college_name: "abc", doctor_fee: "200", licence_number: "345", id: "1", profile_id: "2", hospital_id: "2"
    }])
    wrapper = shallow(<ManageStaffScreen navigation={navigation}></ManageStaffScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
  });

  it('should contain Add staff button', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to StaffOverview screen component', () => {
    const register = wrapper.find(TouchableOpacity).at(0);
    console.log(register)
    register.simulate('press');
    sinon.assert.calledWith(spyon, "StaffOverview");
    sinon.assert.calledOnce(spyon);
  })

  it('should navigate to Staff Detail screen component', () => {
    const register = wrapper.find(ActionButton).at(0);
    console.log(register)
    register.simulate('press');
    sinon.assert.calledWith(spyon, "StaffDetailsScreen", {
      name: "", specialization: "", highestDegree: "", overAllExperience: "",
      phonenumber: "", email: "", college_name: "", doctor_fee: "", licence_number: "", id: "", profile_id: "", hospital_id: ""
    });
    sinon.assert.calledOnce(spyon);
  })

});