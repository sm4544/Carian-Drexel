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
import { getdependents } from '../../services/profileService'

const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

export default class PatientsScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            patientId: '',
            patientsList: [],
            selectedDate: '',
            selectedTime: '',
            doctor: {},
            profileId: '',
            hospital: {},

        },
            this.onselecting = this.onselecting.bind(this),
            this.onPressingAddNew = this.onPressingAddNew.bind(this)


    }
    onselecting = (patientId) => {
        console.log(patientId);
        
        this.setState({ patientId: patientId })
        this.props.navigation.navigate("paymentScreen", {
            patientId: this.state.patientId, doctor: this.state.doctor, hospital: this.state.hospital,
            profileId: this.state.profileId, selectedDate: this.state.selectedDate, selectedTime: this.state.selectedTime
        });

    }

    onPressingAddNew = () => {
        this.props.navigation.navigate("PatientsRegisterScreen", {
            hospital: this.state.hospital, doctor: this.state.doctor, profileId: this.state.profileId,
            selectedDate: this.state.selectedDate, selectedTime: this.state.selectedTime
        });
    }
    getdependents = (profileId) => {
        getdependents(profileId)
            .then((res) => {
                var list1 = [];
               
                for (i = 0; i < res.length; i++) {
                    list1.push({
                        label: res[i].first_name + ' ' + res[i].last_name + ' (' + res[i].relation + ')',
                        value: res[i].id
                    });

                }
                this.setState({ patientsList: list1 });
            })
            .catch((error) => {
                console.log(error);
            });

    }
    componentDidMount() {
        
        this.getdependents(this.props.navigation.state.params.profileId);
        this.setState({
            selectedDate: this.props.navigation.state.params.date,
            selectedTime: this.props.navigation.state.params.time,
            doctor: this.props.navigation.state.params.doctor,
            profileId: this.props.navigation.state.params.profileId,
            hospital: this.props.navigation.state.params.hospital
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.doctorCardView}>
                        <View style={styles.setFlexRow}>
                            <View style={styles.positionImage}>
                                <Image source={this.state.doctor.image} style={styles.profileImage} />
                            </View>
                            <View style={styles.imageRightPosition}>
                                <Text style={styles.cardText}>Dr. {this.state.doctor.name}({this.state.doctor.highestDegree})</Text>
                                <Text style={styles.cardSubBoldText}>{this.state.doctor.specialization}</Text>
                                <Text style={styles.cardSubItalicText}>{this.state.doctor.overAllExperience} Years of over all experience</Text>
                                <Text style={styles.cardSubBoldText}>{this.state.doctor.avgRating}({this.state.doctor.totalNoOfReviews} Stories )</Text>
                            </View>
                        </View>
                        <Text style={styles.sectionTitle}>Select a Patient or add New</Text>

                        {this.state.patientsList.map((patient) => (

                            <TouchableOpacity style={styles.addNewButton} key={patient.value} onPress={() => this.onselecting(patient.value)} >
                                <Text style={styles.payButtonText}>{patient.label}</Text>
                            </TouchableOpacity>


                        ))}
                        {this.state.patientsList.length == 0 ?<Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 300 }}>No patients to Display</Text>: null}
                        

                        <View style={{ alignSelf: 'center', backgroundColor: 'white', width: '70%', margin: 10, justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.addNewButton2} onPress={() => this.onPressingAddNew()} >
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
                                <Text style={{ margin: 5 }}>${this.state.doctor.doctor_fee}</Text>
                                <Text style={{ margin: 5 }}>{this.state.selectedDate}</Text>
                                <Text style={{ margin: 5 }}>{this.state.selectedTime}</Text>
                                <Text style={{ margin: 5 }}>{this.state.hospital.streatAddline1}, {this.state.hospital.streatAddline2} </Text>
                                <Text style={{ margin: 5 }}>{this.state.hospital.area}, {this.state.hospital.city} </Text>
                                <Text style={{ margin: 5 }}>{this.state.hospital.state}, {this.state.hospital.pincode} </Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>


            </View>
        )
    };
}