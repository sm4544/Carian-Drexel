import ValidationComponent from 'react-native-form-validator';
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import styles from '../../../styles/homeScreenStyles';
import CardView from 'react-native-cardview';

export default class SpecialityCard extends ValidationComponent {
    render() {
        return (
            <View style={styles.container}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.card}>
                    <ImageBackground source={this.props.data.image} style={styles.image}>
                        <Text style={styles.cardText}>{this.props.data.name}</Text>
                    </ImageBackground>
                </CardView>
            </View>
        )
    }
};