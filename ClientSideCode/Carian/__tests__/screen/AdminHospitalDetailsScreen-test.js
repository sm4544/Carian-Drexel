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
  });


  it('should have hospital detail boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(6);
  })

  it('should have the hospitalname component with empty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on hospitalname box', () => {
    const hospitalname = wrapper.find(TextInput).at(0);
    hospitalname.simulate('ChangeText', 'hos-abc');
    expect(wrapper.state('hospitalname')).to.equal('hos-abc');
  });

  it('should have the hospitaladd1 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on hospitaladd1 box', () => {
    const hospitaladd1 = wrapper.find(TextInput).at(1);
    hospitaladd1.simulate('ChangeText', 'hosAdd1');
    expect(wrapper.state('hospitaladd1')).to.equal('hosAdd1');
  });

  it('should have the hospitaladd2 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on hospitaladd2 box', () => {
    const hospitaladd2 = wrapper.find(TextInput).at(2);
    hospitaladd2.simulate('ChangeText', 'hosAdd2');
    expect(wrapper.state('hospitaladd2')).to.equal('hosAdd2');
  });

  it('should have the phonenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on phonenumber box', () => {
    const phonenumber = wrapper.find(TextInput).at(3);
    phonenumber.simulate('ChangeText', '12345');
    expect(wrapper.state('phonenumber')).to.equal('12345');
  });

  it('should have the registerdate component with empty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on registerdate box', () => {
    const registerdate = wrapper.find(TextInput).at(4);
    registerdate.simulate('ChangeText', '1-2-2010');
    expect(wrapper.state('registerdate')).to.equal('1-2-2010');
  });

  it('should have the licensenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on licensenumber box', () => {
    const licensenumber = wrapper.find(TextInput).at(5);
    licensenumber.simulate('ChangeText', '19999');
    expect(wrapper.state('licensenumber')).to.equal('19999');
  });

  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}> Submit </Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to display hospital component', () => {
    const Submit = wrapper.find(TouchableOpacity).at(0);
    console.log(Submit)
    Submit.simulate('press');    
    sinon.assert.calledWith(spyon, "HospitalScreen");
    sinon.assert.calledOnce(spyon);
    
  })

});