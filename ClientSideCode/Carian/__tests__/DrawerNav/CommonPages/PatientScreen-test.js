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
import {getdependents} from '../../../screen/services/profileService';
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            date: '10/10/2020',
            time: '10:30AM',
            profileId: '10',
            doctor: {"area": "Delaware", "city": "Newark", "college_name": "AEC", "doctor_fee": "75.00", "email": "langer@gmail.com", "highestDegree": "MBBS", "hospital_id": "3", "hospital_name": "AEC", "id": "42", "licence_number": "188181", "name": "test test", "overallExperience": "5", "phoneNumber": "9918897651", "profile_id": "23", "specialization": "Neurologist"},
            hospital: {"area": "Lancaster", "avg_rating": "4.2", "city": "Philly", "doctors": "3", "hospital_id": "1", "name": "VNR", "total_reviews": "120", "type": "multi-speciality"},
            
        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock('../../../screen/services/profileService');



describe('<PatientScreen/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');
        getdependents.mockResolvedValue( [{"addressine1": "Good Food flats", "addressine2": "Baring Street", "age": 5, "allergies_to_medicine": "allergy 1, Allergy 2", "blood_group": "A-", "city": "Philadelphia", "dob": "1978-02-02", "email": "test913@gmail.com", "first_name": "Alex", "gender": "F", "height": 30, "hobbies": "hobby 1, hobby 2", "id": 40, "is_created_by_staff": false, "last_name": "Hartley", "martial_status": "Divorced", "mobile_number": "123456", "occupation": "Paramedic", "physical_activities": "No", "pincode": "19104", "recurring_problems": "problem1, problem 2", "registred_date": "2021-02-21", "related_profile": 22, "relation": "Spouse", "state": "PA", "use_of_alcohol": "No", "use_of_tobacco": "No", "weight": 11}, 
        {"addressine1": "Good Food flats", "addressine2": "Baring Street", "age": 5, "allergies_to_medicine": "allergy 1, Allergy 2", "blood_group": "A+", "city": "Philadelphia", "dob": "1978-02-02", "email": "test913@gmail.com", "first_name": "test", "gender": "M", "height": 31, "hobbies": "hobby 1, hobby 2", "id": 41, "is_created_by_staff": false, "last_name": "test", "martial_status": "Single", "mobile_number": "123456", "occupation": "Construction worker", "physical_activities": "No", "pincode": "19104", "recurring_problems": "problem1, problem 2", "registred_date": "2021-02-23", "related_profile": 22, "relation": "Kid", "state": "PA", "use_of_alcohol": "No", "use_of_tobacco": "No", "weight": 10}])
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
        expect(wrapper.contains(<Text style={{ margin: 5 }}>${navigation.state.params.doctor.doctor_fee}</Text>)).to.equal(true);
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
        wrapper.instance().onselecting(1, navigation.state.params.doctor, navigation.state.params.profileId, navigation.state.params.date, navigation.state.params.time)
        sinon.assert.calledWith(spyon, "paymentScreen",{ patientId : 1, doctor: navigation.state.params.doctor, profileId: navigation.state.params.profileId, selectedDate: navigation.state.params.date, selectedTime: navigation.state.params.time });
    });

    it('should navigate to patiengt info screen', () => {
        wrapper.instance().onPressingAddNew(navigation.state.params.profileId, navigation.state.params.doctor, navigation.state.params.hospital, navigation.state.params.date, navigation.state.params.time)
        sinon.assert.calledWith(spyon, "PatientsRegisterScreen", { hospital : navigation.state.params.hospital, doctor: navigation.state.params.doctor, profileId: navigation.state.params.profileId, selectedDate: navigation.state.params.date, selectedTime: navigation.state.params.time });
    });

});