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
import SpecialityCard from '../../../screen/drawerScreens/Cards/SpecialityCard';
import image from '../../../image/drawer.png';
import CardView from 'react-native-cardview';

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
const data = {
    image: image,
    name: 'hello'
}

describe('<StaffInfoScreen/>', () => {
    beforeEach(function () {
        wrapper = shallow(<SpecialityCard data={data}></SpecialityCard>);
    });

    it('should have view', () => {
        expect(wrapper.type()).to.equal(View);
    });

    it('should have Card view', () => {
        expect(wrapper.find(CardView)).to.have.length(1);
    });

    it('should have background image', () => {
        expect(wrapper.find(ImageBackground)).to.have.length(1);
        expect(wrapper.contains(<ImageBackground source={image} style={styles.image}>
            <Text style={styles.cardText}>hello</Text>
        </ImageBackground>)).to.equal(true);
    });

    it('should have text inside image', () => {

        expect(wrapper.find(Text)).to.have.length(1);
        expect(wrapper.contains(<Text style={styles.cardText}>hello</Text>)).to.equal(true);
    });
});