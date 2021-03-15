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

import MultiSelect from 'react-native-multiple-select';
import styles from '../../styles/commonStyles';     
import ValidationComponent from 'react-native-form-validator';
import { Table, TableWrapper, Row, Cell} from 'react-native-table-component';

const orders= [{
  order_id : "1234",
  patient_name: "rakesh",
  order_status:"initiated",
  doctor_id: "10",
  Doctor_name: "Dr.Shekhar",
  Hospital_id: "12",
  gender:"male",
  Hospital_name : "PennMedicine",
  order_date : '03/06/2021',
  labs : [[ "1" ,'ECHO'], [ "2",'MRI'] , ["3",'CT_SCAN']]
  },
  {
    order_id : "1114",
    patient_name: "Mahesh",
    order_status:"initiated",
    doctor_id: "11",
    Doctor_name: "Dr.Gopal",
    Hospital_id: "12",
    gender:"male",
    Hospital_name : "KIMS HOSPITAL",
    order_date : '03/06/2021',
    labs : [[ "1" ,'ECHO'], [ "2",'MRI'] , ["3",'CT_SCAN']]
    },
    {
      order_id : "1999",
      patient_name: "Yogi",
      order_status:"initiated",
      doctor_id: "10",
      Doctor_name: "Dr.Sharvin",
      Hospital_id: "12",
      gender:"male",
      Hospital_name : "Rainbow care",
      order_date : '03/06/2021',
      labs : [[ "1" ,'ECHO'], [ "2",'MRI'] , ["3",'CT_SCAN']]
      },
      {
        order_id : "1034",
        patient_name: "Dinakar",
        order_status:"initiated",
        doctor_id: "10",
        gender:"male",
        Doctor_name: "Dr.Raju",
        Hospital_id: "12",
        Hospital_name : 'Apolo Hospital',
        order_date : '03/06/2020',
        labs : [[ "1" ,'ECHO'], [ "2",'MRI'] , ["3",'CT_SCAN']]
        }]

export default class LabOrdersScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {     
      flagDep: false,
      selectedItems : [],
      profileId:'',
      tableHead: ['Order No', 'DATE', 'STATUS'],
      tableData: [],
      items:[],
      order_id : "",
  patient_name: "",
  order_status:"",
  doctor_id: "",
  Doctor_name: "",
  Hospital_id: "",
  gender:"",
  Hospital_name : "",
  order_date : '',
  labs : []  
    };
  }

  componentDidMount(){
    var tableData=[]
    var temp=[]
    for(i=0;i<orders.length;i++){
      temp.push(orders[i].order_id)
      temp.push(orders[i].order_date)
      temp.push(orders[i].order_status)
      tableData.push(temp)
      temp=[]
    }
    this.setState({tableData:tableData})
  }
  orderinfo(index){
    for(i=0;i<orders.length;i++){
     if(orders[i].order_id== index){
       this.setState({order_id : orders[i].order_id ,
       patient_name: orders[i].patient_name,
       order_status:orders[i].order_status,
       doctor_id: orders[i].doctor_id,
       Doctor_name: orders[i].Doctor_name,
       Hospital_id: orders[i].Hospital_name,
       gender:orders[i].gender,
       Hospital_name : orders[i].Hospital_name,
       order_date : orders[i].order_date,
       labs : orders[i].labs })
     }
    }

  }  


  _alertIndex(index) {
    console.log(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const profileid = global.profileId;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => {this.orderinfo(index),this.props.navigation.navigate('LabTestOrderViewScreen', { order_id : this.state.order_id,
      patient_name: this.state.patient_name,
      order_status:this.state.order_status,
      doctor_id: this.state.doctor_id,
      Doctor_name: this.state.Doctor_name,
      Hospital_id: this.state.Hospital_id,
      gender:this.state.gender,
      Hospital_name : this.state.Hospital_name,
      order_date : this.state.order_date, tableData:this.state.labs})}}>
        <View style={styles.btn}>
          <Text style={styles.btnText,styles.textOrder}>{index}</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      <View>
        <Text style={styles.text}>
      LIST OF ORDERS</Text>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.headOrder} textStyle={styles.textOrder}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.rowOrder}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 0 ? element(rowData, cellData) : cellData} textStyle={styles.textOrder}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}
 
