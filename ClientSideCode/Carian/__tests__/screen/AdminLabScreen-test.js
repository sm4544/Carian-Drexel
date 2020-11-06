import React from 'react';
import { shallow } from 'enzyme';
import LabDetailsScreen from '../../screen/drawerScreens/LabDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<LabDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<LabDetailsScreen navigation={navigation}></LabDetailsScreen>);
  })

  afterEach(function () {
    navigation.navigate.restore();
  })

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  })

  it('should contain submit Lab button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })  
  it('should have data text boxes to enter lab data', () => {
    expect(wrapper.find(TextInput)).to.have.length(7);
  })

  it('should have the labname component with empty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on labname box', () => {
    const labname = wrapper.find(TextInput).at(0);
    labname.simulate('ChangeText', 'Drexel laboratories');
    expect(wrapper.state('labname')).to.equal('Drexel laboratories');
  });
  it('should have the lab address 1 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on labadd1 box', () => {
    const labadd1 = wrapper.find(TextInput).at(1);
    labadd1.simulate('ChangeText', '3835 Hamilton');
    expect(wrapper.state('labadd1')).to.equal('3835 Hamilton');
  });
  it('should have the lab address 2 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on labadd2 box', () => {
    const labadd2 = wrapper.find(TextInput).at(2);
    labadd2.simulate('ChangeText', 'Philadelphia');
    expect(wrapper.state('labadd2')).to.equal('Philadelphia');
  });
  it('should have the phone num component with empty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on phone num box', () => {
    const phonenumber = wrapper.find(TextInput).at(3);
    phonenumber.simulate('ChangeText', '9494956232');
    expect(wrapper.state('phonenumber')).to.equal('9494956232');
  });
  it('should have the licensenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on licensenumber box', () => {
    const licensenumber = wrapper.find(TextInput).at(4);
    licensenumber.simulate('ChangeText', '123456');
    expect(wrapper.state('licensenumber')).to.equal('123456');
  });
  it('should have the registerdate component with empty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on registerdate box', () => {
    const registerdate = wrapper.find(TextInput).at(5);
    registerdate.simulate('ChangeText', 'Oct 31st');
    expect(wrapper.state('registerdate')).to.equal('Oct 31st');
  });
  it('should have the registerdate component with empty value ', () => {
    expect(wrapper.find(TextInput).at(6).props().value).to.equal('');
  });

  it('should change state when text changed on registerdate box', () => {
    const hospitalid = wrapper.find(TextInput).at(6);
    hospitalid.simulate('ChangeText', '123456');
    expect(wrapper.state('hospitalid')).to.equal('123456');
  });

  it('should through error messages if user click on submit with empty labname', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "labname" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty lab address 1', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');    
    expect(wrapper.contains('The field "labadd1" is mandatory.')).to.equal(true);
  })
  it('should through error messages if user click on submit with empty lab add 2', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "labadd2" is mandatory.')).to.equal(true);
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
  it('should through error messages if user click on submit with empty hospitalid', () => {
    const submitbutton = wrapper.find(TouchableOpacity).at(0);
    submitbutton.simulate('press');    
    expect(wrapper.contains('The field "hospitalid" is mandatory.')).to.equal(true);
  })
  

  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);
  })
});