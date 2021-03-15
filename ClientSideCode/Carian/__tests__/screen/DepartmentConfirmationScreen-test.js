import React from 'react';
import { shallow } from 'enzyme';
import DepartmentConfirmationScreen from '../../screen/drawerScreens/DepartmentConfirmationScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import RadioForm from 'react-native-simple-radio-button';
import { getAllHospitals } from '../../screen/services/hospitalService';
import DropDownPicker from 'react-native-dropdown-picker';
const profileid = { profileid: profileid };
const hospital_id= {hospital_id:hospital_id};
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
        profileid: profileid,
      hospital_id:hospital_id,
   }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/hospitalService");

describe('<DepartmentConfirmationScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      getAllHospitals.mockResolvedValue()
      wrapper = shallow(<DepartmentConfirmationScreen navigation={navigation}></DepartmentConfirmationScreen>);
    });
  
    afterEach(function () {
      navigation.navigate.restore();
    });
    it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(4);
      });
      it('should have drop down for relationship', () => {
        expect(wrapper.find(DropDownPicker)).to.have.length(1);
      });

      it('should have TouchableOpacity ', async () => {
        wrapper.setState({ flagDep: true })
        expect(wrapper.find(TouchableOpacity)).to.have.length(2);
      })
     
      it('should have Text ', async () => {
        wrapper.setState({ flagDep: true })
        expect(wrapper.find(Text)).to.have.length(2);
      })

      it('should navigate to DepartmentPage screen ', async () => {
        wrapper.setState({ flagDep: true })
        const add = wrapper.find(TouchableOpacity).at(0);
        add.simulate('press');
        sinon.assert.calledWith(spyon, "DepartmentPage", {hospital_id:'',profileId:undefined });
        sinon.assert.calledOnce(spyon);
      })
      it('should navigate to Department_WRTHospital screen ', async () => {
        wrapper.setState({ flagDep: true })
        const edit = wrapper.find(TouchableOpacity).at(1);
        edit.simulate('press');
        sinon.assert.calledWith(spyon, "Department_WRTHospital", {hospital_id:'',profileId:undefined });
        sinon.assert.calledOnce(spyon);
      })
})