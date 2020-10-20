import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ValidationComponent from 'react-native-form-validator';

export default class DoctorCalendar extends ValidationComponent {
  
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    global.currentScreenIndex = 'DoctorCalenderScreen';
    return (
      <CalendarList>
        current={'2020-03-01'}
        minDate={'2020-05-10'}
        maxDate={'2022-05-30'}
        onDayPress=
        {(day) => {
          console.log('selected day', day);
        }}
        onDayLongPress=
        {(day) => {
          console.log('selected day', day);
        }}
      </CalendarList>
    );
  }
}
