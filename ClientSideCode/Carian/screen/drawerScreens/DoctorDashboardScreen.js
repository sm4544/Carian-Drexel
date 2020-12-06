import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Fontisto';
import ValidationComponent from 'react-native-form-validator';
import styles from '../../styles/commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class DoctorDashboard extends ValidationComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    global.currentScreenIndex = 'DoctorDashboardScreen';

    return (
      <View style={styles.container}>
        <Text style={styles.AppTitle}> Doctor's Profile</Text>
        <Text style={styles.text}>View Profile</Text>
        <Icon
          name="doctor"
          color="teal"
          size={100}
          onPress={this.ViewProfile}></Icon>
        <Text style={styles.text}>Calendar</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DoctorCalendar')}>
          <Icon name="calendar" color="teal" size={100}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}
