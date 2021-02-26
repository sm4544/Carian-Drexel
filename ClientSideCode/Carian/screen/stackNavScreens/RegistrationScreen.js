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
import { launchImageLibrary } from 'react-native-image-picker';



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
            securityAnswer: '',
            photo: { uri: "https://reactjs.org/logo-og.png" },
        };
        this.onPressRegister = this.onPressRegister.bind(this);
        this.isvalidForm = this.isvalidForm.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
        this.createFormData = this.createFormData.bind(this);
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

    createFormData = (photo, body) => {
        const data = new FormData();
      
        data.append('photo', {
          name: photo.fileName,
          type: photo.type,
          uri:
            Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
        });
      
        Object.keys(body).forEach((key) => {
          data.append(key, body[key]);
        });
      
        return data;
      };

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
                        this.props.navigation.navigate('ConfirmationScreen', { name: this.state.firstName + ' ' + this.state.lastName });
                    } else {
                        this.props.navigation.navigate('StaffInfoScreen', { name: this.state.firstName + ',' + this.state.lastName, profileId: res.ProfileID, profile_type: this.state.profile_type });
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

    chooseFile = () => {
        let options = {
          mediaType: 'photo',
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        console.log(this.state.photo)
        launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
          }
          console.log('base64 -> ', response.base64);
          console.log('uri -> ', response.uri);
          console.log('width -> ', response.width);
          console.log('height -> ', response.height);
          console.log('fileSize -> ', response.fileSize);
          console.log('type -> ', response.type);
          console.log('fileName -> ', response.fileName);
          this.setState({ photo: response });
          console.log(this.state.photo)
        });
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

        var securityQuestionOptions = [
            { label: 'What was the house number and street name you lived in as a child?', value: 'What was the house number and street name you lived in as a child?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'What were the last four digits of your childhood telephone number?', value: 'What were the last four digits of your childhood telephone number?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'What primary school did you attend?', value: 'What primary school did you attend?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'In what town or city was your first full time job?', value: 'In what town or city was your first full time job?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'In what town or city did you meet your spouse or partner?', value: 'In what town or city did you meet your spouse or partner?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'What is the middle name of your oldest child?', value: 'What is the middle name of your oldest child?', icon: () => <Icon name="flag" size={18} color="#900" /> },


            { label: 'What are the last five digits of your drivers license number?', value: 'What are the last five digits of your drivers license number?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'What is your grandmothers (on your mothers side) maiden name?', value: 'What is your grandmothers (on your mothers side) maiden name?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'What is your spouse or partners mothers maiden name?', value: 'What is your spouse or partners mothers maiden name?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'In what town or city did your parents meet?', value: 'In what town or city did your parents meet?', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'What time of the day were you born? (hh:mm)', value: 'What time of the day were you born? (hh:mm)', icon: () => <Icon name="flag" size={18} color="#900" /> },
            { label: 'What time of the day was your first child born? (hh:mm)', value: 'What time of the day was your first child born? (hh:mm)', icon: () => <Icon name="flag" size={18} color="#900" /> },
        ];


        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.AppTitle}>CARIAN</Text>

                    <TouchableOpacity onPress={() => this.chooseFile()}>
                        <Image source={this.state.photo} style={styles.profileImage}>

                        </Image>
                    </TouchableOpacity>

                    <Text style={styles.label}>Select who you are*</Text>
                    <DropDownPicker
                        items={data}
                        defaultValue={this.state.profile_type}
                        containerStyle={{ height: 60 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
                        onChangeItem={item => this.setState({
                            profile_type: item.value
                        })}
                    />
                    <Text style={styles.label}>First Name*</Text>
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
                    <Text style={styles.label}>Last Name*</Text>
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
                    <Text style={styles.label}>Mobile Number*</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="123456789"
                            placeholderTextColor="white"
                            keyboardType="number-pad"
                            ref="mobileNumber" onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
                            value={this.state.mobileNumber} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("mobileNumber")}
                    </Text> : null}
                    <Text style={styles.label}>Email address*</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Test@gmail.com"
                            placeholderTextColor="white"
                            ref="email" onChangeText={(email) => this.setState({ email })}
                            value={this.state.email} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("email")}
                    </Text> : null}
                    <Text style={styles.label}>User Name*</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="test1234"
                            placeholderTextColor="white"
                            ref="username" onChangeText={(username) => this.setState({ username })}
                            value={this.state.username} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("username")}
                    </Text> : null}
                    <Text style={styles.label}>Password*</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="*********"
                            placeholderTextColor="white"
                            ref="password" onChangeText={(password) => this.setState({ password })}
                            value={this.state.password} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("password")}
                    </Text> : null}
                    <Text style={styles.label}>Security Question*</Text>
                    <DropDownPicker
                        items={securityQuestionOptions}
                        defaultValue={this.state.securityQuestion}
                        containerStyle={{ height: 60 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
                        onChangeItem={item => this.setState({
                            securityQuestion: item.value
                        })}
                    />


                    <Text style={styles.label}>Security Question Answer*</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder="puppy"
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
