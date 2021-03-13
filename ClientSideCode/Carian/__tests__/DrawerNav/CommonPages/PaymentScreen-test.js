import React from 'react';
import {
    View,
    Text,

} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../../styles/DoctorProfileStyles';
import PaymentScreen from '../../../screen/drawerScreens/CommonPages/PaymentScreen';
import DropDownPicker from 'react-native-dropdown-picker';
const navigation = {
    navigate: jest.fn(),
    state: {
        params: {
            selectedDate: '10/10/2020',
            selectedTime: '10:30AM',
            profileId: '10',
            patientId: '10',
            doctor: { "area": "Delaware", "city": "Newark", "college_name": "AEC", "doctor_fee": "75.00", "email": "langer@gmail.com", "highestDegree": "MBBS", "hospital_id": "3", "hospital_name": "AEC", "id": "42", "licence_number": "188181", "name": "test test", "overallExperience": "5", "phoneNumber": "9918897651", "profile_id": "23", "specialization": "Neurologist" },

        }
    }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock('../../../screen/services/profileService');

describe('<PaymentScreen/>', () => {
    beforeEach(function () {
        spyon = sinon.spy(navigation, 'navigate');
        wrapper = shallow(<PaymentScreen navigation={navigation}></PaymentScreen>);
    });
    afterEach(function () {
        navigation.navigate.restore();
    });

    it('should have Scrollview', () => {
        expect(wrapper.type()).to.equal(View);
    });

    it('should have doctor fee', () => {
        expect(wrapper.contains(<Text style={styles.payment}>$75.00 </Text>)).to.equal(true);
    });

    it('should have select payment type', () => {
        expect(wrapper.contains(<Text style={styles.label}>Select payment Type*</Text>)).to.equal(true);
    });

    it('should have drop down', () => {
        expect(wrapper.find(DropDownPicker)).to.have.length(1);
    });

    it('should have pay at hospital section when paymen type is cash', () => {
        wrapper.setState({ paymentType: 'Cash' })
        expect(wrapper.contains(<Text>Pay $75.00 at the Hospital</Text>)).to.equal(true);
    });
    it('should have confirm button', () => {
        wrapper.setState({ paymentType: 'Cash' })
        expect(wrapper.contains(<Text style={styles.payButtonText}>Confirm Appointment</Text>)).to.equal(true);
    });
});