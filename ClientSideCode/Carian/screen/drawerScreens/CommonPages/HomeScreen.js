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
import styles from '../../../styles/homeScreenStyles';
import CardView from 'react-native-cardview';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SpecialityCard from '../Cards/SpecialityCard';
import HospitalCard from '../Cards/HospitalCard';
import DoctorProfileCard from '../Cards/DoctorProfileCard';
import {getDoctors, getHospitals} from '../../services/hospitalService';


const image = {
  uri:
    'https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg',
};
const fPhysician = {
  uri:
    'https://www.utphysicians.com/wp-content/uploads/2014/05/featured-specialty-family-medicine-1.jpg',
};
const fpediatrician = {
  uri:
    'https://chandigarhdeals.com/wp-content/uploads/2020/09/considering-pediatrics-1109x675-1.jpg',
};
const allergists = {
  uri:
    'https://www.beckerentandallergy.com/wp-content/uploads/2019/04/allergy-beckerent-new-jersey.jpg',
};
const geriatric = {
  uri:
    'https://uticaparkclinic.com/sites/default/files/styles/portfolio_view/public/geriatrics_service940x450.png?itok=wo50dPal',
};
const derma = {
  uri:
    'https://mediniz-images-2018-100.s3.ap-south-1.amazonaws.com/post-images/dermatologist_1556130488.jpg',
};
const ophthal = {
  uri:
    'https://cdn.diabetesselfmanagement.com/2006/05/dsm-what-is-an-ophthalmologist-shutterstock_1038422095.jpg',
};
const Infectious = {
  uri: 'https://healthengine.com.au/info/assets/iStock-879831370-1024x576.jpg',
};
const cardiologist = {
  uri:
    'https://content3.jdmagicbox.com/comp/visakhapatnam/h2/0891px891.x891.000266422694.p4h2/catalogue/dr-abbayi-s-collectrate-junction-visakhapatnam-cardiologists-3phygsj.jpg',
};
const urology = {
  uri:
    'https://previews.123rf.com/images/shidlovski/shidlovski2002/shidlovski200200022/140302484-concept-photo-of-diagnosis-in-nephrology-and-urology-doctor-hold-in-one-hand-model-of-human-kidney-i.jpg',
};
export default class HomeScreen extends ValidationComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      dataSourceHospital: [],
      dataSourceDoctors: [],
      cityArray: [
        {label: 'Hyd', value: 'hyd'},
        {label: 'vij', value: 'vij'},
      ],
      hospitalCount: '100',
      customerCount: '1000',
      doctorsCount: '150',
      reviewCount: '1500',
      
      
      specialistCarddata: [
        {image: fPhysician, name: 'Family physicians'},
        {image: fpediatrician, name: 'Pediatricians'},
        {image: geriatric, name: 'Geriatric doctors'},
        {image: allergists, name: 'Allergists'},
        {image: derma, name: 'Dermatologists'},
        {image: ophthal, name: 'Ophthalmologists'},
        {image: Infectious, name: 'Infectious disease doctors'},
        {image: image, name: 'Obstetrician/gynecologists'},
        {image: cardiologist, name: 'Cardiologists'},
        {image: urology, name: 'Urologists'},
      ],
    
    };
    this.onPressShowAllDoctors = this.onPressShowAllDoctors.bind(this);
    this.onPressingHospital = this.onPressingHospital.bind(this);
    this.onPressShowAllHsopitals = this.onPressShowAllHsopitals.bind(this);
    this.onPressingDoctorCard = this.onPressingDoctorCard.bind(this);
  }
  onPressShowAllDoctors = () => {
    this.props.navigation.navigate('DisplayDoctorsList', {doctorsList: this.state.dataSourceDoctors });
  };

  onPressShowAllHsopitals = () => {
    this.props.navigation.navigate('DisplayHospitalsList', {hospitalsList: this.state.dataSourceHospital});
  };

  onPressingHospital = (id) => {
    this.props.navigation.navigate('HospitalPublicProfile', {id: id});
  };

  onPressingDoctorCard = (id) => {
    this.props.navigation.navigate('DoctorPublicProfile', {id: id});
  };

  getHospitals = () => {
    getHospitals()
    .then((res1) => {      
      var list1 = [];
      for (i = 0; i < 4; i++) { 
        if (res1[i].doctors != 0){
        list1.push({     
          id:res1[i].hospital_id,       
          name: res1[i].name,
          type: res1[i].type,
          area: res1[i].area,
          city: res1[i].city,
          avgRating: res1[i].avg_rating,
          totalNoOfReviews: res1[i].total_reviews,
          doctors: res1[i].doctors,
          image: image
        });
      }
      }
      this.setState({dataSourceHospital: list1});  
  })
  .catch((error) => {
      console.log(error);
  });
  }

  
  getDoctors = () => {
    getDoctors()
    .then((res2) => {
      console.log(res2)
      var list2 = [];
      for (i = 0; i < 4; i++) {                   
        list2.push({
          id:res2[i].profile_id,
          image: image,
          name: res2[i].name,
          specialization: res2[i].specialization,
          highestDegree: res2[i].highestDegree,
          area: res2[i].area,
          city: res2[i].city,
          avgRating: '4.5',
          totalNoOfReviews: '150',
          overAllExperience: res2[i].overallExperience,
          doctor_fee: res2[i].doctor_fee,
        });
      }
      this.setState({dataSourceDoctors: list2}); 
  })
  .catch((error) => {
      console.log(error);
  });
  }

  componentDidMount() {
    Promise.all([this.getDoctors(), this.getHospitals()])
      
  }
 

  render() {
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.AppTitle}>CARIAN</Text>
          <DropDownPicker
            items={this.state.cityArray}
            defaultValue={this.state.city}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#307ecc', width: '80%', borderRadius: 18}}
            itemStyle={{
              justifyContent: 'flex-start',
              width: '80%',
            }}
            dropDownStyle={{backgroundColor: '#fafafa', width: '80%'}}
            onChangeItem={(item) =>
              this.setState({
                city: item.value,
              })
            }
          />

          <Text style={styles.sectionText}>Find Hospitals by Symptoms</Text>

          <Text style={styles.sectionText}>
            Find Hospitals by Specilazation
          </Text>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            {this.state.specialistCarddata.map((item) => (
              <View key={item.name} style={{flexBasis: '50%'}}>
                <TouchableOpacity key={item.name}>
                  <SpecialityCard
                    data={item}
                    key={item.name}
                    style={
                      styles.specialityCardHeightAndBorder
                    }></SpecialityCard>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <Text style={styles.sectionText}>Top Hospitals near you</Text>
          {this.state.dataSourceHospital.map((hospital) => (
            <TouchableOpacity
              onPress={() => this.onPressingHospital(hospital.id)}
              key={hospital.id}
              style={styles.hospitalCardTouch}>
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                style={{width: '80%', borderRadius: 18}}></HospitalCard>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressShowAllHsopitals()}>
            <Text style={styles.buttonText}>Show All Hospitals</Text>
          </TouchableOpacity>

          <Text style={styles.sectionText}>Top Doctors near you</Text>

          {this.state.dataSourceDoctors.map((doctor) => (
            <TouchableOpacity
              onPress={() => this.onPressingDoctorCard(doctor.id)}
              key={doctor.id}
              style={styles.hospitalCardTouch}>
              <DoctorProfileCard
                key={doctor.id}
                doctor={doctor}></DoctorProfileCard>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressShowAllDoctors()}>
            <Text style={styles.buttonText}>Show All Doctors</Text>
          </TouchableOpacity>

          <Text style={styles.sectionText}>Our Strenth</Text>
          <Text style={styles.text}>Customers {this.state.customerCount}</Text>
          <Text style={styles.text}>Hospitals {this.state.hospitalCount}</Text>
          <Text style={styles.text}>Doctors {this.state.doctorsCount}</Text>

          <Text style={styles.text}>Reviews {this.state.reviewCount}</Text>

          <Text style={styles.sectionText}>About US</Text>
        </View>
      </ScrollView>
    );
  }
}
