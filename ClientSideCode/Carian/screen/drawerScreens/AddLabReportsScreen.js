import React, { Component } from 'react';

import { StyleSheet, Image,TextInput, View, TouchableOpacity, Text , ScrollView, ImageBackground, Button} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import {getLabList, getLabReportsList} from '../services/MedicineService';
import {getMyLabTests,getAllLabTests} from '../services/LabService';
import {PostLabOrders} from '../services/customerDetailsService';

const image = {
  uri:
    'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
};
export default class AddLabReportsScreen extends ValidationComponent {
 
  constructor(props) {   
    super(props);   
    this.state = {    
      temp:[],  
      show: false,
      pharmacy_id:'',
      pharmacy_name:'',
      lab_id:'1',
      // doctorID:'',
      labReport_id:'',
      labReport_name:'',
      // name:'',
      tableData:[],
      selectedItems:[],
    };
  //   this.onPressHospitalInfo = this.onPressHospitalInfo.bind(this);
 
  }

  componentDidMount(){
    getLabList().then(results=> {
      console.log(results);
      temp = [];
      results.forEach((element) => {
        temp.push({label:element.name,value:element.id})
      });
      this.setState({temp: temp})
      console.log(temp);
    })
  }
  getReportsList() { 
    console.log('Hello');
    temp=[]
    id=0;
    const body = this.state.lab_id;
    console.log(body);
    getMyLabTests(body)
      .then(results => {
        console.log(results);
        results.forEach((data) => {
          temp.push({label:data.name,value:data.id})

        });
      });
    this.setState({
      tableData: temp
    });
  
  
  

  }
  onSelectedItemsChange = selectedItems => {
    console.log(selectedItems);
    // this.setState({ selectedItems : selectedItems});
    // console.log(selectedItems);
  };
  onPressAddReports =()=>{
    const sampMed=this.state.labReport_id;
    console.log(sampMed)
    // dataTable= this.state.dataTable;
    // const t = {[sampMed] : {"qty": this.state.qty}}
    // dataTable.push(t);
    // this.setState({dataTable:dataTable});
    alert('Reports added to list, please submit to place the order!!');
  }
  onPressSubmit =(appointment_id,patient_id,hospital_id,profileId)=>{
    body=JSON.stringify({"appointment_id":appointment_id,"patient_id":patient_id,"hospital_id":hospital_id,"doctor_id":profileId,"lab_id":this.state.lab_id,"order_status":"Initiated","labreport_id":this.state.labReport_id})
      console.log(body);
  alert('Order placed Successfully!!');
  this.setState({display:false});
  this.setState({show:false});
  PostLabOrders(body).then((res) => {
    console.log(res);
  });
  }

  render() {
      const { navigate } = this.props.navigation;
      const { selectedItems } = this.state;
      // const name = this.props.navigation.state.params.name;
      // const start_time = this.props.navigation.state.params.start_time;
      // const end_time = this.props.navigation.state.params.end_time;
      const profileId = this.props.navigation.state.params.profileId;
      const patient_id = this.props.navigation.state.params.patient_id;
      const appointment_id= this.props.navigation.state.params.appointment_id;
      const hospital_id= this.props.navigation.state.params.hospital_id;
      const selectedDate= this.props.navigation.state.params.selectedDate;
      
      
    return (
      <ScrollView>     
      <View style={styles.container}>
                  <Text style={{fontStyle:'italic', fontWeight:'bold',fontSize:20, color:'red'}}>Choose the Lab</Text>

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
                  lab_id: item.value,
                  name: item.label,
                  show: true
              }),this.getReportsList()}}   
                  />
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
      
                  labReport_id: item.value,
                    labReport_name: item.label,
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
                    
                    <View style={styles.space}></View>
                   <TouchableOpacity onPress={()=>this.onPressAddReports()}style={{backgroundColor:'red',alignItems:'center',alignContent:'center',borderRadius:18,height:30}}>
                     <Text style={{alignItems:'center',alignContent:'center',borderRadius:18,height:50,width:40,fontSize:20,fontStyle:'italic',color:'black',paddingBottom:30}}>ADD</Text>
                   </TouchableOpacity>
                   <View style={styles.space}></View>
                  
                   <TouchableOpacity onPress={()=>this.onPressSubmit(appointment_id,patient_id,hospital_id,profileId)}style={{backgroundColor:'green',alignItems:'center',alignContent:'center',borderRadius:18,height:30}}>
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