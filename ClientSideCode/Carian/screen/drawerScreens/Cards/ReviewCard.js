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


export default class ReviewCard extends ValidationComponent {
    render() {
        return (
            <View style={{ backgroundColor: 'white', }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 20, width: '90%' }}>
                    <View style={{ flex: 1, flexDirection: 'row', width: '90%' }}>
                        <View style={styles.profileHeaderPicCircle}>
                            <Text style={{ fontSize: 20, color: '#307ecc' }}>{this.props.review.name.charAt(0)}
                        </Text>
                        </View>
                        <View style={{ justifyContent: "center", alignContent: 'center', alignSelf: 'center', }}>
                            <Text style={styles.profileHeaderText}>{this.props.review.name}</Text>
                            <Text style={styles.profileHeaderText}>{this.props.review.date}</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "center", alignContent: 'center', alignSelf: 'center', }}>
                        <Text style={styles.profileHeaderText}>{this.props.review.rating}</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center', width: '90%', marginLeft: 20 }}>
                    <Text numberOfLines={5}>{this.props.review.comment}</Text>
                </View>
                <View key={this.props.review.id} style={{borderTopColor: 'black', borderTopWidth: 1, marginLeft:20, marginRight:20, marginTop:10}}/>

            </View>
        )
    }
};