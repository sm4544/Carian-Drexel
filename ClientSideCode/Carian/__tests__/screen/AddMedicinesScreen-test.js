import React from 'react';
import { shallow } from 'enzyme';
import AddMedicinesScreen from '../../screen/drawerScreens/MedicineAddScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { getAllMedicine } from '../../screen/services/MedicineService';
import DropDownPicker from 'react-native-dropdown-picker';


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

describe('<AddMedicinesScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      getAllMedicine.mockResolvedValue([{ id: "1", name: "paracet" }])
      wrapper = shallow(<AddMedicinesScreen navigation={navigation}></AddMedicinesScreen>);
    });

    afterEach(function () {
        navigation.navigate.restore();
      });

    // it('should have ScrollView', () => {
    //     expect(wrapper.type()).to.equal(ScrollView);
    // });

      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(2);
      });
      it('should have Text ', () => {
        expect(wrapper.find(<Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20, color:'red'}}>Choose the Pharmacy</Text>));
      });
      it('should have  Select Medicines which are going to add  text component', () => {
        expect(wrapper.find(Text)).to.have.length(1);
        expect(wrapper.contains("Select Medicines which are going to add")).to.equal(true);
      });
      // it('should have DropdownPicker', () => {
      //   expect(wrapper.type().to.equal(DropDownPicker)).to.have.length(2);
      // });
      it('should have TextInput ', () => {
        expect(wrapper.find(<TextInput
          style={{backgroundColor:'steelblue',fontSize:15,alignItems:'center',height:40,width:150}}
          placeholder="Enter the quantity*"
          placeholderTextColor="red"
          keyboardType="number-pad"  
          ref="qty" onChangeText={(qty) => this.setState({ qty:qty })}
          value={navigation.state.params.qty} />));
      });

    });
