import React from 'react';
import { shallow } from 'enzyme';
import LabTestsDetailsScreen from '../../screen/drawerScreens/LabTestsDetailsScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import RadioForm from 'react-native-simple-radio-button';
import { postLabApi } from '../../screen/services/LabService';
const navigation = {
    navigate: jest.fn(),
    state: {
      params: {
        profileid: global.profileId,
        selectedItems:[1,2],
     }
    }
  };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/LabService");

describe('<LabTestsDetailsScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      wrapper = shallow(<LabTestsDetailsScreen navigation={navigation}></LabTestsDetailsScreen>);
    });
  
    afterEach(function () {
      navigation.navigate.restore();
    });
    it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(ScrollView);
      });
      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(4);
      });
      it('should have TextInput', () => {
        expect(wrapper.find(TextInput)).to.have.length(3);
      });
      it('should have test_name input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
      });
    
      it('should change state when text changed on test_name inputtext box', () => {
        const test_name = wrapper.find(TextInput).at(0);
        test_name.simulate('ChangeText', 'ECHO');
        expect(wrapper.state('test_name')).to.equal('ECHO');
      });
      it('should have category input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
      });
    
      it('should change state when text changed on category inputtext box', () => {
        const category = wrapper.find(TextInput).at(1);
        category.simulate('ChangeText', 'Heart');
        expect(wrapper.state('category')).to.equal('Heart');
      });
      it('should have price input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
      });
    
      it('should change state when text changed on price inputtext box', () => {
        const price = wrapper.find(TextInput).at(2);
        price.simulate('ChangeText', '100');
        expect(wrapper.state('price')).to.equal('100');
      });

      it('should through error messages if user click on submit with empty price', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
        expect(wrapper.contains('The field "price" is mandatory.')).to.equal(true);
      })
      it('should through error messages if user click on submit with empty category', () => {
        const submit = wrapper.find(TouchableOpacity).at(0);
        submit.simulate('press');
        expect(wrapper.contains('The field "category" is mandatory.')).to.equal(true);
      })
      it('should through error messages if user click on submit with empty test_name', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
        expect(wrapper.contains('The field "test_name" is mandatory.')).to.equal(true);
      })
      it('should navigate to LabTestsAddScreen', async () => {

        wrapper.find(TextInput).at(0).simulate('ChangeText', 'Echo');
        wrapper.find(TextInput).at(1).simulate('ChangeText', 'Heart');
        wrapper.find(TextInput).at(2).simulate('ChangeText', '100');    
        const output = { "Message": "Added Report  - 38"};
    
        postLabApi.mockResolvedValue(output);
        await wrapper.instance().onPressLabTestInfo();
    
        sinon.assert.calledWith(spyon,"LabTestsAddScreen");
        sinon.assert.calledOnce(spyon);
      })

});