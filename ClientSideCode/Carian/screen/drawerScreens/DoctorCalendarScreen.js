import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
//import {Button, Card} from 'react-native-paper';

import {Dropdown} from 'react-native-material-dropdown-v2';
import styles from '../../styles/commonStyles';

// import {Icon} from 'react-native-vector-icons/FontAwesome';

export default class DoctorCalendarScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      buttonShow: false,
      country: '',
      ddlSelectedValue: '',
      morningS: 'NA',
      morningE: 'NA',
      flagM: false,
      indexM: 0,
      afternoonS: 'NA',
      afternoonE: 'NA',
      flagA: false,
      indexA: 0,
      eveningS: 'NA',
      eveningE: 'NA',
      flagE: false,
      indexE: 0,
      nightS: 'NA',
      nightE: 'NA',
      flagN: false,
      indexN: 0,
      day: 'Mon',
      timeSlots: [],

      needArray: false,
    };
  }

  handleClickMonday = () => {
    this.setState({day: 'Monday'});
    this.handleClick();
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
  };
  handleClickTuesday = () => {
    this.setState({day: 'Tuesday'});
    this.handleClick();
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
  };
  handleClickWednesday = () => {
    this.setState({day: 'Wednesday'});
    this.handleClick();
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
  };
  handleClickThursday = () => {
    this.setState({day: 'Thursday'});
    this.handleClick();
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
  };
  handleClickFriday = () => {
    this.setState({day: 'Friday'});
    this.handleClick();
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
  };
  handleClickSaturday = () => {
    this.setState({day: 'Saturday'});
    this.handleClick();
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
  };
  handleClickSunday = () => {
    this.setState({day: 'Sunday'});
    this.handleClick();
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
  };
  handleClick = () => {
    this.setState({show: true});
    this.setState({buttonShow: false});
  };
  add = () => {
    var inputData = [
      this.state.day,
      [this.state.morningS, this.state.morningE],
      [this.state.afternoonS, this.state.afternoonE],
      [this.state.eveningS, this.state.eveningE],
      [this.state.nightS, this.state.nightE],
    ];
    this.setState({show: false});
    this.setState({buttonShow: true});
    this.setState({flagM: false});
    this.setState({flagA: false});
    this.setState({flagE: false});
    this.setState({flagN: false});
    var profileData2 = this.state.timeSlots;
    profileData2.push(inputData);
    this.setState({timeSlots: profileData2});
    this.setState({
      morningS: 'NA',
      morningE: 'NA',
      afternoonS: 'NA',
      afternoonE: 'NA',
      eveningS: 'NA',
      eveningE: 'NA',
      nightS: 'NA',
      nightE: 'NA',
    });
  };
  submit = () => {
    alert('Week Schedule Added Successfully');
    console.log(this.state.timeSlots);
    this.setState({timeSlots: []});
  };

  setSelectedStateValue = (ddlValue, index) => {
    this.setState({
      ddlSelectedValue1: ddlValue,
    });

    if (
      this.state.flagM == false &&
      (ddlValue == '6:00 am' ||
        ddlValue == '7:00 am' ||
        ddlValue == '8:00 am' ||
        ddlValue == '9:00 am' ||
        ddlValue == '10:00 am' ||
        ddlValue == '11:00 am')
    ) {
      this.setState({morningS: ddlValue});
      this.setState({flagM: true});
      this.setState({indexM: index});
    } else if (
      this.state.flagM == true &&
      (ddlValue == '6:00 am' ||
        ddlValue == '7:00 am' ||
        ddlValue == '8:00 am' ||
        ddlValue == '9:00 am' ||
        ddlValue == '10:00 am' ||
        ddlValue == '11:00 am')
    ) {
      if (this.state.indexM < index) {
        this.setState({morningE: ddlValue});
      } else {
        alert('Please select valid end time');
      }
    }
    if (
      this.state.flagA == false &&
      (ddlValue == '12:00 pm' ||
        ddlValue == '1:00 pm' ||
        ddlValue == '2:00 pm' ||
        ddlValue == '3:00 pm' ||
        ddlValue == '4:00 pm' ||
        ddlValue == '5:00 pm')
    ) {
      this.setState({afternoonS: ddlValue});
      this.setState({flagA: true});
      this.setState({indexA: index});
    } else if (
      this.state.flagA == true &&
      (ddlValue == '12:00 pm' ||
        ddlValue == '1:00 pm' ||
        ddlValue == '2:00 pm' ||
        ddlValue == '3:00 pm' ||
        ddlValue == '4:00 pm' ||
        ddlValue == '5:00 pm')
    ) {
      if (this.state.indexA < index) {
        this.setState({afternoonE: ddlValue});
      } else {
        alert('Please select valid end time');
      }
    }
    if (
      this.state.flagE == false &&
      (ddlValue == '5:00 pm' ||
        ddlValue == '6:00 pm' ||
        ddlValue == '7:00 pm' ||
        ddlValue == '8:00 pm' ||
        ddlValue == '9:00 pm')
    ) {
      this.setState({eveningS: ddlValue});
      this.setState({flagE: true});
      this.setState({indexE: index});
    } else if (
      this.state.flagE == true &&
      (ddlValue == '5:00 pm' ||
        ddlValue == '6:00 pm' ||
        ddlValue == '7:00 pm' ||
        ddlValue == '8:00 pm' ||
        ddlValue == '9:00 pm')
    ) {
      if (this.state.indexE < index) {
        this.setState({eveningE: ddlValue});
      } else {
        alert('Please select valid end time');
      }
    }
    if (
      this.state.flagN == false &&
      (ddlValue == '9:00 pm' ||
        ddlValue == '10:00 pm' ||
        ddlValue == '11:00 pm' ||
        ddlValue == '00:00 am' ||
        ddlValue == '1:00 am' ||
        ddlValue == '2:00 am' ||
        ddlValue == '3:00 am' ||
        ddlValue == '4:00 am' ||
        ddlValue == '5:00 am' ||
        ddlValue == '6:00 am')
    ) {
      this.setState({nightS: ddlValue});
      this.setState({flagN: true});
      this.setState({indexN: index});
    } else if (
      this.state.flagN == true &&
      (ddlValue == '9:00 pm' ||
        ddlValue == '10:00 pm' ||
        ddlValue == '11:00 pm' ||
        ddlValue == '00:00 am' ||
        ddlValue == '1:00 am' ||
        ddlValue == '2:00 am' ||
        ddlValue == '3:00 am' ||
        ddlValue == '4:00 am' ||
        ddlValue == '5:00 am' ||
        ddlValue == '6:00 am')
    ) {
      if (this.state.indexN < index) {
        this.setState({nightE: ddlValue});
      } else {
        alert('Please select valid end time');
      }
    }
  };

  // const HomeScreen = () => {
  //   global.currentScreenIndex = 'HomeScreen';
  render() {
    let data1 = [
      {
        label: '6:00 am',
        value: '6:00 am',
        index: 0,
      },
      {
        label: '7:00 am',
        value: '7:00 am',
        index: 1,
      },
      {
        label: '8:00 am',
        value: '8:00 am',
        index: 2,
      },
      {
        label: '9:00 am',
        value: '9:00 am',
        index: 3,
      },
      {
        label: '10:00 am',
        value: '10:00 am',
        index: 4,
      },
      {
        label: '11:00 am',
        value: '11:00 am',
        index: 5,
      },
    ];

    let data2 = [
      {
        label: '12:00 pm',
        value: '12:00 pm',
        index: 0,
      },
      {
        label: '1:00 pm',
        value: '1:00 pm',
        index: 1,
      },
      {
        label: '2:00 pm',
        value: '2:00 pm',
        index: 2,
      },
      {
        label: '3:00 pm',
        value: '3:00 pm',
        index: 3,
      },
      {
        label: '4:00 pm',
        value: '4:00 pm',
        index: 4,
      },
      {
        label: '5:00 pm',
        value: '5:00 pm',
        index: 5,
      },
    ];
    let data3 = [
      {
        label: '5:00 pm',
        value: '5:00 pm',
        index: 0,
      },
      {
        label: '6:00 pm',
        value: '6:00 pm',
        index: 1,
      },
      {
        label: '7:00 pm',
        value: '7:00 pm',
        index: 2,
      },
      {
        label: '8:00 pm',
        value: '8:00 pm',
        index: 3,
      },
      {
        label: '9:00 pm',
        value: '9:00 pm',
        index: 4,
      },
    ];
    let data4 = [
      {
        label: '9:00 pm',
        value: '9:00 pm',
        index: 0,
      },
      {
        label: '10:00 pm',
        value: '10:00 pm',
        index: 1,
      },
      {
        label: '11:00 pm',
        value: '11:00 pm',
        index: 2,
      },
      {
        label: '00:00 am',
        value: '00:00 am',
        index: 3,
      },
      {
        label: '1:00 am',
        value: '1:00 am',
        index: 4,
      },
      {
        label: '2:00 am',
        value: '2:00 am',
        index: 5,
      },
      {
        label: '3:00 am',
        value: '3:00 am',
        index: 6,
      },
      {
        label: '4:00 am',
        value: '4:00 am',
        index: 7,
      },
      {
        label: '5:00 am',
        value: '5:00 am',
        index: 8,
      },
      {
        label: '6:00 am',
        value: '6:00 am',
        index: 9,
      },
    ];
    return (
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.buttonCal}
            onPress={this.handleClickMonday}>
            <Text>Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            onPress={this.handleClickTuesday}>
            <Text>Tue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            onPress={this.handleClickWednesday}>
            <Text>Wed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            onPress={this.handleClickThursday}>
            <Text>Thu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            onPress={this.handleClickFriday}>
            <Text>Fri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            onPress={this.handleClickSaturday}>
            <Text>Sat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCal}
            onPress={this.handleClickSunday}>
            <Text>Sun</Text>
          </TouchableOpacity>
        </View>

        <View>
          {this.state.show ? (
            <View>
              <Text style={styles.textCal}>Morning</Text>
              <View>
                <Dropdown
                  data={data1}
                  value={this.state.ddlSelectedValue}
                  label="Select start time"
                  itemColor={'red'}
                  useNativeDriver={true}
                  onChangeText={(value, index) =>
                    this.setSelectedStateValue(value, index)
                  }
                />
              </View>
              <View>
                {this.state.flagM ? (
                  <Dropdown
                    data={data1}
                    value={this.state.ddlSelectedValue}
                    label="Select end time"
                    itemColor={'red'}
                    useNativeDriver={true}
                    onChangeText={(value, index) =>
                      this.setSelectedStateValue(value, index)
                    }
                  />
                ) : null}
              </View>
              <Text style={styles.textCal}>Afternoon</Text>
              <View>
                <Dropdown
                  data={data2}
                  value={this.state.ddlSelectedValue}
                  label="Select start time"
                  itemColor={'red'}
                  useNativeDriver={true}
                  onChangeText={(value, index) =>
                    this.setSelectedStateValue(value, index)
                  }
                />
              </View>
              <View>
                {this.state.flagA ? (
                  <Dropdown
                    data={data2}
                    value={this.state.ddlSelectedValue}
                    label="Select end time"
                    itemColor={'red'}
                    useNativeDriver={true}
                    onChangeText={(value, index) =>
                      this.setSelectedStateValue(value, index)
                    }
                  />
                ) : null}
              </View>
              <Text style={styles.textCal}>Evening</Text>
              <View>
                <Dropdown
                  data={data3}
                  value={this.state.ddlSelectedValue}
                  label="Select start time"
                  itemColor={'red'}
                  useNativeDriver={true}
                  onChangeText={(value, index) =>
                    this.setSelectedStateValue(value, index)
                  }
                />
              </View>
              <View>
                {this.state.flagE ? (
                  <Dropdown
                    data={data3}
                    value={this.state.ddlSelectedValue}
                    label="Select end time"
                    itemColor={'red'}
                    useNativeDriver={true}
                    onChangeText={(value, index) =>
                      this.setSelectedStateValue(value, index)
                    }
                  />
                ) : null}
              </View>
              <Text style={styles.textCal}>Night</Text>
              <View>
                <Dropdown
                  data={data4}
                  value={this.state.ddlSelectedValue}
                  label="Select start time"
                  itemColor={'red'}
                  useNativeDriver={true}
                  onChangeText={(value, index) =>
                    this.setSelectedStateValue(value, index)
                  }
                />
              </View>
              <View>
                {this.state.flagN ? (
                  <Dropdown
                    data={data4}
                    value={this.state.ddlSelectedValue}
                    label="Select end time"
                    itemColor={'red'}
                    useNativeDriver={true}
                    onChangeText={(value, index) =>
                      this.setSelectedStateValue(value, index)
                    }
                  />
                ) : null}
              </View>
              {/* <Icon
                name="plus"
                color="teal"
                size={50}
                onPress={this.add}></Icon> */}
              <TouchableOpacity style={styles.button} onPress={this.add}>
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <View>
          {this.state.buttonShow ? (
            <TouchableOpacity style={styles.button} onPress={this.submit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}
// export default HomeScreen;
