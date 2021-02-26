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
            
            doctorsList: [{"area": "Delaware", "city": "Newark", "college_name": "AEC", "doctor_fee": "75.00", "email": "langer@gmail.com", "highestDegree": "MBBS", "hospital_id": "3", "hospital_name": "AEC", "id": "42", "licence_number": "188181", "name": "test test", "overallExperience": "5", "phoneNumber": "9918897651", "profile_id": "23", "specialization": "Neurologist"},
            {"area": "Delaware", "city": "Newark", "college_name": "AEC", "doctor_fee": "75.00", "email": "langer@gmail.com", "highestDegree": "MBBS", "hospital_id": "3", "hospital_name": "AEC", "id": "42", "licence_number": "188181", "name": "test test", "overallExperience": "5", "phoneNumber": "9918897651", "profile_id": "23", "specialization": "Neurologist"},
            {"area": "Delaware", "city": "Newark", "college_name": "AEC", "doctor_fee": "75.00", "email": "langer@gmail.com", "highestDegree": "MBBS", "hospital_id": "3", "hospital_name": "AEC", "id": "42", "licence_number": "188181", "name": "test test", "overallExperience": "5", "phoneNumber": "9918897651", "profile_id": "23", "specialization": "Neurologist"},
             {"area": "Delaware", "city": "Newark", "college_name": "AEC", "doctor_fee": "75.00", "email": "binny@gmail.com", "highestDegree": "MBBS", "hospital_id": "3", "hospital_name": "AEC", "id": "43", "licence_number": "188187", "name": "Doctor 1", "overallExperience": "5", "phoneNumber": "9918897654", "profile_id": "14", "specialization": "Cardiology"}]

        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" }



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
        sinon.assert.calledWith(spyon, "DoctorPublicProfile", { id: 'hello' });
        sinon.assert.calledOnce(spyon);
    })

})