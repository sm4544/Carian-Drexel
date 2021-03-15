import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert , Image, ImageBackground,ScrollView, TouchableHighlight } from 'react-native';

import DoctorProfileCard from './Cards/DoctorProfileCard';
import styles from '../../styles/DoctorProfileStyles';
import styles1 from '../../styles/commonStyles';
import HospitalCard from './Cards/HospitalCard';
import { Table, Row, Rows } from "react-native-table-component";
// import ReviewCard from './Cards/ReviewCard';
import { deleteAdminStaffApi } from '../services/adminStaffService';

const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

export default class HospitalOverview extends Component {

  constructor(props) {
    super(props);

    this.state = {
 
      hospitalReviews: [{ id: 0, name: 'Srinivas', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
      { id: 1, name: 'Nallapati', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
      { id: 2, name: 'Test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
      { id: 3, name: 'Hello', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
    ],



  headerSlots: ["Days", "24Hours", "Opens At", "Closed at",],
  workingHours: [
      ["Mon", "Yes", "-", "-"],
      ["Tue", "No", "01:00PM", "06:00PM"],
      ["Wed", "No", "01:00PM", "06:00PM"],
      ["Thu", "No", "01:00PM", "06:00PM"],
      ["Fri", "Yes", "-", "-"],
      ["Sat", "Yes", "-", "-"],
      ["Sun", "No", "01:00PM", "06:00PM"]],

      id: this.props.navigation.state.params.id,
 

      };
    }
 
    onPressDelete = () => {
      var body;
      console.log("hi")
        body = JSON.stringify({ id: this.state.id });
        
        console.log(body)
          
        deleteAdminStaffApi(body).then((res) => {
           console.log(res);
          this.props.navigation.navigate('ManageStaffScreen');
  
        });
  
 
  
   };
  
   
    render() {
      const doctor = { image: image, };
      const name=  this.props.navigation.state.params.name
      const specialization =  this.props.navigation.state.params.specialization
      const overAllExperience =  this.props.navigation.state.params.overAllExperience
      const highestDegree =  this.props.navigation.state.params.highestDegree
      const phonenumber =  this.props.navigation.state.params.phonenumber
      const email =  this.props.navigation.state.params.email
      const college_name =  this.props.navigation.state.params.college_name
      const doctor_fee =  this.props.navigation.state.params.doctor_fee
      const licence_number =  this.props.navigation.state.params.licence_number
      const id =  this.props.navigation.state.params.id
      const profile_id =  this.props.navigation.state.params.profile_id
      const hospital_id =  this.props.navigation.state.params.hospital_id
      const department_id =  this.props.navigation.state.params.department_id

      // const name =  this.props.navigation.getParam('name', 'nothing sent')
 
      return (
  
        <View style={{ flex: 1 }}>
           <ScrollView>
 
                <View style={styles.setFlexRow}>

                <View style={styles.positionImage}>
                        <Image source={doctor.image} style={styles.profileImage} />
                    </View>
                    <View style={styles.imageRightPosition}>

                <View style={styles.hospitalSectionView}>
                    <Text style={   { fontSize: 18,
                     fontWeight: 'bold'}}>Dr. {name} {highestDegree}</Text>
               </View>


                <View style={styles.hospitalDataRow}>

                            <View>
                                <Text style={styles.adressText}> {specialization}, {overAllExperience}</Text>
                                <Text style={styles.adressText}> Phone:{phonenumber}</Text>
                            </View>
                        </View>
                        </View>
                        </View>

                        

            <View style={styles.horizontalLine} />
                    <Text style={styles.sectionTitle}>Working Hours</Text>
                    <Table style={styles.tableStyle}>
                        <Row data={this.state.headerSlots} style={styles.tableHeader} textStyle={styles.tableHeaderText} />
                        <Rows data={this.state.workingHours} style={styles.tableRowstyle} textStyle={styles.tableRowText} />
                    </Table>

                    <View style={styles.horizontalLine} />

                      <Text style={styles.sectionTitle}>Patient Reviews</Text>

                      <Text style={styles.reviewsSubText}>These reviews represent patient opinions and experiences. And they do not reflect the Doctor's medical capabilities.</Text>
{/* 
                      {this.state.hospitalReviews.map(review => (
                          <ReviewCard key={review.id} review={review}></ReviewCard>

                          ))} */}



                </ScrollView>

                <View style={styles.footerView}>

                <View style={{ flexDirection:"row" }}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('StaffDetailsScreen', {name: name, specialization: specialization, highestDegree: highestDegree, overAllExperience: overAllExperience, 
                  phonenumber: phonenumber, email: email, college_name: college_name, doctor_fee: doctor_fee,
                  licence_number: licence_number, id: id, profile_id: profile_id,hospital_id: hospital_id, department_id: department_id})}  activeOpacity={0.7} style={styles2.button} >
   
                  < Text style={styles1.buttonText}> Edit </Text>

               </TouchableOpacity>
                <TouchableOpacity  onPress={this.onPressDelete} activeOpacity={0.7} style={styles2.button} >
   
                 < Text style={styles1.buttonText}> Delete </Text>

               </TouchableOpacity>
               </View>
                  </View>

                </View>
        
      
       
        
      );
    }
  }

  const styles2 = StyleSheet.create({
    button: {
      width: "50%",
      backgroundColor: "#CD6155",
      borderRadius: 18,
      borderColor: "white",
      borderWidth: 2,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 40,
    },
  });