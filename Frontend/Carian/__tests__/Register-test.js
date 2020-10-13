import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../pages/login';
import { View , ScrollView , Text, TextInput, TouchableOpacity } from 'react-native';
import { expect } from 'chai';
import DropdownMenu from 'react-native-dropdown-menu';
import styles from '../styles/commonStyles';
import Register from '../pages/register';
const navigation = { navigate: jest.fn() };
import spies from 'chai-spies';

describe('<Register/>', () => {
  
  var data = [["Customer", "Admin", "Doctor", "Hospital Staff", "Pharmacy Assistant", "Lab Assistant"]];
    
  
    beforeEach(function () {
      
      wrapper = shallow(<Register navigation={navigation}></Register>);
  
    });
    it('should have Scrollview', () => {

        expect(wrapper.type()).to.equal(ScrollView);
      });

    it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(7);
      });

    it('should have CARIAN text component', () => {
        expect(wrapper.find(Text)).to.have.length(8);
        expect(wrapper.contains("CARIAN")).to.equal(true);
      });
    it('should have 2 Textinput boxes', () => {
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

      it('should have DropdownMenu', () => {
        expect(wrapper.find(DropdownMenu)).to.have.length(1);
      });

      it('should have the Dropdown catogory  input component with empaty value ', () => {
        expect(wrapper.state('role')).to.equal('');
      });


      it('should contain Register/Submit button', () => {
        expect(wrapper.contains(<Text style={styles.buttonText}>Register/Submit</Text>)).to.equal(true);
        expect(wrapper.find(TouchableOpacity)).to.have.length(2);
    
      })
      it('should through error messages if user click on Register with empty Firstname', () => {
        const reisterButton = wrapper.find(TouchableOpacity).at(0);
        reisterButton.simulate('press');
        //expect(wrapper.contains('The field "firstName" must be a valid firstName.')).to.equal(true);
        expect(wrapper.contains('The field "firstName" is mandatory.')).to.equal(true);
    
      })
      it('should through error messages if user click on Register with empty lastName', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
       // expect(wrapper.contains('The field "lastName" must be a valid lastName.')).to.equal(true);
        expect(wrapper.contains('The field "lastName" is mandatory.')).to.equal(true);
    
      })
      it('should through error messages if user click on Register with empty mobileNumber', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
        //expect(wrapper.contains('The field "mobileNumber" must be a valid mobileNumber.')).to.equal(true);
        expect(wrapper.contains('The field "mobileNumber" is mandatory.')).to.equal(true);
    
      })


      it('should through error messages if user click on Register with empty email', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
        expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);
        expect(wrapper.contains('The field "email" is mandatory.')).to.equal(true);
    
      })
    
      it('should through error message if user click on Register with invalid email', () => {
        const email = wrapper.find(TextInput).at(4);
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
    
      
//   it('should through error message if user click on Register with invalid password', () => {
//     const password = wrapper.find(TextInput).at(5);
//     password.simulate('ChangeText', 'test');
//     const registerButton = wrapper.find(TouchableOpacity).at(0);
//     registerButton.simulate('press');
//     expect(wrapper.contains('The field "password" length must be greater than 7.')).to.equal(true);   

//   })
      
   

    
});