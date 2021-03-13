
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import DropDownPicker from 'react-native-dropdown-picker';
import PatientsRegisterScreen from '../../screen/drawerScreens/PatientsRegisterScreen';

const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      selectedDate: '10/10/2020',
      selectedTime: '10:30AM',
      doctor: { "area": "Delaware", "city": "Newark", "college_name": "AEC", "doctor_fee": "75.00", "email": "langer@gmail.com", "highestDegree": "MBBS", "hospital_id": "3", "hospital_name": "AEC", "id": "42", "licence_number": "188181", "name": "test test", "overallExperience": "5", "phoneNumber": "9918897651", "profile_id": "23", "specialization": "Neurologist" },
      profileId: '10',
      hospital: { "area": "Lancaster", "avg_rating": "4.2", "city": "Philly", "doctors": "3", "hospital_id": "1", "name": "VNR", "total_reviews": "120", "type": "multi-speciality" },

    }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/profileService");

describe('<PatientsRegisterScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<PatientsRegisterScreen navigation={navigation}></PatientsRegisterScreen>);
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
  it('should have patient Details text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient Details")).to.equal(true);
  });

  it('should have relationship text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient Relationship:")).to.equal(true);
  });

  it('should have drop down for relationship', () => {
    expect(wrapper.find(DropDownPicker)).to.have.length(11);
  });

  it('should have first name text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient First Name:")).to.equal(true);
  });

  it('should have TextInput', () => {
    expect(wrapper.find(TextInput)).to.have.length(7);
  });
  it('should have first name input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on first name inputtext box', () => {
    const firstName = wrapper.find(TextInput).at(0);
    firstName.simulate('ChangeText', 'test');
    expect(wrapper.state('firstName')).to.equal('test');
  });

  it('should have last name text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient Last Name:")).to.equal(true);
  });

  it('should have last name input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on last name inputtext box', () => {
    const lastName = wrapper.find(TextInput).at(1);
    lastName.simulate('ChangeText', 'test');
    expect(wrapper.state('lastName')).to.equal('test');
  });

  it('should have mobile number text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient phone Number:")).to.equal(true);
  });

  it('should have mobile number input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on last name inputtext box', () => {
    const mobile = wrapper.find(TextInput).at(2);
    mobile.simulate('ChangeText', 123456);
    expect(wrapper.state('mobileNumber')).to.equal(123456);
  });

  it('should have email text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient email address:")).to.equal(true);
  });

  it('should have email input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on email inputtext box', () => {
    const email = wrapper.find(TextInput).at(3);
    email.simulate('ChangeText', 'test@gmail.com');
    expect(wrapper.state('email')).to.equal('test@gmail.com');
  });


  it('should have occupation text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient Occupation:")).to.equal(true);
  });

  it('should have date of birth text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient Date of Birth:")).to.equal(true);
  });

  it('should have gender text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Gender:")).to.equal(true);
  });

  it('should have marital status text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient Martial status:")).to.equal(true);
  });

  it('should have weight text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient's height:")).to.equal(true);
  });

  it('should have height text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient's weight:")).to.equal(true);
  });

  it('should have blood group text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient's Blood group:")).to.equal(true);
  });

  it('should have medical history text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Medical History")).to.equal(true);
  });

  it('should have medical history recurring text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient's Medical history (recurring problems):")).to.equal(true);
  });

  it('should have recurring input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on recurring inputtext box', () => {
    const problems = wrapper.find(TextInput).at(4);
    problems.simulate('ChangeText', 'problem1');
    expect(wrapper.state('recurringProblems')).to.equal('problem1');
  });

  it('should have allergies text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient's Allergies to Medicine:")).to.equal(true);
  });

  it('should have allergies input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on allergies inputtext box', () => {
    const allergies = wrapper.find(TextInput).at(5);
    allergies.simulate('ChangeText', 'allergy 1');
    expect(wrapper.state('allergies')).to.equal('allergy 1');
  });

  it('should have Social History text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Social History")).to.equal(true);
  });

  it('should have Patients Hobbies text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Patient's Hobbies:")).to.equal(true);
  });

  it('should have hobbies input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(6).props().value).to.equal('');
  });

  it('should change state when text changed on hobbies inputtext box', () => {
    const hobbies = wrapper.find(TextInput).at(6);
    hobbies.simulate('ChangeText', 'hobby 1');
    expect(wrapper.state('hobbies')).to.equal('hobby 1');
  });

  it('should have Patients tobacco text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Use of Tobacco (now or past):")).to.equal(true);
  });

  it('should have Patients alcohol text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Use of Alcohol (now or past):")).to.equal(true);
  });

  it('should have Patients activities text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Do you get regular physical activities:")).to.equal(true);
  });

  it('should have submit text component', () => {
    expect(wrapper.find(Text)).to.have.length(22);
    expect(wrapper.contains("Register/Submit")).to.equal(true);
  });

});
