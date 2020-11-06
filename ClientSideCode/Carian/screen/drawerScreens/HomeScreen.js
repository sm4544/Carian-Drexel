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
} from 'react-native';
import styles from '../../styles/homeScreenStyles';

import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default class HomeScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityArray: [{ label: 'Hyd', value: 'hyd' }, { label: 'vij', value: 'vij' }],
            hospitalCount:'100',
            customerCount:'1000',
            doctorsCount:'150',
            reviewCount:'1500',
            specialists:[{image:'', specialist:'Dental', description:'make an appointment for toothache'}, {image:'', specialist:'Dental', description:'make an appointment for toothache'}],
            topDoctors:[{name:'Test, Test', qualification:'MBBS', Specilazation:'Dental', hospitalName:'Apollo Hospital', area:'nagar', city:'Hyderabad'}]
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.AppTitle}>CARIAN</Text>
                    <DropDownPicker
                        items={this.state.cityArray}
                        defaultValue={this.state.city}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#307ecc', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
                        onChangeItem={item => this.setState({
                            city: item.value
                        })}
                    />

                    <Text style={styles.text}>Find Hospitals by Symptoms</Text>

                    <Text style={styles.text}>Find Hospitals by Specilazation</Text>

                    <Text style={styles.text}>Hospitals near me</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Show All Hospitals</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>Doctors near me</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Show All Doctors</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>Our Strenth</Text>
                    <Text style={styles.text}>Customers {this.state.customerCount}</Text>
                    <Text style={styles.text}>Hospitals {this.state.hospitalCount}</Text>
                    <Text style={styles.text}>Doctors {this.state.doctorsCount}</Text>

                    <Text style={styles.text}>Reviews {this.state.reviewCount}</Text>

                    <Text style={styles.text}>About US</Text>

                </View>
            </ScrollView>

        )
    }
};

