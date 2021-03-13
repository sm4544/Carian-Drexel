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
import { getMyPharmacyMedicine , getAllMedicine} from '../services/MedicineService';


export default class MedicineViewScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      selectedItems : [],
      profileId:'',
      tableHead: ['S.NO', 'Medicine Name', 'content'],
      tableData: [],
      items:[],
    };
  }


  componentDidMount() {

    const tableData=[]
    id=0;
    const body = JSON.stringify({"pharmacy":1})
    getMyPharmacyMedicine(body)
      .then(results => {
        results.forEach((data) => {
          id=id+1
          tableData.push([id,
             data.drug_name,data.dosage
          ]);

        });
      });
    this.setState({
      tableData: tableData
    });

    var items = []
    getAllMedicine()
      .then(results => {
        results.forEach((data) => {
          items.push({
            id: data.id,
            name: data.drug_name+'-'+data.dosage
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
                <ScrollView>
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
          <Rows data={this.state.tableData} style={styles.head}/>
        </Table>
            
        </ScrollView>
            </SafeAreaView>
          )
    );
        
    }  
}
        
