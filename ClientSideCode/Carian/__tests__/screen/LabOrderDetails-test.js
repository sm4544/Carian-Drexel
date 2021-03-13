import React from 'react';
import {
    ScrollView,
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Table, Row, Rows } from "react-native-table-component";
import LabOrderDetails from '../../screen/drawerScreens/LabOrderDetails';
import styles1 from '../../styles/DoctorProfileStyles';
import { labOrderDetails } from '../../screen/services/customerDetailsService';
const orderid = { orderid: orderid };
const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            orderid: orderid,
            tableHead: ['Days', '24Hours', 'Opens At', 'Closed at'],
            tableData: [1, "ecg", "heart", "200"
            ]
        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/customerDetailsService");

describe('<LabOrderDetails/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');
        labOrderDetails.mockResolvedValue([{ sno: "1", name: "ecg", category: "heart", price: "200" }])
        wrapper = shallow(<LabOrderDetails navigation={navigation}></LabOrderDetails>);
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
        expect(wrapper.find(<Row data={navigation.state.params.tableHead} style={styles1.tableHeader} textStyle={styles1.tableHeaderText} />));
        expect(wrapper.find(<Rows data={navigation.state.params.tableData} style={styles1.tableRowstyle} textStyle={styles1.tableRowText} />));
    })

})