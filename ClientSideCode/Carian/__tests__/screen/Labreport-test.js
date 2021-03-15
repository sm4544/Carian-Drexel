import React from 'react';
import { shallow } from 'enzyme';
import Labreport from '../../screen/drawerScreens/Labreport';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { labOrders } from '../../screen/services/customerDetailsService';
const styles2 = StyleSheet.create({
  cardView_InsideText: {
    fontSize: 20,
    color: 'darkblue',
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 60
  }
});
const patientid = { patientid: patientid };
const doctorarray = { doctorarray: doctorarray };
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      patientid: patientid,
      doctorarray: [{ orderid: "1", orderdate: "1-1-2020", orderstatus: "initiated" }],
    }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/customerDetailsService");

describe('<Labreport/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    labOrders.mockResolvedValue( [{"id":1,"generated_by":13,"generated_for":2,"generated_date":"2021-03-11","order_status":"Initiated","labreport_id":1,"lab_id":1},{"id":2,"generated_by":13,"generated_for":2,"generated_date":"2021-03-11","order_status":"Initiated","labreport_id":4,"lab_id":1},{"id":3,"generated_by":15,"generated_for":40,"generated_date":"2021-03-15","order_status":"Initiated","labreport_id":1,"lab_id":2},{"id":4,"generated_by":15,"generated_for":40,"generated_date":"2021-03-15","order_status":"Initiated","labreport_id":38,"lab_id":2},{"id":5,"generated_by":15,"generated_for":40,"generated_date":"2021-03-15","order_status":"Initiated","labreport_id":3,"lab_id":1},{"id":6,"generated_by":74,"generated_for":40,"generated_date":"2021-03-15","order_status":"Initiated","labreport_id":1,"lab_id":1}])
    wrapper = shallow(<Labreport navigation={navigation}></Labreport>);
    console.log(wrapper)
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have Card view', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
  });

  it('should have order details text', () => {
    expect(wrapper.contains(<Text style={styles.cardText}>Lab Order Details:</Text>)).to.equal(true);
  });

  it('should navigate to LabOrderDetails screen', () => {
    wrapper.instance().onselecting("1")
    sinon.assert.calledWith(spyon, "LabOrderDetails", { orderid: "1" });
  });

  it('should have order text', () => {
    expect(wrapper.find(<Text style={styles2.cardView_InsideText}> OrderId: {doctorarray.orderid} </Text>));
    expect(wrapper.find(<Text style={styles2.cardView_InsideText}>OrderStatus: {doctorarray.orderstatus}  </Text>));
    expect(wrapper.find(<Text style={styles2.cardView_InsideText}>OrderDate: {doctorarray.orderdate} </Text>));
  });

});