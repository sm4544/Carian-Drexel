import React from 'react';
import { shallow } from 'enzyme';
import MedicineOrderViewScreen from '../../screen/drawerScreens/MedicineOrderViewScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { Table, TableWrapper, Row, Cell} from 'react-native-table-component';
const profileid = { profileid: global.profileid };
const tableHead= ['Name', 'Drug Content', 'QTY'];
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
         order_id :'',
         patient_name: '',
        order_status:'',
        doctor_id:'',
        Doctor_name:'',
        Hospital_id:'',
        gender:'',
        Hospital_name:'',
        order_date:'',
       tableData:[],
   }
  }
};


describe('<MedicineOrderViewScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      wrapper = shallow(<MedicineOrderViewScreen navigation={navigation}></MedicineOrderViewScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
      });
      it('should have View', () => {
        expect(wrapper.find(View)).to.have.length(1);
      });
      it('should have Text', () => {
        expect(wrapper.find(Text)).to.have.length(7);
      });

      it('should have working hours table and header row and rows', () => {
        expect(wrapper.find(Table)).to.have.length(1);
        expect(wrapper.find(Row)).to.have.length(1);        
        expect(wrapper.contains(<Row data={tableHead} style={styles.head}/>)).to.equal(true);
      
    })
});
