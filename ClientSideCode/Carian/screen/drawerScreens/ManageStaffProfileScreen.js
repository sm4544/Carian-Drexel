import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ValidationComponent from 'react-native-form-validator';

// import Icon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class ManageStaffProfileScreen extends ValidationComponent {
  // const ManageStaffProfileScreen = () => {
  //   global.currentScreenIndex = 'ManageStaffProfileScreen';
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onPressProfile = this.onPressProfile.bind(this);
    this.onPressCalendar = this.onPressCalendar.bind(this);
    // this.isValidForm = this.isValidForm.bind(this);
  }

  onPressProfile = () => {
    this.props.navigation.navigate('PatientScreen');
  };

  onPressCalendar = () => {
    this.props.navigation.navigate('SlotBooking');
  };
  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      //     <Text style={{ fontSize: 23, marginTop: 10 }}>ManageStaffProfileScreen</Text>
      //     <Text style={{ fontSize: 18, marginTop: 10 }}>
      //         Example to Dynamically Change Drawer/Sidebar Options in React Navigation Drawer
      //     </Text>
      //     <Text style={{ fontSize: 18, marginTop: 10 }}>
      //     ManageStaffProfileScreen

      //     </Text>
      // </View>
      <View style={styles.container}>
        <Text style={styles.AppTitle}> Patient Profile</Text>
        <Text style={styles.text}>Add Medical Info</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PatientsScreen')}>
          <Icon name="post-add" color="teal" size={80}></Icon>
        </TouchableOpacity>
        <Text style={styles.text}>View Medical Info</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PatientsScreen')}>
          <Icon name="preview" color="teal" size={80}></Icon>
        </TouchableOpacity>
        <Text style={styles.text}>Book Appointment</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SlotBooking')}>
          <Icon name="perm-contact-calendar" color="teal" size={80}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

// export default ManageStaffProfileScreen;
