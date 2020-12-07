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
import LabOverview from '../../screen/drawerScreens/LabOverview';

import SpecialityCard from '../../screen/drawerScreens/Cards/SpecialityCard';


import ReviewCard from '../../screen/drawerScreens/Cards/ReviewCard';

import { SliderBox } from "react-native-image-slider-box";



const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };
const name =  {name: name};
const area =  {area: area};
const city =  {city: city};
const addressine1 =  {addressine1: addressine1};
const addressine2 =  {addressine2: addressine2};
const state = {state: state};
const pincode =  {pincode: pincode};
const licence_number =  {licence_number: licence_number};
const originally_registered_date =  {originally_registered_date: originally_registered_date};
const phonenumber =  {phonenumber: phonenumber};
const id =  {id: id};


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
            area :  area,
            city :  city,
            addressine1 :  addressine1,
            addressine2 :  addressine2,
            state : state,
            pincode :  pincode,

        }

    }

};

global.expect = expect;

global.sinon = sinon;

global.shallow = shallow;

describe('<LabOverview/>', () => {

    beforeEach(function () {

        spyon = sinon.spy(navigation, 'navigate');
        wrapper = shallow(<LabOverview navigation={navigation}></LabOverview>);
    });

    afterEach(function () {
        navigation.navigate.restore();
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

    it('should have hospital  name text', () => {

        expect(wrapper.contains(<Text style={   { fontSize: 18,
            fontWeight: 'bold'}}>{name}</Text>)).to.equal(true);

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

    it('should have hospital  adress text', () => {

        expect(wrapper.contains(<Text style={styles.addressHeader}>Address: </Text>)).to.equal(true);

    })

    it('should have hospital full adress  text', () => {

        
        expect(wrapper.contains(<Text style={styles.adressText}> {addressine1}, {addressine2}</Text>)).to.equal(true);

        expect(wrapper.contains(<Text style={styles.adressText}> {area}, {city} ,{state}, {pincode}</Text>)).to.equal(true);

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



    it('should have  review cards', () => {

        hospitalReviews.forEach(review => {

            expect(wrapper.contains(<ReviewCard key={review.id} review={review}></ReviewCard>)).to.equal(true);

        });

    })

    it('should contain 5 buttons', () => {
        expect(wrapper.find(TouchableOpacity)).to.have.length(5);
      })

    
      it('should navigate to LabDetailsScreen screen component after clicking on edit', () => {
        const edit = wrapper.find(TouchableOpacity).at(3);
        console.log(edit)
        edit.simulate('press');    
        sinon.assert.calledWith(spyon, "LabDetailsScreen");
        sinon.assert.calledOnce(spyon);
        
      })

      it('should navigate to LabDetailsScreen screen component after clicking on delete', () => {
        const del = wrapper.find(TouchableOpacity).at(4);
        console.log(del)
        del.simulate('press');    
        sinon.assert.calledWith(spyon, "LabDetailsScreen");
        sinon.assert.calledOnce(spyon);
        
      })

})