import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import stylesSidebar from '../../styles/CustomSidebarMenuStyles';

const CustomSidebarMenu = props => {
  let [loginAs, setLoginAs, name, setName, profileId, setProfileId] = useState('');

  useEffect(() => {
    setLoginAs(props.navigation.getParam('login', 'defaultValue'));
    //setName(props.navigation.getParam('name', 'defaultValue'));
    //setProfileId(props.navigation.getParam('profileId', 'defaultValue'));

  }, []);

  let CustomerOptions = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'Profile',
      screenToNavigate: 'ManageCustomerAdminProfieScreen',
    },
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  let DoctorOptions = [
    {
      navOptionName: 'DashBoard',
      screenToNavigate: 'DoctorDashboardScreen',
    },
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },       
    {
      navOptionName: 'Calender',
      screenToNavigate: 'DoctorCalenderScreen',
    },
    {
      navOptionName: 'Profie',
      screenToNavigate: 'ManageStaffProfileScreen',
    },
    {
      navOptionName: 'Settings',
      screenToNavigate: 'SettingsScreen',
    },    
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  let AdminOptions = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },    
    {
      navOptionName: 'Manage Hospitals',
      screenToNavigate: 'HospitalScreen',
    },
    {
      navOptionName: 'Manage Pharmacy',
      screenToNavigate: 'PharmacyScreen',
    },
    {
      navOptionName: 'Manage Laboratory',
      screenToNavigate: 'LabScreen',
    },
    {
      navOptionName: 'Manage Doctor/Staff',
      screenToNavigate: 'ManageStaffScreen',
    },
    {
      navOptionName: 'Profile',
      screenToNavigate: 'ManageCustomerAdminProfieScreen',
    },    
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  let GuestOptions = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },       
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  let PharmacistOptions = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'Orders',
      screenToNavigate: 'PharmacyOrdersScreen',
    },
    {
      navOptionName: 'Medicines',
      screenToNavigate: 'MedicinesScreen',
    },
    {
      navOptionName: 'Profie',
      screenToNavigate: 'ManageStaffProfileScreen',
    },      
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  let LabAssistantOptions = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'Orders',
      screenToNavigate: 'LabOrdersScreen',
    },
    {
      navOptionName: 'Reports',
      screenToNavigate: 'ReportsScreen',
    },
    {
      navOptionName: 'Profie',
      screenToNavigate: 'ManageStaffProfileScreen',
    },      
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  let StaffOptions = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },    
    {
      navOptionName: 'Patients',
      screenToNavigate: 'PatientsScreen',
    },
    {
      navOptionName: 'Profie',
      screenToNavigate: 'ManageStaffProfileScreen',
    },      
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'logout') {
      props.navigation.toggleDrawer();
      props.navigation.navigate('LoginScreen');
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };

  getUser = () =>{
    if(loginAs === 'Customer'){
      return CustomerOptions;
    }else if ( loginAs == 'Admin'){
      return AdminOptions;
    }else if ( loginAs === 'Doctor'){
      return DoctorOptions;
    }else if ( loginAs === 'Staff'){
      return StaffOptions;
    }else if ( loginAs === 'LabAssistant'){
      return LabAssistantOptions;
    }else if ( loginAs === 'Pharmacist'){
      return PharmacistOptions;
    }else {
      return GuestOptions;
    }
  }
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{ fontSize: 25, color: '#307ecc' }}>
            {'About React'.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>AboutReact</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <View style={{ width: '100%', flex: 1 }}>
        {this.getUser().map((item, key) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate
                  ? '#4b9ff2'
                  : '#307ecc',
            }}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }>
            <Text style={{ fontSize: 15, color: 'white' }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};


export default CustomSidebarMenu;