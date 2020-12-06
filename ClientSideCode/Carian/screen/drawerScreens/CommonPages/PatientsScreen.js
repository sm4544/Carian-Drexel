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

export default class PatientsScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            patientsList: [
                { label: 'first name, Last name (Self)', value: 0 },
                { label: 'Test, Test (Mother)', value: 1 },
                { label: 'Test, Test (Father)', value: 2 },
                { label: 'Test, Test (Kid)', value: 3 },
                { label: 'Test, Test (Spouce)', value: 4 },
                { label: 'Test, Test (Grand Mother)', value: 5 }
            ],
            patientsList2: ''
        },
            this.onselecting = this.onselecting.bind(this),
            this.onPressingAddNew = this.onPressingAddNew.bind(this)

    }
    onselecting = (patientId, doctor, profileId, selectedDate, selectedTime) => {
        console.log(patientId, doctor, profileId, selectedDate, selectedTime);
        this.props.navigation.navigate("paymentScreen", { patientId: patientId, doctor: doctor, profileId: profileId, selectedDate: selectedDate, selectedTime: selectedTime });

    }

    onPressingAddNew = (profileId, doctor, hospital, selectedDate, selectedTime) => {
        this.props.navigation.navigate("PatientsInfoScreen", { hospital : hospital, doctor: doctor, profileId: profileId, selectedDate: selectedDate, selectedTime: selectedTime });
    }

    render() {
        const selectedDate = this.props.navigation.state.params.date;
        const selectedTime = this.props.navigation.state.params.time;
        const doctor = this.props.navigation.state.params.doctor;
        const profileId = this.props.navigation.state.params.profileId;
        const hospital = this.props.navigation.state.params.hospital;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.doctorCardView}>
                        <View style={styles.setFlexRow}>
                            <View style={styles.positionImage}>
                                <Image source={doctor.image} style={styles.profileImage} />
                            </View>
                            <View style={styles.imageRightPosition}>
                                <Text style={styles.cardText}>Dr. {doctor.name}({doctor.highestDegree})</Text>
                                <Text style={styles.cardSubBoldText}>{doctor.specialization}</Text>
                                <Text style={styles.cardSubItalicText}>{doctor.overAllExperience} Years of over all experience</Text>
                                <Text style={styles.cardSubBoldText}>{doctor.avgRating}({doctor.totalNoOfReviews} Stories )</Text>
                            </View>
                        </View>
                        <Text style={styles.sectionTitle}>Select a Patient or add New</Text>
                        <View style={{ alignSelf: 'center' }}>
                            {this.state.patientsList ?
                                <RadioForm
                                    radio_props={this.state.patientsList}
                                    initial={-1}
                                    labelStyle={{ fontSize: 20, color: 'black' }}
                                    onPress={(value) => this.onselecting(value, doctor, profileId, selectedTime, selectedTime)}
                                /> : <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 300 }}>No patients to Display</Text>}
                        </View>
                        <View style={{ alignSelf: 'center', backgroundColor: 'white', width: '100%', margin: 10, justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.addNewButton} onPress={() => this.onPressingAddNew(profileId, doctor, hospital, selectedDate, selectedTime)} >
                                <Text style={styles.payButtonText}>Add New Patient</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.sectionTitle}>Appointment Details</Text>
                        <View style={styles.feesdisplay}>
                            <View>
                                <Text style={{ margin: 5 }}>In-Clinic Appointment fee:</Text>
                                <Text style={{ margin: 5 }}>Appointment Date:</Text>
                                <Text style={{ margin: 5 }}>Appointment Time:</Text>
                                <Text style={{ margin: 5 }}>Address: </Text>
                            </View>
                            <View>
                                <Text style={{ margin: 5 }}>${doctor.fee}</Text>
                                <Text style={{ margin: 5 }}>{selectedDate}</Text>
                                <Text style={{ margin: 5 }}>{selectedTime}</Text>
                                <Text style={{ margin: 5 }}>{hospital.streatAddline1}, {hospital.streatAddline2} </Text>
                                <Text style={{ margin: 5 }}>{hospital.area}, {hospital.city} </Text>
                                <Text style={{ margin: 5 }}>{hospital.state}, {hospital.pincode} </Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>

            </View>
        )
    };
}