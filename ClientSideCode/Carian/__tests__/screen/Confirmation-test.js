import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Confirmation from '../../screen/stackNavScreens/ConfirmationScreen';
import styles from '../../styles/commonStyles';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';


global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
const spyNavigate = jest.fn()
const props = {
  navigation: {
    navigate: spyNavigate,
    state: {params: {
      name:'hello'
    }}
  }
}

describe('<Confirmation/>', () => {
  beforeEach(function () {
    //props.navigation.setState({ params: params });
    //console.log(props.navigation.state.params.name)
    //spynavigate= sinon.spy(props.navigation, 'navigate')
    wrapper = shallow(<Confirmation {...props}></Confirmation>);
    
    
    
  });
  afterEach(function () {
    //props.navigation.navigate.restore();
  });
  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(1);
    expect(wrapper.type()).to.equal(View);
  });
  
  it('should have CARIAN text component', () => {
    expect(wrapper.find(Text)).to.have.length(5);
    expect(wrapper.contains("CARIAN")).to.equal(true);
  });

  it('should have Succesfully registered message  text component', () => {
    
    expect(wrapper.contains(<Text style={styles.ConfirmationText}>Congratualtions hello! </Text>
    )).to.equal(true);

  });
  it('should have one TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  });

  it('should have sign in button  component', () => {
    
    expect(wrapper.contains(<Text style={styles.buttonText}> Go to Sign in</Text>)).to.equal(true);

  });
  it('should navigate to login component', () => {
    const login = wrapper.find(TouchableOpacity).at(0);
    login.simulate('press');
    //expect(spyNavigate).t
    sinon.assert.calledWith(spyNavigate, "LoginScreen");
    //sinon.assert.calledOnce(props.navigation.navigate);
  })


}); 