import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from '../../../styles/DoctorProfileStyles';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ValidationComponent from 'react-native-form-validator';

const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

export default class paymentScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        }
           

    }
    

    render() {
        const selectedDate = this.props.navigation.state.params.selectedDate;
        const selectedTime = this.props.navigation.state.params.selectedTime;
        const doctor = this.props.navigation.state.params.doctor;
        const profileId = this.props.navigation.state.params.profileId;
        const patientId = this.props.navigation.state.params.patientId;

        return (
            <View style={styles.container}>
                <Text>Payment page</Text>
            </View>
        )
    };
}