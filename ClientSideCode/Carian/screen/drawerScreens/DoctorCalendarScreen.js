import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import {Button, Card} from 'react-native-paper';

import { Dropdown } from 'react-native-material-dropdown-v2';
import styles from '../../styles/commonStyles';

import {Icon} from 'react-native-vector-icons/FontAwesome';

export default class DoctorCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      buttonShow: '',
    };
  }
  //   handleClick = (id) => {
  //     alert('Button clicked!' + id);
  //   };
  handleClick = () => {
    this.setState({ show: true });
    this.setState({ buttonShow: false });
  };
  add = () => {
    alert('added Successfully');
    this.setState({ show: false });
    this.setState({ buttonShow: true });
  };
  submit = () => {
    alert('Week Schedule Added Successfully');
  };

  // const HomeScreen = () => {
  //   global.currentScreenIndex = 'HomeScreen';
  render() {
    let data = [
      {
        value: '6:00 am',
      },
      {
        value: '7:00 am',
      },
      {
        value: '8:00 am',
      },
      {
        value: '9:00 am',
      },
      {
        value: '10:00 am',
      },
      {
        value: '11:00 am',
      },
      {
        value: '12:00 pm',
      },
    ];
    let data2 = [
      {
        value: '12:00 pm',
      },
      {
        value: '1:00 pm',
      },
      {
        value: '2:00 pm',
      },
      {
        value: '3:00 pm',
      },
      {
        value: '4:00 pm',
      },
      {
        value: '5:00 pm',
      },
    ];
    let data3 = [
      {
        value: '5:00 pm',
      },
      {
        value: '6:00 pm',
      },
      {
        value: '7:00 pm',
      },
      {
        value: '8:00 pm',
      },
      {
        value: '9:00 pm',
      },
    ];
    let data4 = [
      {
        value: '9:00 pm',
      },
      {
        value: '10:00 pm',
      },
      {
        value: '11:00 pm',
      },
      {
        value: '00:00 am',
      },
      {
        value: '1:00 am',
      },
      {
        value: '2:00 am',
      },
      {
        value: '3:00 am',
      },
      {
        value: '4:00 am',
      },
      {
        value: '5:00 am',
      },
      {
        value: '6:00 am',
      },
    ];
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buttonCal} onPress={this.handleClick}>
            <Text>Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            title="Mon"
            color="black"
            onPress={this.handleClick}>
            <Text>Tue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            title="Mon"
            color="black"
            onPress={this.handleClick}>
            <Text>Wed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            title="Mon"
            color="black"
            onPress={this.handleClick}>
            <Text>Thu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            title="Mon"
            color="black"
            onPress={this.handleClick}>
            <Text>Fri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            title="Mon"
            color="black"
            onPress={this.handleClick}>
            <Text>Sat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            title="Mon"
            color="black"
            onPress={this.handleClick}>
            <Text>Sun</Text>
          </TouchableOpacity>
        </View>

        <View>
          {this.state.show ? (
            <View>
              <Text style={styles.textCal}>Morning</Text>
              <View>
                <Dropdown
                  label="Select start Time"
                  data={data}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}></Dropdown>
              </View>
              <View>
                <Dropdown
                  label="Select end Time"
                  data={data}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                />
              </View>
              <Text style={styles.textCal}>Afternoon</Text>
              <View>
                <Dropdown
                  label="Select start Time"
                  data={data2}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}></Dropdown>
              </View>
              <View>
                <Dropdown
                  label="Select end Time"
                  data={data2}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                />
              </View>
              <Text style={styles.textCal}>Evening</Text>
              <View>
                <Dropdown
                  label="Select start Time"
                  data={data3}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}></Dropdown>
              </View>
              <View>
                <Dropdown
                  label="Select end Time"
                  data={data3}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                />
              </View>
              <Text style={styles.textCal}>Night</Text>
              <View>
                <Dropdown
                  label="Select start Time"
                  data={data4}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}></Dropdown>
              </View>
              <View>
                <Dropdown
                  label="Select end Time"
                  data={data4}
                  style={{
                    backgroundColor: 'steelblue',

                    borderRadius: 5,
                  }}
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                />
              </View>
              <Icon
                name="plus"
                color="teal"
                size={50}
                onPress={this.add}></Icon>
            </View>
          ) : null}
          <View>
            {this.state.buttonShow ? (
              <TouchableOpacity style={styles.button} onPress={this.submit}>
                <Text>Submit</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </ScrollView>
    );
  }
}
// export default HomeScreen;
