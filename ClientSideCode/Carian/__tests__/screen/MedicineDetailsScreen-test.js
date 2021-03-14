import React from 'react';
import { shallow } from 'enzyme';
import MedicineDetailsScreen from '../../screen/drawerScreens/MedicineDetailsScreen';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import RadioForm from 'react-native-simple-radio-button';
import { postMedicineApi } from '../../screen/services/MedicineService';
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
jest.mock("../../screen/services/MedicineService");

describe('<MedicineDetailsScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      wrapper = shallow(<MedicineDetailsScreen navigation={navigation}></MedicineDetailsScreen>);
    });
  
    afterEach(function () {
      navigation.navigate.restore();
    });
    it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(ScrollView);
      });
      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(5);
      });
      it('should have TextInput', () => {
        expect(wrapper.find(TextInput)).to.have.length(4);
      });
      it('should have medicine_name input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
      });
    
      it('should change state when text changed on drug name inputtext box', () => {
        const drug_name = wrapper.find(TextInput).at(0);
        drug_name.simulate('ChangeText', 'Paracetemol');
        expect(wrapper.state('drug_name')).to.equal('Paracetemol');
      });
      it('should have dosage input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
      });
    
      it('should change state when text changed on drug_content inputtext box', () => {
        const drug_content = wrapper.find(TextInput).at(1);
        drug_content.simulate('ChangeText', '100mg');
        expect(wrapper.state('drug_content')).to.equal('100mg');
      });
      it('should have price input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
      });
    
      it('should change state when text changed on price inputtext box', () => {
        const price = wrapper.find(TextInput).at(2);
        price.simulate('ChangeText', '100');
        expect(wrapper.state('price')).to.equal('100');
      });
      it('should have price input component with empaty value ', () => {
        expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
      });
    
      it('should change state when text changed on quantity inputtext box', () => {
        const quantity = wrapper.find(TextInput).at(3);
        quantity.simulate('ChangeText', '100');
        expect(wrapper.state('quantity')).to.equal('100');
      });

      it('should through error messages if user click on submit with empty price', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
        expect(wrapper.contains('The field "price" is mandatory.')).to.equal(true);
      })
      it('should through error messages if user click on submit with empty drug_content', () => {
        const submit = wrapper.find(TouchableOpacity).at(0);
        submit.simulate('press');
        expect(wrapper.contains('The field "drug_content" is mandatory.')).to.equal(true);
      })
      it('should through error messages if user click on submit with empty drug_name', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
        expect(wrapper.contains('The field "drug_name" is mandatory.')).to.equal(true);
      })
      it('should through error messages if user click on submit with empty quantity', () => {
        const registerButton = wrapper.find(TouchableOpacity).at(0);
        registerButton.simulate('press');
        expect(wrapper.contains('The field "quantity" is mandatory.')).to.equal(true);
      })
      it('should navigate to MedicineAddScreen', async () => {

        wrapper.find(TextInput).at(0).simulate('ChangeText', 'Paracetemol');
        wrapper.find(TextInput).at(1).simulate('ChangeText', '10mg');
        wrapper.find(TextInput).at(2).simulate('ChangeText', '100');    
        wrapper.find(TextInput).at(3).simulate('ChangeText', '200'); 
        const output = {"Message": "Added Medicine  - 10"};
    
        postMedicineApi.mockResolvedValue(output);
        await wrapper.instance().onPressMedicineInfo();
    
        sinon.assert.calledWith(spyon,"MedicineAddScreen");
        sinon.assert.calledOnce(spyon);
      })

});