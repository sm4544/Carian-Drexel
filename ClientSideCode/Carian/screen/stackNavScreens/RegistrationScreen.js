import React, { Component, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    style
} from "react-native";

import styles from '../../styles/commonStyles';
import DropdownMenu from 'react-native-dropdown-menu';
import ValidationComponent from 'react-native-form-validator';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default class Register extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            profile_type: '',
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            password: ''
        };
    }
    onPressRegister = () => {
        const isvalid = this.validate({
            email: { email: true, required: true },
            password: { password: true, required: true, minlength: 8 },
            firstName: { required: true },
            lastName: { required: true },
            mobileNumber: { numbers: true, required: true },
            profile_type: { required: true }
        });
        if (isvalid) {
            try {
                fetch("http://127.0.0.1:8000/Profiles/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        first_name: this.state.firstName,
                        last_name: this.state.lastName,
                        email: this.state.email,
                        password: this.state.password,
                        username: this.state.email.split('@')[0],
                        profile_type: this.state.profile_type
                    }),
                }).then(resp => {
                    setTimeout(function () {
                        if (resp.status != 201) {
                            alert("Error occured while posting data :" + resp.status + " : " + resp.statusText);
                            return false;
                        }
                    }, 0);
                });
            } catch (e) {
                console.log(e);
            }
            this.props.navigation.navigate('LoginScreen');
        }
        else {
            return false;
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        var data = [
            { label: 'Customer', value: 'Customer', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Admin', value: 'Admin', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Doctor', value: 'Doctor', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Staff', value: 'Staff', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'LabAssistant', value: 'LabAssistant', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'Pharmacist', value: 'Pharmacist', icon: () => <Icon name="flag" size={18} color="#900" /> },

        ];


        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.AppTitle}>CARIAN</Text>

                    <DropDownPicker
                        items={data}
                        defaultValue={this.state.profile_type}
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
                        onChangeItem={item => this.setState({
                            profile_type: item.value
                        })}
                    />

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="firstName"
                            placeholderTextColor="white"
                            ref="firstName" onChangeText={(firstName) => this.setState({ firstName })}
                            value={this.state.firstName} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("firstName")}
                    </Text> : null}

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            placeholderTextColor="white"
                            ref="lastName" onChangeText={(lastName) => this.setState({ lastName })}
                            value={this.state.lastName} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("lastName")}
                    </Text> : null}

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Mobile Number"
                            placeholderTextColor="white"
                            keyboardType="number-pad"
                            ref="mobileNumber" onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
                            value={this.state.mobileNumber} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("mobileNumber")}
                    </Text> : null}

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="white"
                            ref="email" onChangeText={(email) => this.setState({ email })}
                            value={this.state.email} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("email")}
                    </Text> : null}

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="white"
                            ref="password" onChangeText={(password) => this.setState({ password })}
                            value={this.state.password} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("password")}
                    </Text> : null}
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.onPressRegister()}>

                        <Text style={styles.buttonText}>Register/Submit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        <Text style={styles.hyperlink}> Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    };
};
