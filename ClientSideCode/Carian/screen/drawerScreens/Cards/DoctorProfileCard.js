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


export default class DoctorProfileCard extends ValidationComponent {
    render() {
        return (
            <View style={styles.cardContainer}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.hospitalCard}>
                    <View style={styles.setFlexRow}>
                        <View style={styles.positionImage}>
                            <Image source={this.props.doctor.image} style={styles.profileImage} />
                        </View>
                        <View style={styles.imageRightPosition}>
                            <Text style={styles.cardText}>Dr. {this.props.doctor.name}({this.props.doctor.highestDegree})</Text>
                            <Text style={styles.cardSubBoldText}>{this.props.doctor.specialization}. {this.props.doctor.overAllExperience} Years exp</Text>
                            <Text style={styles.cardSubItalicText}>$ {this.props.doctor.doctor_fee} Fees</Text>
                            <Text style={styles.cardSubItalicText}>{this.props.doctor.area}, {this.props.doctor.city}</Text>
                            <Text style={styles.cardSubBoldText}>{this.props.doctor.avgRating}({this.props.doctor.totalNoOfReviews} Stories )</Text>
                        </View>
                    </View>
                </CardView>
            </View>
        )
    }
};