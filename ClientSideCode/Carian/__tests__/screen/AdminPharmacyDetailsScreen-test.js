import React from 'react';
import { shallow } from 'enzyme';
import PharmacyDetailsScreen from '../../screen/drawerScreens/PharmacyDetailsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<PharmacyDetailsScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<PharmacyDetailsScreen navigation={navigation}></PharmacyDetailsScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have view', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });


  it('should have pharmacy detail boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(6);
  })

  it('should have the pharmacyname component with empty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on pharmacyname box', () => {
    const pharmacyname = wrapper.find(TextInput).at(0);
    pharmacyname.simulate('ChangeText', 'abc');
    expect(wrapper.state('pharmacyname')).to.equal('abc');
  });

  it('should have the pharmacyadd1 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on pharmacyadd1 box', () => {
    const pharmacyadd1 = wrapper.find(TextInput).at(1);
    pharmacyadd1.simulate('ChangeText', 'abcad1');
    expect(wrapper.state('pharmacyadd1')).to.equal('abcad1');
  });

  it('should have the pharmacyadd2 component with empty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on pharmacyadd2 box', () => {
    const pharmacyadd2 = wrapper.find(TextInput).at(2);
    pharmacyadd2.simulate('ChangeText', 'abcad2');
    expect(wrapper.state('pharmacyadd2')).to.equal('abcad2');
  });

  it('should have the phonenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on phonenumber box', () => {
    const phonenumber = wrapper.find(TextInput).at(3);
    phonenumber.simulate('ChangeText', '1234');
    expect(wrapper.state('phonenumber')).to.equal('1234');
  });

  it('should have the registerdate component with empty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on registerdate box', () => {
    const registerdate = wrapper.find(TextInput).at(4);
    registerdate.simulate('ChangeText', '1-1-2020');
    expect(wrapper.state('registerdate')).to.equal('1-1-2020');
  });

  it('should have the licensenumber component with empty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on licensenumber box', () => {
    const licensenumber = wrapper.find(TextInput).at(5);
    licensenumber.simulate('ChangeText', '20202a');
    expect(wrapper.state('licensenumber')).to.equal('20202a');
  });

  it('should contain Submit button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Submit</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to display Pharmacy component', () => {
    const Submit = wrapper.find(TouchableOpacity).at(0);
    console.log(Submit)
    Submit.simulate('press');    
    sinon.assert.calledWith(spyon, "PharmacyScreen");
    sinon.assert.calledOnce(spyon);
    
  })

});