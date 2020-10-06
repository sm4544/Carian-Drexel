import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import DropdownMenu from "react-native-dropdown-menu";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      // showAdmin: false,
      // showPatient: false,
    };
  }
  render() {
    // const { navigate } = this.props.navigation;

    var data = [["Roles", "Admin", "Doctor", "Patient", "Pharmacy", "Lab"]];
    return (
      <View style={styles.container}>
        <Text style={styles.Textsize}>Select the role to register</Text>

        <DropdownMenu
          style={{ flexHorizantal: 1 }}
          bgColor={"#CD6155"}
          tintColor={"#666666"}
          activityTintColor={"green"}
          handler={(selection, row) =>
            this.setState({ text: data[selection][row] })
          }
          data={data}
        >
          {/* <View> */}
          {/* {this.state.text ? ( */}
          <ScrollView>
            <View>
              <Text style={styles.Textsize}>First Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="  FName"
                placeholderTextColor="black"
              />
              <Text style={styles.Textsize}>Last Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="  LName"
                placeholderTextColor="black"
              />

              <Text style={styles.Textsize}>Age:</Text>
              <TextInput
                style={styles.input}
                placeholder="  Age"
                placeholderTextColor="black"
              />

              <Text style={styles.Textsize}>Gender:</Text>
              <TextInput
                style={styles.input}
                placeholder="  gender"
                placeholderTextColor="black"
              />

              <Text style={styles.Textsize}>Address: </Text>

              <TextInput
                style={styles.input}
                placeholder="  Apt/Street1"
                placeholderTextColor="black"
              />

              <TextInput
                style={styles.input}
                placeholder="  Street2"
                placeholderTextColor="black"
              />

              <TextInput
                style={styles.input}
                placeholder="  City"
                placeholderTextColor="black"
              />

              <TextInput
                style={styles.input}
                placeholder="  State"
                placeholderTextColor="black"
              />

              <TextInput
                style={styles.input}
                placeholder="  Country"
                placeholderTextColor="black"
              />

              <TextInput
                style={styles.input}
                placeholder="  ZipCode"
                placeholderTextColor="black"
              />

              <Text style={styles.Textsize}>Mobile Number:</Text>
              <TextInput
                style={styles.input}
                placeholder="  mobile"
                placeholderTextColor="black"
              />

              <Text style={styles.Textsize}>Email ID:</Text>
              <TextInput
                style={styles.input}
                placeholder="  emailID"
                placeholderTextColor="black"
              />

              <Text style={styles.Textsize}>Password :</Text>
              <TextInput
                style={styles.input}
                placeholder="  password"
                placeholderTextColor="black"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigate("Login")}
              >
                <Text style={styles.buttonText}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </DropdownMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0E1",
    alignContent: "center",
  },
  TextForm: {
    width: "80%",

    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderColor: "white",
    borderWidth: 2,
  },
  Textsize: {
    fontWeight: "bold",
    fontSize: 20,
    color: "maroon",
    paddingBottom: 10,
    paddingTop: 10,
  },
  input: {
    backgroundColor: "teal",
    borderColor: "white",
    borderWidth: 2,
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    width: "25%",
    backgroundColor: "#CD6155",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: "30%",
  },
  buttonText: {
    color: "white",
  },
});
