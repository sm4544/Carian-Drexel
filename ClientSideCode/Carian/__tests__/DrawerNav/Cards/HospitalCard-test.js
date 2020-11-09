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
import HospitalCard from '../../../screen/drawerScreens/Cards/HospitalCard';
import image from '../../../image/drawer.png';
import CardView from 'react-native-cardview';

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;


const hospital = {
    image: image,
    name: 'hello',
    type:'Multi',
    area:'nagar',
    city:'Philadelphia',
    avgRating:'4.5',
    totalNoOfReviews:'150',
    totalNoOfDoctors:'5'
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
    
    it('should have view that sets flex direction to row', () => {
        expect(wrapper.find(View)).to.have.length(4);        
    });

    it('should have background image', () => {
        expect(wrapper.find(ImageBackground)).to.have.length(1);
        //expect(wrapper.contains(<ImageBackground source={this.props.hospital.image} style={styles.hospitalImage}/>)).to.equal(true);
    });

    it('should have 4 text boxes ', () => {
        expect(wrapper.find(Text)).to.have.length(4);
        //expect(wrapper.contains(<ImageBackground source={this.props.hospital.image} style={styles.hospitalImage}/>)).to.equal(true);
    });

    it('should have hospital name text boxes ', () => {
        expect(wrapper.find(Text)).to.have.length(4);
        //expect(wrapper.contains( <Text style={styles.cardText}>{this.props.hospital.name}</Text>)).to.equal(true);
    });

    
});