import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from '../../styles/commonStyles';
import {Calendar} from 'react-native-calendars';

export default class DoctorCalenderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString,
    });
    this.props.navigation.navigate('SlotBooking');
  }
  // _onPressBack() {
  //   const {goBack} = this.props.navigation;
  //   goBack();
  // }
  render() {
    return (
      // <View style={styles.container}>
      //   <StatusBar barStyle="light-content" />
      //   <View style={styles.toolbar}>
      //     <TouchableOpacity onPress={() => this._onPressBack()}>
      //       <Text style={styles.toolbarButton}>Back</Text>
      //     </TouchableOpacity>
      //     <Text style={styles.toolbarTitle}></Text>
      //     <Text style={styles.toolbarButton}></Text>
      //   </View>
      <Calendar
        onDayPress={this.onDayPress}
        style={styles.calendar}
        hideExtraDays
        markedDates={{[this.state.selected]: {selected: true}}}
        theme={{
          selectedDayBackgroundColor: 'green',
          todayTextColor: 'green',
          arrowColor: 'green',
        }}
      />
      // </View>
    );
  }
}
