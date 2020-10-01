import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
} from "react-native";

export default class Register extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.Textsize}>Select the role to register</Text>
        <View style={{ height: 50, backgroundColor: "#465881" }}>
          <Picker style={{ height: 50, color: "black", width: 120 }}>
            <Picker.Item label="Roles " value="roles" />
            <Picker.Item label="Admin" value="admin" />
            <Picker.Item label="Doctor" value="doctor" />
            <Picker.Item label="Patient" value="patient" />
            <Picker.Item label="Pharmacy" value="pharmacy" />
            <Picker.Item label="Lab" value="Lab" />
          </Picker>
        </View>
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
  Textsize: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D35400",
    paddingBottom: 30,
    paddingTop: 30,
  },
});
