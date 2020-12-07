

import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';

import styles from '../../styles/commonStyles';
import { Table, TableWrapper, Row, Rows, Cell  } from "react-native-table-component";
import { StaffApi } from '../services/adminStaffService'
import DoctorProfileCard from './Cards/DoctorProfileCard';
import ActionButton from 'react-native-action-button';
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };



export default class ManageStaffScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flag: "",

      doctorsList : [
        ['   '],
         ],

      tableHead: ['Added Staff:'],
      };
    }

    componentDidMount(){
  this.onPressSubmit();
  }

  onPressSubmit = () => {
    var tableData = [];

    StaffApi().then((res) => {
        console.log(res);
        res.forEach((data) => {
          tableData.push({ image:image, name:data.name, specialization:data.specialization, highestDegree: data.highestDegree, overAllExperience:data.overallExperience, area:data.area, city:data.city, 
            phonenumber:data.phoneNumber, email:data.email, college_name:data.college_name, doctor_fee:data.doctor_fee,
            licence_number:data.licence_number, id: data.id, profile_id: data.profile_id, hospital_id: data.hospital_id 
             });
        });

        this.setState({ doctorsList: tableData });

        });
  

  }

 
  render() {
    const state = this.state;

    return (
      
         <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
         <View style = {{width: '100%', justifyContent: "center", alignContent:"center"}}>
         <ScrollView> 

        {this.state.doctorsList.map(doctor => (
                        <TouchableOpacity key={doctor.name} style={{ width: '100%', flex: 1, backgroundColor: "#F0F0E1", alignItems: "center", justifyContent: 'center' }}
                        onPress={() => this.props.navigation.navigate('StaffOverview', {name: doctor.name, specialization: doctor.specialization, highestDegree: doctor.highestDegree, overAllExperience: doctor.overAllExperience,
                         phonenumber: doctor.phonenumber, email: doctor.email, college_name: doctor.college_name,doctor_fee: doctor.doctor_fee,licence_number: doctor.licence_number, id: doctor.id, profile_id: doctor.profile_id, hospital_id: doctor.hospital_id})}>
                            <DoctorProfileCard key={doctor.name} doctor={doctor} ></DoctorProfileCard>
                        </TouchableOpacity>
                    ))}
             </ScrollView>
        </View>
        <ActionButton buttonColor="rgba(231,76,60,1)"  onPress={() => this.props.navigation.navigate('StaffDetailsScreen', {name: "", specialization: "", highestDegree: "", overAllExperience: "",
                         phonenumber: "", email: "", college_name: "",doctor_fee: "",licence_number: "", id: "", profile_id: "", hospital_id: ""})}>
        </ActionButton> 
      </View>
    
 
    );
  }
}

const styles1 = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff', },
  text: { marginLeft: 5 },
  row: { height: 30, flexDirection: 'row', marginBottom: 20},
  cell: {flex: 1, }
});

