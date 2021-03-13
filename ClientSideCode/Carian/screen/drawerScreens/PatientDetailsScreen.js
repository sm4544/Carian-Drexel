

import React, { Component } from 'react';

import { StyleSheet, Image,TextInput, View, TouchableOpacity, Text , ScrollView, ImageBackground} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Feather';
import DoctorProfileCard from './Cards/DoctorProfileCard';
import { patientDoctorDetailsApi } from '../services/customerDetailsService'


const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

// const image = {
//   uri:
//     'https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile.jpg',
// };
export default class PatientsInfoScreen extends ValidationComponent {
 
    constructor(props) {   
      super(props);   
      this.state = {   
        hospitalname: '',
        hospitaladd1: '',
        hospitaladd2: '',
        phonenumber: '',
        registerdate: '',
        licensenumber: '',   
        // Gender: this.props.navigation.getParam('Gender'),
        appointment_id:  this.props.navigation.state.params.id,
        patientdetails: [],
        doctordetails:[],
        doctorprofiledetails:[],
        doctorarray:[]

      };
     
   
    }

 
    componentDidMount(){
      this.onPressSubmit();
    }


    onPressSubmit = () => {
      var body;
      body = JSON.stringify({ appointment_id: this.state.appointment_id  });
      var i;
      var tableData = [];
      console.log("wrknghrs")
      console.log(body);
      patientDoctorDetailsApi(body).then((res) => {

          // this.setState({patientdetails:res.patient[0]});

          tableData.push({ image:image, doctorname:res.doctorProfile[0].first_name + " " + res.doctorProfile[0].last_name, specialization:res.doctor[0].specialization, overall_work_experience:res.doctor[0].overall_work_experience
          , patientname:res.patient[0].first_name + " " + res.patient[0].last_name, patientage:res.patient[0].age,patientgender:res.patient[0].gender,patient_blood_group:res.patient[0].blood_group, 
          patient_mobile_number:res.patient[0].mobile_number, relation:res.patient[0].relation, highest_qualification:res.doctor[0].highest_qualification
        , studied_at:res.doctor[0].studied_at, doctor_fee:res.doctor[0].doctor_fee, registred_date:res.doctorProfile[0].registred_date,
        date_of_birth:res.doctorProfile[0].date_of_birth, doctor_work_phone_number:res.doctor[0].work_phone_number, doctor_work_email_address:res.doctor[0].work_email_address, patientweight:res.patient[0].weight, 
        patientheight:res.patient[0].height, patient_use_of_alcohol:res.patient[0].use_of_alcohol, patient_use_of_tobacco:res.patient[0].use_of_tobacco,
        recurring_problems:res.patient[0].recurring_problems,allergies_to_medicine:res.patient[0].allergies_to_medicine,  patientid:res.patient[0].id});
          this.setState({doctorarray:tableData});
          console.log(this.state.doctorarray);     
        
          });
    
  
    }

    onselecting = (doctorname, specialization, overall_work_experience, studied_at, doctor_fee , registred_date, doctor_work_phone_number, doctor_work_email_address, highest_qualification, date_of_birth) => {
     
      this.props.navigation.navigate("PatDoctorDetails", {doctorname: doctorname, specialization: specialization,overall_work_experience: overall_work_experience, studied_at: studied_at,
        doctor_fee: doctor_fee, registred_date: registred_date, doctor_work_phone_number: doctor_work_phone_number, doctor_work_email_address: doctor_work_email_address, highest_qualification: highest_qualification, date_of_birth: date_of_birth});

  }

  onselecting1 = (patient_blood_group, patientweight, patientheight, patient_use_of_alcohol, patient_use_of_tobacco , allergies_to_medicine, recurring_problems,) => {
     
    this.props.navigation.navigate('HealthInformationDetails', {patient_blood_group: patient_blood_group, patientweight: patientweight,
      patientheight: patientheight, patient_use_of_alcohol: patient_use_of_alcohol, patient_use_of_tobacco: patient_use_of_tobacco,allergies_to_medicine: allergies_to_medicine,
      recurring_problems: recurring_problems});

}


onselecting2 = (patientid, appointment_id) => {
     
  this.props.navigation.navigate('PrescriptionOrders', {patientid: patientid, appointment_id: appointment_id});

}

onselecting3 = (patientid) => {
     
  this.props.navigation.navigate('Labreport', {patientid: patientid});

}
   
    render() {

  
      const start_time=  this.props.navigation.state.params.start_time


    
      return (
        <ScrollView> 
   
        <View style={styles.calenderViewStyle}>
        
        <View style={styles.cardContainer,{paddingBottom:30,cornerRadius:50}}>
        {this.state.doctorarray.map(patientsdoc => (
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.hospitalCard}>

                      {/* {this.state.patientdetails.map(patients => ( */}
                    <View style={styles.setFlexRow}>
                        <Text style={styles.cardText}>Patient Details:</Text>
                        <Text >Appointment Time: {start_time}</Text>
                        
                        <View style={styles.imageRightPosition,{flexDirection:'column',flex:1} }>
                            <Text style={styles.cardText}>Name: {patientsdoc.patientname}</Text>
                            <Text style={styles.cardext}>Relation: {patientsdoc.relation}</Text>
                            <Text style={styles.cardext}>Gender: {patientsdoc.patientgender}</Text>
                            <Text style={styles.cardSubItalicText}>Age: {patientsdoc.patientage} Years</Text>
                            <Text style={styles.cardSubItalicText}> Mob: {patientsdoc.patient_mobile_number}</Text>
                            <Text style={styles.cardSubBoldText}>Blood Group: {patientsdoc.patient_blood_group}</Text>
        
                        </View>
                    </View>
                    {/* ))} */}

                    <View style={styles.setFlexRow}>
                    <Text style={styles.cardText}>Doctor Details:</Text>
                        
                    </View>
                </CardView>
                  ))}

{this.state.doctorarray.map(patientsdoc => (
  <TouchableOpacity onPress={() => this.onselecting(patientsdoc.doctorname,  patientsdoc.specialization, patientsdoc.overall_work_experience,  patientsdoc.studied_at,
     patientsdoc.doctor_fee, patientsdoc.registred_date,  patientsdoc.doctor_work_phone_number, patientsdoc.doctor_work_email_address, patientsdoc.highest_qualification, patientsdoc.date_of_birth)}>

<CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}
          style={styles2.cardViewStyle}>
            
            <Image style={styles2.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>


                <Text style={styles2.cardView_InsideText}> Name: {patientsdoc.doctorname} </Text>
    
                <Text style={styles2.cardView_InsideText}>Specialization: {patientsdoc.specialization}  </Text>
                <Text style={styles2.cardView_InsideText}>Experience: {patientsdoc.overall_work_experience} Years</Text>

        </CardView>
        </TouchableOpacity>
        
        ))}


            </View>
             
            <Text style={styles.cardText}>Patient Helath Details:</Text>
            <View style={{flexDirection:'row',flex:1}}>
            {this.state.doctorarray.map(patientsdoc => (
            <TouchableOpacity onPress={() => this.onselecting1(patientsdoc.patient_blood_group, patientsdoc.patientweight,
            patientsdoc.patientheight, patientsdoc.patient_use_of_alcohol,  patientsdoc.patient_use_of_tobacco, patientsdoc.allergies_to_medicine,
             patientsdoc.recurring_problems)} style={{flexDirection:'row',flex:1}}>          
            <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'lightcoral'}}>
                  <Icon name='info' size={40} color="#900"/>
                  <Text style={styles.cardText}>Patient Helath Details:</Text>
                    
                                       
            </CardView></TouchableOpacity>
            ))}

            {this.state.doctorarray.map(patientsdoc => (
            <TouchableOpacity onPress={() => this.onselecting2(  patientsdoc.patientid, this.state.appointment_id) }style={{flexDirection:'row',flex:1}}>          
         <CardView cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'mediumturquoise'}}>
                  <Icon name="heart" size={40} color="#900"/>
                    <Text style={styles.cardText}>Prescription</Text>                          
            </CardView></TouchableOpacity>
               ))}
                {this.state.doctorarray.map(patientsdoc => (
            <TouchableOpacity onPress={() => this.onselecting3(  patientsdoc.patientid) }style={{flexDirection:'row',flex:1}}> 
           <CardView cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10} style={{width:'90%',height:'85%', backgroundColor:'lightsteelblue'}}>
                    <Icon name="activity" size={40} color="#900"/>
                      <Text style={styles.cardText}>Lab Reports</Text>                        
              </CardView>
             </TouchableOpacity>
              ))}
           
             </View>
 
 
             
             {/* ) : null} */}
</View>
</ScrollView>

      );
    }
  }


  const styles2 = StyleSheet.create({
    header:{
      height:10,
    },
    avatar: {
      width: 110,
      height: 120,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
     
      position: 'absolute',
    
    },


    cardViewStyle:{
   
      width: 380, 
      height: 130,
      paddingLeft:20,
    margin:5,
     
      marginLeft:10,
      backgroundColor: '#93EAF2',
      borderRadius:15
     
   
    },
   
    cardView_InsideText:{
   
      fontSize: 20, 
      color: 'darkblue', 
      textAlign: 'center',
      marginTop:15 ,
      marginLeft:60
     
      
     
    
       
   
    }
  });
  
  

