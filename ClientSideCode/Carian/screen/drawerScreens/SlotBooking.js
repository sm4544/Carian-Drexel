import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import styles from '../../styles/commonStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {Calendar} from 'react-native-calendars';

export default class FrCreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Time
      appointmentTime: new Date(moment()),
      modeAppointmentTime: 'time',
      showAppointmentTime: false,
      textAppointmentTime: moment().format('h:mm a').toString(),

      //new timeSlots
      timeSlots: [],
    };
  }

  //[ timePicker start]
  setAppointmentTime = (
    event,
    appointmentTime,
    textAppointmentTime,
    timeSlots,
  ) => {
    appointmentTime = appointmentTime || this.state.appointmentTime;
    textAppointmentTime =
      textAppointmentTime ||
      moment(appointmentTime).format('h:mm a').toString();
    this.setState({
      showAppointmentTime: Platform.OS === 'ios' ? true : false,
      appointmentTime,
      textAppointmentTime,

      //newly added
      timeSlots: [{time: textAppointmentTime}],
    });
  };

  showTime = (modeAppointmentTime, textAppointmentTime, timeSlots) => {
    textAppointmentTime = moment(this.state.appointmentTime)
      .format('h:mm a')
      .toString();
    this.setState({
      showAppointmentTime: true,
      modeAppointmentTime,
      textAppointmentTime,

      //newly added
      timeSlots: [{time: textAppointmentTime}],
    });
  };

  timePicker = () => {
    this.showTime('time');
  };
  //[ timePicker end ]

  getAppointmentTimePage() {
    //const { timeSlots, selectedValue } = this.state;
    const {
      appointmentTime,
      showAppointmentTime,
      modeAppointmentTime,
      textAppointmentTime,
    } = this.state;
    var data = [
      {
        label: 'Dr.John',
        value: 'Dr.John',
        icon: () => <Icon name="flag" size={18} color="#900" />,
      },
      {
        label: 'Dr.Philip',
        value: 'Dr.Philip',
        icon: () => <Icon name="flag" size={18} color="#900" />,
      },
      {
        label: 'Dr.Hanna',
        value: 'Dr.Hanna',
        icon: () => <Icon name="flag" size={18} color="#900" />,
      },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.calendartext}>Select the Doctor</Text>

        <DropDownPicker
          items={data}
          defaultValue={this.state.profile_type}
          containerStyle={{height: 50}}
          style={{
            backgroundColor: 'steelblue',
            width: '80%',
            borderRadius: 18,
          }}
          itemStyle={{
            justifyContent: 'flex-start',
            width: '80%',
          }}
          dropDownStyle={{backgroundColor: '#fafafa', width: '80%'}}
          onChangeItem={(item) =>
            this.setState({
              profile_type: item.value,
            })
          }
        />
        <Text style={[styles.calendartext, {marginTop: 20}]}>Select Date:</Text>
        <Calendar></Calendar>

        <Text style={[styles.calendartext, {marginTop: 20}]}>Select Time:</Text>

        <View style={styles.container}>
          {
            <TouchableOpacity onPress={this.timePicker}>
              <Text style={styles.textDate}>{textAppointmentTime}</Text>
            </TouchableOpacity>
          }
          {showAppointmentTime && (
            <DatePicker
              value={appointmentTime}
              mode={modeAppointmentTime}
              onChange={this.setAppointmentTime}
              minimumDate={new Date(moment())}
            />
          )}
        </View>
        <TouchableOpacity style={styles.addContainer}>
          <Text style={styles.text}>Add Appointment</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.getAppointmentTimePage()}
        <TouchableOpacity>
          <View style={styles.row}>
            <FlatList
              data={this.state.timeSlots}
              keyExtractor={(times) => times.time}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text style={styles.textTime}>{item.time}</Text>
                    <TouchableOpacity>
                      <Feather name="trash" style={styles.icon} />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
