import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
} from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";
import { Icon } from "react-native-elements";
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import OptionsMenu from "react-native-options-menu";
export default class DoctorProfile extends Component {
  onPressUniversity = () => {
    this.props.navigation.navigate("doctor_education");
  };
  onPressWork = () => {
    this.props.navigation.navigate("doctor_work");
  };
  onPressLicence = () => {
    this.props.navigation.navigate("doctor_license");
  };
  onPressCalendar = () => {
    this.props.navigation.navigate("doctor_calendar");
  };
  render() {
    const { navigate } = this.props.navigation;
    // const myIcon = (
    //   <AntDesign
    //     name="setting"
    //     type="Feather"
    //     size={30}
    //     color="gray"
    //     alignItems="right"
    //   />
    //);
    return (
      <View style={styles.container}>
        {/* <OptionsMenu
          customButton={myIcon}
          destructiveIndex={1}
          options={["Edit", "Delete", "Cancel"]}
          actions={[this.editPost, this.deletePost]}
          style={styles.settingIcon}
        /> */}
        <Text style={styles.text}> Add Education Details</Text>
        <TouchableOpacity onPress={() => this.onPressUniversity()}>
          <FontAwesome
            name="university"
            type="Feather"
            size={70}
            color="teal"
          />
        </TouchableOpacity>
        <Text style={styles.text}> Add Work Experience</Text>
        <TouchableOpacity onPress={() => this.onPressWork()}>
          <MaterialIcons name="work" type="Feather" size={70} color="teal" />
        </TouchableOpacity>
        <Text style={styles.text}> License Details</Text>
        <TouchableOpacity onPress={() => this.onPressLicence()}>
          <MaterialCommunityIcons
            name="license"
            type="Feather"
            size={70}
            color="teal"
          />
        </TouchableOpacity>
        <Text style={styles.text}> Check Calendar</Text>
        <TouchableOpacity onPress={() => this.onPressCalendar()}>
          <FontAwesome name="calendar" type="Feather" size={70} color="teal" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0E1",
    alignItems: "center",
  },
  settingIcon: {
    alignContent: "flex-end",
    paddingBottom: 30,
    paddingTop: 30,
  },
  Textsize: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D35400",
    paddingBottom: 30,
    paddingTop: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D35400",
    paddingBottom: 30,
    paddingTop: 30,
  },
});
