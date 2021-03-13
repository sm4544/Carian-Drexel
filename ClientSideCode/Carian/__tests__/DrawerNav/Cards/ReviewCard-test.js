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


const review =  {
    "review_content": "Review Criticism imply careful examination of something, formulation of a judgement",
    "review_Timestamp": "2021-02-20",
    "review_Stars": 4,
    "review_By": "soundarya",
    "review_for_doctor": "test",
    "review_for_hospital": 3,
    "id": 5
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
        expect(wrapper.contains(<Text style={{ fontSize: 20, color: '#307ecc' }}>s</Text>)).to.equal(true);
    });

    it('should have diaply name hello', () => {
        expect(wrapper.contains(<Text style={styles.profileHeaderText}>soundarya</Text>)).to.equal(true);
    });

    it('should have diaply date', () => {
        expect(wrapper.contains(<Text style={styles.profileHeaderText}>2021-02-20</Text>)).to.equal(true);
    });

    it('should have diaply rating', () => {
        expect(wrapper.contains(<Text style={styles.profileHeaderText}>5</Text>)).to.equal(false);
    });

    it('should have diaply comment', () => {
        expect(wrapper.contains(<Text numberOfLines={5}>Review Criticism imply careful examination of something, formulation of a judgement</Text>)).to.equal(true);
    });

    it('should have 5 text boxes ', () => {
        expect(wrapper.find(Text)).to.have.length(5);
        
    });
});