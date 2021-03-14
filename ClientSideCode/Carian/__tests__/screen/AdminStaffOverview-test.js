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

import styles from '../../styles/DoctorProfileStyles';
import StaffOverview from '../../screen/drawerScreens/StaffOverview';

import SpecialityCard from '../../screen/drawerScreens/Cards/SpecialityCard';


import ReviewCard from '../../screen/drawerScreens/Cards/ReviewCard';

import { SliderBox } from "react-native-image-slider-box";

import { deleteAdminStaffApi} from '../../screen/services/adminStaffService'


const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };
const name =  {name: name};
const specialization =  {specialization: specialization};
const highestDegree =  {highestDegree: highestDegree};
const overAllExperience =  {overAllExperience: overAllExperience};
const phonenumber =  {phonenumber: phonenumber};
const id =  {id: id};
const doctor = { image: image, };

const hospital_id =   {hospital_id: hospital_id};


let headerSlots = ["Days", "24Hours", "Opens At", "Closed at",]

let workingHours = [

    ["Mon", "Yes", "-", "-"],

    ["Tue", "No", "01:00PM", "06:00PM"],

    ["Wed", "No", "01:00PM", "06:00PM"],

    ["Thu", "No", "01:00PM", "06:00PM"],

    ["Fri", "Yes", "-", "-"],

    ["Sat", "Yes", "-", "-"],

    ["Sun", "No", "01:00PM", "06:00PM"]]


let hospitalReviews = [{ id: 0, name: 'Srinivas', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 1, name: 'Nallapati', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 2, name: 'Test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
{ id: 3, name: 'Hello', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
]

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

            name : name,
            highestDegree: highestDegree,
            specialization :  specialization,
            overAllExperience :  overAllExperience,
            phonenumber :  phonenumber,
            doctor: doctor,
            id:id

        }

    }

};

global.expect = expect;

global.sinon = sinon;

global.shallow = shallow;
jest.mock("../../screen/services/adminStaffService");
describe('<StaffOverview/>', () => {

    beforeEach(function () {

        spyon = sinon.spy(navigation, 'navigate');
        wrapper = shallow(<StaffOverview navigation={navigation}></StaffOverview>);
    });

    afterEach(function () {
        navigation.navigate.restore();
    });


    it('should have view ', () => {

        expect(wrapper.find(ScrollView)).to.have.length(1);

    });



    it('should have view ', () => {



        expect(wrapper.contains(<Image source={doctor.image} style={styles.profileImage} />)).to.equal(true);

    });

    it('should have hospital  name text', () => {

        expect(wrapper.contains(<Text style={   { fontSize: 18,
            fontWeight: 'bold'}}>Dr. {name} {highestDegree}</Text>)).to.equal(true);

    })




    it('should have hospital full adress  text', () => {

        
        expect(wrapper.contains(<Text style={styles.adressText}> {specialization}, {overAllExperience}</Text>)).to.equal(true);

        expect(wrapper.contains(<Text style={styles.adressText}> Phone:{phonenumber}</Text>)).to.equal(true);

    })


    it('should have hospital  reviews text', () => {

        expect(wrapper.contains( <Text style={styles.sectionTitle}>Patient Reviews</Text>)).to.equal(true);

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




    // it('should have  review cards', () => {

    //     hospitalReviews.forEach(review => {

    //         expect(wrapper.contains(<ReviewCard key={review.id} review={review}></ReviewCard>)).to.equal(true);

    //     });

    // })

    it('should contain 2 buttons', () => {
        expect(wrapper.find(TouchableOpacity)).to.have.length(2);
      })

    
      it('should navigate to StaffDetailsScreen screen component after clicking on edit', () => {
        const edit = wrapper.find(TouchableOpacity).at(0);
        console.log(edit)
        edit.simulate('press');    
        sinon.assert.calledWith(spyon, "StaffDetailsScreen");
        sinon.assert.calledOnce(spyon);
        
      })

 

    it('should navigate to StaffDetailsScreen screen component after clicking on delete ', async () => {
        
 

        wrapper.contains(<Text style={   { fontSize: 18,
            fontWeight: 'bold'}}>Dr. {name} {highestDegree}</Text>);
       
    
        const output = { "id": "1" };
    
        deleteAdminStaffApi.mockResolvedValue(output);
        await wrapper.instance().onPressDelete();
        
        sinon.assert.calledWith(spyon, "ManageStaffScreen");
        sinon.assert.calledOnce(spyon);
      })

})