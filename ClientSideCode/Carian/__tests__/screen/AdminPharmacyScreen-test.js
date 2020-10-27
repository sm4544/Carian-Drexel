import React from 'react';
import { shallow } from 'enzyme';
import PharmacyScreen from '../../screen/drawerScreens/PharmacyScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<PharmacyScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<PharmacyScreen navigation={navigation}></PharmacyScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });


  it('should contain Add Pharmacy button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Add Pharmacy</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to pharmacy details screen component', () => {
    const addPharmacy = wrapper.find(TouchableOpacity).at(0);
    addPharmacy.simulate('press');    
    sinon.assert.calledWith(spyon, "PharmacyDetailsScreen");
    sinon.assert.calledOnce(spyon);
    
  })


});