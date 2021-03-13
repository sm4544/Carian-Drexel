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

import styles from '../../styles/commonStyles';     
import styles1 from '../../styles/DoctorProfileStyles';
import ValidationComponent from 'react-native-form-validator';
import { Table, Row, Rows } from 'react-native-table-component';
import { labOrderDetails } from '../services/customerDetailsService'

export default class LabOrderDetails extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      selectedItems : [],
      profileId:'',
      
      orderid: this.props.navigation.state.params.orderid,
      tableHead: ['S.NO', 'Test Name', 'Category', 'Price'],
      tableData: [
 
      ]
    };
  }

  

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems : selectedItems});
    console.log(selectedItems);
  };

  componentDidMount(){
    this.onPressSubmit();
  }


  onPressSubmit = () => {

    var i;
    var tableData1 = [];
    console.log("wrknghrs")

    labOrderDetails(this.state.orderid).then((res) => {

        // this.setState({patientdetails:res.patient[0]});
        console.log(res)
        
            tableData1.push([1,res[0].name,res[0].category,res[0].price]);
            this.setState({tableData:tableData1});
            console.log(this.state.tableData);

    
        });
  

  }


 

  render() {
    const { selectedItems } = this.state;
    

    return ( 
        (
            <SafeAreaView style={styles.containerMultiSelecet}>
                <ScrollView >
              <View style={styles.containerMultiSelecet}>
 


              </View>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles1.tableHeader} textStyle={styles1.tableHeaderText}/>
          <Rows data={this.state.tableData} style={styles1.tableRowstyle} textStyle={styles1.tableRowText}/>
        </Table>
            
        </ScrollView>
            </SafeAreaView>
          )
    );
        
    }  
}
        
