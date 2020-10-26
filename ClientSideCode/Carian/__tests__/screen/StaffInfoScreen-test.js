import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    style,
  } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import StaffInfoScreen from '../../screen/stackNavScreens/StaffInfoScreen';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<StaffInfoScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      wrapper = shallow(<StaffInfoScreen navigation={navigation}></StaffInfoScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
      });
      it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(ScrollView);
      });
      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(13);
      });
      it('should have Doctors Details text component', () => {
        expect(wrapper.find(Text)).to.have.length(5);
        expect(wrapper.contains("Doctor's Details")).to.equal(true);   
    });
      it('should have Education text component', () => {
        expect(wrapper.find(Text)).to.have.length(5);  
        expect(wrapper.contains("Education")).to.equal(true);          
      });
      it('should have TextInput', () => {
        expect(wrapper.find(TextInput)).to.have.length(12);
      });
      it('should have Highest Degree input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
      });

    it('should change state when text changed on Highest Degree inputtext box', () => {
    const degree = wrapper.find(TextInput).at(0);
    degree.simulate('ChangeText', 'MBBS');
    expect(wrapper.state('degree')).to.equal('MBBS');
  });
  it('should have Specilization  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });
  
it('should change state when text changed on Specilization inputtext box', () => {
const Specilization = wrapper.find(TextInput).at(1);
Specilization.simulate('ChangeText', 'Orthopedic');
expect(wrapper.state('Specilization')).to.equal('Orthopedic');
});
it('should have GPA  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });
  
it('should change state when text changed on GPA inputtext box', () => {
const GPA = wrapper.find(TextInput).at(2);
GPA.simulate('ChangeText', '9.6');
expect(wrapper.state('GPA')).to.equal('9.6');
});
it('should have College  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });
  
it('should change state when text changed on College inputtext box', () => {
const College = wrapper.find(TextInput).at(3);
College.simulate('ChangeText', 'Rajiv gandhi medical college');
expect(wrapper.state('College')).to.equal('Rajiv gandhi medical college');
});
it('should have University  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });
  
it('should change state when text changed on University inputtext box', () => {
const University = wrapper.find(TextInput).at(4);
University.simulate('ChangeText', 'University of Pen');
expect(wrapper.state('University')).to.equal('University of Pen');
});
it('should have University state  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });
  
it('should change state when text changed on University state inputtext box', () => {
const U_state = wrapper.find(TextInput).at(5);
U_state.simulate('ChangeText', 'Texas');
expect(wrapper.state('U_state')).to.equal('Texas');
});
it('should have University country  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(6).props().value).to.equal('');
  });
  
it('should change state when text changed on University state inputtext box', () => {
const U_country = wrapper.find(TextInput).at(6);
U_country.simulate('ChangeText', 'USA');
expect(wrapper.state('U_country')).to.equal('USA');
});
it('should have Experience country  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(7).props().value).to.equal('');
  });
  it('should have Work Details text component', () => {
    expect(wrapper.find(Text)).to.have.length(5);
    expect(wrapper.contains("WORK")).to.equal(true);   
});
  
it('should change state when text changed on experince inputtext box', () => {
const Experience = wrapper.find(TextInput).at(7);
Experience.simulate('ChangeText', '6');
expect(wrapper.state('Experience')).to.equal('6');
});

it('should have Hospital name  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(8).props().value).to.equal('');
  });
  
it('should change state when text changed on Hospital name inputtext box', () => {
const H_name = wrapper.find(TextInput).at(8);
H_name.simulate('ChangeText', 'Rainbow Hospital');
expect(wrapper.state('H_name')).to.equal('Rainbow Hospital');
});

it('should have Hospital state  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(9).props().value).to.equal('');
  });
  
it('should change state when text changed on Hospital state inputtext box', () => {
const H_state = wrapper.find(TextInput).at(9);
H_state.simulate('ChangeText', 'Texas');
expect(wrapper.state('H_state')).to.equal('Texas');
});
it('should have Hospital country  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(10).props().value).to.equal('');
  });
  
it('should change state when text changed on Hospital country inputtext box', () => {
const H_country = wrapper.find(TextInput).at(10);
H_country.simulate('ChangeText', 'USA');
expect(wrapper.state('H_country')).to.equal('USA');
});
it('should have License Details  text component', () => {
    expect(wrapper.find(Text)).to.have.length(5);
    expect(wrapper.contains("License Details")).to.equal(true);   
});
it('should have License Number  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(11).props().value).to.equal('');
  });
  
it('should change state when text changed on License Number inputtext box', () => {
const License = wrapper.find(TextInput).at(11);
License.simulate('ChangeText', '1234');
expect(wrapper.state('License')).to.equal('1234');
});
it('should have TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  });
  
it('should have Submit button  component', () => {
    expect(wrapper.find(Text)).to.have.length(5); 
    expect(wrapper.contains(<Text style={styles.buttonText}>Register/Submit</Text>)).to.equal(true);
    
});
});