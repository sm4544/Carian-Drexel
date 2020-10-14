import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
    global.currentScreenIndex = 'HomeScreen';
    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
            <Text style={{ fontSize: 23, marginTop: 10 }}>Home Screen</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Example to Dynamically Change Drawer/Sidebar Options in React Navigation Drawer
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Home

            </Text>
        </View>
    );
};

export default HomeScreen;