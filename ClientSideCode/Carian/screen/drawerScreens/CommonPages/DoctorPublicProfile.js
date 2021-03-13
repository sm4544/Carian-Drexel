import ValidationComponent from 'react-native-form-validator';
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../../styles/DoctorProfileStyles';
import SpecialityCard from '../Cards/SpecialityCard';
import moment from 'moment';
import ReviewCard from '../Cards/ReviewCard';
import {Table, Row, Rows} from 'react-native-table-component';
import CalendarStrip from 'react-native-calendar-strip';
import {SliderBox} from 'react-native-image-slider-box';
import {getAvailableSlots, getDoctorDetails} from '../../services/hospitalService';
const image = {
  uri:
    'https://st4.depositphotos.com/10313122/20884/i/1600/depositphotos_208847620-stock-photo-studio-shot-of-young-beautiful.jpg',
};

export default class DoctorPublicProfile extends ValidationComponent {
  constructor(props) {
    super(props);
    (this.state = {
      doctor: {},
      hospital:{},
      customerCount:1000,
      selectedDate: moment().format('MM/DD/YYYY'),
      selectedTime: '',
      hospitalImageList: [],
      specialistCarddata: [
        {image: image, name: 'Family physicians'},
        {image: image, name: 'Pediatricians'},
        {image: image, name: 'Geriatric doctors'},
        {image: image, name: 'Allergists'},
        {image: image, name: 'Dermatologists'},
        {image: image, name: 'Ophthalmologists'},
        {image: image, name: 'Infectious disease doctors'},
        {image: image, name: 'Obstetrician/gynecologists'},
        {image: image, name: 'Cardiologists'},
        {image: image, name: 'Endocrinologists'},
        {image: image, name: 'Gastroenterologists'},
        {image: image, name: 'Nephrologists'},
        {image: image, name: 'Urologists'},
        {image: image, name: 'Pulmonologists'},
        {image: image, name: 'Otolaryngologists'},
        {image: image, name: 'Neurologists'},
        {image: image, name: 'Psychiatrists'},
        {image: image, name: 'Oncologists'},
        {image: image, name: 'Radiologists'},
        {image: image, name: 'General surgeons'},
        {image: image, name: 'Orthopedic surgeons'},
        {image: image, name: 'Cardiac surgeons'},
        {image: image, name: 'Anesthesiologists'},
        {image: image, name: 'Rheumatologists'},
      ],
      doctorReviews: [],
      services:[],
      headerSlots: ['Days', 'Morning', 'Afternoon', 'Evening', 'Night'],
      workingHours: [
        [
          'Mon',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        ['Tue', '10:00AM-12:00AM', '-', '06:00PM-10:00PM', '-'],
        [
          'Wed',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Thu',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Fri',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Sat',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
        [
          'Sun',
          '10:00AM-12:00AM',
          '01:00PM-05:00PM',
          '06:00PM-10:00PM',
          '10:00PM-07:00AM',
        ],
      ],
    }),
      (this.displaySlots = this.displaySlots.bind(this));
    this.onPressingContinueButton = this.onPressingContinueButton.bind(this);
  }
  displaySlots = (date) => {
    ;
    this.setState({selectedDate: date.format('MM/DD/YYYY')});
  };
  onpressTime = (time) => {
    
    this.setState({selectedTime: time});
  };
  onPressingContinueButton = () => {
    if (this.state.selectedDate == '' || this.state.selectedTime == '') {
      this.setState({error: true});
    } else {
      this.props.navigation.navigate('PatientsScreen', {
        date: this.state.selectedDate,
        time: this.state.selectedTime,
        doctor: this.state.doctor,
        hospital:this.state.hospital,
        profileId: global.profileId,
      });
    }
  };
  getAvailableSlots = (doctorID) => {
    
    const body = JSON.stringify({
      doctorID: doctorID,
      days:30
    });
    getAvailableSlots(body)

      .then((res) => {        
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
  getDoctorDetails = (id) =>{
    const body = JSON.stringify({
      doctor_id: id,
    });
    getDoctorDetails(body)

      .then((res) => {
                
        const doc = {
          id: res.doctor.id,
          name : res.doctor.name,
          image : image,
          highestDegree: res.doctor.highest_qualification,
          specialization:res.doctor.specialization,
          overAllExperience: res.doctor.overall_work_experience,
          totalNoOfReviews:150,
          avgRating: 4,
          doctor_fee: res.doctor.doctor_fee,
          
        }

        const h ={
          hospital_name:res.hospital.name,
          area:res.hospital.area,
          city:res.hospital.city,
          state:res.hospital.state,
          pincode:res.hospital.pincode,
          streatAddline1:res.hospital.addressine1,
          streatAddline2:res.hospital.addressine2,
          avgRating:4,
          totalNoOfReviews:120

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
    this.getAvailableSlots(this.props.navigation.state.params.id);
    this.getDoctorDetails(this.props.navigation.state.params.id)
    }

  

  render() {
  
    let customDatesStyles = [];
    let startDate = moment();
    let endDate = moment(startDate).add(30, 'days');
    let datesWhitelist = [{start: startDate, end: endDate}];
    
    let slots = [
      {id: 0, time: '09:30 AM'},
      {id: 1, time: '10:00 AM'},
      {id: 2, time: '10:30 AM'},
      {id: 3, time: '11:00 AM'},
      {id: 4, time: '11:30 AM'},
      {id: 5, time: '12:00 AM'},
      {id: 12, time: '12:30 AM'},
      {id: 6, time: '01:00 PM'},
      {id: 7, time: '01:30 PM'},
      {id: 8, time: '02:00 PM'},
      {id: 9, time: '02:30 PM'},
      {id: 10, time: '03:00 PM'},
      {id: 11, time: '03:30 PM'},
    ];

    let services = [
      {id: 0, name: 'treatment A'},
      {id: 1, name: 'treatment B'},
      {id: 2, name: 'treatment C'},
      {id: 3, name: 'treatment D'},
    ];

    for (let i = 0; i < 40; i++) {
      customDatesStyles.push({
        startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided

        dateNameStyle: styles.dateNameStyle,
        dateNumberStyle: styles.dateNumberStyle,
        dateContainerStyle: {
          backgroundColor: `#${`#00000${(
            (Math.random() * (1 << 24)) |
            0
          ).toString(16)}`.slice(-6)}`,
        },
      });
    }

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
            <CalendarStrip
              style={styles.calenderStrip}
              customDatesStyles={customDatesStyles}
              maxDate={endDate}
              datesWhitelist={datesWhitelist}
              onDateSelected={this.displaySlots}></CalendarStrip>
          </View>
          <Text style={styles.sectionTitle}>
            Select available times on {this.state.selectedDate}
          </Text>
          {this.state.error ? (
            <Text style={styles.errorText}> Please Select Date And Time</Text>
          ) : null}
          <View style={styles.slotsView}>
            {slots.map((item) => (
              <View key={item.id} style={{flexBasis: '25%'}}>
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
            <View style={{flexBasis: '50%'}}>
              <SpecialityCard
                data={this.state.specialistCarddata[0]}
                style={{backgroundColor: 'white'}}></SpecialityCard>
            </View>
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
