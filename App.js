import React, { Component } from "react";
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
export default createAppContainer(App);
