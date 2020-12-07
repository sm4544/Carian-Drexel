import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import styles from '../../styles/commonStyles';

export default class PatientsInfoScreen extends ValidationComponent {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.text}>Basic Details</Text>
          <Text style={styles.labelText}>Patient Name:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Patient Name"
              placeholderTextColor="white"
              ref="name"
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
          </View>

          <Text style={styles.labelText}>Patient phone Number:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="123456789"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Patient email address:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="test@test.com"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Patient Occupation:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="student"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Patient Date of Birth:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Date Of Birth/ Age"
              placeholderTextColor="white"
            />
          </View>
          <Text style={styles.labelText}>Patient Sex:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Sex"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Patient Martial status:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Single"
              placeholderTextColor="white"
            />
          </View>
          <Text style={styles.labelText}>Patient's height:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Height"
              placeholderTextColor="white"
            />
          </View>
          <Text style={styles.labelText}>Patient's weight:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Weight"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Patient's Blood group:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="blood group"
              placeholderTextColor="white"
            />
          </View>
          <Text style={styles.text}>History</Text>
          <Text style={styles.labelText}>Patient's Medical history (recurring problems):</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Medication History"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Patient's Allergies to Medicine:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Allergies"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.text}>Social History</Text>
          <Text style={styles.labelText}>Patient's Hobbies:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Hobbies"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Use of Tobacco (now or past):</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Tobacco"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>caffeine intake (coffee, tea, energy drinks ):</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="caffeine"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Use of Alcohol (now or past):</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Alcohol"
              placeholderTextColor="white"
            />
          </View>

          <Text style={styles.labelText}>Do you get regular physical activities:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="activities"
              placeholderTextColor="white"
            />
          </View>

          
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressRegister()}>
            <Text style={styles.buttonText}>Register/Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}


