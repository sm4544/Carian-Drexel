import React from 'react';
import { shallow } from 'enzyme';
import ManageStaffScreen from '../../screen/drawerScreens/ManageStaffScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<ManageStaffScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<ManageStaffScreen navigation={navigation}></ManageStaffScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should contain Add staff button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Add Doctor/Staff</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to Staff details screen component', () => {
    const staff = wrapper.find(TouchableOpacity).at(0);
    console.log(staff)
    staff.simulate('press');    
    sinon.assert.calledWith(spyon, "StaffDetailsScreen");
    sinon.assert.calledOnce(spyon);
    
  })


});