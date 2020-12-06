import React from 'react';
import { shallow } from 'enzyme';
import HospitalScreen from '../../screen/drawerScreens/HospitalScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import ActionButton from 'react-native-action-button';
import { HospitalApi } from '../../screen/services/adminHospitalService';


const navigation = {

  navigate: jest.fn(),
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/adminHospitalService");

describe('<HospitalScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
<<<<<<< Updated upstream
=======
    HospitalApi.mockResolvedValue([{name: "hospitalname", area: "hospitalarea", city: "hospitalcity",
    addressine1: "hospitaladdressine1", addressine2: "hospitaladdressine2", phonenumber: "1234888888", state: "hospitalstate", pincode: "987", licence_number: "6555", originally_registered_date: "11-2-2020",
    id: "1"}])
>>>>>>> Stashed changes
    wrapper = shallow(<HospitalScreen navigation={navigation}></HospitalScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

<<<<<<< Updated upstream
  it('should contain Add Hospital button', () => {
    expect(wrapper.contains(<Text style={styles.buttonText}>Add Hospital</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to hospital details screen component', () => {
    const register = wrapper.find(TouchableOpacity).at(0);
    console.log(register)
    register.simulate('press');    
    sinon.assert.calledWith(spyon, "HospitalDetailsScreen");
=======
  
  it('should have view ', () => {
    expect(wrapper.find(ScrollView)).to.have.length(1);
});

  it('should contain Add Hospital button', () => {
     expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })

  it('should navigate to HospitalOverview screen component', () => {
    const register = wrapper.find(TouchableOpacity).at(0);
    console.log(register)
    register.simulate('press');    
    sinon.assert.calledWith(spyon, "HospitalOverview");
>>>>>>> Stashed changes
    sinon.assert.calledOnce(spyon);
    
  })

<<<<<<< Updated upstream
=======

  it('should navigate to Hospital Detail screen component', () => {
    const register = wrapper.find(ActionButton).at(0);
    console.log(register)
    register.simulate('press');    
    sinon.assert.calledWith(spyon, "HospitalDetailsScreen", {name: "", area: "", city: "",
    addressine1: "", addressine2: "", phonenumber: "", state: "", pincode: "", licence_number: "", originally_registered_date: "",
    id: ""});
    sinon.assert.calledOnce(spyon);
    
  })


>>>>>>> Stashed changes

});