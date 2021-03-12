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
import moment from 'moment';
import {SliderBox} from 'react-native-image-slider-box';
import { Table, Row, Rows } from "react-native-table-component";
import styles from '../../../styles/DoctorProfileStyles';
import HomeScreen from '../../../screen/drawerScreens/CommonPages/HomeScreen';
import DoctorPublicProfile from '../../../screen/drawerScreens/CommonPages/DoctorPublicProfile';
import DropDownPicker from 'react-native-dropdown-picker';
import SpecialityCard from '../../../screen/drawerScreens/Cards/SpecialityCard';
import ReviewCard from '../../../screen/drawerScreens/Cards/ReviewCard';
import HospitalCard from '../../../screen/drawerScreens/Cards/HospitalCard';
import CalendarStrip from 'react-native-calendar-strip';
import {getAvailableSlots, getDoctorDetails} from '../../../screen/services/hospitalService';

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
let headerSlots=["Days", "Morning", "Afternoon", "Evening", "Night"]
let workingHours=[
["Mon", "10:00AM-12:00AM", "01:00PM-05:00PM", "06:00PM-10:00PM","10:00PM-07:00AM"],
["Tue", "10:00AM-12:00AM", "-", "06:00PM-10:00PM","-"],
["Wed", "10:00AM-12:00AM", "01:00PM-05:00PM", "06:00PM-10:00PM","10:00PM-07:00AM"],
["Thu", "10:00AM-12:00AM", "01:00PM-05:00PM", "06:00PM-10:00PM","10:00PM-07:00AM"],
["Fri", "10:00AM-12:00AM", "01:00PM-05:00PM", "06:00PM-10:00PM","10:00PM-07:00AM"],
["Sat", "10:00AM-12:00AM", "01:00PM-05:00PM", "06:00PM-10:00PM","10:00PM-07:00AM"],
["Sun", "10:00AM-12:00AM", "01:00PM-05:00PM", "06:00PM-10:00PM","10:00PM-07:00AM"]]
let services = [{ id: 0, name: 'treatment A' },
{ id: 1, name: 'treatment B' },
{ id: 2, name: 'treatment C' },
{ id: 3, name: 'treatment D' }]
let hospitalImageList = [{ id: 0, image: image },
{ id: 1, image: image },
{ id: 2, image: image },
{ id: 3, image: image },
{ id: 4, image: image },
{ id: 5, image: image }]

let doctorReviews= [{ id: 0, name: 'Srinivas', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 1, name: 'Nallapati', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 2, name: 'Test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 3, name: 'Hello', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 4, name: 'Test test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 5, name: 'Se510', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' }]

let specialistCarddata = [{ image: image, name: 'Family physicians' },
{ image: image, name: 'Pediatricians' },
{ image: image, name: 'Geriatric doctors' },
{ image: image, name: 'Allergists' },
{ image: image, name: 'Dermatologists' },
{ image: image, name: 'Ophthalmologists' },
{ image: image, name: 'Infectious disease doctors' },
{ image: image, name: 'Obstetrician/gynecologists' },
{ image: image, name: 'Cardiologists' },
{ image: image, name: 'Endocrinologists' },
{ image: image, name: 'Gastroenterologists' },
{ image: image, name: 'Nephrologists' },
{ image: image, name: 'Urologists' },
{ image: image, name: 'Pulmonologists' },
{ image: image, name: 'Otolaryngologists' },
{ image: image, name: 'Neurologists' },
{ image: image, name: 'Psychiatrists' },
{ image: image, name: 'Oncologists' },
{ image: image, name: 'Radiologists' },
{ image: image, name: 'General surgeons' },
{ image: image, name: 'Orthopedic surgeons' },
{ image: image, name: 'Cardiac surgeons' },
{ image: image, name: 'Anesthesiologists' },
{ image: image, name: 'Rheumatologists' }]

const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            id: 1,
            doctor: {},
      hospital:{},
      customerCount:1000,
      selectedDate: moment().format('MM/DD/YYYY'),
      selectedTime: '',
      hospitalImageList: [],
      specialistCarddata: [
        {image: image, name: 'Family physicians'},
        {image: image, name: 'Pediatricians'},
        {image: image, name: 'Geriatric doctors'},
        {image: image, name: 'Allergists'},
        {image: image, name: 'Dermatologists'},
        {image: image, name: 'Ophthalmologists'},
        {image: image, name: 'Infectious disease doctors'},
        {image: image, name: 'Obstetrician/gynecologists'},
        {image: image, name: 'Cardiologists'},
        {image: image, name: 'Endocrinologists'},
        {image: image, name: 'Gastroenterologists'},
        {image: image, name: 'Nephrologists'},
        {image: image, name: 'Urologists'},
        {image: image, name: 'Pulmonologists'},
        {image: image, name: 'Otolaryngologists'},
        {image: image, name: 'Neurologists'},
        {image: image, name: 'Psychiatrists'},
        {image: image, name: 'Oncologists'},
        {image: image, name: 'Radiologists'},
        {image: image, name: 'General surgeons'},
        {image: image, name: 'Orthopedic surgeons'},
        {image: image, name: 'Cardiac surgeons'},
        {image: image, name: 'Anesthesiologists'},
        {image: image, name: 'Rheumatologists'},
      ],
      doctorReviews: [],
      services:[],
      headerSlots: ['Days', 'Morning', 'Afternoon', 'Evening', 'Night'],
      workingHours: [
        [
          'Mon',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        ['Tue', '10:00AM-12:00AM', '-', '06:00PM-10:00PM', '-'],
        [
          'Wed',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Thu',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Fri',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Sat',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Sun',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
      ],
            }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock('../../../screen/services/hospitalService');



describe('<DoctorPublicProfile/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');
        getAvailableSlots.mockResolvedValue({"Message": "Invalid doctor_id"});
        getDoctorDetails.mockResolvedValue( {"doctor": {"approved_by": 8, "department_id": 3, "doctor_fee": "75.00", "highest_qualification": "MBBS", "hospital_id": 3, "id": 42, "lab_id": 3, "licence_number": "188181", "overall_work_experience": 5, "pharmacy_id": 3, "profile_id": 23, "specialization": "Neurologist", "status": "ACtive", "studied_at": "AEC", "work_email_address": "langer@gmail.com", "work_phone_number": "9918897651"}, "hospital": {"addressine1": "BC3", "addressine2": "BC4", "area": "Delaware", "city": "Newark", "hospital_phone_number": "1239278901", "id": 3, "licence_number": "1890", "name": "AEC", "originally_registered_date": "2021-02-05", "pincode": "19104", "regisrted_by": 13, "registered_date": "2021-02-05", "state": "NJ"}, "hospitalImages": ["https://source.unsplash.com/1024x768/?nature", "https://source.unsplash.com/1024x768/?water", "https://source.unsplash.com/1024x768/?girl", "https://source.unsplash.com/1024x768/?tree"], "reviews": [{"id": 5, "reviewTimeStamp": "2021-02-20", "review_by": 64, "review_content": "Review Criticism imply careful examination of something, formulation of a judgement", "review_for": 23, "review_stars": 4}], "services": [{"doctor": 23, "hospital": 2, "id": 3, "service": "Gynaecology"}, {"doctor": 23, "hospital": 3, "id": 7, "service": "Gastroentrology"}], "working_hours": "['Mon','10:00AM-12:00AM','01:00PM-05:00PM','06:00PM-10:00PM','10:00PM-07:00AM'],['Tue', '10:00AM-12:00AM', '-', '06:00PM-10:00PM', '-'],['Wed','10:00AM-12:00AM','01:00PM-05:00PM','06:00PM-10:00PM','10:00PM-07:00AM',],['Thu','10:00AM-12:00AM','01:00PM-05:00PM','06:00PM-10:00PM','10:00PM-07:00AM',],['Fri','10:00AM-12:00AM','01:00PM-05:00PM','06:00PM-10:00PM','10:00PM-07:00AM',],['Sat','10:00AM-12:00AM','01:00PM-05:00PM','06:00PM-10:00PM','10:00PM-07:00AM',],['Sun','10:00AM-12:00AM','01:00PM-05:00PM','06:00PM-10:00PM','10:00PM-07:00AM',]"});
        wrapper = shallow(<DoctorPublicProfile navigation={navigation}></DoctorPublicProfile>);
    });
    afterEach(function () {
        navigation.navigate.restore();
    });

    it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(View);
    });

    it('should have view ', () => {
        expect(wrapper.find(ScrollView)).to.have.length(1);
    });

    it('should have doctor profileimage ', () => {
        expect(wrapper.find(Image)).to.have.length(1);
        
    });

    it('should have doctor name text ', () => {
        expect(wrapper.contains(<Text style={styles.cardText}>Dr. (MBBS)</Text>)).to.equal(true);
    });

    it('should have doctor specialization text ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>Neurologist</Text>)).to.equal(true);
    });

    it('should have doctor experience text ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubItalicText}>5 Years of over all experience</Text>)).to.equal(true);
    });

    it('should have doctor rating text ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>4(150 Stories )</Text>)).to.equal(true);
    });

    it('should have doctor in-clinic fee text ', () => {
        expect(wrapper.contains(<Text>In-Clinic Appointment fee:</Text>)).to.equal(true);
    });

    it('should have doctor fee text ', () => {
        expect(wrapper.contains(<Text>$75.00</Text>)).to.equal(true);
    });

    it('should have calenderstrip ', () => {
        expect(wrapper.find(CalendarStrip)).to.have.length(1);
    });

    it('should have time selection text ', () => {
        wrapper.setState({ selectedDate: '10/10/2020' })
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Select available times on 10/10/2020</Text>)).to.equal(true);
    });

    it('should display error message ', () => {
        wrapper.setState({ error: true })
        expect(wrapper.contains(<Text style={styles.errorText}> Please Select Date And Time</Text>)).to.equal(true);
    });

    it('should not display error message ', () => {
        wrapper.setState({ error: null })
        expect(wrapper.contains(<Text style={styles.errorText}> Please Select Date And Time</Text>)).to.equal(false);
    });

    it('should have text of slots ', () => {
        slots.forEach(item => {
            expect(wrapper.contains(<Text>{item.time}</Text>)).to.equal(true);
        })
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
        expect(wrapper.contains(<Text style={styles.adressText}> BC3, BC4</Text>)).to.equal(true);
        expect(wrapper.contains(<Text style={styles.adressText}> Delaware, Newark ,NJ, 19104</Text>)).to.equal(true);
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
        expect(wrapper.contains(<Text style={styles.addressHeader}>4 120 Reviews </Text>)).to.equal(true);
    })

    it('should have hospital  customers text', () => {
        expect(wrapper.contains(<Text style={styles.addressHeader}>Customers: </Text>)).to.equal(true);
    })

    it('should have rating info text', () => {
        wrapper.setState({customerCount:1000})
        expect(wrapper.contains(<Text style={styles.addressHeader}>1000 Served Via Carian </Text>)).to.equal(true);
    })

    it('should have location section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Location</Text>)).to.equal(true);
    })

    it('should have horizontal line ', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })

    it('should have  hospital images section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Clinic Photos</Text>)).to.equal(true);
    })

    it('should have hospital images ', () => {
        expect(wrapper.find(SliderBox)).to.have.length(1);
    })

    it('should have  horizontal line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor specialization section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Specialization</Text>)).to.equal(true);
    })
    it('should have  doctor specilization section text', () => {
        expect(wrapper.find(SpecialityCard)).to.have.length(1)
        
    })
    it('should have  horizantol line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor services text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Services</Text>)).to.equal(true);
    })
    it('should have  services touchable', () => {
        expect(wrapper.find(TouchableOpacity)).to.have.length(19)

    })
    it('should have horizontal line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor working section text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Working Hours</Text>)).to.equal(true);
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
        expect(wrapper.find(ReviewCard)).to.have.length(0);  
    })

    it('should have working hours table and header row and rows', () => {
       expect(wrapper.find(Table)).to.have.length(1);  
       expect(wrapper.find(Row)).to.have.length(1); 
       expect(wrapper.find(Rows)).to.have.length(1);  
       expect(wrapper.contains(<Row data={headerSlots} style={styles.tableHeader} textStyle={styles.tableHeaderText} />)).to.equal(true);
       expect(wrapper.contains(<Rows data={workingHours} style={styles.tableRowstyle} textStyle={styles.tableRowText} />)).to.equal(true);
    })

    it('should display default date in the footer', () => {
        wrapper.setState({selectedDate:'10/10/2020'})
        expect(wrapper.contains(<Text style={styles.footerText}> Date : 10/10/2020</Text>)).to.equal(true);
     })

     it('should display not display time in the footer', () => {
        expect(wrapper.contains(<Text style={styles.footerText}> Time : </Text>)).to.equal(true);
     })

     it('should display time in the footer', () => {
        wrapper.setState({selectedTime:'10:00AM'})
        expect(wrapper.contains(<Text style={styles.footerText}> Time : 10:00AM</Text>)).to.equal(true);
     })

     it('should display  touchable button to continue in the footer', () => {
        expect(wrapper.contains(<Text style={styles.payButtonText}>Continue $75.00</Text>)).to.equal(true);
     })
})