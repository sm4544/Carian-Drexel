import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../../styles/homeScreenStyles';
import HospitalCard from '../../../screen/drawerScreens/Cards/HospitalCard';
import image from '../../../image/drawer.png';
import CardView from 'react-native-cardview';

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

const hospital = {
    image: image,
    name: 'hello',
    type: 'Multi',
    area: 'test',
    city: 'test',
    avgRating: '4.5',
    totalNoOfReviews: '150',
    doctors: '5'
}

describe('<StaffInfoScreen/>', () => {
    beforeEach(function () {
        wrapper = shallow(<HospitalCard hospital={hospital}></HospitalCard>);
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
        expect(wrapper.find(ImageBackground)).to.have.length(1);
        expect(wrapper.contains(<ImageBackground source={image} style={styles.hospitalImage} />)).to.equal(true);
    });

    it('should have 4 text boxes ', () => {
        expect(wrapper.find(Text)).to.have.length(4);
    });

    it('should have hospital name text box ', () => {
        expect(wrapper.contains(<Text style={styles.cardText}>hello</Text>)).to.equal(true);
    });

    it('should have hospital type text box ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>Multi</Text>)).to.equal(true);
    });

    it('should have hospital aea and city text box ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubItalicText}>test, test</Text>)).to.equal(true);
    });

    it('should have hospital rating text boxe ', () => {
        expect(wrapper.contains(<Text style={styles.cardSubBoldText}>4.5(150 Stories) .5 Doctors</Text>)).to.equal(true);
    });

});