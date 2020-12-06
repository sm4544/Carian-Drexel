import React from 'react';
import {  shallow } from 'enzyme';
import Login from '../../screen/stackNavScreens/LoginScreen';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { postLoginApi } from '../../screen/services/profileService';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

jest.mock("../../screen/services/profileService");



describe('<Login/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');    
    wrapper = shallow(<Login navigation={navigation}></Login>); 
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should have CARIAN text component', () => {
    expect(wrapper.find(Text)).to.have.length(6);
    expect(wrapper.contains("CARIAN")).to.equal(true);
  })
  it('should have userName and password Textinput boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(2);
  })

  it('should have the username input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on username inputtext box', () => {
    const username = wrapper.find(TextInput).at(0);
    username.simulate('ChangeText', 'test');
    expect(wrapper.state('username')).to.equal('test');
  });

  it('should have the password input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on password inputtext box', () => {
    const password = wrapper.find(TextInput).at(1);
    password.simulate('ChangeText', '123456789');
    expect(wrapper.state('password')).to.equal('123456789');
  });

  it('should contain forgot password link', () => {
    expect(wrapper.contains(<Text style={styles.hyperlink}>Forgot Password</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);
  })

  it('should contain Login button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>LOGIN</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);
  })

  it('should contain register button', () => {
    expect(wrapper.contains(<Text style={styles.hyperlink}>New user? Register Here</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);
  })

  it('should through error messages if user click on login with empty username', () => {
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    //expect(wrapper.contains('The field "username" must be a valid username address.')).to.equal(true);
    expect(wrapper.contains('The field "username" is mandatory.')).to.equal(true);
  })

 

  it('should through error messages if user click on login with empty password', () => {
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 2.')).to.equal(true);
    expect(wrapper.contains('The field "password" is mandatory.')).to.equal(true);
  })

  it('should through error message if user click on login with invalid password', () => {
    const password = wrapper.find(TextInput).at(1);
    password.simulate('ChangeText', 't');
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 2.')).to.equal(true);
  })

  it('should through error message if user click on login with empty username and  password', () => {    
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 2.')).to.equal(true);
    expect(wrapper.contains('The field "password" is mandatory.')).to.equal(true);    
    expect(wrapper.contains('The field "username" is mandatory.')).to.equal(true);
  })


  it('should navigate to register component', () => {
    wrapper.instance().onPressRegister();
    sinon.assert.calledWith(spyon, "RegistrationScreen");
    sinon.assert.calledOnce(spyon);
    
  })

  it('should navigate to home page component', async() => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(1).simulate('ChangeText', '123456789632');    
    const output = {"FirstName": "Admin", 
                  "JWT_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImV4cCI6MTYwMzg0MjUyOH0.oiiepPL-XASk-D_TOCbNgt65Lk7dLycIRNc-J4Wj9Bk", 
                  "LastName": "Admin", 
                  "Message": "Logged in succesfully", 
                  "ProfileID": "39", 
                  "Profile_Type": "test"};
    
    postLoginApi.mockResolvedValue(output);    
    await wrapper.instance().onPressLogin();
    sinon.assert.calledWith(spyon, "DrawerNavigationRoutes", { login: 'Admin', name: 'Admin Admin', profileId: '39' });
    sinon.assert.calledOnce(spyon);
  })

  it('should not navigate to home page component', async() => {
    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(1).simulate('ChangeText', '123456789632');
    const login = wrapper.find(TouchableOpacity).at(1);
    const output = {"Message": "incorrect username"};    
    postLoginApi.mockResolvedValue(output);
    await wrapper.instance().onPressLogin();    
    sinon.assert.notCalled(spyon)
  })

  
});