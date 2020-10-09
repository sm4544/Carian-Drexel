import React from 'react';
import { shallow } from 'enzyme';
import Login from '../pages/login';
import { View , Text, TextInput, TouchableOpacity, styles} from 'react-native';
import { expect } from 'chai';

describe('<Login/>', () => {
  beforeEach(function() {
    wrapper = shallow(<Login></Login>);
    }); 
  it('should have view', () => {
    
    expect(wrapper.type()).to.equal(View);
  });

  it('should have at least 1 text component and should contain CARIAN', () => {
    expect(wrapper.find(Text)).to.have.length(4);
    expect(wrapper.contains("CARIAN")).to.equal(true);
  })

  it('should have 2 Textinput boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(2);    
  })

  it('should contain forgot password link', () => {
    expect(wrapper.contains("Forgot Password")).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);  
   
  })

  it('should contain Login button', () => {
    expect(wrapper.contains("LOGIN")).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);  
   
  })

  it('should contain register button', () => {
    expect(wrapper.contains("New user? Register Here")).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);  
   
  })  

});