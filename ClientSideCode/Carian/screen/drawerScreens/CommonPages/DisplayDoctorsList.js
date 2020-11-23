import ValidationComponent from 'react-native-form-validator';
import React, { Component, useState } from 'react';
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
import styles from '../../../styles/homeScreenStyles';
import CardView from 'react-native-cardview';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SpecialityCard from '../Cards/SpecialityCard';
import HospitalCard from '../Cards/HospitalCard';
import DoctorProfileCard from '../Cards/DoctorProfileCard';
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

export default class DisplayDoctorsList extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityArray: [{ label: 'Hyd', value: 'hyd' }, { label: 'vij', value: 'vij' }],
            hospitalCount: '100',
            customerCount: '1000',
            doctorsCount: '150',
            reviewCount: '1500',
            specialists: [{ image: '', specialist: 'Dental', description: 'make an appointment for toothache' }, { image: '', specialist: 'Dental', description: 'make an appointment for toothache' }],
            topDoctors: [{ name: 'Test, Test', qualification: 'MBBS', Specilazation: 'Dental', hospitalName: 'Apollo Hospital', area: 'nagar', city: 'Hyderabad' }],
            specialistCarddata: [{ image: image, name: 'Family physicians' },
            { image: image, name: 'Pediatricians' },
            { image: image, name: 'Geriatric doctors' },
            { image: image, name: 'Allergists' },
            { image: image, name: 'Dermatologists' },
            { image: image, name: 'Ophthalmologists' },
            { image: image, name: 'Infectious disease doctors' },
            { image: image, name: 'Obstetrician/gynecologists' },
            { image: image, name: 'Cardiologists' },
            { image: image, name: 'Endocrinologists' },
            { image: image, name: 'Gastroenterologists' },
            { image: image, name: 'Nephrologists' },
            { image: image, name: 'Urologists' },
            { image: image, name: 'Pulmonologists' },
            { image: image, name: 'Otolaryngologists' },
            { image: image, name: 'Neurologists' },
            { image: image, name: 'Psychiatrists' },
            { image: image, name: 'Oncologists' },
            { image: image, name: 'Radiologists' },
            { image: image, name: 'General surgeons' },
            { image: image, name: 'Orthopedic surgeons' },
            { image: image, name: 'Cardiac surgeons' },
            { image: image, name: 'Anesthesiologists' },
            { image: image, name: 'Rheumatologists' }],
            hospitalsList: [{ image: image, name: 'Manipal hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' },
            { image: image, name: 'Manipal1 hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' },
            { image: image, name: 'Manipal2 hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' },
            { image: image, name: 'Manipal3 hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' }],
            doctorsList: [{ image: image, name: 'Srinivasa Rao', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Nallapati', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Test Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },]
        }
        this.onPressingDoctorCard = this.onPressingDoctorCard.bind(this);
    }
    onPressingDoctorCard = (name) =>{
        this.props.navigation.navigate('DoctorPublicProfile', {name : name});
    }
    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.state.doctorsList.map(doctor => (
                        <TouchableOpacity onPress={() => this.onPressingDoctorCard(doctor.name)}  key={doctor.name} style={{ width: '100%', flex: 1,  alignItems: "center", justifyContent: 'center' }}>
                            <DoctorProfileCard key={doctor.name} doctor={doctor} ></DoctorProfileCard>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        )
    };
}