import ValidationComponent from 'react-native-form-validator';
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    style,
    ImageBackground
} from 'react-native';
import styles from '../../../styles/homeScreenStyles';
import CardView from 'react-native-cardview';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const image = { uri: "https://reactjs.org/logo-og.png" };



export default class SpecialityCard extends ValidationComponent {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <CardView
                        cardElevation={10}
                        cardMaxElevation={10}
                        cornerRadius={5}
                        style={styles.card}>
                        <ImageBackground source={this.props.data.image} style={styles.image}>
                            <Text style={styles.cardText}>{this.props.data.name}</Text>
                        </ImageBackground>
                    </CardView>                    
                </TouchableOpacity>
            </View>

        )
    }
};