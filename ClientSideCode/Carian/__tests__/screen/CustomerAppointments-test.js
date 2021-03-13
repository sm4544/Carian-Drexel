import React from 'react';
import { shallow } from 'enzyme';
import PatientAppointments from '../../screen/drawerScreens/PatientAppointments';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Fontisto'
import { appointmentDetailsApi } from '../../screen/services/customerDetailsService';
import CardView from 'react-native-cardview';
const appointmentsList = { appointmentsList: appointmentsList };

const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      date: '10/10/2020',
      time: '10:30AM',
      appointmentsList: [{ date: '10/10/2020', time: '10:30AM', }
      ],
    }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/customerDetailsService");

describe('<PatientAppointments/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    appointmentDetailsApi.mockResolvedValue([{ start_time: "11:00", date: "11-12-20", id: "1" }])
    wrapper = shallow(<PatientAppointments navigation={navigation}></PatientAppointments>);
    console.log(wrapper)
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should contain Appointments button', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(0);
  })

  it('should have Card view', () => {
    expect(wrapper.find(CardView)).to.have.length(0);
  });
  it('should have icon clock', () => {
    expect(wrapper.find(<Icon name="clock" color="black" size={30} />));
  });

  it('should have icon date', () => {
    expect(wrapper.find(<Icon1 name="date" color="black" size={30} />));
  });

  it('should have appointment date', () => {
    expect(wrapper.find(<Text style={styles.cardText}>Appointment Date:{appointmentsList.date}</Text>))
  });

  it('should have appointment time', () => {
    expect(wrapper.find(<Text style={styles.cardText}>Appointment Time:{appointmentsList.time}</Text>));
  });

  it('should navigate to PatientDetailsScreen screen', () => {
    wrapper.instance().onselecting('10:00', "3")
    sinon.assert.calledWith(spyon, "PatientDetailsScreen", { start_time: "10:00", id: "3" });
  });

});
