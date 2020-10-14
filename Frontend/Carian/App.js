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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
