import React from 'react';
import { shallow } from 'enzyme';
import CustomerDetails from '../../screen/drawerScreens/CustomerDetails';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { customerDetailsApi } from '../../screen/services/customerDetailsService';

const patientsList = { patientsList: patientsList };
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      date: '10/10/2020',
      time: '10:30AM',
      email: "sss@carian.com",
      date_of_birth: "11-12-20",
      patientsList: [{ Patient_Name: "john", relation: "son" },
      ],
    }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/customerDetailsService");

describe('<CustomerDetails/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    customerDetailsApi.mockResolvedValue([{ email: "sss@carian.com", DOB: "11-12-20", Patient_Name: "john", relation: "son" }])
    wrapper = shallow(<CustomerDetails navigation={navigation}></CustomerDetails>);
    console.log(wrapper)
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have Patient and relation data', () => {
    expect(wrapper.find(<Text style={styles.cardView_InsideText}> Patient: {patientsList.Patient_Name} </Text>));
    expect(wrapper.find(<Text style={styles.cardView_InsideText}> Relation: ({patientsList.relation})  </Text>));
  });

  it('should have email with icon', () => {
    expect(wrapper.find(<Icon name="email" color="#777777" size={20} />));
    expect(wrapper.find(<Text style={styles.Icontext}>{navigation.state.params.email}</Text>));
  });

  it('should have dob ', () => {
    expect(wrapper.find(<Text style={styles.Icontext}>DOB: {navigation.state.params.date_of_birth}</Text>));
  });

  it('should have phone with icon', () => {
    expect(wrapper.find(<Icon name="phone" color="#777777" size={20} />));
    expect(wrapper.find(<Text style={styles.Icontext}>+91-900000009</Text>));
  });

});