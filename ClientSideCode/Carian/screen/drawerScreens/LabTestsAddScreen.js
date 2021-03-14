import React, {  Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import MultiSelect from 'react-native-multiple-select';
import styles from '../../styles/commonStyles';     
import ValidationComponent from 'react-native-form-validator';
import ActionButton from 'react-native-action-button';
import { getAllLabTests } from '../services/LabService';


export default class LabTestsAddScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      selectedItems : [],
      profileId:'',
      items:[],
    };
  }

  componentDidMount() {
    var items = []
    getAllLabTests()
      .then(results => {
        results.forEach((data) => {
          items.push({
            id: data.id,
            name: data.name
          });

        });
      });
    this.setState({
      items: items
    });

  }

  

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems : selectedItems});
    console.log(selectedItems);
  };

  

  render() {
    const { selectedItems } = this.state;
    const profileid = this.props.navigation.state.params.profileid;
    

    return ( 
        (
            <SafeAreaView style={styles.containerMultiSelecet}>
              <View style={styles.containerMultiSelecet}>
                <Text style={styles.titleTextMulti}>Select Lab TESTS which are going to add</Text>
                <View style={styles.space}/>
                <MultiSelect
                  hideTags
                  items={this.state.items}
                  uniqueKey="id"
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={selectedItems}
                  selectText="Pick Items"
                  searchInputPlaceholderText="Search Items..."
                  onChangeInput={(text) => console.log(text)}
                  tagRemoveIconColor="#CCC"
                  tagBorderColor="#CCC"
                  tagTextColor="#CCC"
                  selectedItemTextColor="#CCC"
                  selectedItemIconColor="#CCC"
                  itemTextColor="#000"
                  displayKey="name"
                  searchInputStyle={{color: '#CCC'}}
                  submitButtonColor="#48d22b"
                  submitButtonText="Submit"
                />
              </View>

              {this.state.flagDep ? 
        (<TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.props.navigation.navigate('ReportsScreen'),
            this.setState({flagDep: false })}
          } >
          <Text style = {styles.appButtonText} > ADD </Text> 
          </TouchableOpacity>         
        ) : null
      } 
 <ActionButton buttonColor="rgba(231,76,60,1)"  onPress={() => this.props.navigation.navigate('LabTestsDetailsScreen', {selectedItems: this.state.selectedItems,profileid:profileid})}>
        </ActionButton> 
            </SafeAreaView>
          )
    );
        
    }  
}
        
