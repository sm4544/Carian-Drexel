import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { View } from 'react-native';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

describe('<App/>', () => {

  it('should have view', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.type()).to.equal(View);
  });

  

});