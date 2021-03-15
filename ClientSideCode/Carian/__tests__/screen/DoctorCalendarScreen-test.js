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
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles2 from '../../screen/drawerScreens/DoctorCalendarScreen';
import styles from '../../styles/DoctorProfileStyles';
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


  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(30);
  });

  it('should have  text component', () => {
    expect(wrapper.find(Text)).to.have.length(15);
  });


  it('Initially Dropdown length should be zero', () => {
    expect(wrapper.find(DropDownPicker)).to.have.length(14);
  });
  it('should display patient appointment details', () => {
    expect(wrapper.contains(<TouchableOpacity onPress={this.onPressSubmit} activeOpacity={0.7} style={styles2.button} >
   
      <Text style={styles.buttonText}> Submit </Text>
   
       </TouchableOpacity>)).to.equal(false);
  });
  it('should display text Monday ', () => {
    expect(wrapper.contains(<Text  style={{ fontWeight: 'bold', fontSize : 20}} >Monday</Text>)).to.equal(true);
  });
  it('should display text Tuesday ', () => {
    expect(wrapper.contains(<Text  style={{ fontWeight: 'bold', fontSize : 20}} >Tuesday</Text>)).to.equal(true);
  });
  it('should display text Wednesday', () => {
    expect(wrapper.contains(<Text  style={{ fontWeight: 'bold', fontSize : 20}} >Wednesday</Text>)).to.equal(true);
  });
  it('should display text Thursday ', () => {
    expect(wrapper.contains(<Text  style={{ fontWeight: 'bold', fontSize : 20}} >Thursday</Text>)).to.equal(true);
  });
  it('should display text Friday ', () => {
    expect(wrapper.contains(<Text  style={{ fontWeight: 'bold', fontSize : 20}} >Friday</Text>)).to.equal(true);
  });
  it('should display text Saturday ', () => {
    expect(wrapper.contains(<Text  style={{ fontWeight: 'bold', fontSize : 20}} >Saturday</Text>)).to.equal(true);
  });
  it('should display text Sunday ', () => {
    expect(wrapper.contains(<Text  style={{ fontWeight: 'bold', fontSize : 20}} >Sunday</Text>)).to.equal(true);
  });
  

  
});
