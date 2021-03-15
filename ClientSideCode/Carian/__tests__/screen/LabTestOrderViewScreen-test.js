import React from 'react';
import { shallow } from 'enzyme';
import LabTestOrderViewScreen from '../../screen/drawerScreens/LabTestOrderViewScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView ,SafeAreaView} from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import { Table, TableWrapper, Row, Cell} from 'react-native-table-component';
const profileid = { profileid: global.profileid };
const tableHead= ['S.NO', 'Test Name'];
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


describe('<LabTestOrderViewScreen/>', () => {
    beforeEach(function () {
      spyon = sinon.spy(navigation, 'navigate');
      wrapper = shallow(<LabTestOrderViewScreen navigation={navigation}></LabTestOrderViewScreen>);
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
