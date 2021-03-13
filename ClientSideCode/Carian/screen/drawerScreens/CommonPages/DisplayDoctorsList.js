import ValidationComponent from 'react-native-form-validator';
import React, { Component, useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../../../styles/homeScreenStyles';
import DoctorProfileCard from '../Cards/DoctorProfileCard';

export default class DisplayDoctorsList extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceDoctors: [],
    };
    this.onPressingDoctorCard = this.onPressingDoctorCard.bind(this);
  }
  onPressingDoctorCard = (id) => {
    this.props.navigation.navigate('DoctorPublicProfile', { id: id });
  };

  componentDidMount() {
    this.setState({ dataSourceDoctors: this.props.navigation.state.params.doctorsList })
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
