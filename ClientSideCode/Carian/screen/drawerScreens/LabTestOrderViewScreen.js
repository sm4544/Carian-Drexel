import React, {  Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert  
} from 'react-native';


import styles from '../../styles/commonStyles';     
import ValidationComponent from 'react-native-form-validator';
import { Table, Row, Rows } from 'react-native-table-component';



export default class LabTestOrderViewScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      selectedItems : [],
      order_status:'',
      profileId:'',
      tableHead: ['S.NO', 'Test Name'],
      tableData:[],
      items:[],
      comment:''
    };
  }
 


  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {

    const order_id =this.props.navigation.state.params.order_id;
    const patient_name= this.props.navigation.state.params.patient_name;
    const order_status=this.props.navigation.state.params.order_status;
    const doctor_id=this.props.navigation.state.params.doctor_id;
    const Doctor_name=this.props.navigation.state.params.Doctor_name;
    const Hospital_id=this.props.navigation.state.params.Hospital_id;
    const gender=this.props.navigation.state.params.gender;
    const Hospital_name=this.props.navigation.state.params.Hospital_name
    const order_date=this.props.navigation.state.params.order_date;
   const tableData= this.props.navigation.state.params.tableData;
  
 
    return (
      <View>
      
      <Text style={styles.text}>
      Order details</Text>
   
       <Text>NAME : {patient_name}</Text>
       <Text>GENDER : {gender}</Text>
       <Text>ORDER NO : {order_id}</Text>
       <Text>ORDER DATE : {order_date}</Text>
       <Text>DOCTOR NAME : {Doctor_name}</Text>
       <Text>HOSPITAL NAME : {Hospital_name}</Text>
      
       <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head}/>
          <Rows data={tableData} style={styles.head}/>
        </Table>
        
        
      </View>
    )
  }
}
 
