import ValidationComponent from 'react-native-form-validator';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../../../styles/DoctorProfileStyles';
import SpecialityCard from '../Cards/SpecialityCard';
import moment from 'moment';
import ReviewCard from '../Cards/ReviewCard';
import { Table, Row, Rows } from 'react-native-table-component';
import CalendarStrip from 'react-native-calendar-strip';
import { SliderBox } from 'react-native-image-slider-box';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { getAvailableSlots, getDoctorDetails } from '../../services/hospitalService';


const image = {
  uri:
    'https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg',
};

export default class DoctorPublicProfile extends ValidationComponent {
  constructor(props) {
    super(props);
    (this.state = {
      doctor: {},
      hospital: {},
      customerCount: 1000,
      selectedDate: moment().format('YYYY-MM-DD'),
      selectedTime: '',
      hospitalImageList: [],
      slots: [],
      specialistCarddata: [{id: 0, image: image, name: "family phy"}],
      doctorReviews: [],
      services: [],
      calen: {},
      headerSlots: ['Days', 'Start time','End time',],
      workingHours: [],
    }),
      this.displaySlots = this.displaySlots.bind(this);
    this.onPressingContinueButton = this.onPressingContinueButton.bind(this);
  }
  displaySlots = (date) => {
   
      this.setState({ selectedDate: date.dateString});
      var list1 = [];      
      for (i = 0; i < this.state.calen[date.dateString].length; i++) {
        list1.push({
          id: i,
          time: this.state.calen[date.dateString][i],
        });
      }
      this.setState({ slots: list1})   
    
  };
  onpressTime = (time) => {
    
    this.setState({ selectedTime: time });
  };
  onPressingContinueButton = () => {
    if (this.state.selectedDate == '' || this.state.selectedTime == '') {
      this.setState({ error: true });
    } else {
      this.props.navigation.navigate('PatientsScreen', {
        date: this.state.selectedDate,
        time: this.state.selectedTime,
        doctor: this.state.doctor,
        hospital: this.state.hospital,
        profileId: global.profileId,
      });
    }
  };
  getAvailableSlots = (doctorID) => {
    console.log(doctorID)
    const body = JSON.stringify({

      doctorID: doctorID,
      days:30
    });
    getAvailableSlots(body)
      .then((res) => {
        console.log(res)
        var list1 = [];
        let day = moment().add(1, 'days').format("YYYY-MM-DD")
        for (i = 0; i < res[day].length; i++) {
          list1.push({
            id: i,
            time: res[day][i],
          });
        }
        this.setState({ slots: list1, calen: res })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getDoctorDetails = (id) => {
    const body = JSON.stringify({
      doctor_id: id,
    });
    getDoctorDetails(body)
      .then((res) => {
        console.log(res)
        
        const doc = {
          id: res.doctor.profile_id,
          name: res.doctor.name,
          image: image,
          highestDegree: res.doctor.highest_qualification,
          specialization: res.doctor.departments[0],
          overAllExperience: res.doctor.overall_work_experience,
          totalNoOfReviews: 150,
          avgRating: 4,
          doctor_fee: res.doctor.doctor_fee,
        }
        const h = {
          hospital_name: res.hospital.name,
          area: res.hospital.area,
          city: res.hospital.city,
          state: res.hospital.state,
          pincode: res.hospital.pincode,
          streatAddline1: res.hospital.addressine1,
          streatAddline2: res.hospital.addressine2,
          avgRating: 4,
          totalNoOfReviews: 120,
          id: res.hospital.id,
        }
        var list3 =[]
        for (i = 0; i < 1; i++) { 
        list3.push({
          id:i,
          image: image,
          name: doc.specialization,
        });
      }

      const hours = res.working_hours[0];
     
      const wHours = [["Monday", hours.Monday.split('-')[0], hours.Monday.split('-')[1]],
       ["Tuesday", hours.Tuesday.split('-')[0], hours.Tuesday.split('-')[1]],
       ["Wednesday", hours.Wednesday.split('-')[0], hours.Wednesday.split('-')[1]],
       ["Thursday", hours.Thursday.split('-')[0], hours.Thursday.split('-')[1]],
       ["Friday", hours.Friday.split('-')[0], hours.Friday.split('-')[1]],
       ["Saturday", hours.Saturday.split('-')[0], hours.Saturday.split('-')[1]],
       ["Sunday", hours.Sunday.split('-')[0], hours.Sunday.split('-')[1]]]
      

        this.setState({ hospitalImageList: res.hospitalImages, services: res.services, doctor: doc, 
          doctorReviews: res.reviews, hospital: h, workingHours: wHours, specialistCarddata: list3})
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    Promise.all([this.getAvailableSlots(this.props.navigation.state.params.id), this.getDoctorDetails(this.props.navigation.state.params.id)]);
  }



  render() {

    

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.doctorCardView}>
            <View style={styles.setFlexRow}>
              <View style={styles.positionImage}>
                <Image source={this.state.doctor.image} style={styles.profileImage} />
              </View>
              <View style={styles.imageRightPosition}>
                <Text style={styles.cardText}>
                  Dr. {this.state.doctor.name}(
                  {this.state.doctor.highestDegree})
                </Text>
                <Text style={styles.cardSubBoldText}>
                  {this.state.doctor.specialization}
                </Text>
                <Text style={styles.cardSubItalicText}>
                  {this.state.doctor.overAllExperience} Years of over all
                  experience
                </Text>
                <Text style={styles.cardSubBoldText}>
                  {this.state.doctor.avgRating}(
                  {this.state.doctor.totalNoOfReviews} Stories )
                </Text>
              </View>
            </View>


            <View style={styles.feesdisplay}>
              <View>
                <Text>In-Clinic Appointment fee:</Text>
              </View>
              <View>
                <Text>${this.state.doctor.doctor_fee}</Text>
              </View>
            </View>
          </View>
          <View style={styles.calenderViewStyle}>



          </View>
          <Calendar
            current={moment().format('YYYY-MM-DD')}
            minDate={moment().format('YYYY-MM-DD')}
            maxDate={moment().add(30,'days').format('YYYY-MM-DD')}
            onDayPress={(day) => { this.displaySlots(day)}}            
            enableSwipeMonths={true}
            hideExtraDays={false}
          />
          <Text style={styles.sectionTitle}>
            Select available times on {this.state.selectedDate}
          </Text>
          {this.state.error ? (
            <Text style={styles.errorText}> Please Select Date And Time</Text>
          ) : null}
          <View style={styles.slotsView}>
            {this.state.slots.map((item) => (
              <View key={item.id} style={{ flexBasis: '25%' }}>
                <TouchableOpacity
                  onPress={() => this.onpressTime(item.time)}
                  key={item.id}
                  style={styles.slotsTouch}>
                  <Text>{item.time}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.horizontalLine} />
          <View style={styles.hospitalSectionView}>
            <View style={styles.hospitalSectionSubView}>

              <Text style={styles.hospitalName}>
                {this.state.hospital.hospital_name}
              </Text>


              <View style={{ flexDirection: 'row' }}>
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
                    {this.state.hospital.streatAddline1}, {this.state.hospital.streatAddline2}
                  </Text>
                  <Text style={styles.adressText}>
                    {' '}

                    {this.state.hospital.area}, {this.state.hospital.city} ,
                    {this.state.hospital.state}, {this.state.hospital.pincode}

                  </Text>
                </View>
              </View>
              <View style={styles.hospitalDataRow}>
                <View>
                  <Text style={styles.addressHeader}>Reviews: </Text>
                </View>
                <View>
                  <Text style={styles.addressHeader}>
                    {this.state.hospital.avgRating} {this.state.hospital.totalNoOfReviews} Reviews{' '}
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
          </View>

          <Text style={styles.sectionTitle}>Location</Text>

          <View style={styles.horizontalLine} />

          <Text style={styles.sectionTitle}>Clinic Photos</Text>



          <SliderBox
            images={this.state.hospitalImageList}
            sliderBoxHeight={180}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
          />

          <View style={styles.horizontalLine} />
          <Text style={styles.sectionTitle}>Specialization</Text>
          <View style={styles.imagesRowSetUp}>
          {this.state.specialistCarddata.map((item) => (
              <View key={item.id} style={{flexBasis: '50%'}}>
                <SpecialityCard
                  key={item.id}
                  data={item}
                  style={{backgroundColor: 'white'}}></SpecialityCard>
              </View>
            ))}
            
            
            <View style={{ flexBasis: '50%' }}>
              <SpecialityCard
                data={this.state.specialistCarddata[0]}
                style={{ backgroundColor: 'white' }}></SpecialityCard>
            </View>
          </View>

          <View style={styles.horizontalLine} />
          <Text style={styles.sectionTitle}>Services</Text>

          <View style={styles.slotsView}>
            {this.state.services.map((item) => (
              <View key={item.id} style={{ flexBasis: '31%' }}>
                <TouchableOpacity
                  key={item.id}
                  disabled={true}
                  style={styles.slotsTouch}>
                  <Text>{item.service}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

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

          <Text style={styles.sectionTitle}>Patient Reviews</Text>

          <Text style={styles.reviewsSubText}>
            These reviews represent patient opinions and experiences. And they
            do not reflect the Doctor's medical capabilities.
          </Text>

          {this.state.doctorReviews.map((review) => (
            <ReviewCard key={review.id} review={review}></ReviewCard>
          ))}
        </ScrollView>
        <View style={styles.footerView}>
          <View style={styles.footerSubView}>
            <Text style={styles.footerText}>
              {' '}
              Date : {this.state.selectedDate}
            </Text>
            <Text style={styles.footerText}>
              {' '}
              Time : {this.state.selectedTime}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.payButton}
              onPress={() => this.onPressingContinueButton()}>

              <Text style={styles.payButtonText}>
                Continue ${this.state.doctor.doctor_fee}
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
