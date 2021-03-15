import React from 'react';
import { shallow } from 'enzyme';
import LabTestsAddScreen from '../../screen/drawerScreens/LabTestsAddScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import ActionButton from 'react-native-action-button';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { getAllLabTests } from '../../screen/services/LabService';


const patientid = { profileid: global.profileid };
const selectedItems= {selectedItems:selectedItems};
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      patientid: patientid,
      selectedItems:[1,2],
   }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/LabService");
const profileid = global.profileId;

describe('<LabTestsAddScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      getAllLabTests.mockResolvedValue()
      wrapper = shallow(<LabTestsAddScreen navigation={navigation}></LabTestsAddScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
      });
      it('should have SafeAreaView', () => {
        expect(wrapper.type()).to.equal(SafeAreaView);
      });
      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(2);
      });
      it('should have  Select Lab TESTS which are going to add  text component', () => {
        expect(wrapper.find(Text)).to.have.length(1);
        expect(wrapper.contains("Select Lab TESTS which are going to add")).to.equal(true);
      });
      it('should have drop down for relationship', () => {
        expect(wrapper.find(MultiSelect)).to.have.length(1);
      });

      it('should navigate to LabTestsDetailsScreen screen component', () => {
        const add = wrapper.find(ActionButton).at(0);
        console.log(add)
        add.simulate('press');
        sinon.assert.calledWith(spyon, "LabTestsDetailsScreen",{selectedItems:[],profileid:profileid });
        sinon.assert.calledOnce(spyon);
      })

    });