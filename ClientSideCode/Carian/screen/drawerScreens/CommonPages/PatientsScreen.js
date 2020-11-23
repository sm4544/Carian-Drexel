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

export default class PatientsScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
            
    }
    onPressingDoctorCard = (name) =>{
        this.props.navigation.navigate('DoctorPublicProfile', {name : name});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>No patients to Display</Text>

            </View>
        )
    };
}