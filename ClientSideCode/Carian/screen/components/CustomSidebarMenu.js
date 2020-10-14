import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import stylesSidebar from '../../styles/CustomSidebarMenuStyles';

const CustomSidebarMenu = props => {
  let [loginAs, setLoginAs] = useState('');

  useEffect(() => {
    setLoginAs(props.navigation.getParam('login', 'defaultValue'));
  }, []);

  let itemsUser = [
    {
      navOptionName: 'User Home Screen',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'User Setting Screen',
      screenToNavigate: 'SettingsScreen',
    },
    {
      navOptionName: 'Change Options for the Guest',
      screenToNavigate: 'ChangeOptionGuest',
    },
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  let itemsGuest = [
    {
      navOptionName: 'Guest Home Screen',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'Guest Setting Screen',
      screenToNavigate: 'SettingsScreen',
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
    } else if (screenToNavigate == 'ChangeOptionGuest') {
      props.navigation.toggleDrawer();
      setLoginAs('guest');
    } else if (screenToNavigate == 'ChangeOptionUser') {
      props.navigation.toggleDrawer();
      setLoginAs('user');
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };
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
        {(loginAs === 'user' ? itemsUser : itemsGuest).map((item, key) => (
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