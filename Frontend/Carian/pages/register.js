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

import styles from '../styles/commonStyles';



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      // showAdmin: false,
      // showPatient: false,
    };
  }

  render() {
    // const { navigate } = this.props.navigation;

    this.state = {
      country: 'uk',
      role: 'CustomerDoct',
      name: 'Srini'
    };
   
    var data = [["I am Customer", "I am Admin", "I am Doctor", "i am Hospital Staff", "I am Pharmacy Assistant", "I am Lab Assistant"]];
    return (

      <View style={styles.container}>
        <Text style={styles.AppTitle}>CARIAN</Text>


        {/*
        
        <DropdownMenu
          style={{ flexHorizantal: 1 }}
          bgColor={"#CD6155"}
          tintColor={"#666666"}
          activityTintColor={"green"}
          handler={(selection, row) =>
            this.setState({ text: data[selection][row] })
          }
          data={data}
        >
        
        
        
        
        <DropDownPicker
            items={[
              { label: 'UK', value: 'uk'  },
              { label: 'France', value: 'france' },
            ]}
            defaultValue={this.state.country}
            containerStyle={{ height: 40 }}
            
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => this.setState({
              country: item.value
            })}
          />
          {this.state.country} */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="white"
          /></View>


        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>

        <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate('ConfirmationScreen', { role: this.state.role, name : this.state.role })}>

          <Text style={styles.buttonText}>Register/Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity

          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.frgtpassword}> Already have an account? Sign in</Text>
        </TouchableOpacity>
      </View>



    );
  }
};
