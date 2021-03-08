import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../screen/stackNavScreens/RegistrationScreen';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { PostProfileApi } from '../../screen/services/profileService';
import { launchImageLibrary } from 'react-native-image-picker';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/profileService");

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
    expect(wrapper.find(View)).to.have.length(8);
  });

  it('should have CARIAN text component', () => {
    expect(wrapper.find(Text)).to.have.length(19);
    expect(wrapper.contains("CARIAN")).to.equal(true);
  });

  it('should have DropdownMenu', () => {
    expect(wrapper.find(DropDownPicker)).to.have.length(2);
  });

  it('should have the Dropdown picker  input component with empaty value ', () => {
    expect(wrapper.state('profile_type')).to.equal('');
  });

  it('should have the Dropdown picker  input component with empaty value ', () => {
    expect(wrapper.state('securityQuestion')).to.equal('');
  });

  


  it('should have 8 Textinput boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(7);
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

  it('should change state when text changed on Last name inputtext box', () => {
    const lastName = wrapper.find(TextInput).at(1);
    lastName.simulate('ChangeText', 'Medisetti');
    expect(wrapper.state('lastName')).to.equal('Medisetti');
  });

  it('should have  mobileNumber input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on mobile name inputtext box', () => {
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

  it('should have the username input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on username inputtext box', () => {
    const username = wrapper.find(TextInput).at(4);
    username.simulate('ChangeText', 'test');
    expect(wrapper.state('username')).to.equal('test');
  });

  it('should have the password input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on password inputtext box', () => {
    const password = wrapper.find(TextInput).at(5);
    password.simulate('ChangeText', '123456789');
    expect(wrapper.state('password')).to.equal('123456789');
  });



  it('should have the securityAnswer input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(6).props().value).to.equal('');
  });

  it('should change state when text changed on securityAnswer inputtext box', () => {
    const securityAnswer = wrapper.find(TextInput).at(6);
    securityAnswer.simulate('ChangeText', 'test');
    expect(wrapper.state('securityAnswer')).to.equal('test');
  });

  it('should contain Register/Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Register/Submit</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);
  })

  it('should through error messages if user click on Register with empty Firstname', () => {
    const reisterButton = wrapper.find(TouchableOpacity).at(1);
    reisterButton.simulate('press');    
    expect(wrapper.contains('The field "firstName" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty lastName', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(1);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "lastName" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty mobileNumber', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(1);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "mobileNumber" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty email', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(1);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);
    expect(wrapper.contains('The field "email" is mandatory.')).to.equal(true);
  })

  it('should through error message if user click on Register with invalid email', () => {    
    const email = wrapper.find(TextInput).at(3);
    email.simulate('ChangeText', 'test');
    const registerButton = wrapper.find(TouchableOpacity).at(1);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty password', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(1);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 2.')).to.equal(true);
    expect(wrapper.contains('The field "password" is mandatory.')).to.equal(true);
  })

  it('should through error message if user click on Register with invalid password', () => {
    const password = wrapper.find(TextInput).at(4);
    password.simulate('ChangeText', 'he');
    const regButton = wrapper.find(TouchableOpacity).at(1);
    regButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 2.')).to.equal(true);
  })
  
  it('should contain Sign in button', () => {
    expect(wrapper.contains(<Text style={styles.hyperlink}> Already have an account? Sign in</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);
  })

  it('should navigate to login component', () => {
    const login = wrapper.find(TouchableOpacity).at(2);
    login.simulate('press');
    sinon.assert.calledWith(spyon, "LoginScreen");
    sinon.assert.calledOnce(spyon);
  })

  it('should navigate to staff info screen page component', async() => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(2).simulate('ChangeText', '123456');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(4).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(5).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(6).simulate('ChangeText', 'Who are you');
    
    wrapper.setState({ profile_type: 'Doctor' });
    wrapper.setState({ securityQuestion: 'Doctor' });
    
    
    const output = {"FirstName": "Admin", 
                  "JWT_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImV4cCI6MTYwMzg0MjUyOH0.oiiepPL-XASk-D_TOCbNgt65Lk7dLycIRNc-J4Wj9Bk", 
                  "LastName": "Admin", 
                  "Message": "Added Profile", 
                  "ProfileID": "39", 
                  "Profile_Type": "test"};
    
    PostProfileApi.mockResolvedValue(output);    
    await wrapper.instance().onPressRegister();
    sinon.assert.calledWith(spyon, "StaffInfoScreen", {  name: 'test,test', profileId: "39",  profile_type: 'Doctor'});
    sinon.assert.calledOnce(spyon);
  })

  it('should not navigate to staff info screen page component', async() => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(2).simulate('ChangeText', '123456');
    wrapper.find(TextInput).at(3).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(4).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(5).simulate('ChangeText', '123456789632');
    
    wrapper.find(TextInput).at(6).simulate('ChangeText', 'test');
    wrapper.setState({ profile_type: 'Doctor' });
    wrapper.setState({ securityQuestion: 'Doctor' });
    const register = wrapper.find(TouchableOpacity).at(0);
    const output = {"FirstName": "Admin", 
                  "JWT_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImV4cCI6MTYwMzg0MjUyOH0.oiiepPL-XASk-D_TOCbNgt65Lk7dLycIRNc-J4Wj9Bk", 
                  "LastName": "Admin", 
                  "Message": "Error in Profile", 
                  "ProfileID": "39", 
                  "Profile_Type": "test"};
    
    PostProfileApi.mockResolvedValue(output);
    await wrapper.instance().onPressRegister();
    sinon.assert.notCalled(spyon)
  })
}); 