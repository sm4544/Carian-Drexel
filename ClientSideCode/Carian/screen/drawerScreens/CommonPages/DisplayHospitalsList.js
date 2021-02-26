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
import HomeScreen from './HomeScreen';
const image = {
  uri:
    'https://revcycleintelligence.com/images/site/article_headers/_normal/hospital%2C_green.jpg',
};

export default class DisplayHospitalsList extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceHospital: [],
    }
    this.onPressingHospital = this.onPressingHospital.bind(this);
  }
  onPressingHospital = (id) => {
    this.props.navigation.navigate('HospitalPublicProfile', {id: id});
  };
  componentDidMount() {
    this.setState({dataSourceHospital: this.props.navigation.state.params.hospitalsList})
  }

  render() {
    
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.dataSourceHospital.map((hospital) => (
            <TouchableOpacity
              onPress={() => this.onPressingHospital(hospital.id)}
              key={hospital.id}
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: '#F0F0E1',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                style={{width: '80%', borderRadius: 18}}></HospitalCard>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}
