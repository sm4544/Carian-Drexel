import React from 'react';
import { shallow } from 'enzyme';
import ReportsScreen from '../../screen/drawerScreens/ReportsScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
const profileid = global.profileId;

describe('<ReportsScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      wrapper = shallow(<ReportsScreen navigation={navigation}></ReportsScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
      });
      it('should have SafeAreaView', () => {
        expect(wrapper.type()).to.equal(SafeAreaView);
      });
      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(3);
      });
      it('should have TouchableOpacity', () => {
        expect(wrapper.find(TouchableOpacity)).to.have.length(3);
      });
      it('should have Text', () => {
        expect(wrapper.find(Text)).to.have.length(3);
      });
      it('should have ADD LAB TESTS text component', () => {
        expect(wrapper.find(Text)).to.have.length(3);
        expect(wrapper.contains("ADD LAB TESTS")).to.equal(true);
      });
      it('should have DELETE LAB TESTS text component', () => {
        expect(wrapper.find(Text)).to.have.length(3);
        expect(wrapper.contains("DELETE LAB TESTS")).to.equal(true);
      });
      it('should have  VIEW LAB TESTS  text component', () => {
        expect(wrapper.find(Text)).to.have.length(3);
        expect(wrapper.contains("VIEW LAB TESTS")).to.equal(true);
      });

      it('should navigate to LabTestsAddScreen screen ', async () => {

        const add = wrapper.find(TouchableOpacity).at(0);
        add.simulate('press');            
        sinon.assert.calledWith(spyon, "LabTestsAddScreen",{profileid:profileid});
        sinon.assert.calledOnce(spyon);
      })
      it('should navigate to LabTestsAddScreen screen ', async () => {

        const deleteOn = wrapper.find(TouchableOpacity).at(1);
        deleteOn.simulate('press');            
        sinon.assert.calledWith(spyon, "LabTestsAddScreen",{profileid:profileid});
        sinon.assert.calledOnce(spyon);
      })
      it('should navigate to VIEW LAB TESTS screen ', async () => {

        const viewOn = wrapper.find(TouchableOpacity).at(2);
        viewOn.simulate('press');            
        sinon.assert.calledWith(spyon, "LabTestsViewScreen",{profileid:profileid});
        sinon.assert.calledOnce(spyon);
      })
    });