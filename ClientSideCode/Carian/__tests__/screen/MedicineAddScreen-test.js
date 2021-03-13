import React from 'react';
import { shallow } from 'enzyme';
import MedicineAddScreen from '../../screen/drawerScreens/MedicineAddScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import ActionButton from 'react-native-action-button';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { getAllMedicine } from '../../screen/services/MedicineService';


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
jest.mock("../../screen/services/MedicineService");
const profileid = global.profileId;

describe('<MedicineAddScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      getAllMedicine.mockResolvedValue([{ id: "1", name: "paracet" }])
      wrapper = shallow(<MedicineAddScreen navigation={navigation}></MedicineAddScreen>);
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
      it('should have  Select Medicines which are going to add  text component', () => {
        expect(wrapper.find(Text)).to.have.length(1);
        expect(wrapper.contains("Select Medicines which are going to add")).to.equal(true);
      });
      it('should have drop down for relationship', () => {
        expect(wrapper.find(MultiSelect)).to.have.length(1);
      });

      it('should navigate to MedicineDetailsScreen screen component', () => {
        const add = wrapper.find(ActionButton).at(0);
        console.log(add)
        add.simulate('press');
        sinon.assert.calledWith(spyon, "MedicineDetailsScreen",{selectedItems:[],profileid:profileid });
        sinon.assert.calledOnce(spyon);
      })

    });