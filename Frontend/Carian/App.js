import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/login";
import Register from "./pages/register";
import CustomerDashboard from "./pages/dashboard";
import ConfirmationScreen from "./pages/Confirmation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorProfile from "./pages/doctor_profile";
import DoctorEducation from "./pages/doctor_education";
import DoctorLicense from "./pages/doctor_license";
import DoctorWork from "./pages/doctor_work";
import DoctorDashboard from "./pages/doctor_dashboard";
import Admindashboard from "./pages/admindashboard";
import Adminset from "./pages/adminset";
import Pharmset from "./pages/pharmset";
import Labset from "./pages/labset";
import Doctorset from "./pages/doctorset";
import Hospitaldetails from "./pages/hospitaldetails";
import Pharmacydetails from "./pages/pharmacydetails";
import Doctordetails from "./pages/doctordetails";
import Labdetails from "./pages/labdetails";

export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="ConfirmationScreen"
            component={ConfirmationScreen}
            options={{ title: "ConfirmationScreen" }}
          />
          <Stack.Screen
            name="doctor_dashboard"
            component={DoctorDashboard}
            options={{ title: "DoctorDashboard" }}
          />
          <Stack.Screen
            name="doctor_profile"
            component={DoctorProfile}
            options={{ title: "DoctorProfile" }}
          />
          <Stack.Screen
            name="doctor_education"
            component={DoctorEducation}
            options={{ title: "DoctorEducation" }}
          />
          <Stack.Screen
            name="doctor_work"
            component={DoctorWork}
            options={{ title: "DoctorWork" }}
          />
          <Stack.Screen
            name="doctor_license"
            component={DoctorLicense}
            options={{ title: "DoctorLicense" }}
          />
          <Stack.Screen
            name="Admindashboard"
            component={Admindashboard}
            options={{ title: "Admindashboard" }}
          />
          <Stack.Screen
            name="Adminset"
            component={Adminset}
            options={{ title: "Adminset" }}
          />
          <Stack.Screen
            name="Pharmset"
            component={Pharmset}
            options={{ title: "Pharmset" }}
          />
          <Stack.Screen
            name="Labset"
            component={Labset}
            options={{ title: "Labset" }}
          />
          <Stack.Screen
            name="Doctorset"
            component={Doctorset}
            options={{ title: "Doctorset" }}
          />
          <Stack.Screen
            name="Hospitaldetails"
            component={Hospitaldetails}
            options={{ title: "Hospitaldetails" }}
          />
          <Stack.Screen
            name="Pharmacydetails"
            component={Pharmacydetails}
            options={{ title: "Pharmacydetails" }}
          />
          <Stack.Screen
            name="Doctordetails"
            component={Doctordetails}
            options={{ title: "Doctordetails" }}
          />
          <Stack.Screen
            name="Labdetails"
            component={Labdetails}
            options={{ title: "Labdetails" }}
          />		  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
