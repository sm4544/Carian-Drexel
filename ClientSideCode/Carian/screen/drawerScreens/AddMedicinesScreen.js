import React, { Component } from 'react';

import { StyleSheet, Image,TextInput, View, TouchableOpacity, Text , ScrollView, ImageBackground, Button} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import {getPharmacyList,getMyPharmacyMedicine, postMedicineOrder} from '../services/MedicineService';
import { color } from 'react-native-reanimated';
// import icons from 'npm install react-native-vector-icons';
// import MultiSelect from 're  ct-native-multiple-select';
//  

const image = {
  uri:
    'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
};
export default class AddMedicinesScreen extends ValidationComponent {
 
    constructor(props) {   
      super(props);   
      this.state = {    
        temp:[], 
        // profileId:'', 
        show: false,
        pharmacy_id:'1',
        appointment_id:'',
        pharmacy_name:'',
        medicine_id:'',
        medcine_name:'', 
        tableData:[],
        display:false,
        selectedItems:[],
        qty:'',
        dataTable:[],
        // patient_id:''
      };
    //   this.onPressHospitalInfo = this.onPressHospitalInfo.bind(this);
   
    }
    isvalidForm = () => {
      return this.validate({
          mobileNumber: { numbers: true, required: true },
          
      });
  }

    componentDidMount(){
      getPharmacyList().then(results=> {
        console.log(results);
        temp = [];
        results.forEach((element) => {
          temp.push({label:element.name,value:element.id})
        });
        this.setState({temp: temp})
      })
    }
    getMedicines() {
      // console.log('HI');

      tableData=[]
      id=0;
      const body = JSON.stringify({"pharmacy":this.state.pharmacy_id})
      getMyPharmacyMedicine(body)
        .then(results => {
          results.forEach((data) => {
            id=id+1
            tableData.push({label:
               data.drug_name, value: data.id
          });
  
          });
        });
        console.log(tableData);
      this.setState({
        tableData: tableData
      });
    }
    onSelectedItemsChange = selectedItems => {
      this.setState({ selectedItems : selectedItems});
      this.setState({display:true});
      // console.log(selectedItems);
    };
    
    onPressAddReports =()=>{
      const sampMed=this.state.medicine_id;
      console.log(sampMed)
      dataTable= this.state.dataTable;
      const t = {[sampMed] : {"qty": this.state.qty}}
      dataTable.push(t);
      this.setState({dataTable:dataTable});
      alert('Medicine added to list, please submit to place the order!!');
    }
    onPressSubmit =(appointment_id,hospital_id,patient_id)=>{
      
      body=JSON.stringify({"appointment_id":appointment_id,"patient_id":"40","hospital_id":hospital_id,"doctor_id": profileId,"pharmacy_id":this.state.pharmacy_id,"order_status":"Initiated","medicines":[{[this.state.medicine_id] : {"qty": this.state.qty}}]})
      console.log(body);
    // console.log(this.state.dataTable);
    alert('Order placed Successfully!!');
    this.setState({display:false});
    this.setState({show:false});
    postMedicineOrder(body).then((res) => {
      console.log(res);
    });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { selectedItems } = this.state;
        const patient_id = this.props.navigation.state.params.patient_id;
        const appointment_id = this.props.navigation.state.params.appointment_id;
        const hospital_id = this.props.navigation.state.params.hospital_id;
        
      return (
      <ScrollView>     
        <View style={styles.container}>
                    <Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20, color:'red'}}>Choose the Pharmacy</Text>
                    <DropDownPicker
                   items={this.state.temp}
                   defaultValue={this.state.profile_type}
                   containerStyle={{ height: 50 }}
                   style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                   itemStyle={{
                       justifyContent: 'flex-start',
                       width: "80%"
                   }}
                   dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
                   onChangeItem={item => {this.setState({
                    pharmacy_id: item.value,
                    pharmacy_name: item.label,
                    show: true
                }),this.getMedicines()}} 
                        
                    />
                    <View style={styles.space}></View>
                    {/* <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View>
                    <View style={styles.space}></View> */}


{this.state.show ? (
  <DropDownPicker
                   items={this.state.tableData}
                   defaultValue={this.state.profile_type}
                   containerStyle={{ height: 50 }}
                   style={{ backgroundColor: 'steelblue', width: "50%", borderRadius: 18,paddingBottom:20 }}
                   itemStyle={{
                       justifyContent: 'flex-start',
                       width: "80%"
                   }}
                   dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
                   onChangeItem={item => {this.setState({
                  medicine_id: item.value,
                    medcine_name: item.label,
                    display: true
                }),this.onSelectedItemsChange()}} 
                   selectedItems={selectedItems}
                   submitButtonColor="#48d22b"
                   submitButtonText="Submit"
                   
                    />):null}
                    <View style={styles.space}></View>
                    {/* <Button title="ADD TO CART" color='#841584'/>
                    <Button title="EDIT" color="#841584"/>   */}
                    <View>
                  {this.state.display ? (
                    <View>
                    <View style={{}}>
                        <TextInput
                            style={{backgroundColor:'steelblue',fontSize:15,alignItems:'center',height:40,width:150}}
                            placeholder="Enter the quantity*"
                            placeholderTextColor="red"
                            keyboardType="number-pad"  
                            ref="qty" onChangeText={(qty) => this.setState({ qty:qty })}
                            value={this.state.qty} />
                    </View>
                    {this.isFormValid ? <Text style={styles.errormessages}>
                        {this.getErrorsInField("qty")}
                    </Text> : null}
                    <View style={styles.space}></View>
                   <TouchableOpacity onPress={()=>this.onPressAddReports()}style={{backgroundColor:'red',alignItems:'center',alignContent:'center',borderRadius:18,height:30}}>
                     <Text style={{alignItems:'center',alignContent:'center',borderRadius:18,height:50,width:40,fontSize:20,fontStyle:'italic',color:'black',paddingBottom:30}}>ADD</Text>
                   </TouchableOpacity>
                  
                   <TouchableOpacity onPress={()=>this.onPressSubmit(appointment_id,patient_id,hospital_id)}style={{backgroundColor:'green',alignItems:'center',alignContent:'center',borderRadius:18,height:30}}>
                     <Text style={{alignItems:'center',alignContent:'center',borderRadius:18,height:50,width:75,fontSize:20,fontStyle:'italic',color:'black'}}>SUBMIT</Text>
                   </TouchableOpacity>
                    </View>             
                  ):null}
                  </View>                  
</View>

</ScrollView>

      );
    }
  }

  