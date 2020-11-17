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
import styles from '../../../styles/homeScreenStyles';
import HomeScreen from '../../../screen/drawerScreens/CommonPages/HomeScreen';
import DisplayDoctorsList from '../../../screen/drawerScreens/CommonPages/DisplayDoctorsList';
import DropDownPicker from 'react-native-dropdown-picker';
import SpecialityCard from '../../../screen/drawerScreens/Cards/SpecialityCard';
import HospitalCard from '../../../screen/drawerScreens/Cards/HospitalCard';
import DoctorProfileCard from '../../../screen/drawerScreens/Cards/DoctorProfileCard';
const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            name: 'hello',
            profileid: '1',
            profile_type: 'Doctor'

        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;



describe('<DisplayDoctorsList/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');

        wrapper = shallow(<DisplayDoctorsList navigation={navigation}></DisplayDoctorsList>);
    });
    afterEach(function () {
        navigation.navigate.restore();
    });

    it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(ScrollView);
    });

    it('should have view ', () => {
        expect(wrapper.find(View)).to.have.length(1);
    });

    it('should have TouchableOpacity ', () => {
        expect(wrapper.find(TouchableOpacity)).to.have.length(4);
    });

    it('should have DoctorProfileCard ', () => {
        expect(wrapper.find(DoctorProfileCard)).to.have.length(4);
    });


    it('should navigate to DoctorPublicProfile', async () => {

        wrapper.instance().onPressingDoctorCard('hello');
        sinon.assert.calledWith(spyon, "DoctorPublicProfile", { name: 'hello' });
        sinon.assert.calledOnce(spyon);
    })

})