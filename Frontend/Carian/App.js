import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/login';
import Register from './pages/register';
import CustomerDashboard from './pages/dashboard';
import ConfirmationScreen from './pages/Confirmation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  
  render(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }}/>
        <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} options={{ title: 'DashBoard' }}/>
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{ title: 'ConfirmationScreen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
       
  }
};