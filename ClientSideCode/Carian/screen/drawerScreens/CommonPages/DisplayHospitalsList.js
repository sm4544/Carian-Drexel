import ValidationComponent from 'react-native-form-validator';
import React, { Component, useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../../../styles/homeScreenStyles';
import HospitalCard from '../Cards/HospitalCard';


export default class DisplayHospitalsList extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceHospital: [],
    }
    this.onPressingHospital = this.onPressingHospital.bind(this);
  }
  onPressingHospital = (id) => {
    this.props.navigation.navigate('HospitalPublicProfile', { id: id });
  };
  componentDidMount() {
    this.setState({ dataSourceHospital: this.props.navigation.state.params.hospitalsList })
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
                style={{ width: '80%', borderRadius: 18 }}></HospitalCard>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}
