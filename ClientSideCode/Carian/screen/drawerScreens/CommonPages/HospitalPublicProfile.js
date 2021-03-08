import ValidationComponent from 'react-native-form-validator';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  style,
  ImageBackground,
} from 'react-native';
import styles from '../../../styles/DoctorProfileStyles';
import CardView from 'react-native-cardview';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SpecialityCard from '../Cards/SpecialityCard';
import HospitalCard from '../Cards/HospitalCard';
import DoctorProfileCard from '../Cards/DoctorProfileCard';
import ReviewCard from '../Cards/ReviewCard';
import {SliderBox} from 'react-native-image-slider-box';
import {Table, Row, Rows} from 'react-native-table-component';
import {getAllHospitalsInfo} from '../../services/hospitalService';
const image = {
  uri:
    'https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg',
};

export default class HospitalPublicProfile extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSourceHospital: {},
      customerCount: '1000',
      hospitalImages: [],
      specialistCarddata: [],
      departments:[],
      services:[],
      headerSlots: ['Days', '24Hours', 'Opens At', 'Closed at'],
      workingHours: [],
      hospitalReviews: [],
      doctorsList: [],
    };

    this.onPressingDoctorCard = this.onPressingDoctorCard.bind(this);
  }
  onPressingDoctorCard = (id) => {
    this.props.navigation.navigate('DoctorPublicProfile', {id: id});
  };
  hospitalInfo = (id) => {
    const body = JSON.stringify({
      hospital_id: id,
    });
    getAllHospitalsInfo(body)
      .then((res) => {  
        var list2 =[];
        var list1 = [];
        for (i = 0; i < res.departments.length; i++) { 
                   
          list1.push({
            id:res.departments[i].DepartmentID,
            image: image,
            name: res.departments[i].Department,           
          });
        }

        for (i = 0; i < res.doctors.length; i++) { 
                   
          list2.push({
            id:res.doctors[i].id,
            image: image,
            name: res.doctors[i].name,
            specialization: res.doctors[i].specialization,
            highestDegree: res.doctors[i].highest_qualification,
            area: res.doctors[i].area,
            city: res.doctors[i].city,
            avgRating: '4.5',
            totalNoOfReviews: '150',
            overAllExperience: res.doctors[i].overall_work_experience,
            doctor_fee: res.doctors[i].doctor_fee,
          });
        }
        
        var hospital = {
          image: image,
          id: res.id,
          name: res.name,
          type: res.type,
          streatAddline: res.address,          
          area: res.Area,
          city: res.City,
          state: res.State,
          pincode: res.pincode,
          avgRating: '4.5',
          totalNoOfReviews: res.reviews.length,
          totalNoOfDoctors: res.doctors.length,
        };
        this.setState({specialistCarddata: list1});
        this.setState({doctorsList: list2});
        this.setState({hospitalReviews: res.reviews, workingHours: res.working_hours,dataSourceHospital: hospital, 
          hospitalImages: res.hospitalImages,departments : res.departments, services: res.services})
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    
    this.hospitalInfo(this.props.navigation.state.params.id);
    
    
  }
  render() {
   
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <SliderBox
            images={this.state.hospitalImages}
            sliderBoxHeight={180}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
          />

          <View style={styles.hospitalSectionView}>
            <Text style={styles.hospitalName}>
              {this.state.dataSourceHospital.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Website</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Directions</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Call</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.hospitalDataRow}>
              <View>
                <Text style={styles.addressHeader}>Address: </Text>
              </View>
              <View>
                <Text style={styles.adressText}>
                  {' '}
                  {this.state.dataSourceHospital.streatAddline}
                </Text>
                <Text style={styles.adressText}>
                  {' '}
                  {this.state.dataSourceHospital.area},{' '}
                  {this.state.dataSourceHospital.city},{this.state.dataSourceHospital.state},{' '}
                  {this.state.dataSourceHospital.pincode}
                </Text>
              </View>
            </View>

            <View style={styles.hospitalDataRow}>
              <View>
                <Text style={styles.addressHeader}>Reviews: </Text>
              </View>
              <View>
                <Text style={styles.addressHeader}>
                  {this.state.dataSourceHospital.avgRating}{' '}
                  {this.state.dataSourceHospital.totalNoOfReviews} Reviews{' '}
                </Text>
              </View>
            </View>

            <View style={styles.hospitalDataRow}>
              <View>
                <Text style={styles.addressHeader}>Customers: </Text>
              </View>
              <View>
                <Text style={styles.addressHeader}>
                  {this.state.customerCount} Served Via Carian{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.horizontalLine} />

          <Text style={styles.sectionTitle}>
            Book Appointment with our Doctors
          </Text>

          {this.state.doctorsList.map((doctor) => (
            <TouchableOpacity
              onPress={() => this.onPressingDoctorCard(doctor.id)}
              key={doctor.id}
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: 'white',
                borderColor: '#00b5ec',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <DoctorProfileCard
                key={doctor.id}
                doctor={doctor}></DoctorProfileCard>
            </TouchableOpacity>
          ))}
          <View style={styles.horizontalLine} />
          <Text style={styles.sectionTitle}>Working Hours</Text>
          <Table style={styles.tableStyle}>
            <Row
              data={this.state.headerSlots}
              style={styles.tableHeader}
              textStyle={styles.tableHeaderText}
            />
            <Rows
              data={this.state.workingHours}
              style={styles.tableRowstyle}
              textStyle={styles.tableRowText}
            />
          </Table>
          <View style={styles.horizontalLine} />

          <Text style={styles.sectionTitle}>Location</Text>

          <View style={styles.horizontalLine} />
          <Text style={styles.sectionTitle}>Departments</Text>
          <View style={styles.imagesRowSetUp}>
            {this.state.specialistCarddata.map((item) => (
              <View key={item.id} style={{flexBasis: '50%'}}>
                <SpecialityCard
                  key={item.id}
                  data={item}
                  style={{backgroundColor: 'white'}}></SpecialityCard>
              </View>
            ))}
          </View>

          <View style={styles.horizontalLine} />
          <Text style={styles.sectionTitle}>Services</Text>

          <View style={styles.slotsView}>
            {this.state.services.map((item) => (
              <View key={item.id} style={{flexBasis: '31%'}}>
                <TouchableOpacity
                  key={item.id}
                  disabled={true}
                  style={styles.slotsTouch}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.horizontalLine} />

          <Text style={styles.sectionTitle}>Patient Reviews</Text>

          <Text style={styles.reviewsSubText}>
            These reviews represent patient opinions and experiences. And they
            do not reflect the Doctor's medical capabilities.
          </Text>

          {this.state.hospitalReviews.map((review) => (
            <ReviewCard key={review.review_id} review={review}></ReviewCard>
          ))}
        </View>
      </ScrollView>
    );
  }
}
