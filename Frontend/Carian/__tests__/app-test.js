import React from 'react';
import { shallow } from 'enzyme';
import Login from '../pages/login';
import App from '../App';
import { View, Text, TextInput, TouchableOpacity, styles } from 'react-native';
import { expect } from 'chai';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

describe('<App/>', () => {
    beforeEach(function () {
        wrapper = shallow(<App></App>);
    });
    it('should have Navigation Container', () => {

        expect(wrapper.find(NavigationContainer)).to.have.length(1);

    });


});