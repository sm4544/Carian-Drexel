import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles/commonStyles';

export default class Confirmation extends React.Component {

    render() {
        const { role, name } = this.props.route.params;
        return (
            <View style={styles.container}>
                <Text style={styles.AppTitle}>CARIAN</Text>

                {(role == 'Customer' || role == 'Admin') ? 
                <Text style={styles.ConfirmationText}>Congratualtions {JSON.stringify(name)}! Click Login button below to Login</Text> :
                    <Text style={styles.ConfirmationText}>Congratualtions {JSON.stringify(name)}! You are successfully Registered but Please wait for admin aproval to Login.Click Login button below to Go back</Text>

                }
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.frgtpassword}> Sign in</Text>
                </TouchableOpacity>

            </View>

        );

    }
};