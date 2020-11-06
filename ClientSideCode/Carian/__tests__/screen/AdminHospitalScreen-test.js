import React from 'react';
import { shallow } from 'enzyme';
import HospitalDetailsScreen from '../../screen/drawerScreens/HospitalDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<HospitalDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<HospitalDetailsScreen navigation={navigation}></HospitalDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  })


  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);
  })
  it('should have data text boxes to enter lab data', () => {
    expect(wrapper.find(TextInput)).to.have.length(6);
  })

  it('should have the hospitalname component with empty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on hospitalname box', () => {
    const hospitalname = wrapper.find(TextInput).at(0);
    hospitalname.simulate('ChangeText', 'Drexel');
    expect(wrapper.state('hospitalname')).to.equal('Drexel');
  });
  it('should have the hospitaladd1 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on hospitaladd1 box', () => {
    const hospitaladd1 = wrapper.find(TextInput).at(1);
    hospitaladd1.simulate('ChangeText', '3835 Hamilton');
    expect(wrapper.state('hospitaladd1')).to.equal('3835 Hamilton');
  });
  it('should have the hospitaladd2 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on hospitaladd2 box', () => {
    const hospitaladd2 = wrapper.find(TextInput).at(2);
    hospitaladd2.simulate('ChangeText', 'Philadelphia');
    expect(wrapper.state('hospitaladd2')).to.equal('Philadelphia');
  });
  it('should have the phonenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on phone num box', () => {
    const phonenumber = wrapper.find(TextInput).at(3);
    phonenumber.simulate('ChangeText', '9494956232');
    expect(wrapper.state('phonenumber')).to.equal('9494956232');
  });
  it('should have the registerdate component with empty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on registerdate box', () => {
    const registerdate = wrapper.find(TextInput).at(4);
    registerdate.simulate('ChangeText', 'Oct 1st');
    expect(wrapper.state('registerdate')).to.equal('Oct 1st');
  });
  it('should have the licensenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on registerdate box', () => {
    const licensenumber = wrapper.find(TextInput).at(5);
    licensenumber.simulate('ChangeText', '12345');
    expect(wrapper.state('licensenumber')).to.equal('12345');
  });

  it('should through error messages if user click on submit with empty hospitalname', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "hospitalname" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty hospitaladd1', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "hospitaladd1" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty hospitaladd2', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "hospitaladd2" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty phonenumber', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "phonenumber" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty licensenumber', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "licensenumber" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty registerdate', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "registerdate" is mandatory.')).to.equal(true);
  })


  


});