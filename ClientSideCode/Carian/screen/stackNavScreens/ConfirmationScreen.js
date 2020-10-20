import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from '../../styles/commonStyles';

export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        
      }
    render() {
        
        return (
            <View style={styles.container}>
                <Text style={styles.AppTitle}>CARIAN</Text>

                <Text style={styles.ConfirmationText}>Congratualtions Test, Test! {"\n"} You are Registered successfully. {"\n"} Click below to go to Login</Text> 
                                    
                <TouchableOpacity style={styles.button}

                    onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonText}> Go to Sign in</Text>
                </TouchableOpacity>

            </View>

        );

    }
};