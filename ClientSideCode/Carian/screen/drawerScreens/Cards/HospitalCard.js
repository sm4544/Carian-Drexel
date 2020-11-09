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
            <View style={styles.cardContainer}>                
                <CardView
                    cardElevation={10}
                    cardMaxElevation={10}
                    cornerRadius={5}
                    style={styles.hospitalCard}>
                    <View style={styles.setFlexRow}>
                        <View style={styles.positionImage}>
                            <ImageBackground source={this.props.hospital.image} style={styles.hospitalImage}/>                         
                            
                        </View>
                        <View  style={styles.imageRightPosition}>
                            <Text style={styles.cardText}>{this.props.hospital.name}</Text>
                            <Text style={styles.cardSubBoldText}>{this.props.hospital.type}</Text>
                            <Text style={styles.cardSubItalicText}>{this.props.hospital.area}, {this.props.hospital.city}</Text>
                            <Text style={styles.cardSubBoldText}>{this.props.hospital.avgRating}({this.props.hospital.totalNoOfReviews} Stories) .{this.props.hospital.totalNoOfDoctors} Doctors</Text>
                        </View>

                    </View>
                   
                </CardView>
                
            </View>
        )
    }
};