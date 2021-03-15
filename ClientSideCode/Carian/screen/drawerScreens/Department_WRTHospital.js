import React, {  Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import {  getAllDepartments, deleteDepartmentInfoApi} from '../services/DepartmentService';   
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/commonStyles';     
import ValidationComponent from 'react-native-form-validator';


export default class Department_WRTHospital extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      dropdowndata: [],
      profileId:'',
      totalData:[],
      id:'',
      Department_name:'',
      addressine1:'',
      is_same_as_hospital_address:'',
      addressine2:'',
      city:'',
      state:'',
      pincode:'',
      department_phone_number:'',

    };
  }

  componentDidMount() {
    var tempdata = []
    var totalData =[]
    var body = JSON.stringify({
        hospital_id: this.props.navigation.state.params.hospital_id
      });
    getAllDepartments(body)
      .then(results => {
        results.forEach((data) => {
          tempdata.push({
            value:data.id,
            label: data.Department_name           
          });
          totalData.push({
            Department_name: data.Department_name,
            addressine1: data.addressine1,
            is_same_as_hospital_address: data.is_same_as_hospital_address,
            addressine2:data.addressine2,
            city:data.city,
            state:data.state,
            pincode:data.pincode,
            department_phone_number:data.department_phone_number,
            hospital_id:data.hospital_id,
            id:data.id
          });

        });
      });
    this.setState({
      dropdowndata: tempdata
    });
    this.setState({
        totalData: totalData
      });

  }

  onPressDeleteDepartment = () => {

    var body = JSON.stringify({
      id: this.state.id
      });
      deleteDepartmentInfoApi(body)
      .then(results => {
        //alert("Deleted successfully")
        console.log(results);
      });

  }

  onPressDepartment = () => {
     var totalData = this.state.totalData;
    for(i=0; i< totalData.length ;i++){
        if(this.state.id== totalData[i].id){
            this.setState({
            Department_name: totalData[i].Department_name,
            addressine1: totalData[i].addressine1,
            is_same_as_hospital_address: totalData[i].is_same_as_hospital_address,
            addressine2:totalData[i].addressine2,
            city:totalData[i].city,
            state:totalData[i].state,
            pincode:totalData[i].pincode,
            department_phone_number:totalData[i].department_phone_number,
            hospital_id:totalData[i].hospital_id,
            id:totalData[i].id
            })
          
        }
      }
    console.log(this.state.totalData);
    
  };

  render() {
    const hospital_id = this.props.navigation.state.params.hospital_id;
    const profileId=this.props.navigation.state.params.profileId;

    return ( 
    <View>
      <View style = { styles.departmentPositionVisble } >   
      {this.state.flagDep ? (
       <View> 
        <TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.props.navigation.navigate('DepartmentUpdate', {  Department_name: this.state.Department_name,
                addressine1: this.state.addressine1,
                is_same_as_hospital_address: this.state.is_same_as_hospital_address,
                addressine2:this.state.addressine2,
                city:this.state.city,
                state:this.state.state,
                pincode:this.state.pincode,
                department_phone_number:this.state.department_phone_number,
                hospital_id:this.state.hospital_id,
                id:this.state.id}),
            this.setState({flagDep: false })}
          } >
          <Text style = {styles.appButtonText} > EDIT </Text> 
          </TouchableOpacity>  

           <View style={styles.space} /> 
           <TouchableOpacity style = {styles.appButtonContainer}
          onPress = {() => { 
            this.onPressDeleteDepartment(),
            this.setState({flagDep: false })
          }} >
          <Text style = {styles.appButtonText} > DELETE  </Text> 
          </TouchableOpacity>   

           </View>             
          
        ) : null
      }    

        <DropDownPicker
            items={this.state.dropdowndata}
            defaultValue={this.state.hospital_id}
            containerStyle={{ height: 50 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item =>{ this.setState({ id: item.value}), this.setState({flagDep: true}),this.onPressDepartment()}}
          />
    

      </View>

      
        

      
             
      </View>


    );

  }
}