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

const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };
const doctor = { image: image, name: 'Srinivasa Rao', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' };
const hospital = { image: image, name: 'Manipal1 hospital', type: 'Multispecialtiy', streatAddline1: 'Unit 5', streatAddline2: '3675 market st', area: 'spring garden', city: 'Philadelphia', state: 'PA', pincode: '19104', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' }
let slots = [{ id: 0, time: '09:30 AM' },
{ id: 1, time: '10:00 AM' },
{ id: 2, time: '10:30 AM' },
{ id: 3, time: '11:00 AM' },
{ id: 4, time: '11:30 AM' },
{ id: 5, time: '12:00 AM' },
{ id: 12, time: '12:30 AM' },
{ id: 6, time: '01:00 PM' },
{ id: 7, time: '01:30 PM' },
{ id: 8, time: '02:00 PM' },
{ id: 9, time: '02:30 PM' },
{ id: 10, time: '03:00 PM' },
{ id: 11, time: '03:30 PM' }]
let headerSlots = ["Days", "24Hours", "Opens At", "Closed at",]
let workingHours = [
    ["Mon", "Yes", "-", "-"],
    ["Tue", "No", "01:00PM", "06:00PM"],
    ["Wed", "No", "01:00PM", "06:00PM"],
    ["Thu", "No", "01:00PM", "06:00PM"],
    ["Fri", "Yes", "-", "-"],
    ["Sat", "Yes", "-", "-"],
    ["Sun", "No", "01:00PM", "06:00PM"]]
let services = [{ id: 0, name: 'treatment A' },
{ id: 1, name: 'treatment B' },
{ id: 2, name: 'treatment C' },
{ id: 3, name: 'treatment D' }]

let doctorsList= [{ image: image, name: 'Srinivasa Rao', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
{ image: image, name: 'Nallapati', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
{ image: image, name: 'Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
{ image: image, name: 'Test Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },]
let hospitalImageList = [{ id: 0, image: image },
{ id: 1, image: image },
{ id: 2, image: image },
{ id: 3, image: image },
{ id: 4, image: image },
{ id: 5, image: image }]

let hospitalReviews = [{ id: 0, name: 'Srinivas', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 1, name: 'Nallapati', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 2, name: 'Test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 3, name: 'Hello', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 4, name: 'Test test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 5, name: 'Se510', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' }]

let specialistCarddata = [{ image: image, name: 'Family physicians' },
{ image: image, name: 'Pediatricians' },
{ image: image, name: 'Geriatric doctors' },
{ image: image, name: 'Allergists' },
{ image: image, name: 'Rheumatologists' }]

let hospitalImages= [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"

]
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



describe('<HospitalPublicProfile/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');

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
        expect(wrapper.contains(<Text style={styles.hospitalName}>{hospital.name}</Text>)).to.equal(true);
    })

    it('should have hospital  adress text', () => {
        expect(wrapper.contains(<Text style={styles.addressHeader}>Address: </Text>)).to.equal(true);
    })

    it('should have hospital full adress  text', () => {
        expect(wrapper.contains(<Text style={styles.adressText}> {hospital.streatAddline1}, {hospital.streatAddline2}</Text>)).to.equal(true);
        expect(wrapper.contains(<Text style={styles.adressText}> {hospital.area}, {hospital.city} ,{hospital.state}, {hospital.pincode}</Text>)).to.equal(true);
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
        expect(wrapper.contains(<Text style={styles.addressHeader}>{hospital.avgRating} {hospital.totalNoOfReviews} Reviews </Text>)).to.equal(true);
    })

    it('should have hospital  customers text', () => {
        expect(wrapper.contains(<Text style={styles.addressHeader}>Customers: </Text>)).to.equal(true);
    })

    it('should have rating info text', () => {
        wrapper.setState({customerCount:1000})
        expect(wrapper.contains(<Text style={styles.addressHeader}>1000 Served Via Carian </Text>)).to.equal(true);
    })

    


    it('should have  horizontal line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor profiles section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Book Appointment with our Doctors</Text>)).to.equal(true);
    })
    it('should have  doctor profiles text', () => {
        doctorsList.forEach(element => {
            expect(wrapper.contains(<DoctorProfileCard key={element.name} doctor={doctor} ></DoctorProfileCard>)).to.equal(true);
        });        
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
        expect(wrapper.contains(<Rows data={workingHours} style={styles.tableRowstyle} textStyle={styles.tableRowText} />)).to.equal(true);
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
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Specialization</Text>)).to.equal(true);
    })
    it('should have  doctor specilization section text', () => {
        specialistCarddata.forEach(element => {
            expect(wrapper.contains(<SpecialityCard data={element} style={{ backgroundColor: 'white' }}></SpecialityCard>)).to.equal(true);
        });        
    })

    it('should have  horizantol line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor services text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Services</Text>)).to.equal(true);
    })
    it('should have  services touchable', () => {
        services.forEach(item => {
            expect(wrapper.contains(<TouchableOpacity key={item.id} disabled={true} style={styles.slotsTouch}>
                <Text>{item.name}</Text>
            </TouchableOpacity>)).to.equal(true);
        });

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
        hospitalReviews.forEach(review => {
            expect(wrapper.contains(<ReviewCard key={review.id} review={review}></ReviewCard>)).to.equal(true);
        });
    })
})