import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { View } from 'react-native';
import { expect } from 'chai';
import Login from '../pages/login';

describe('<App/>', () => {

    
        beforeEach(function() {
        wrapper = shallow(<App></App>);
        });          
      
        it('should have a title Comment It', () => {
        expect(wrapper.contains(<Login></Login>)).to.equal(true)});
      
  
  });