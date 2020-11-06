import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  style,
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/homeScreenStyles';
import HomeScreen from '../../screen/drawerScreens/HomeScreen';
import DropDownPicker from 'react-native-dropdown-picker';
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      name: 'hello',
      profileid: '1',
      profile_type: 'Doctor'

    }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/StaffInfoService");
jest.mock("../../screen/services/hospitalService");


describe('<StaffInfoScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    
    wrapper = shallow(<HomeScreen navigation={navigation}></HomeScreen>);
  });
  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have Scrollview', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });

  it('should have view Container', () => {
    expect(wrapper.find(View)).to.have.length(1);
  });

  it('should have Carian Text', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.AppTitle}>CARIAN</Text>)).to.equal(true);
  });

  it('should have Dropdown menu for city', () => {
    expect(wrapper.find(DropDownPicker)).to.have.length(1);
  });

  it('cityArray should not be empty on load', () => {
    expect(wrapper.state('cityArray')).to.be.an('array').that.is.not.empty;
  });

  it('should have search hospital by Symptoms section', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Find Hospitals by Symptoms</Text>)).to.equal(true);
  });

  it('should have search hospital by Specilazation section', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Find Hospitals by Specilazation</Text>)).to.equal(true);
  });

  it('should have hospitals in your area section', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Hospitals near me</Text>)).to.equal(true);
  });

  it('should have view all hospitals button', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.buttonText}>Show All Hospitals</Text>)).to.equal(true);
  });

  it('should have doctors in your area section', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Doctors near me</Text>)).to.equal(true);
  });

  it('should have view all Doctors button', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains( <Text style={styles.buttonText}>Show All Doctors</Text>)).to.equal(true);
  });

  it('should have our network section', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Our Strenth</Text>)).to.equal(true);
  });

  it('CustomerCount should not be empty on load', () => {
    expect(wrapper.state('customerCount')).to.equal('1000');
  });

  it('should display customer count', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Customers 1000</Text>)).to.equal(true);
  });

  it('hospitalCount should not be empty on load', () => {
    expect(wrapper.state('hospitalCount')).to.equal('100');
  });

  it('should display Hospital count', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Hospitals 100</Text>)).to.equal(true);
  });

  it('doctorsCount should not be empty on load', () => {
    expect(wrapper.state('doctorsCount')).to.equal('150');
  });

  it('should display Hospital count', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Doctors 150</Text>)).to.equal(true);
  });

  it('Reviews should not be empty on load', () => {
    expect(wrapper.state('reviewCount')).to.equal('1500');
  });

  it('should display Reviews count', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>Reviews 1500</Text>)).to.equal(true);
  });

  it('should have About us section', () => {
    //expect(wrapper.find(Text)).to.have.length(2);
    expect(wrapper.contains(<Text style={styles.text}>About US</Text>)).to.equal(true);
  });
})