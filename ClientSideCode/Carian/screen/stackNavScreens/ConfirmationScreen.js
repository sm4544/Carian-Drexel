import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import styles from '../../styles/commonStyles';

export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);
       
      }
    render() {
        var name = this.props.navigation.state.params.name;
        
        return (
            <View style={styles.container}>
                <Text style={styles.AppTitle}>CARIAN</Text>

                <Text style={styles.ConfirmationText}>Congratualtions {name}! </Text>
                <Text style={styles.ConfirmationText}>You are Registered successfully.  </Text>
                <Text style={styles.ConfirmationText}>Click below to go to Login</Text>
                                    
                <TouchableOpacity style={styles.button}

                    onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonText}> Go to Sign in</Text>
                </TouchableOpacity>

            </View>

        );

    }
};