import React from 'react';
import { shallow } from 'enzyme';
import Department_WRTHospital from '../../screen/drawerScreens/Department_WRTHospital';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import DropDownPicker from 'react-native-dropdown-picker';
import { getAllDepartments, deleteDepartmentInfoApi } from '../../screen/services/DepartmentService';
const profileId = { profileId: global.profileId };
const hospital_id= {hospital_id:hospital_id};
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      profileId: profileId,
      hospital_id:hospital_id,
   }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/DepartmentService");

describe('<Department_WRTHospital/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    getAllDepartments.mockResolvedValue()
    deleteDepartmentInfoApi.mockResolvedValue({id:10});
    wrapper = shallow(<Department_WRTHospital navigation={navigation}></Department_WRTHospital>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });
  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(2);
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

  it('should cal delete functionality screen ', async () => {
    wrapper.setState({ flagDep: true })
    const delet = wrapper.find(TouchableOpacity).at(1);
    delet.simulate('press');
    output = {id:10}
    deleteDepartmentInfoApi.mockResolvedValue(output);
    await wrapper.instance().onPressDeleteDepartment();
    wrapper.setState({ flagDep: false })
  })

  it('should navigate to update screen ', async () => {
    wrapper.setState({ flagDep: true })
    const update = wrapper.find(TouchableOpacity).at(0);
    update.simulate('press');
    
    sinon.assert.calledWith(spyon, "DepartmentUpdate",{  Department_name: '',
        addressine1: '',
        is_same_as_hospital_address: '',
        addressine2:"",
        city:"",
        state:"",
        pincode:"",
        department_phone_number:"",
        hospital_id:"",
        id:""});
    sinon.assert.calledOnce(spyon);
    wrapper.setState({ flagDep: false })
  })

});