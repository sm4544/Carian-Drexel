import React from 'react';
import { shallow } from 'enzyme';
import StaffDetailsScreen from '../../screen/drawerScreens/StaffDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<StaffDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<StaffDetailsScreen navigation={navigation}></StaffDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });


  it('should have doctor/staff detail boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(5);
  })

  it('should have the doctorId component with empty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on doctorID box', () => {
    const doctorId = wrapper.find(TextInput).at(0);
    doctorId.simulate('ChangeText', 'abc');
    expect(wrapper.state('doctorId')).to.equal('abc');
  });

  it('should have the qualification component with empty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on qualification box', () => {
    const qualification = wrapper.find(TextInput).at(1);
    qualification.simulate('ChangeText', 'mbbs');
    expect(wrapper.state('qualification')).to.equal('mbbs');
  });

  it('should have the experience component with empty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on experience box', () => {
    const experience = wrapper.find(TextInput).at(2);
    experience.simulate('ChangeText', '5years');
    expect(wrapper.state('experience')).to.equal('5years');
  });

  it('should have the phonenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on phonenumber box', () => {
    const phonenumber = wrapper.find(TextInput).at(3);
    phonenumber.simulate('ChangeText', '12345');
    expect(wrapper.state('phonenumber')).to.equal('12345');
  });

  it('should have the email component with empty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on email box', () => {
    const email = wrapper.find(TextInput).at(4);
    email.simulate('ChangeText', 'abc@gmail.com');
    expect(wrapper.state('email')).to.equal('abc@gmail.com');
  });

  
  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);
  })

  
  it('should through error messages if user click on submit with empty doctorid', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "doctorId" is mandatory.')).to.equal(true);

  })
  it('should through error messages if user click on submit with empty qualification', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "qualification" is mandatory.')).to.equal(true);

  })
  it('should through error messages if user click on submit with empty experience', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "experience" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty phonenumber', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "phonenumber" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty email', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);
    expect(wrapper.contains('The field "email" is mandatory.')).to.equal(true);
  })
});