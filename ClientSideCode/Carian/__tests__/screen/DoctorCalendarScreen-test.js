import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Dropdown } from 'react-native-material-dropdown-v2';
import DoctorCalendarScreen from '../../screen/drawerScreens/DoctorCalendarScreen';
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      show: false,
      buttonShow: false,
      country: '',
      ddlSelectedValue: '',
      morningS: 'NA',
      morningE: 'NA',
      flagM: false,
      indexM: 0,
      afternoonS: 'NA',
      afternoonE: 'NA',
      flagA: false,
      indexA: 0,
      eveningS: 'NA',
      eveningE: 'NA',
      flagE: false,
      indexE: 0,
      nightS: 'NA',
      nightE: 'NA',
      flagN: false,
      indexN: 0,
      day: 'Mon',
      timeSlots: [],
      needArray: false,
    },
  },
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<DoctorCalendarScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(
      <DoctorCalendarScreen navigation={navigation}></DoctorCalendarScreen>,
    );
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have ScrollView', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });

  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(3);
  });

  it('should have  text component', () => {
    expect(wrapper.find(Text)).to.have.length(7);
  });

  it('timeSlot should not be empty on load', () => {
    expect(wrapper.state('timeSlots')).to.be.an('array').that.is.empty;
  });

  it('Initially Dropdown length should be zero', () => {
    expect(wrapper.find(Dropdown)).to.have.length(0);
  });

  it('day should be Monday', async () => {
    wrapper.instance().handleClickMonday('Monday');
  });


  it('day should be Tuesday', async () => {
    wrapper.instance().handleClickTuesday('Tuesday');
  });

  it('day should be Wednesday', async () => {
    wrapper.instance().handleClickWednesday('Wednesday');
  });

  it('Before handleClick', async () => {
    wrapper.instance().handleClick();
    expect(wrapper.find({ show: true })).to.have.length(0);
  });
});
