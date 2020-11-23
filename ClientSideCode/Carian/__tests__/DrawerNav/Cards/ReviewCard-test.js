import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../../styles/homeScreenStyles';
import ReviewCard from '../../../screen/drawerScreens/Cards/ReviewCard';


global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;


const review = {
    id: 0,
    date: '10/10/2020',
    name: 'hello',
    rating: '5',
    comment: 'hello',
}

describe('<ReviewCard/>', () => {
    beforeEach(function () {
        wrapper = shallow(<ReviewCard review={review}></ReviewCard>);
    });

    it('should have view', () => {
        expect(wrapper.type()).to.equal(View);
    });

    it('should have 8 views', () => {
        expect(wrapper.find(View)).to.have.length(8);
    });

    it('should have a letter h', () => {
        expect(wrapper.contains(<Text style={{ fontSize: 20, color: '#307ecc' }}>h</Text>)).to.equal(true);
    });

    it('should have diaply name hello', () => {
        expect(wrapper.contains(<Text style={styles.profileHeaderText}>hello</Text>)).to.equal(true);
    });

    it('should have diaply date', () => {
        expect(wrapper.contains(<Text style={styles.profileHeaderText}>10/10/2020</Text>)).to.equal(true);
    });

    it('should have diaply rating', () => {
        expect(wrapper.contains(<Text style={styles.profileHeaderText}>5</Text>)).to.equal(true);
    });

    it('should have diaply comment', () => {
        expect(wrapper.contains(<Text numberOfLines={5}>hello</Text>)).to.equal(true);
    });

    it('should have 5 text boxes ', () => {
        expect(wrapper.find(Text)).to.have.length(5);
        
    });
});