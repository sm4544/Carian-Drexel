import React from 'react';
import { shallow } from 'enzyme';
import DepartmentPage from '../../screen/drawerScreens/DepartmentPage';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import RadioForm from 'react-native-simple-radio-button';
import { postDepartmentInfoApi } from '../../screen/services/DepartmentService';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/DepartmentService");

describe('<DepartmentPage/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<DepartmentPage navigation={navigation}></DepartmentPage>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });
  it('should have Scrollview', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });
  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(6);
  });
  it('should have Radioform', () => {
    expect(wrapper.find(RadioForm)).to.have.length(1);
  });
  it('should have TextInput', () => {
    expect(wrapper.find(TextInput)).to.have.length(4);
  });
  it('should have Doctors Details text component', () => {
    expect(wrapper.find(Text)).to.have.length(6);
    expect(wrapper.contains("Address same as Hospital address ?")).to.equal(true);
  });

  it('should have Department_name input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on Department_name inputtext box', () => {
    const Department_name = wrapper.find(TextInput).at(0);
    Department_name.simulate('ChangeText', 'Ortho');
    expect(wrapper.state('Department_name')).to.equal('Ortho');
  });
  it('should have departmentAdmin_name input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on departmentAdmin_name inputtext box', () => {
    const departmentAdmin_name = wrapper.find(TextInput).at(1);
    departmentAdmin_name.simulate('ChangeText', 'Ram');
    expect(wrapper.state('departmentAdmin_name')).to.equal('Ram');
  });
  it('should have email input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on email inputtext box', () => {
    const email = wrapper.find(TextInput).at(2);
    email.simulate('ChangeText', 'Ram@gmail.com');
    expect(wrapper.state('email')).to.equal('Ram@gmail.com');
  });
  it('should have department_phone_number input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on department_phone_number inputtext box', () => {
    const department_phone_number = wrapper.find(TextInput).at(3);
    department_phone_number.simulate('ChangeText', '9123912391');
    expect(wrapper.state('department_phone_number')).to.equal('9123912391');
  });
  it('should through error messages if user click on Register with empty Department_name', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "Department_name" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on Register with empty departmentAdmin_name', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "departmentAdmin_name" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on Register with empty email', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "email" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on Register with empty department_phone_number', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "department_phone_number" is mandatory.')).to.equal(true);
  })

  it('should navigate to department home screen ', async () => {
    
    wrapper.setState({ is_same_as_hospital_address: false });
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'test@gmail.com');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 12345);
    wrapper.find(TextInput).at(4).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(6).simulate('ChangeText', 'city');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'state');
    wrapper.find(TextInput).at(8).simulate('ChangeText', '19104');
   

    const output = { "Message": "Added Department Staff", "Department_ID": "39" };

    postDepartmentInfoApi.mockResolvedValue(output);
    await wrapper.instance().onPressDepartmentInfo();
    
    sinon.assert.calledWith(spyon, "DepartmentConfirmationScreen", { Department_name: 'test' });
    sinon.assert.calledOnce(spyon);
  })

  it('should NOT navigate to department home  screen ', async () => {

    wrapper.setState({ is_same_as_hospital_address: false });
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'test@gmail.com');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 12345);
    wrapper.find(TextInput).at(4).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(5).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(6).simulate('ChangeText', 'city');
    wrapper.find(TextInput).at(7).simulate('ChangeText', 'state');
    wrapper.find(TextInput).at(8).simulate('ChangeText', '19104');

    const output = { "Message": "ERROR", "Department_ID": "39" };

    postDepartmentInfoApi.mockResolvedValue(output);
    await wrapper.instance().onPressDepartmentInfo();
    console.log(spyon + 'spyon')
    sinon.assert.notCalled(spyon)
  })
});