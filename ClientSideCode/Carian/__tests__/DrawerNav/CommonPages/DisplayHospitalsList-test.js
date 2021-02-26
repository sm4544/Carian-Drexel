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
import DisplayHospitalsList from '../../../screen/drawerScreens/CommonPages/DisplayHospitalsList';
import DropDownPicker from 'react-native-dropdown-picker';
import SpecialityCard from '../../../screen/drawerScreens/Cards/SpecialityCard';
import HospitalCard from '../../../screen/drawerScreens/Cards/HospitalCard';

const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            
            hospitalsList: [{"area": "Lancaster", "avg_rating": "4.2", "city": "Philly", "doctors": "3", "hospital_id": "1", "name": "VNR", "total_reviews": "120", "type": "multi-speciality"},
            {"area": "Fremont", "avg_rating": "4.2", "city": "Milpitas", "doctors": "2", "hospital_id": "2", "name": "JNTU", "total_reviews": "120", "type": "multi-speciality"}, 
            {"area": "Delaware", "avg_rating": "4.2", "city": "Newark", "doctors": "2", "hospital_id": "3", "name": "AEC", "total_reviews": "120", "type": "multi-speciality"}, 
            {"area": "franscisco", "avg_rating": "4.2", "city": "San Francisco", "doctors": "0", "hospital_id": "8", "name": "california medical", "total_reviews": "120", "type": "multi-speciality"}]

        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" }

describe('<DisplayHospitalsList/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');

        wrapper = shallow(<DisplayHospitalsList navigation={navigation}></DisplayHospitalsList>);
       
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

    it('should have HospitalCard ', () => {
        expect(wrapper.find(HospitalCard)).to.have.length(4);
    });

    it('should navigate to HospitalPublicProfile', async () => {

        wrapper.instance().onPressingHospital('hello');
        sinon.assert.calledWith(spyon, "HospitalPublicProfile", { id: 'hello' });
        sinon.assert.calledOnce(spyon);
    })

})