import React from 'react';
import { shallow } from 'enzyme';
import LabTestsViewScreen from '../../screen/drawerScreens/LabTestsViewScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import MultiSelect from 'react-native-multiple-select';
import { Table, Row, Rows } from 'react-native-table-component';
import { getMyLabTests , getAllLabTests} from '../../screen/services/LabService';
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;


const profileid = { profileid: global.profileid };
const selectedItems= {selectedItems:selectedItems};
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
        profileid: profileid,
        selectedItems:[1,2],
   }
  }
};
jest.mock("../../screen/services/LabService");

let tableHead= ['S.NO', 'Test Name'];
let tableData= ['1','MRA'];

describe('<LabTestsViewScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      getMyLabTests.mockResolvedValue(global.profileid);
      getAllLabTests.mockResolvedValue([{ id: "1", name: "MRA" }]);
      wrapper = shallow(<LabTestsViewScreen navigation={navigation}></LabTestsViewScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
      });
      it('should have SafeAreaView', () => {
        expect(wrapper.type()).to.equal(SafeAreaView);
      });

      it('should have View', () => {
        expect(wrapper.find(ScrollView)).to.have.length(1);
      });

      it('should have MultiSelect drop down for relationship', () => {
        expect(wrapper.find(MultiSelect)).to.have.length(1);
      });

      it('should have working hours table and header row and rows', () => {
        expect(wrapper.find(Table)).to.have.length(1);
        expect(wrapper.find(Row)).to.have.length(1);        
        expect(wrapper.contains(<Row data={tableHead} style={styles.head}/>)).to.equal(true);
        expect(wrapper.find(Rows)).to.have.length(1);
    })

    });