import React from 'react';
import {shallow} from 'enzyme';
import Register from '../../screen/drawerScreens/PatientsScreen';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {expect} from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import DropDownPicker from 'react-native-dropdown-picker';
const navigation = {navigate: jest.fn()};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe('<Register/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<Register navigation={navigation}></Register>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have Scrollview', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });
});
