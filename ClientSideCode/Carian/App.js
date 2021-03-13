import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from './screen/stackNavScreens/LoginScreen';
import RegistrationScreen from './screen/stackNavScreens/RegistrationScreen'
import HomeScreen from './screen/drawerScreens/CommonPages/HomeScreen';
import DoctorDashboardScreen from './screen/drawerScreens/DoctorDashboardScreen';
import DoctorCalenderScreen from './screen/drawerScreens/DoctorCalendarScreen';
import SettingsScreen from './screen/drawerScreens/SettingsScreen';
import CustomSidebarMenu from './screen/components/CustomSidebarMenu';
import NavigationDrawerHeader from './screen/components/NavigationDrawerHeader';
import StaffInfoScreen from './screen/stackNavScreens/StaffInfoScreen';
import ConfirmationScreen from './screen/stackNavScreens/ConfirmationScreen';

import ManageCustomerAdminProfieScreen from './screen/drawerScreens/ManageCustomerAdminProfieScreen';
import PatientCalenderScreen from './screen/drawerScreens/PatientsCalendarScreen';
import ManageStaffProfileScreen from './screen/drawerScreens/ManageStaffProfileScreen';
import MedicineAddScreen from './screen/drawerScreens/MedicineAddScreen';
import PharmacyScreen from './screen/drawerScreens/PharmacyScreen';
import LabScreen from './screen/drawerScreens/LabScreen';
import ManageStaffScreen from './screen/drawerScreens/ManageStaffScreen';
import PharmacyOrdersScreen from './screen/drawerScreens/PharmacyOrdersScreen';
import MedicinesScreen from './screen/drawerScreens/MedicinesScreen';
import LabOrdersScreen from './screen/drawerScreens/LabOrdersScreen';
import ReportsScreen from './screen/drawerScreens/ReportsScreen';
import PatientsRegisterScreen from './screen/drawerScreens/PatientsRegisterScreen';
import PatientsInfoScreen from './screen/drawerScreens/PatientsInfoScreen';
import PatientsScreen from './screen/drawerScreens/CommonPages/PatientsScreen';
import PatientsScreen2 from './screen/drawerScreens/CommonPages/PatientsScreen2';
import HospitalScreen from './screen/drawerScreens/HospitalScreen';
import HospitalDetailsScreen from './screen/drawerScreens/HospitalDetailsScreen';
import PharmacyDetailsScreen from './screen/drawerScreens/PharmacyDetailsScreen';
import LabDetailsScreen from './screen/drawerScreens/LabDetailsScreen';
import MedicineViewScreen from './screen/drawerScreens/MedicineViewScreen';
//import DisplayHospitalScreen from './screen/drawerScreens/DisplayHospitalScreen';
import StaffDetailsScreen from './screen/drawerScreens/StaffDetailsScreen';
import HospitalOverview from './screen/drawerScreens/HospitalOverview';
import LabOverview from './screen/drawerScreens/LabOverview';
import StaffOverview from './screen/drawerScreens/StaffOverview';
import PharmacyOverview from './screen/drawerScreens/PharmacyOverview';
import CustomerDetails from './screen/drawerScreens/CustomerDetails';
import Prescription from './screen/drawerScreens/Prescription';
import PrescriptionOrders from './screen/drawerScreens/PrescriptionOrders';
import LabOrderDetails from './screen/drawerScreens/LabOrderDetails';
import PatientDetailsScreen from './screen/drawerScreens/PatientDetailsScreen';
import Labreport from './screen/drawerScreens/Labreport';
import PatientAppointments from './screen/drawerScreens/PatientAppointments';
import PatDoctorDetails from './screen/drawerScreens/PatDoctorDetails';
import HealthInformationDetails from './screen/drawerScreens/HealthInformationDetails';
import DisplayDoctorsList from './screen/drawerScreens/CommonPages/DisplayDoctorsList';
import DisplayHospitalsList from './screen/drawerScreens/CommonPages/DisplayHospitalsList';
import HospitalPublicProfile from './screen/drawerScreens/CommonPages/HospitalPublicProfile';
import DoctorPublicProfile from './screen/drawerScreens/CommonPages/DoctorPublicProfile';
import paymentScreen from './screen/drawerScreens/CommonPages/PaymentScreen';
// import PatientsAppointment from './screen/drawerScreens/PatientsAppointment';
import DepartmentPage from './screen/drawerScreens/DepartmentPage';
import DepartmentConfirmationScreen from './screen/drawerScreens/DepartmentConfirmationScreen';


const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  DisplayDoctorsList: {
    screen: DisplayDoctorsList,
    navigationOptions: ({ navigation }) => ({
      title: 'Doctors',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  DisplayHospitalsList: {
    screen: DisplayHospitalsList,
    navigationOptions: ({ navigation }) => ({
      title: 'Hospitals',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  paymentScreen: {
    screen: paymentScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Payment',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  PatientsRegisterScreen: {
    screen: PatientsRegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Payment',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  PatientsInfoScreen: {
    screen: PatientsInfoScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Payment',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  HospitalPublicProfile: {
    screen: HospitalPublicProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Hospital details',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  DoctorPublicProfile: {
    screen: DoctorPublicProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Doctor Details',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  PatientsScreen: {
    screen: PatientsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Patients',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },

  PatientsScreen2: {
    screen: PatientsScreen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Patients',
      //headerLeft: ()=> <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  }

});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Setting Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
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
      title: 'Appointment Details',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
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
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FifthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: PatientCalenderScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SixthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: ManageStaffProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Staff Profile Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});


const SeventhActivity_stackNavigator = createStackNavigator({
  First: {
    screen: HospitalScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Hospital Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const EigthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: PharmacyScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Pharmacy Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const NinthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: LabScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Lab Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const TenthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: ManageStaffScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Manage Staff Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const EleventhActivity_stackNavigator = createStackNavigator({
  First: {
    screen: PharmacyOrdersScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Pharmacy Orders Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const TwelthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: MedicinesScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Medicines Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirteenthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: LabOrdersScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Lab Orders Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FouteenthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: ReportsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Reports Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FifteenthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: PatientsInfoScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Patients Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SixteenthActivity_stackNavigator = createStackNavigator({
  First: {
    screen: DepartmentConfirmationScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Department Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Twentyone_stackNavigator = createStackNavigator({
  First: {
    screen: CustomerDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Customer Details',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Twentytwo_stackNavigator = createStackNavigator({
  First: {
    screen: PatientAppointments,
    navigationOptions: ({ navigation }) => ({
      title: 'Patient Appointment Details',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
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
  ManageCustomerAdminProfieScreen: {
    screen: FifthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Manage Customer profile Screen',
    },
  },
  ManageStaffProfileScreen: {
    screen: SixthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Manage Staff profile Screen',
    },
  },
  HospitalScreen: {
    screen: SeventhActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Hospital Screen',
    },
  },
  PharmacyScreen: {
    screen: EigthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Pharmacy Screen',
    },
  },
  LabScreen: {
    screen: NinthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Lab Screen',
    },
  },
  ManageStaffScreen: {
    screen: TenthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Manage Staff Screen',
    },
  },
  DepartmentConfirmationScreen: {
    screen: SixteenthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Department Staff Screen',
    },
  },
  PharmacyOrdersScreen: {
    screen: EleventhActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Pharmacy Orders Screen',
    },
  },
  MedicinesScreen: {
    screen: TwelthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Medicines Screen',
    },
  },
  LabOrdersScreen: {
    screen: ThirteenthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Lab Orders Screen',
    },
  },
  ReportsScreen: {
    screen: FouteenthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Reports Screen',
    },
  },
  PatientsInfoScreen: {
    screen: FifteenthActivity_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Patients Screen',
    },
  },
  // PatientsAppointment: {
  //   screen: FirstActivity_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Appointment Details',
  //   },
  // },

  CustomerDetails: {
    screen: Twentyone_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Customer Details',
    },
  },

  PatientAppointments: {
    screen: Twentytwo_stackNavigator,
    navigationOptions: {
      drawerLabel: 'Patient Appointment Details',
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
      headerShown: false,

    },
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: {
      title: 'Registration',
      headerShown: false,

    },
  },
  StaffInfoScreen: {
    screen: StaffInfoScreen,
    navigationOptions: {
      title: 'Staff Personal Information',
      headerShown: false,
    },
  },
  ConfirmationScreen: {
    screen: ConfirmationScreen,
    navigationOptions: {
      title: 'Confirmation screen',
      headerShown: false,
    },
  },
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },

});


const OtherExternal = createStackNavigator({
  App: { screen: App, navigationOptions: { headerShown: false } },
  HospitalDetailsScreen: {
    screen: HospitalDetailsScreen,
    navigationOptions: { title: 'HospitalDetailsScreen' },
  },

  PharmacyDetailsScreen: {
    screen: PharmacyDetailsScreen,
    navigationOptions: { title: 'PharmacyDetailsScreen' },
  },

  LabDetailsScreen: {
    screen: LabDetailsScreen,
    navigationOptions: { title: 'LabDetailsScreen' },
  },

  StaffDetailsScreen: {
    screen: StaffDetailsScreen,

    navigationOptions: { title: 'StaffDetailsScreen' },

  },

  HospitalOverview: {
    screen: HospitalOverview,
    navigationOptions: { title: 'HospitalOverview' },
  },

  LabOverview: {
    screen: LabOverview,
    navigationOptions: { title: 'LabOverview' },
  },
  StaffOverview: {
    screen: StaffOverview,
    navigationOptions: { title: 'StaffOverview' },
  },
  PharmacyOverview: {
    screen: PharmacyOverview,
    navigationOptions: { title: 'PharmacyOverview' },
  },

  PatDoctorDetails: {
    screen: PatDoctorDetails,
    navigationOptions: { title: 'DoctorDetails' },
  },

  HealthInformationDetails: {
    screen: HealthInformationDetails,
    navigationOptions: { title: 'HealthInformationDetails' },
  },

  Prescription: {
    screen: Prescription,
    navigationOptions: { title: 'Prescription' },
  },

  Labreport: {
    screen: Labreport,
    navigationOptions: { title: 'Labreport' },
  },

  PrescriptionOrders: {
    screen: PrescriptionOrders,
    navigationOptions: { title: 'PrescriptionOrders' },
  },

  LabOrderDetails: {
    screen: LabOrderDetails,
    navigationOptions: { title: 'LabOrderDetails' },
  },

  PatientDetailsScreen: {
    screen: PatientDetailsScreen,
    navigationOptions: { title: 'PatientDetailsScreen' },
  },

  PatientAppointments: {
    screen: PatientAppointments,
    navigationOptions: { title: 'PatientAppointments' },
  },
  MedicineAddScreen:{
    screen:MedicineAddScreen,
    navigationOptions:{title:'MedicineAddScreen'},
  },
  MedicineViewScreen:{
    screen:MedicineViewScreen,
    navigationOptions:{title:'MedicineViewScreen'},
  },

});
export default createAppContainer(OtherExternal);
