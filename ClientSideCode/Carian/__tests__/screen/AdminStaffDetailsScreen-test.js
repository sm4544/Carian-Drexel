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
    expect(wrapper.find(TextInput)).to.have.length(6);
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

  it('should have the registernumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on registernumber box', () => {
    const registernumber = wrapper.find(TextInput).at(5);
    registernumber.simulate('ChangeText', 'abc123');
    expect(wrapper.state('registernumber')).to.equal('abc123');
  });

  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Submit</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to display doctor/staff component', () => {
    const Submit = wrapper.find(TouchableOpacity).at(0);
    console.log(Submit)
    Submit.simulate('press');    
    sinon.assert.calledWith(spyon, "ManageStaffScreen");
    sinon.assert.calledOnce(spyon);
    
  })
});