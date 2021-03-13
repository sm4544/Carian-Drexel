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
import styles from '../../../styles/DoctorProfileStyles';
import HospitalPublicProfile from '../../../screen/drawerScreens/CommonPages/HospitalPublicProfile';
import SpecialityCard from '../../../screen/drawerScreens/Cards/SpecialityCard';
import DoctorProfileCard from '../../../screen/drawerScreens/Cards/DoctorProfileCard';
import ReviewCard from '../../../screen/drawerScreens/Cards/ReviewCard';
import { SliderBox } from "react-native-image-slider-box";
import { getAllHospitalsInfo } from '../../../screen/services/hospitalService';

let headerSlots = ["Days", "24Hours", "Opens At", "Closed at",]
let hospitalImages = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"

]
const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            id: 1,
            dataSourceHospital: {},
            customerCount: '1000',
            hospitalImages: [],
            specialistCarddata: [],
            departments: [],
            services: [],
            headerSlots: ['Days', '24Hours', 'Opens At', 'Closed at'],
            workingHours: [],
            hospitalReviews: [],
            doctorsList: [],

        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock('../../../screen/services/hospitalService');

describe('<HospitalPublicProfile/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');
        getAllHospitalsInfo.mockResolvedValue({ "Area": "Delaware", "City": "Newark", "State": "NJ", "address": "BC3 BC4", "departments": [{ "Department": "Neurologist", "DepartmentID": 3 }], "doctors": [{ "area": "Delaware", "city": "Newark", "department_id": "3", "doctor_fee": "75.00", "highest_qualification": "MBBS", "hospital_id": "3", "id": "42", "licence_number": "188181", "name": "test test", "overall_work_experience": "5", "specialization": "Neurologist", "studied_at": "AEC", "work_email_address": "langer@gmail.com" }, { "area": "Delaware", "city": "Newark", "department_id": "4", "doctor_fee": "75.00", "highest_qualification": "MBBS", "hospital_id": "3", "id": "43", "licence_number": "188187", "name": "Doctor 1", "overall_work_experience": "5", "specialization": "Cardiology", "studied_at": "AEC", "work_email_address": "binny@gmail.com" }], "hospitalImages": ["https://source.unsplash.com/1024x768/?nature", "https://source.unsplash.com/1024x768/?water", "https://source.unsplash.com/1024x768/?girl", "https://source.unsplash.com/1024x768/?tree"], "id": 3, "name": "AEC", "phone": "1239278901", "pincode": "19104", "reviews": [{ "Review_By": "soundarya", "Review_Content": "Review Criticism imply careful examination of something, formulation of a judgement", "Review_Stars": 4, "Review_Timestamp": "2021-02-20", "review_for_doctor": 23, "review_for_hospital": 3, "review_id": 5 }], "services": [{ "id": 7, "name": "Gastroentrology" }, { "id": 8, "name": "Pediatrician" }], "type": "multi-speciality", "working_hours": [["Mon", "Yes", "-", "-"], ["Tue", "No", "01:00PM", "06:00PM"], ["Wed", "No", "01:00PM", "06:00PM"], ["Thu", "No", "01:00PM", "06:00PM"], ["Fri", "No", "01:00PM", "06:00PM"], ["Sat", "No", "01:00PM", "06:00PM"], ["Sun", "No", "01:00PM", "01:00PM"]] });
        wrapper = shallow(<HospitalPublicProfile navigation={navigation}></HospitalPublicProfile>);
    });
    afterEach(function () {
        navigation.navigate.restore();
    });

    it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(ScrollView);
    });

    it('should have view ', () => {
        expect(wrapper.find(ScrollView)).to.have.length(1);
    });

    it('should have view ', () => {
        expect(wrapper.find(SliderBox)).to.have.length(1);
        expect(wrapper.contains(<SliderBox
            images={hospitalImages}
            sliderBoxHeight={180}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
        />)).to.equal(true);
    });


    it('should have horizontal line', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })

    it('should have hospital  name text', () => {
        expect(wrapper.contains(<Text style={styles.hospitalName}>AEC</Text>)).to.equal(true);
    })

    it('should have hospital  adress text', () => {
        expect(wrapper.contains(<Text style={styles.addressHeader}>Address: </Text>)).to.equal(true);
    })

    it('should have hospital full adress  text', () => {
        expect(wrapper.contains(<Text style={styles.adressText}> BC3 BC4</Text>)).to.equal(true);
        expect(wrapper.contains(<Text style={styles.adressText}> Delaware, Newark,NJ, 19104</Text>)).to.equal(true);
    })

    it('should have Website URL button', () => {
        expect(wrapper.contains(<TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Website</Text>
        </TouchableOpacity>)).to.equal(true);
    })

    it('should have directions button', () => {
        expect(wrapper.contains(<TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Directions</Text>
        </TouchableOpacity>)).to.equal(true);
    })

    it('should have Call button', () => {
        expect(wrapper.contains(<TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>)).to.equal(true);
    })

    it('should have hospital  reviews text', () => {
        expect(wrapper.contains(<Text style={styles.addressHeader}>Reviews: </Text>)).to.equal(true);
    })

    it('should have rating info text', () => {
        expect(wrapper.contains(<Text style={styles.addressHeader}>
            4.5{' '}
            1 Reviews{' '}
        </Text>)).to.equal(true);
    })

    it('should have hospital  customers text', () => {
        expect(wrapper.contains(<Text style={styles.addressHeader}>Customers: </Text>)).to.equal(true);
    })

    it('should have rating info text', () => {
        wrapper.setState({ customerCount: 1000 })
        expect(wrapper.contains(<Text style={styles.addressHeader}>1000 Served Via Carian </Text>)).to.equal(true);
    })

    it('should have  horizontal line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor profiles section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Book Appointment with our Doctors</Text>)).to.equal(true);
    })
    it('should have  doctor profiles text', () => {
        expect(wrapper.find(DoctorProfileCard)).to.have.length(2);
    })

    it('should have horizontal line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor working section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Working Hours</Text>)).to.equal(true);
    })

    it('should have working hours table and header row and rows', () => {
        expect(wrapper.find(Table)).to.have.length(1);
        expect(wrapper.find(Row)).to.have.length(1);
        expect(wrapper.find(Rows)).to.have.length(1);
        expect(wrapper.contains(<Row data={headerSlots} style={styles.tableHeader} textStyle={styles.tableHeaderText} />)).to.equal(true);

    })

    it('should have horizontal line ', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })

    it('should have location section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Location</Text>)).to.equal(true);
    })

    it('should have  horizontal line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor specialization section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Departments</Text>)).to.equal(true);
    })
    it('should have  doctor specilization section text', () => {
        expect(wrapper.find(SpecialityCard)).to.have.length(1);
    })

    it('should have  horizantol line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor services text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Services</Text>)).to.equal(true);
    })
    it('should have  services touchable', () => {
        expect(wrapper.find(TouchableOpacity)).to.have.length(7);
    })

    it('should have horizontal line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor ratings section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Patient Reviews</Text>)).to.equal(true);
    })

    it('should have doctor ratings subtext', () => {
        expect(wrapper.contains(<Text style={styles.reviewsSubText}>These reviews represent patient opinions and experiences. And they do not reflect the Doctor's medical capabilities.</Text>)).to.equal(true);
    })
    it('should have  review cards', () => {
        expect(wrapper.find(ReviewCard)).to.have.length(1);
    })
})