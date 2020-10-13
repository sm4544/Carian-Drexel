import React from 'react';
import { shallow } from 'enzyme';
import Confirmation from '../pages/Confirmation';
import { View , ScrollView , Text, TextInput, TouchableOpacity } from 'react-native';
import { expect } from 'chai';
import DropdownMenu from 'react-native-dropdown-menu';
import styles from '../styles/commonStyles';
import Register from '../pages/register';
const navigation = { navigate: jest.fn() };
import spies from 'chai-spies';

describe('<Confirmation/>', () => {
  wrapper = shallow(<Confirmation navigation={navigation}></Confirmation>);
  
  
    beforeEach(function () {
      
      wrapper = shallow(<Confirmation navigation={navigation}></Confirmation>);
  
    });
    it('should have View', () => {

        expect(wrapper.type()).to.equal(View);
      });
    });