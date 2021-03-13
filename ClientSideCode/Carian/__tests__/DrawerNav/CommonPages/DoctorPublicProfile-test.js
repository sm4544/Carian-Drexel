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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import {getAvailableSlots, getDoctorDetails} from '../../../screen/services/hospitalService';

const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };



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
      slots: [],
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
        getAvailableSlots.mockResolvedValue({
            "doctor_id": 24,
            "2021-03-10": [
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30"
            ],
            "2021-03-11": [
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30"
            ],
            "2021-03-12": [
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30"
            ],
            "2021-03-13": [
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30"
            ],
            "2021-03-14": [
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30"
            ],
            "2021-03-15": [
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30"
            ],
            "2021-03-16": [
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30"
            ]
        });
        getDoctorDetails.mockResolvedValue( {
            "hospital": {
                "id": 3,
                "name": "AEC",
                "addressine1": "BC3",
                "addressine2": "BC4",
                "area": "Delaware",
                "city": "Newark",
                "state": "NJ",
                "pincode": "19104",
                "hospital_phone_number": "1239278901",
                "licence_number": "1890",
                "originally_registered_date": "2021-02-05",
                "regisrted_by": 13,
                "registered_date": "2021-02-05"
            },
            "hospitalImages": [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree"
            ],
            "reviews": [
                {
                    "review_content": "Review Criticism imply careful examination of something, formulation of a judgement",
                    "review_Timestamp": "2021-02-20",
                    "review_Stars": 4,
                    "review_By": "soundarya",
                    "review_for_doctor": "test",
                    "review_for_hospital": 3,
                    "id": 5
                }
            ],
            "working_hours": [
                {
                    "Monday": "10:00-18:00",
                    "Tuesday": "10:00-18:00",
                    "Wednesday": "10:00-18:00",
                    "Thursday": "10:00-18:00",
                    "Friday": "10:00-18:00",
                    "Saturday": "10:00-18:00",
                    "Sunday": "10:00-18:00"
                }
            ],
            "doctor": {
                "highest_qualification": "MBBS",
                "studied_at": "AEC",
                "work_phone_number": "9918897651",
                "work_email_address": "langer@gmail.com",
                "overall_work_experience": 5,
                "status": "ACtive",
                "licence_number": "188181",
                "doctor_fee": "75.00",
                "department_id": 3,
                "hospital_id": 3,
                "lab_id": 3,
                "pharmacy_id": 3,
                "profile_id": 23,
                "departments": [
                    "Neurologist"
                ],
                "name": "test test"
            },
            "services": [
                {
                    "id": 3,
                    "service": "Gynaecology",
                    "hospital": 2,
                    "doctor": 23
                },
                {
                    "id": 7,
                    "service": "Gastroentrology",
                    "hospital": 3,
                    "doctor": 23
                }
            ]
        });
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
        expect(wrapper.contains(<Text style={styles.cardText}>Dr. test test(MBBS)</Text>)).to.equal(true);
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
        expect(wrapper.find(Calendar)).to.have.length(1);
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
        
            expect(wrapper.contains(<Text>10:00</Text>)).to.equal(true);
        
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
        expect(wrapper.find(SpecialityCard)).to.have.length(2)
        
    })
    it('should have  horizantol line view', () => {
        expect(wrapper.contains(<View style={styles.horizontalLine} />)).to.equal(true);
    })
    it('should have  doctor services text', () => {
        expect(wrapper.contains(<Text style={styles.sectionTitle}>Services</Text>)).to.equal(true);
    })
    it('should have  services touchable', () => {
        expect(wrapper.find(TouchableOpacity)).to.have.length(22)

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
        expect(wrapper.find(ReviewCard)).to.have.length(1);  
    })

    it('should have working hours table and header row and rows', () => {
       expect(wrapper.find(Table)).to.have.length(1);  
       expect(wrapper.find(Row)).to.have.length(1); 
       expect(wrapper.find(Rows)).to.have.length(1);  
       
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