import ValidationComponent from 'react-native-form-validator';
import React, {Component, useState} from 'react';
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
  ImageBackground,
} from 'react-native';
import styles from '../../../styles/homeScreenStyles';
import CardView from 'react-native-cardview';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SpecialityCard from '../Cards/SpecialityCard';
import HospitalCard from '../Cards/HospitalCard';
import DoctorProfileCard from '../Cards/DoctorProfileCard';
const image = {
  uri:
    'https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg',
};



export default class DisplayDoctorsList extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {    
      dataSourceDoctors: [],
    };
    this.onPressingDoctorCard = this.onPressingDoctorCard.bind(this);
  }
  onPressingDoctorCard = (id) => {
    this.props.navigation.navigate('DoctorPublicProfile', {id: id});
  };

  componentDidMount() {
    this.setState({dataSourceDoctors: this.props.navigation.state.params.doctorsList})
  }

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.dataSourceDoctors.map((doctor) => (
            <TouchableOpacity
              onPress={() => this.onPressingDoctorCard(doctor.id)}
              key={doctor.id}
              style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <DoctorProfileCard
                key={doctor.id}
                doctor={doctor}></DoctorProfileCard>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}
