import React from 'react';
import { shallow } from 'enzyme';
import LabOrdersScreen from '../../screen/drawerScreens/LabOrdersScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { Table, TableWrapper, Row, Cell} from 'react-native-table-component';


const profileid = { profileid: global.profileid };
const selectedItems= {selectedItems:selectedItems};
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
        profileid: profileid,
   }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
const tableHead= ['Order No', 'DATE', 'STATUS'];


describe('<LabOrdersScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      wrapper = shallow(<LabOrdersScreen navigation={navigation}></LabOrdersScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
      });
      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(1);
      });

      it('should have working hours table and header row and rows', () => {
        expect(wrapper.find(Table)).to.have.length(1);
        expect(wrapper.find(Row)).to.have.length(1);        
        expect(wrapper.contains(<Row data={tableHead} style={styles.headOrder} textStyle={styles.textOrder}/>)).to.equal(true);
      
    })
});
