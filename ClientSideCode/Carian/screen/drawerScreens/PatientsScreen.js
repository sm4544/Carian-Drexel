import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/commonStyles';

const PatientsScreen = () => {
  // global.currentScreenIndex = 'PatientsScreen';
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.AppTitle}>Patient Details</Text>
        <Text style={styles.text}>Basic Details</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Patient Name"
            placeholderTextColor="white"
            // ref="degree"
            // onChangeText={(degree) => this.setState({degree})}
            // value={this.state.degreeName}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Identification Number"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Date Of Birth/ Age"
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Sex"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Height"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Weight"
            placeholderTextColor="white"
          />
        </View>
        <Text style={styles.text}>History</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Medication History"
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Special Considerations"
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Allergies"
            placeholderTextColor="white"
          />
        </View>

        <Text style={styles.text}> Insurence Details</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Insurence company Name"
            placeholderTextColor="white"
            // ref="degree"
            // onChangeText={(degree) => this.setState({degree})}
            // value={this.state.degreeName}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Insurence Number"
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
  );
};

export default PatientsScreen;
