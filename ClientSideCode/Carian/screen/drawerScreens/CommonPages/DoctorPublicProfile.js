import ValidationComponent from 'react-native-form-validator';
import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../../../styles/DoctorProfileStyles';
import SpecialityCard from '../Cards/SpecialityCard';
import moment from 'moment';
import ReviewCard from '../Cards/ReviewCard';
import {Table, Row, Rows} from 'react-native-table-component';
import CalendarStrip from 'react-native-calendar-strip';
const image = {
  uri:
    'https://st4.depositphotos.com/10313122/20884/i/1600/depositphotos_208847620-stock-photo-studio-shot-of-young-beautiful.jpg',
};

export default class DoctorPublicProfile extends ValidationComponent {
  constructor(props) {
    super(props);
    (this.state = {
      city: '',

      profileD: {},

      cityArray: [
        {label: 'Hyd', value: 'hyd'},
        {label: 'vij', value: 'vij'},
      ],
      hospitalCount: '100',
      customerCount: '1000',
      doctorsCount: '150',
      reviewCount: '1500',
      selectedDate: moment().format('MM/DD/YYYY'),
      selectedTime: '',
      hospitalImageList: [
        {id: 0, image: image},
        {id: 1, image: image},
        {id: 2, image: image},
        {id: 3, image: image},
        {id: 4, image: image},
        {id: 5, image: image},
      ],
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
      doctorReviews: [
        {
          id: 0,
          name: 'Srinivas',
          rating: 4,
          date: '11/12/2020',
          comment:
            'Review, criticism imply careful examination of something, formulation of a judgment',
        },
        {
          id: 1,
          name: 'Nallapati',
          rating: 4,
          date: '11/12/2020',
          comment:
            'Review, criticism imply careful examination of something, formulation of a judgment',
        },
        {
          id: 2,
          name: 'Test',
          rating: 4,
          date: '11/12/2020',
          comment:
            'Review, criticism imply careful examination of something, formulation of a judgment',
        },
        {
          id: 3,
          name: 'Hello',
          rating: 4,
          date: '11/12/2020',
          comment:
            'Review, criticism imply careful examination of something, formulation of a judgment',
        },
        {
          id: 4,
          name: 'Test test',
          rating: 4,
          date: '11/12/2020',
          comment:
            'Review, criticism imply careful examination of something, formulation of a judgment',
        },
        {
          id: 5,
          name: 'Se510',
          rating: 4,
          date: '11/12/2020',
          comment:
            'Review, criticism imply careful examination of something, formulation of a judgment',
        },
      ],

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
    console.log(date.format('MM/DD/YYYY'));
    this.setState({selectedDate: date.format('MM/DD/YYYY')});
  };
  onpressTime = (time) => {
    console.log(time);
    this.setState({selectedTime: time});
  };
  onPressingContinueButton = () => {
    if (this.state.selectedDate == '' || this.state.selectedTime == '') {
      this.setState({error: true});
    } else {
      this.props.navigation.navigate('PatientsScreen', {
        date: this.state.selectedDate,
        time: this.state.selectedTime,
        doctor: this.state.profileD,
        
        profileId: '1',
      });
    }
  };

  componentDidMount() {
    Promise.all([
      fetch('https://hospitalmanagementbackend.herokuapp.com/hospitals-simple'),
      fetch('http://hospitalmanagementbackend.herokuapp.com/doctors-simple'),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        var profileD = {};
        var profileH = [];
        var images = [
          'https://healthengine.com.au/info/assets/iStock-879831370-1024x576.jpg',
          'https://cdn.diabetesselfmanagement.com/2006/05/dsm-what-is-an-ophthalmologist-shutterstock_1038422095.jpg',
          'https://chandigarhdeals.com/wp-content/uploads/2020/09/considering-pediatrics-1109x675-1.jpg',
        ];


        for (i = 0; i < res1.length; i++) {
          profileH.push({

            name: res1[i].name,
            type: 'Multispecialtiy',
            area: res1[i].area,
            city: res1[i].city,
            avgRating: '4.5',
            totalNoOfReviews: '150',
            doctors: res1[i].doctors,
          });

        }
        
       

        for (i = 0; i < res2.length; i++) {
         if(res2[i].name==this.props.navigation.state.params.name){         
          profileD={
            image: image,
            name: res2[i].name,
            specialization: res2[i].specialization,
            highestDegree: res2[i].highestDegree,
            area: res2[i].area,
            city: res2[i].city,
            avgRating: '4.5',
            totalNoOfReviews: '150',
            overAllExperience: res2[i].overallExperience,
            hospital_name: res2[i].hospital_name,
            phoneNumber:res2[i].phoneNumber,
            email:res2[i].email,
            doctor_fee:res2[i].doctor_fee,
            college_name:res2[i].college_name,
          };
        }
        }
        this.setState({profileD: profileD});
        //console.log(profileD);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }

  

  render() {
    const doctorId = this.props.navigation.state.params.name;
    const doctor = {
      image: image,
      name: doctorId,
      specialization: 'Dentist',
      highestDegree: 'MBBS',
      fee: '100',
      area: 'spring garden',
      city: 'Philadelphia',
      avgRating: '4.5',
      totalNoOfReviews: '150',
      overAllExperience: '10',
    };
    const hospital = {
      image: image,
      name: 'Manipal1 hospital',
      type: 'Multispecialtiy',
      streatAddline1: 'Unit 5',
      streatAddline2: '3675 market st',
      area: 'spring garden',
      city: 'Philadelphia',
      state: 'PA',
      pincode: '19104',
      avgRating: '4.5',
      totalNoOfReviews: '150',
      totalNoOfDoctors: '10',
    };
    const cal = [
      {
        date: '16/11/2020',
        slots: [
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
        ],
      },
      {
        date: '17/11/2020',
        slots: [
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
          {id: 0, time: '10:00 AM'},
        ],
      },
    ];
    let customDatesStyles = [];
    let startDate = moment();
    let endDate = moment(startDate).add(30, 'days');
    let datesWhitelist = [{start: startDate, end: endDate}];
    let radiogroup_options = [
      {value: 0, label: '10:00 AM   '},
      {value: 1, label: '10:30 Am   '},
      {value: 2, label: '11:00 Am   '},
      {value: 3, label: '10:00 AM   '},
      {value: 4, label: '10:30 Am   '},
      {value: 5, label: '11:00 Am   '},
    ];
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
                <Image source={this.state.profileD.image} style={styles.profileImage} />
              </View>
              <View style={styles.imageRightPosition}>
                <Text style={styles.cardText}>
                  Dr. {this.state.profileD.name}(
                  {this.state.profileD.highestDegree})
                </Text>
                <Text style={styles.cardSubBoldText}>
                  {this.state.profileD.specialization}
                </Text>
                <Text style={styles.cardSubItalicText}>
                  {this.state.profileD.overAllExperience} Years of over all
                  experience
                </Text>
                <Text style={styles.cardSubBoldText}>
                  {this.state.profileD.avgRating}(
                  {this.state.profileD.totalNoOfReviews} Stories )
                </Text>
              </View>
            </View>


            <View style={styles.feesdisplay}>
              <View>
                <Text>In-Clinic Appointment fee:</Text>
              </View>
              <View>
                <Text>${this.state.profileD.doctor_fee}</Text>
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
                {this.state.profileD.hospital_name}
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
                    {hospital.streatAddline1}, {hospital.streatAddline2}
                  </Text>
                  <Text style={styles.adressText}>
                    {' '}

                    {this.state.profileD.area}, {this.state.profileD.city} ,
                    {hospital.state}, {hospital.pincode}

                  </Text>
                </View>
              </View>
              <View style={styles.hospitalDataRow}>
                <View>
                  <Text style={styles.addressHeader}>Reviews: </Text>
                </View>
                <View>
                  <Text style={styles.addressHeader}>
                    {hospital.avgRating} {hospital.totalNoOfReviews} Reviews{' '}
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

          <View style={styles.imagesRowSetUp}>
            {this.state.hospitalImageList.map((image) => (
              <View key={image.id} style={{flexBasis: '30%', margin: 5}}>
                <Image source={image.image} style={styles.hospitalImage} />
              </View>
            ))}
          </View>

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
            {services.map((item) => (
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
                Continue ${this.state.profileD.doctor_fee}
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
