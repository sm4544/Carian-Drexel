import React, { Component, useState } from "react";
import { PostProfileApi } from '../services/profileService';
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
            password: '',
            username: '',
            securityQuestion: '',
            securityAnswer: ''
        };
        this.onPressRegister = this.onPressRegister.bind(this);
        this.isvalidForm = this.isvalidForm.bind(this);

    }
    isvalidForm = () => {
        return this.validate({
            email: { email: true, required: true },
            password: { password: true, required: true, minlength: 3 },
            firstName: { required: true },
            lastName: { required: true },
            mobileNumber: { numbers: true, required: true },
            profile_type: { required: true },
            username: { required: true },
            securityQuestion: { required: true },
            securityAnswer: { required: true }
        });
    }
    onPressRegister = () => {
        if (this.isvalidForm()) {
            const body = JSON.stringify({
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                username: this.state.username,
                profile_type: this.state.profile_type,
                security_question: this.state.securityQuestion,
                security_answer: this.state.securityAnswer,
                date_of_birth: '1988-08-08',
                profile_pic: 'default'
            });
            console.log(body)
            PostProfileApi(body).then((res) => {
                console.log(res);
                if (res.Message == 'Added Profile') {                    
                    if ((this.state.profile_type == 'Customer') || (this.state.profile_type == 'Admin')) {
                        this.props.navigation.navigate('ConfirmationScreen', {name : this.state.firstName+ ' ' + this.state.lastName});
                    } else {
                        this.props.navigation.navigate('StaffInfoScreen', {name : this.state.firstName+ ',' + this.state.lastName, profileId: res.ProfileID, profile_type: this.state.profile_type});
                    }                    
                }
                else {
                    return false;
                }
            });

        } else {
            //this.props.navigation.navigate('StaffInfoScreen')
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
                            placeholder="User Name"
                            placeholderTextColor="white"
                            ref="username" onChangeText={(username) => this.setState({ username })}
                            value={this.state.username} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("username")}
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

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Security Question"
                            placeholderTextColor="white"
                            ref="securityQuestion" onChangeText={(securityQuestion) => this.setState({ securityQuestion })}
                            value={this.state.securityQuestion} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("securityQuestion")}
                    </Text> : null}

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Security Q Answer"
                            placeholderTextColor="white"
                            ref="securityAnswer" onChangeText={(securityAnswer) => this.setState({ securityAnswer })}
                            value={this.state.securityAnswer} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("securityAnswer")}
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
