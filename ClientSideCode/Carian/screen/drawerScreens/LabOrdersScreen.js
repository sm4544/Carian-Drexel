import React from 'react';
import { View, Text } from 'react-native';

const LabOrdersScreen = () => {
    global.currentScreenIndex = 'LabOrdersScreen';
    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
            <Text style={{ fontSize: 23, marginTop: 10 }}>LabOrdersScreen</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Example to Dynamically Change Drawer/Sidebar Options in React Navigation Drawer
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
            LabOrdersScreen

            </Text>
        </View>
    );
};

export default LabOrdersScreen;