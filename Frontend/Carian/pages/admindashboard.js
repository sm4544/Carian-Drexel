import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import {
  Fontisto ,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import OptionsMenu from "react-native-options-menu";
export default class DoctorProfile extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <Text style={styles.text}> Hospital</Text>
        <TouchableOpacity onPress={()=>navigate("Adminset")}>
        <MaterialCommunityIcons name="hospital-building" type="Feather" size={70} color="teal" />
        </TouchableOpacity>

        <Text style={styles.text}> Pharmacy</Text>
        <TouchableOpacity onPress={()=>navigate("Pharmset")}>
        <MaterialCommunityIcons name="pharmacy" type="Feather" size={70} color="teal" />
        </TouchableOpacity>

        <Text style={styles.text}> Doctor</Text>
        <TouchableOpacity onPress={()=>navigate("Doctorset")}>
        <Fontisto name="doctor" type="Feather" size={70} color="teal" />

        </TouchableOpacity>
        <Text style={styles.text}> Laboratory</Text>
        <TouchableOpacity  onPress={()=>navigate("Labset")}>
        <Fontisto name="laboratory" type="Feather" size={70} color="teal" />
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
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#D35400",
    paddingBottom: 30,
    paddingTop: 30,
  },
});
