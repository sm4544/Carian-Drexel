import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../screen/stackNavScreens/RegistrationScreen';
import { View, Text, ScrollView,TextInput, TouchableOpacity } from 'react-native';
import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
//import sinonChai from 'sinon-chai';
//import sinonChaiInOrder from 'sinon-chai-in-order';
import styles from '../../styles/commonStyles';
import DropDownPicker from 'react-native-dropdown-picker';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
//var chai = require("chai");
//var sinonChai = require("sinon-chai");
//chai.use(sinonChai);
//chai.use(sinonChaiInOrder);

describe('<Register/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<Register navigation={navigation}></Register>);
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

it('should have CARIAN text component', () => {
    expect(wrapper.find(Text)).to.have.length(8);
    expect(wrapper.contains("CARIAN")).to.equal(true);
  });

  it('should have DropdownMenu', () => {
    expect(wrapper.find(DropDownPicker)).to.have.length(1);
  });

  
  it('should have the Dropdown picker  input component with empaty value ', () => {
    expect(wrapper.state('profile_type')).to.equal('');
  });
  it('should change state when text changed on first name inputtext box', () => {
    var data = [
      { label: 'Customer', value: 'Customer', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Admin', value: 'Admin', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Doctor', value: 'Doctor', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Staff', value: 'Staff', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'LabAssistant', value: 'LabAssistant', icon: () => <Icon name="flag" size={18} color="#900" /> },
      { label: 'Pharmacist', value: 'Pharmacist', icon: () => <Icon name="flag" size={18} color="#900" /> },

  ];
   
  const mockMyEventHandler = jest.fn()
  wrapper.setProps({ onChangeItem: mockMyEventHandler }) 
  wrapper.find(DropDownPicker).simulate('change', '', { value: data[0].label })
  expect(mockMyEventHandler).to.have.been.calledWith(data[0].label);
  
  });


it('should have 5 Textinput boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(5);
  });

  it('should have First NAme input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

it('should change state when text changed on first name inputtext box', () => {
    const firstName = wrapper.find(TextInput).at(0);
    firstName.simulate('ChangeText', 'Sriram');
    expect(wrapper.state('firstName')).to.equal('Sriram');
  });

it('should have Last Name input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

it('should change state when text changed on first name inputtext box', () => {
    const lastName = wrapper.find(TextInput).at(1);
    lastName.simulate('ChangeText', 'Medisetti');
    expect(wrapper.state('lastName')).to.equal('Medisetti');
  });

  it('should have  mobileNumber input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

it('should change state when text changed on first name inputtext box', () => {
    const mobileNumber = wrapper.find(TextInput).at(2);
    mobileNumber.simulate('ChangeText', '9494956232');
    expect(wrapper.state('mobileNumber')).to.equal('9494956232');
  });

  it('should have the email input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on email inputtext box', () => {
    const email = wrapper.find(TextInput).at(3);
    email.simulate('ChangeText', 'test@test.com');
    expect(wrapper.state('email')).to.equal('test@test.com');
  });

  it('should have the password input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on password inputtext box', () => {
    const password = wrapper.find(TextInput).at(4);
    password.simulate('ChangeText', '123456789');
    expect(wrapper.state('password')).to.equal('123456789');
  });

  
  it('should contain Register/Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Register/Submit</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(2);

  })
  it('should through error messages if user click on Register with empty Firstname', () => {
    const reisterButton = wrapper.find(TouchableOpacity).at(0);
    reisterButton.simulate('press');
    expect(wrapper.contains('The field "firstName" is mandatory.')).to.equal(true);

  })
  it('should through error messages if user click on Register with empty lastName', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "lastName" is mandatory.')).to.equal(true);

  })
  it('should through error messages if user click on Register with empty mobileNumber', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "mobileNumber" is mandatory.')).to.equal(true);

  })


  it('should through error messages if user click on Register with empty email', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);
    expect(wrapper.contains('The field "email" is mandatory.')).to.equal(true);

  })

  it('should through error message if user click on Register with invalid email', () => {
    const email = wrapper.find(TextInput).at(3);
    email.simulate('ChangeText', 'test');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);   

  })

  it('should through error messages if user click on Register with empty password', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 7.')).to.equal(true);
    expect(wrapper.contains('The field "password" is mandatory.')).to.equal(true);

  })

  
it('should through error message if user click on Register with invalid password', () => {
   const password = wrapper.find(TextInput).at(4);
   password.simulate('ChangeText', 'hello');
   const regButton = wrapper.find(TouchableOpacity).at(0);
   regButton.simulate('press');
   expect(wrapper.contains('The field "password" length must be greater than 7.')).to.equal(true);   
 })
 it('should contain Resgiter button', () => {
  expect(wrapper.contains(<Text style={styles.buttonText}>Register/Submit</Text>)).to.equal(true);
  expect(wrapper.find(TouchableOpacity)).to.have.length(2);
})
it('should contain Sign in button', () => {
  expect(wrapper.contains(<Text style={styles.hyperlink}> Already have an account? Sign in</Text>)).to.equal(true);
  expect(wrapper.find(TouchableOpacity)).to.have.length(2);
})
it('should navigate to login component', () => {
  const login = wrapper.find(TouchableOpacity).at(1);
  login.simulate('press');    
  sinon.assert.calledWith(spyon, "LoginScreen");
  sinon.assert.calledOnce(spyon);  
}) 



});