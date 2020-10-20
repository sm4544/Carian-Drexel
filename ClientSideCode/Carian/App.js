import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './screen/stackNavScreens/LoginScreen';
import RegistrationScreen from './screen/stackNavScreens/RegistrationScreen'
import HomeScreen from './screen/drawerScreens/HomeScreen';
import DoctorDashboardScreen from './screen/drawerScreens/DoctorDashboardScreen';
import DoctorCalenderScreen from './screen/drawerScreens/DoctorCalendarScreen';
import SettingsScreen from './screen/drawerScreens/SettingsScreen';
import CustomSidebarMenu from './screen/components/CustomSidebarMenu';
import NavigationDrawerHeader from './screen/components/NavigationDrawerHeader';
import StaffInfoScreen from './screen/stackNavScreens/StaffInfoScreen';
import ConfirmationScreen from './screen/stackNavScreens/ConfirmationScreen'

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Setting Screen',
      headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: DoctorDashboardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Doctor Dashboard Screen',
      headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FourthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: DoctorCalenderScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Doctor Calender Screen',
      headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigationRoutes = createDrawerNavigator({
  HomeScreen: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home Screen',
    },
  },
  SettingsScreen: {
    screen: SecondActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Setting Screen',
    },
  },
  DoctorDashboardScreen: {
    screen: ThirdActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Doctor Dashboard Screen',
    },
  },
  DoctorCalenderScreen: {
    screen: FourthActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Doctor Calender Screen',
    },
  },
},
{
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

const App = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      headerShown:false,
      
    },
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: {
      title: 'Registration',
      headerShown:false,
      
    },
  },
  StaffInfoScreen: {
    screen: StaffInfoScreen,
    navigationOptions:{
      title:'Staff Personal Information',
      headerShown:false,
    },
  },
  ConfirmationScreen:{
    screen: ConfirmationScreen,
    navigationOptions:{
      title:'Confirmation screen',
      headerShown:false,
    },
  },
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(App);