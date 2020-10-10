import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles/commonStyles';

export default class Confirmation extends React.Component {

    render() {
        const { role, name } = this.props.route.params;
        return (
            <View style={styles.container}>
                <Text style={styles.AppTitle}>CARIAN</Text>

                    <Text style={styles.ConfirmationText}>Congratualtions {JSON.stringify(name)}! {"\n"} You are Registered successfully. {"\n"} Click below to go to Login</Text> :
                                    
                <TouchableOpacity style={styles.button}

                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}> Go to Sign in</Text>
                </TouchableOpacity>

            </View>

        );

    }
};