import React from 'react';
import { shallow } from 'enzyme';
import Labreport from '../../screen/drawerScreens/Labreport';
import { View, Text, TextInput, TouchableOpacity,ScrollView, StyleSheet } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Fontisto'

import { labOrders } from '../../screen/services/customerDetailsService';
import CardView from 'react-native-cardview';


const styles2 = StyleSheet.create({
    cardView_InsideText:{
   
      fontSize: 20, 
      color: 'darkblue', 
      textAlign: 'center',
      marginTop:15 ,
      marginLeft:60
     
    }
  });
  
  const patientid =  {patientid: patientid};
  const doctorarray =  {doctorarray: doctorarray};
const navigation = {

  navigate: jest.fn(),

  state: {

    params: {

        patientid: patientid,
        doctorarray:[{orderid: "1", orderdate: "1-1-2020", orderstatus: "initiated"}],

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
    labOrders.mockResolvedValue([{orderid: "1", orderdate: "1-1-2020", orderstatus: "initiated"}])
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
  sinon.assert.calledWith(spyon, "LabOrderDetails",{ orderid:"1" });
});


 it('should have order text', () => {
  expect(wrapper.find( <Text style={styles2.cardView_InsideText}> OrderId: {doctorarray.orderid} </Text> ));
  expect(wrapper.find(<Text style={styles2.cardView_InsideText}>OrderStatus: {doctorarray.orderstatus}  </Text> ));
  expect(wrapper.find( <Text style={styles2.cardView_InsideText}>OrderDate: {doctorarray.orderdate} </Text> ));
}); 


});