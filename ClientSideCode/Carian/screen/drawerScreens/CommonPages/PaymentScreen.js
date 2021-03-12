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
import { postAppointment } from '../../services/profileService'

export default class paymentScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {

            paymentType: '',
            selectedDate:'',
            selectedTime:'',
            doctor:{},
            profileId:'',
            patientId:'',
            hospital:{},
        },

        this.onpressingConfirm = this.onpressingConfirm.bind(this);
    }

    onpressingConfirm =() => {
        
        const body= JSON.stringify({ 
            patient_id: this.state.patientId,   
            doctor_id: this.state.doctor.id, 
            hospital_id: this.state.hospital.id,  
            appointment_time: this.state.selectedDate,
            timeslot: this.state.selectedDate+ ' ' + this.state.selectedTime, 
            timeslot_end: this.state.selectedDate+ ' ' + this.state.selectedTime, 
            appointment_status: "pending", 
            profile_id: this.state.profileId,
        }) ;
        console.log(body)
        Promise.all(postAppointment(body).then((data) => {
            console.log(data)
            
          }));
    }
    componentDidMount() {
        this.setState({selectedDate: this.props.navigation.state.params.selectedDate,
            selectedTime: this.props.navigation.state.params.selectedTime,
            doctor: this.props.navigation.state.params.doctor, 
            profileId: this.props.navigation.state.params.profileId,
            patientId: this.props.navigation.state.params.patientId,
            hospital: this.props.navigation.state.params.hospital})
    }
    render() {
        var data = [
            { label: 'Cash', value: 'Cash', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Debit Card', value: 'Debit Card', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Credit Card', value: 'Credit Card', icon: () => <Icon name="flag" size={18} color="#900" /> },
        ];

        return (
            <View style={styles.container2}>


                <Text style={styles.payment}>${this.state.doctor.doctor_fee} </Text>

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

                {this.state.paymentType == 'Cash' ? <Text>Pay ${this.state.doctor.doctor_fee} at the Hospital</Text>
                : null}

                {this.state.paymentType == 'Cash' ? <TouchableOpacity style={styles.addNewButton2} onPress={() => this.onpressingConfirm()}>
                    <Text style={styles.payButtonText}>Confirm Appointment</Text>
                </TouchableOpacity>: null}



            </View>
        )
    };
}