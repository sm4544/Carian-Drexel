import React from 'react';

import {

    View,

    Text,

    TouchableOpacity,


    TextInput,

    StyleSheet,

    Alert,

    Image,

    ScrollView,

    style,

} from 'react-native';

import { shallow } from 'enzyme';

import { expect } from 'chai';

import sinon from 'sinon';

import { Table, Row, Rows } from "react-native-table-component";


import Prescription from '../../screen/drawerScreens/Prescription';


import styles1 from '../../styles/DoctorProfileStyles';
import { medicineOrders } from '../../screen/services/customerDetailsService';







const orderid =  {orderid: orderid};

let tableHead = ["Days", "24Hours", "Opens At", "Closed at",]







const navigation = {

    navigate: jest.fn(),

    state: {

        params: {
    
            orderid: orderid,
            tableHead: ['Days', '24Hours', 'Opens At', 'Closed at'],
            tableData : [ 1,"paracetmol","650mg","2"
        ]
            
       
    
        }
    }

   

};

global.expect = expect;

global.sinon = sinon;

global.shallow = shallow;

jest.mock("../../screen/services/customerDetailsService");


describe('<Prescription/>', () => {

    beforeEach(function () {

        spyon = sinon.spy(navigation, 'navigate');
        medicineOrders.mockResolvedValue([{sno:"1",name:"paracetmol",content:"650mg",qty:"2"}])
        wrapper = shallow(<Prescription navigation={navigation}></Prescription>);
    });

    afterEach(function () {
        navigation.navigate.restore();
    });


    it('should have view ', () => {

        expect(wrapper.find(ScrollView)).to.have.length(1);

    });




    it('should have working hours table and header row and rows', () => {

        expect(wrapper.find(Table)).to.have.length(1);

        expect(wrapper.find(Row)).to.have.length(1);

        expect(wrapper.find(Rows)).to.have.length(1);
        expect(wrapper.find(<Row data={navigation.state.params.tableHead} style={styles1.tableHeader} textStyle={styles1.tableHeaderText}/>));
        
        expect(wrapper.find(  <Rows data={navigation.state.params.tableData} style={styles1.tableRowstyle} textStyle={styles1.tableRowText}/>));

    })





})