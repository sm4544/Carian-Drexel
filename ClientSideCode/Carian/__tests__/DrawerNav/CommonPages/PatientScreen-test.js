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
import styles from '../../../styles/DoctorProfileStyles';
import HomeScreen from '../../../screen/drawerScreens/CommonPages/HomeScreen';
import PatientScreen from '../../../screen/drawerScreens/CommonPages/PatientsScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import SpecialityCard from '../../../screen/drawerScreens/Cards/SpecialityCard';
import HospitalCard from '../../../screen/drawerScreens/Cards/HospitalCard';
import DoctorProfileCard from '../../../screen/drawerScreens/Cards/DoctorProfileCard';
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            date: '10/10/2020',
            time: '10:30AM',
            profileId: '10',
            doctor: { image: image, name: 'Srinivasa Rao', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            hospital: { image: image, name: 'Manipal1 hospital', type: 'Multispecialtiy', streatAddline1: 'Unit 5', streatAddline2: '3675 market st', area: 'spring garden', city: 'Philadelphia', state: 'PA', pincode: '19104', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' },
            patientsList: [
                { label: 'first name, Last name (Self)', value: 0 },
                { label: 'Test, Test (Mother)', value: 1 },
                { label: 'Test, Test (Father)', value: 2 },
                { label: 'Test, Test (Kid)', value: 3 },
                { label: 'Test, Test (Spouce)', value: 4 },
                { label: 'Test, Test (Grand Mother)', value: 5 }
            ]
        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;



describe('<PatientScreen/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');

        wrapper = shallow(<PatientScreen navigation={navigation}></PatientScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
    });

    it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(View);
    });

    it('should have doctor profile image', () => {
        expect(wrapper.contains(<Image source={navigation.state.params.doctor.image} style={styles.profileImage} />)).to.equal(true);
    });

    it('should have doctor name and highest degree', () => {
        expect(wrapper.contains(<Text style={styles.cardText}>Dr. {navigation.state.params.doctor.name}({navigation.state.params.doctor.highestDegree})</Text>)).to.equal(true);
    });


    it('should have doctor specilization', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>{navigation.state.params.doctor.specialization}</Text>)).to.equal(true);
    });
    it('should have doctor overall experience', () => {
        expect(wrapper.contains(<Text style={styles.cardSubItalicText}>{navigation.state.params.doctor.overAllExperience} Years of over all experience</Text>)).to.equal(true);
    });
    it('should have doctor avg rating', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>{navigation.state.params.doctor.avgRating}({navigation.state.params.doctor.totalNoOfReviews} Stories )</Text>)).to.equal(true);
    });
    it('should DISPLAY NO PETIENTS TO DISPLAY', () => {
        expect(wrapper.contains(<Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 300 }}>No patients to Display</Text>)).to.equal(false);
    });
    it('should have add new button', () => {
        expect(wrapper.contains(<Text style={styles.payButtonText}>Add New Patient</Text>)).to.equal(true);
    });
    it('should have appointment details section', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Appointment Details</Text>)).to.equal(true);
    });
    it('should have in clinic appointment fee', () => {
        expect(wrapper.contains(<Text style={{ margin: 5 }}>In-Clinic Appointment fee:</Text>)).to.equal(true);
    });
    it('should have doctor appointment date', () => {
        expect(wrapper.contains( <Text style={{ margin: 5 }}>Appointment Date:</Text>)).to.equal(true);
    });
    it('should have doctor apppointment time', () => {
        expect(wrapper.contains(<Text style={{ margin: 5 }}>Appointment Time:</Text>)).to.equal(true);
    });
    it('should have hospital address', () => {
        expect(wrapper.contains(<Text style={{ margin: 5 }}>Address: </Text>)).to.equal(true);
    });
    it('should have doctor fee', () => {
        expect(wrapper.contains(<Text style={{ margin: 5 }}>${navigation.state.params.doctor.fee}</Text>)).to.equal(true);
    });
    it('should have selected date', () => {
        expect(wrapper.contains(<Text style={{ margin: 5 }}>{navigation.state.params.date}</Text>)).to.equal(true);
    });
    it('should have selected time', () => {
        expect(wrapper.contains(<Text style={{ margin: 5 }}>{navigation.state.params.time}</Text>)).to.equal(true);
    });
    it('should have hospital address line 1', () => {
        expect(wrapper.contains(<Text style={{ margin: 5 }}>{navigation.state.params.hospital.streatAddline1}, {navigation.state.params.hospital.streatAddline2} </Text>)).to.equal(true);
    });

    it('should have hospital city and area', () => {
        expect(wrapper.contains( <Text style={{ margin: 5 }}>{navigation.state.params.hospital.area}, {navigation.state.params.hospital.city} </Text>)).to.equal(true);
    });

    it('should have hospital state and pincode', () => {
        expect(wrapper.contains( <Text style={{ margin: 5 }}>{navigation.state.params.hospital.state}, {navigation.state.params.hospital.pincode} </Text>)).to.equal(true);
    });

    it('should navigate to payment screen', () => {
        wrapper.instance().onselecting(navigation.state.params.patientsList[0].value, navigation.state.params.doctor, navigation.state.params.profileId, navigation.state.params.date, navigation.state.params.time)
        sinon.assert.calledWith(spyon, "paymentScreen",{ patientId : navigation.state.params.patientsList[0].value, doctor: navigation.state.params.doctor, profileId: navigation.state.params.profileId, selectedDate: navigation.state.params.date, selectedTime: navigation.state.params.time });
    });

    it('should navigate to patiengt info screen', () => {
        wrapper.instance().onPressingAddNew(navigation.state.params.profileId, navigation.state.params.doctor, navigation.state.params.hospital, navigation.state.params.date, navigation.state.params.time)
        sinon.assert.calledWith(spyon, "PatientsInfoScreen", { hospital : navigation.state.params.hospital, doctor: navigation.state.params.doctor, profileId: navigation.state.params.profileId, selectedDate: navigation.state.params.date, selectedTime: navigation.state.params.time });
    });

});