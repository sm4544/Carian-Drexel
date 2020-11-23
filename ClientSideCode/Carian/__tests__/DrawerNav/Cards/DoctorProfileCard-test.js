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
    ImageBackground
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../../styles/homeScreenStyles';
import DoctorProfileCard from '../../../screen/drawerScreens/Cards/DoctorProfileCard';
import image from '../../../image/drawer.png';
import CardView from 'react-native-cardview';


global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;


const doctor = {
    image: image,
    name: 'hello',
    specialization: 'Multi',
    highestDegree: 'MBBS',
    area: 'test',
    city: 'test',
    avgRating: '4.5',
    totalNoOfReviews: '150',
    overAllExperience: '5',
    fee:'100'
}

describe('<StaffInfoScreen/>', () => {
    beforeEach(function () {
        wrapper = shallow(<DoctorProfileCard doctor={doctor}></DoctorProfileCard>);
    });

    it('should have view', () => {
        expect(wrapper.type()).to.equal(View);
    });

    it('should have Card view', () => {
        expect(wrapper.find(CardView)).to.have.length(1);
    });

    it('should have 4 views', () => {
        expect(wrapper.find(View)).to.have.length(4);
    });

    it('should have background image', () => {
        expect(wrapper.find(Image)).to.have.length(1);
        expect(wrapper.contains(<Image source={image} style={styles.profileImage} />)).to.equal(true);
    });

    it('should have 5 text boxes ', () => {
        expect(wrapper.find(Text)).to.have.length(5);
    });

    it('should have doctor name text box ', () => {
        expect(wrapper.contains(<Text style={styles.cardText}>Dr. hello(MBBS)</Text>)).to.equal(true);
    });

    it('should have doctor specilalization type text box ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>Multi. 5 Years exp</Text>)).to.equal(true);
    });

    it('should have doctor fee text box ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubItalicText}>$ 100 Fees</Text>)).to.equal(true);
    });

    it('should have doctor area text boxe ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubItalicText}>test, test</Text>)).to.equal(true);
    });

    it('should have doctor rating text boxe ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>4.5(150 Stories )</Text>)).to.equal(true);
    });




});