import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
} from "react-native";
export default class Dashboard extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return <Text style={styles.Textsize}>Welcome to Dashboard</Text>;
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
