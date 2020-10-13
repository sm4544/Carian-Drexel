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
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import OptionsMenu from "react-native-options-menu";
export default class DoctorDashboard extends Component {
  onPressProfile = () => {
    this.props.navigation.navigate("doctor_profile");
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.text}> Profile </Text>
        <TouchableOpacity onPress={() => this.onPressProfile()}>
          <AntDesign name="profile" type="Feather" size={100} color="teal" />
        </TouchableOpacity>
        <Text style={styles.text}> Appointments </Text>
        <TouchableOpacity>
          <FontAwesome
            name="calendar-plus-o"
            type="Feather"
            size={100}
            color="teal"
          />
        </TouchableOpacity>
        <Text style={styles.text}> Inbox </Text>
        <TouchableOpacity>
          <FontAwesome5 name="inbox" type="Feather" size={100} color="teal" />
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
    fontSize: 25,
    color: "#D35400",
    paddingBottom: 30,
    paddingTop: 30,
  },
});
