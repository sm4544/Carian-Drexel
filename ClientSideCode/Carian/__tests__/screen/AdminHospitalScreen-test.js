import React from 'react';
import { shallow } from 'enzyme';
import HospitalScreen from '../../screen/drawerScreens/HospitalScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<HospitalScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<HospitalScreen navigation={navigation}></HospitalScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should contain Add Hospital button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Add Hospital</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to hospital details screen component', () => {
    const register = wrapper.find(TouchableOpacity).at(0);
    console.log(register)
    register.simulate('press');    
    sinon.assert.calledWith(spyon, "HospitalDetailsScreen");
    sinon.assert.calledOnce(spyon);
    
  })


});