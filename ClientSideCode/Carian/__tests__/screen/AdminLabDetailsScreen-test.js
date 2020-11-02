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
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });


  it('should have lab detail boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(7);
  })

  it('should have the labname component with empty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on labname box', () => {
    const labname = wrapper.find(TextInput).at(0);
    labname.simulate('ChangeText', 'abc');
    expect(wrapper.state('labname')).to.equal('abc');
  });

  it('should have the labadd1 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on labadd1 box', () => {
    const labadd1 = wrapper.find(TextInput).at(1);
    labadd1.simulate('ChangeText', 'abcad1');
    expect(wrapper.state('labadd1')).to.equal('abcad1');
  });

  it('should have the labadd2 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on labadd2 box', () => {
    const labadd2 = wrapper.find(TextInput).at(2);
    labadd2.simulate('ChangeText', 'abcad2');
    expect(wrapper.state('labadd2')).to.equal('abcad2');
  });

  it('should have the phonenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on phonenumber box', () => {
    const phonenumber = wrapper.find(TextInput).at(3);
    phonenumber.simulate('ChangeText', '1234');
    expect(wrapper.state('phonenumber')).to.equal('1234');
  });

  it('should have the licensenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on licensenumber box', () => {
    const licensenumber = wrapper.find(TextInput).at(4);
    licensenumber.simulate('ChangeText', '111111');
    expect(wrapper.state('licensenumber')).to.equal('111111');
  });

  it('should have the registerdate component with empty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on registerdate box', () => {
    const registerdate = wrapper.find(TextInput).at(5);
    registerdate.simulate('ChangeText', '2-2-2020');
    expect(wrapper.state('registerdate')).to.equal('2-2-2020');
  });

  it('should have the hospitalid component with empty value ', () => {
    expect(wrapper.find(TextInput).at(6).props().value).to.equal('');
  });

  it('should change state when text changed on hospitalid box', () => {
    const hospitalid = wrapper.find(TextInput).at(6);
    hospitalid.simulate('ChangeText', '2345a');
    expect(wrapper.state('hospitalid')).to.equal('2345a');
  });

  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Submit</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to display Lab component', () => {
    const Submit = wrapper.find(TouchableOpacity).at(0);
    console.log(Submit)
    Submit.simulate('press');    
    sinon.assert.calledWith(spyon, "LabScreen");
    sinon.assert.calledOnce(spyon);
    
  })

});