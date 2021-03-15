

import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';

import styles from '../../styles/commonStyles';
import { Table, TableWrapper, Row, Rows, Cell  } from "react-native-table-component";

import { getDoctors } from '../services/DepartmentService'
import DoctorProfileCard from './Cards/DoctorProfileCard';

import ActionButton from 'react-native-action-button';
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };



export default class DoctorsDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {

      flag: "",

      doctorsList : [
        ['   '],
         ],

      tableHead: ['Added Staff:'],
      hospital_id: this.props.navigation.state.params.hospital_id,
      department_id: this.props.navigation.state.params.department_id
      };
     

    }

    componentDidMount(){
      console.log(this.state.hospital_id);
      console.log(this.state.department_id);
  this.onPressSubmit();
  }

  onPressSubmit = () => {
    var tableData = [];
    var body;
    body = JSON.stringify({ hospital_id: this.state.hospital_id, department_id: this.state.department_id });
   console.log(body)
    getDoctors(body).then((res) => {
        console.log(res);
        res.forEach((data) => {
          tableData.push({ image:image, name:data.name, specialization:data.specialization, highestDegree: data.highest_qualification, overAllExperience:data.overall_work_experience,
            email:data.work_email_address, college_name:data.studied_at, fee:data.doctor_fee, area:data.area, city:data.city,
            licence_number:data.licence_number, id: data.id, hospital_id: data.hospital_id ,department_id: this.state.department_id
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
                       >
                            <DoctorProfileCard key={doctor.name} doctor={doctor} ></DoctorProfileCard>
                        </TouchableOpacity>
                    ))}
             </ScrollView>
        </View> 
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

