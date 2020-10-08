import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
const App = createStackNavigator({
  Login: Login,
  Register: Register,
  Dashboard: Dashboard,
});
export default createAppContainer(App);*/}