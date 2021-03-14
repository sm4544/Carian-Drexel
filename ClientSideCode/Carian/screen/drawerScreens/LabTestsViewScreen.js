import React, {  Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView 
} from 'react-native';

import MultiSelect from 'react-native-multiple-select';
import styles from '../../styles/commonStyles';     
import ValidationComponent from 'react-native-form-validator';
import { Table, Row, Rows } from 'react-native-table-component';
import { getMyLabTests , getAllLabTests} from '../services/LabService';

export default class LabTestsViewScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      selectedItems : [],
      profileId:'',
      tableHead: ['S.NO', 'Test Name'],
      tableData: [],
      items:[],
    };
  }


  componentDidMount() {

    tableData=[]
    id=0;
    const body = 1
    getMyLabTests(body)
      .then(results => {
        results.forEach((data) => {
          id=id+1
          tableData.push([id,
             data.name
          ]);

        });
      });
    this.setState({
      tableData: tableData
    });

    var items = []
    getAllLabTests()
      .then(results => {
        results.forEach((data) => {
          items.push({
            id: data.id,
            name: data.name,
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
    

    return ( 
        (
            <SafeAreaView style={styles.containerMultiSelecet}>
                <ScrollView >
              <View style={styles.containerMultiSelecet}>
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
                 
                />
              </View>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head}/>
          <Rows data={this.state.tableData} style={styles.head} textStyle={styles.text}/>
        </Table>
            
        </ScrollView>
            </SafeAreaView>
          )
    );
        
    }  
}
        
