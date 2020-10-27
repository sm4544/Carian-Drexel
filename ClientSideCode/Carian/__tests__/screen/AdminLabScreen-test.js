import React from 'react';
import { shallow } from 'enzyme';
import LabScreen from '../../screen/drawerScreens/LabScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<LabScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<LabScreen navigation={navigation}></LabScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should contain Add Lab button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Add Laboratory</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to lab details screen component', () => {
    const lab = wrapper.find(TouchableOpacity).at(0);
    console.log(lab)
    lab.simulate('press');    
    sinon.assert.calledWith(spyon, "LabDetailsScreen");
    sinon.assert.calledOnce(spyon);
    
  })


});