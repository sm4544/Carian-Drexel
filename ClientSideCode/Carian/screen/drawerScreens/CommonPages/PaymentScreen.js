import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from '../../../styles/DoctorProfileStyles';
import ValidationComponent from 'react-native-form-validator';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default class paymentScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {

            paymentType: ''
        },

        this.onpressingConfirm = this.onpressingConfirm.bind(this);
    }

    onpressingConfirm =() => {
        
    }

    render() {
        const selectedDate = this.props.navigation.state.params.selectedDate;
        const selectedTime = this.props.navigation.state.params.selectedTime;
        const doctor = this.props.navigation.state.params.doctor;
        const profileId = this.props.navigation.state.params.profileId;
        const patientId = this.props.navigation.state.params.patientId;
        var data = [
            { label: 'Cash', value: 'Cash', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Debit Card', value: 'Debit Card', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Credit Card', value: 'Credit Card', icon: () => <Icon name="flag" size={18} color="#900" /> },


        ];

        return (
            <View style={styles.container2}>


                <Text style={styles.payment}>${doctor.doctor_fee} </Text>

                <Text style={styles.label}>Select payment Type*</Text>
                <DropDownPicker
                    items={data}
                    defaultValue={this.state.paymentType}
                    containerStyle={{ height: 60 }}
                    style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        width: "80%"
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
                    onChangeItem={item => this.setState({
                        paymentType: item.value
                    })}
                />

                {this.state.paymentType == 'Cash' ? <Text>Pay ${doctor.doctor_fee} at the Hospital</Text>
                : null}

                {this.state.paymentType == 'Cash' ? <TouchableOpacity style={styles.addNewButton2} onPress={() => this.onpressingConfirm()}>
                    <Text style={styles.payButtonText}>Confirm Appointment</Text>
                </TouchableOpacity>: null}



            </View>
        )
    };
}