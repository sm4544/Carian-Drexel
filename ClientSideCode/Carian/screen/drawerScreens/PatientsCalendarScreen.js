import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Boolean,
} from 'react-native';
import styles from '../../styles/commonStyles';
import {Agenda, CalendarList, Calendar} from 'react-native-calendars';
import {Root, Popup} from 'popup-ui';
//import RNCheckboxCard from 'react-native-checkbox-card';
import {ScrollView} from 'react-native-gesture-handler';

export default class PatientsCalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {show: '', calendar: ''};

    // this.onDayPress = this.onDayPress.bind(this);
  }
  dayPress = () => {
    this.setState({show: true});
  };

  render() {
    return (
      <Root>
        <View>
          <View>
            <Calendar onDayPress={this.dayPress} />
          </View>

          
        </View>
      </Root>
    );
  }
}
