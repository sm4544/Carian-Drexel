import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import styles from '../../styles/commonStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { createPatient } from '../services/profileService'

export default class PatientsRegisterScreen extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      occupation: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      gender: '',
      maritalStatus: '',
      height: '',
      weight: '',
      bloodGroup: '',
      physicalActivities: '',
      tobacco: '',
      alcohol: '',
      allergies: '',
      hobbies: '',
      recurringProblems: '',
      age: '',
      relationship: ''


    };

  }
  onPressRegister = (profileId, doctor, hospital, selectedDate, selectedTime) => {
    body = JSON.stringify({

      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      mobile_number: this.state.mobileNumber,
      age: 5,
      weight: this.state.weight,
      height: this.state.height,
      gender: this.state.gender,
      occupation: this.state.occupation,
      martial_status: this.state.maritalStatus,
      blood_group: this.state.bloodGroup,
      is_created_by_staff: "False",
      addressine1: "Good Food flats",
      addressine2: "Baring Street",
      city: "Philadelphia",
      state: "PA",
      dob: "1978-2-2",
      hobbies: this.state.hobbies,
      recurring_problems: this.state.recurringProblems,
      allergies: this.state.allergies,
      alcohol: this.state.alcohol,
      activities: this.state.physicalActivities,
      pincode: "19104",
      relation: this.state.relationship,
      related_profile: profileId,
      tobacco: this.state.tobacco

    });
    console.log(body)
    createPatient(body)
      .then((res) => {

        console.log(res);
        this.props.navigation.navigate('PatientsScreen2', {
          date: selectedDate,
          time: selectedTime,
          doctor: doctor,
          hospital: hospital,
          profileId: profileId,
        });
        

      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    const selectedDate = this.props.navigation.state.params.date;
    const selectedTime = this.props.navigation.state.params.time;
    const doctor = this.props.navigation.state.params.doctor;
    const profileId = this.props.navigation.state.params.profileId;
    const hospital = this.props.navigation.state.params.hospital;

    var relationship = [
      { label: 'Self', value: 'Self', },
      { label: 'Spouse', value: 'Spouse', },
      { label: 'Kid', value: 'Kid', },
      { label: 'Mother', value: 'Mother', },
      { label: 'Father', value: 'Father', },
      { label: 'Grand Mother', value: 'Grand Mother', },
      { label: 'Grand Father', value: 'Grand Father', },
      { label: 'Other', value: 'Other', },

    ]
    var maritalStatus = [
      { label: 'Single', value: 'Single', },
      { label: 'Married', value: 'Married', },
      { label: 'Divorced', value: 'Divorced', },
      { label: 'Seperated', value: 'Seperated', },
      { label: 'Widow', value: 'Widow', },
      { label: 'In a Relationship', value: 'In a Relationship', },
    ]
    var gender = [
      { label: 'Male', value: 'M', },
      { label: 'Female', value: 'F', },
      

    ]
    var yesorno = [
      { label: 'Yes', value: 'Yes', },
      { label: 'No', value: 'No', },
    ]
    var age = [
      { label:'1 Years', value:1},
      { label:'2 Years', value:2},
      { label:'3 Years', value:3},
      { label:'4 Years', value:4},
      { label:'5 Years', value:5},
      { label:'6 Years', value:6},
      { label:'7 Years', value:7},
      { label:'8 Years', value:8},
      { label:'9 Years', value:9},
      { label:'10 Years', value:10},
      { label:'11 Years', value:11},
      { label:'12 Years', value:12},
      { label:'13 Years', value:13},
      { label:'14 Years', value:14},
      { label:'15 Years', value:15},
      { label:'16 Years', value:16},
      { label:'17 Years', value:17},
      { label:'18 Years', value:18},
      { label:'19 Years', value:19},
      { label:'20 Years', value:20},
      { label:'21 Years', value:21},
      { label:'22 Years', value:22},
      { label:'23 Years', value:23},
      { label:'24 Years', value:24},
      { label:'25 Years', value:25},
      { label:'26 Years', value:26},
      { label:'27 Years', value:27},
      { label:'28 Years', value:28},
      { label:'29 Years', value:29},
      { label:'30 Years', value:30},
      { label:'31 Years', value:31},
      { label:'32 Years', value:32},
      { label:'33 Years', value:33},
      { label:'34 Years', value:34},
      { label:'35 Years', value:35},
      { label:'36 Years', value:36},
      { label:'37 Years', value:37},
      { label:'38 Years', value:38},
      { label:'39 Years', value:39},
      { label:'40 Years', value:40},
      { label:'41 Years', value:41},
      { label:'42 Years', value:42},
      { label:'43 Years', value:43},
      { label:'44 Years', value:44},
      { label:'45 Years', value:45},
      { label:'46 Years', value:46},
      { label:'47 Years', value:47},
      { label:'48 Years', value:48},
      { label:'49 Years', value:49},
      { label:'50 Years', value:50},
      { label:'51 Years', value:51},
      { label:'52 Years', value:52},
      { label:'53 Years', value:53},
      { label:'54 Years', value:54},
      { label:'55 Years', value:55},
      { label:'56 Years', value:56},
      { label:'57 Years', value:57},
      { label:'58 Years', value:58},
      { label:'59 Years', value:59},
      { label:'60 Years', value:60},
      { label:'61 Years', value:61},
      { label:'62 Years', value:62},
      { label:'63 Years', value:63},
      { label:'64 Years', value:64},
      { label:'65 Years', value:65},
      { label:'66 Years', value:66},
      { label:'67 Years', value:67},
      { label:'68 Years', value:68},
      { label:'69 Years', value:69},
      { label:'70 Years', value:70},
      { label:'71 Years', value:71},
      { label:'72 Years', value:72},
      { label:'73 Years', value:73},
      { label:'74 Years', value:74},
      { label:'75 Years', value:75},
      { label:'76 Years', value:76},
      { label:'77 Years', value:77},
      { label:'78 Years', value:78},
      { label:'79 Years', value:79},
      { label:'80 Years', value:80},
      { label:'81 Years', value:81},
      { label:'82 Years', value:82},
      { label:'83 Years', value:83},
      { label:'84 Years', value:84},
      { label:'85 Years', value:85},
      { label:'86 Years', value:86},
      { label:'87 Years', value:87},
      { label:'88 Years', value:88},
      { label:'89 Years', value:89},
      { label:'90 Years', value:90},
      { label:'91 Years', value:91},
      { label:'92 Years', value:92},
      { label:'93 Years', value:93},
      { label:'94 Years', value:94},
      { label:'95 Years', value:95},
      { label:'96 Years', value:96},
      { label:'97 Years', value:97},
      { label:'98 Years', value:98},
      { label:'99 Years', value:99},
      
    ]
    var weight = [
      { label:'10 Kgs', value:'10'},
      { label:'11 Kgs', value:'11'},
      { label:'12 Kgs', value:'12'},
      { label:'13 Kgs', value:'13'},
      { label:'14 Kgs', value:'14'},
      { label:'15 Kgs', value:'15'},
      { label:'16 Kgs', value:'16'},
      { label:'17 Kgs', value:'17'},
      { label:'18 Kgs', value:'18'},
      { label:'19 Kgs', value:'19'},
      { label:'20 Kgs', value:'20'},
      { label:'21 Kgs', value:'21'},
      { label:'22 Kgs', value:'22'},
      { label:'23 Kgs', value:'23'},
      { label:'24 Kgs', value:'24'},
      { label:'25 Kgs', value:'25'},
      { label:'26 Kgs', value:'26'},
      { label:'27 Kgs', value:'27'},
      { label:'28 Kgs', value:'28'},
      { label:'29 Kgs', value:'29'},
      { label:'30 Kgs', value:'30'},
      { label:'31 Kgs', value:'31'},
      { label:'32 Kgs', value:'32'},
      { label:'33 Kgs', value:'33'},
      { label:'34 Kgs', value:'34'},
      { label:'35 Kgs', value:'35'},
      { label:'36 Kgs', value:'36'},
      { label:'37 Kgs', value:'37'},
      { label:'38 Kgs', value:'38'},
      { label:'39 Kgs', value:'39'},
      { label:'40 Kgs', value:'40'},
      { label:'41 Kgs', value:'41'},
      { label:'42 Kgs', value:'42'},
      { label:'43 Kgs', value:'43'},
      { label:'44 Kgs', value:'44'},
      { label:'45 Kgs', value:'45'},
      { label:'46 Kgs', value:'46'},
      { label:'47 Kgs', value:'47'},
      { label:'48 Kgs', value:'48'},
      { label:'49 Kgs', value:'49'},
      { label:'50 Kgs', value:'50'},
      { label:'51 Kgs', value:'51'},
      { label:'52 Kgs', value:'52'},
      { label:'53 Kgs', value:'53'},
      { label:'54 Kgs', value:'54'},
      { label:'55 Kgs', value:'55'},
      { label:'56 Kgs', value:'56'},
      { label:'57 Kgs', value:'57'},
      { label:'58 Kgs', value:'58'},
      { label:'59 Kgs', value:'59'},
      { label:'60 Kgs', value:'60'},
      { label:'61 Kgs', value:'61'},
      { label:'62 Kgs', value:'62'},
      { label:'63 Kgs', value:'63'},
      { label:'64 Kgs', value:'64'},
      { label:'65 Kgs', value:'65'},
      { label:'66 Kgs', value:'66'},
      { label:'67 Kgs', value:'67'},
      { label:'68 Kgs', value:'68'},
      { label:'69 Kgs', value:'69'},
      { label:'70 Kgs', value:'70'},
      { label:'71 Kgs', value:'71'},
      { label:'72 Kgs', value:'72'},
      { label:'73 Kgs', value:'73'},
      { label:'74 Kgs', value:'74'},
      { label:'75 Kgs', value:'75'},
      { label:'76 Kgs', value:'76'},
      { label:'77 Kgs', value:'77'},
      { label:'78 Kgs', value:'78'},
      { label:'79 Kgs', value:'79'},
      { label:'80 Kgs', value:'80'},
      { label:'81 Kgs', value:'81'},
      { label:'82 Kgs', value:'82'},
      { label:'83 Kgs', value:'83'},
      { label:'84 Kgs', value:'84'},
      { label:'85 Kgs', value:'85'},
      { label:'86 Kgs', value:'86'},
      { label:'87 Kgs', value:'87'},
      { label:'88 Kgs', value:'88'},
      { label:'89 Kgs', value:'89'},
      { label:'90 Kgs', value:'90'},
      { label:'91 Kgs', value:'91'},
      { label:'92 Kgs', value:'92'},
      { label:'93 Kgs', value:'93'},
      { label:'94 Kgs', value:'94'},
      { label:'95 Kgs', value:'95'},
      { label:'96 Kgs', value:'96'},
      { label:'97 Kgs', value:'97'},
      { label:'98 Kgs', value:'98'},
      { label:'99 Kgs', value:'99'},
      { label:'100 Kgs', value:'100'},
      { label:'101 Kgs', value:'101'},
      { label:'102 Kgs', value:'102'},
      { label:'103 Kgs', value:'103'},
      { label:'104 Kgs', value:'104'},
      { label:'105 Kgs', value:'105'},
      { label:'106 Kgs', value:'106'},
      { label:'107 Kgs', value:'107'},
      { label:'108 Kgs', value:'108'},
      { label:'109 Kgs', value:'109'},
      { label:'110 Kgs', value:'110'},
      { label:'111 Kgs', value:'111'},
      { label:'112 Kgs', value:'112'},
      { label:'113 Kgs', value:'113'},
      { label:'114 Kgs', value:'114'},
      { label:'115 Kgs', value:'115'},
      { label:'116 Kgs', value:'116'},
      { label:'117 Kgs', value:'117'},
      { label:'118 Kgs', value:'118'},
      { label:'119 Kgs', value:'119'},
      { label:'120 Kgs', value:'120'},
      
      
    ]

    var height = [
      { label:'30 cms', value:'30'},
      { label:'31 cms', value:'31'},
      { label:'32 cms', value:'32'},
      { label:'33 cms', value:'33'},
      { label:'34 cms', value:'34'},
      { label:'35 cms', value:'35'},
      { label:'36 cms', value:'36'},
      { label:'37 cms', value:'37'},
      { label:'38 cms', value:'38'},
      { label:'39 cms', value:'39'},
      { label:'40 cms', value:'40'},
      { label:'41 cms', value:'41'},
      { label:'42 cms', value:'42'},
      { label:'43 cms', value:'43'},
      { label:'44 cms', value:'44'},
      { label:'45 cms', value:'45'},
      { label:'46 cms', value:'46'},
      { label:'47 cms', value:'47'},
      { label:'48 cms', value:'48'},
      { label:'49 cms', value:'49'},
      { label:'50 cms', value:'50'},
      { label:'51 cms', value:'51'},
      { label:'52 cms', value:'52'},
      { label:'53 cms', value:'53'},
      { label:'54 cms', value:'54'},
      { label:'55 cms', value:'55'},
      { label:'56 cms', value:'56'},
      { label:'57 cms', value:'57'},
      { label:'58 cms', value:'58'},
      { label:'59 cms', value:'59'},
      { label:'60 cms', value:'60'},
      { label:'61 cms', value:'61'},
      { label:'62 cms', value:'62'},
      { label:'63 cms', value:'63'},
      { label:'64 cms', value:'64'},
      { label:'65 cms', value:'65'},
      { label:'66 cms', value:'66'},
      { label:'67 cms', value:'67'},
      { label:'68 cms', value:'68'},
      { label:'69 cms', value:'69'},
      { label:'70 cms', value:'70'},
      { label:'71 cms', value:'71'},
      { label:'72 cms', value:'72'},
      { label:'73 cms', value:'73'},
      { label:'74 cms', value:'74'},
      { label:'75 cms', value:'75'},
      { label:'76 cms', value:'76'},
      { label:'77 cms', value:'77'},
      { label:'78 cms', value:'78'},
      { label:'79 cms', value:'79'},
      { label:'80 cms', value:'80'},
      { label:'81 cms', value:'81'},
      { label:'82 cms', value:'82'},
      { label:'83 cms', value:'83'},
      { label:'84 cms', value:'84'},
      { label:'85 cms', value:'85'},
      { label:'86 cms', value:'86'},
      { label:'87 cms', value:'87'},
      { label:'88 cms', value:'88'},
      { label:'89 cms', value:'89'},
      { label:'90 cms', value:'90'},
      { label:'91 cms', value:'91'},
      { label:'92 cms', value:'92'},
      { label:'93 cms', value:'93'},
      { label:'94 cms', value:'94'},
      { label:'95 cms', value:'95'},
      { label:'96 cms', value:'96'},
      { label:'97 cms', value:'97'},
      { label:'98 cms', value:'98'},
      { label:'99 cms', value:'99'},
      { label:'100 cms', value:'100'},
      { label:'101 cms', value:'101'},
      { label:'102 cms', value:'102'},
      { label:'103 cms', value:'103'},
      { label:'104 cms', value:'104'},
      { label:'105 cms', value:'105'},
      { label:'106 cms', value:'106'},
      { label:'107 cms', value:'107'},
      { label:'108 cms', value:'108'},
      { label:'109 cms', value:'109'},
      { label:'110 cms', value:'110'},
      { label:'111 cms', value:'111'},
      { label:'112 cms', value:'112'},
      { label:'113 cms', value:'113'},
      { label:'114 cms', value:'114'},
      { label:'115 cms', value:'115'},
      { label:'116 cms', value:'116'},
      { label:'117 cms', value:'117'},
      { label:'118 cms', value:'118'},
      { label:'119 cms', value:'119'},
      { label:'120 cms', value:'120'},
      { label:'121 cms', value:'121'},
      { label:'122 cms', value:'122'},
      { label:'123 cms', value:'123'},
      { label:'124 cms', value:'124'},
      { label:'125 cms', value:'125'},
      { label:'126 cms', value:'126'},
      { label:'127 cms', value:'127'},
      { label:'128 cms', value:'128'},
      { label:'129 cms', value:'129'},
      { label:'130 cms', value:'130'},
      { label:'131 cms', value:'131'},
      { label:'132 cms', value:'132'},
      { label:'133 cms', value:'133'},
      { label:'134 cms', value:'134'},
      { label:'135 cms', value:'135'},
      { label:'136 cms', value:'136'},
      { label:'137 cms', value:'137'},
      { label:'138 cms', value:'138'},
      { label:'139 cms', value:'139'},
      { label:'140 cms', value:'140'},
      { label:'141 cms', value:'141'},
      { label:'142 cms', value:'142'},
      { label:'143 cms', value:'143'},
      { label:'144 cms', value:'144'},
      { label:'145 cms', value:'145'},
      { label:'146 cms', value:'146'},
      { label:'147 cms', value:'147'},
      { label:'148 cms', value:'148'},
      { label:'149 cms', value:'149'},
      { label:'150 cms', value:'150'},
      { label:'151 cms', value:'151'},
      { label:'152 cms', value:'152'},
      { label:'153 cms', value:'153'},
      { label:'154 cms', value:'154'},
      { label:'155 cms', value:'155'},
      { label:'156 cms', value:'156'},
      { label:'157 cms', value:'157'},
      { label:'158 cms', value:'158'},
      { label:'159 cms', value:'159'},
      { label:'160 cms', value:'160'},
      { label:'161 cms', value:'161'},
      { label:'162 cms', value:'162'},
      { label:'163 cms', value:'163'},
      { label:'164 cms', value:'164'},
      { label:'165 cms', value:'165'},
      { label:'166 cms', value:'166'},
      { label:'167 cms', value:'167'},
      { label:'168 cms', value:'168'},
      { label:'169 cms', value:'169'},
      { label:'170 cms', value:'170'},
      { label:'171 cms', value:'171'},
      { label:'172 cms', value:'172'},
      { label:'173 cms', value:'173'},
      { label:'174 cms', value:'174'},
      { label:'175 cms', value:'175'},
      { label:'176 cms', value:'176'},
      { label:'177 cms', value:'177'},
      { label:'178 cms', value:'178'},
      { label:'179 cms', value:'179'},
      { label:'180 cms', value:'180'},
      { label:'181 cms', value:'181'},
      { label:'182 cms', value:'182'},
      { label:'183 cms', value:'183'},
      { label:'184 cms', value:'184'},
      { label:'185 cms', value:'185'},
      { label:'186 cms', value:'186'},
      { label:'187 cms', value:'187'},
      { label:'188 cms', value:'188'},
      { label:'189 cms', value:'189'},
      { label:'190 cms', value:'190'},
      { label:'191 cms', value:'191'},
      { label:'192 cms', value:'192'},
      { label:'193 cms', value:'193'},
      { label:'194 cms', value:'194'},
      { label:'195 cms', value:'195'},
      { label:'196 cms', value:'196'},
      { label:'197 cms', value:'197'},
      { label:'198 cms', value:'198'},
      { label:'199 cms', value:'199'},
      { label:'200 cms', value:'200'},
      

    ]

    var bloodGroup = [
      { label: 'A+', value: 'A+', },
      { label: 'A-', value: 'A-', },
      { label: 'B+', value: 'B+', },
      { label: 'B-', value: 'B-', },
      { label: 'O+', value: 'O+', },
      { label: 'O-', value: 'O-', },
      { label: 'AB+', value: 'AB+', },
      { label: 'AB-', value: 'AB-', },
      { label: 'Other', value: 'Other', },

    ]

    var occupation = [
      { label: 'Waiter', value: 'Waiter', },
      { label: 'Paramedic', value: 'Paramedic', },
      { label: 'Dentist', value: 'Dentist', },
      { label: 'Train conductor', value: 'Train conductor', },
      { label: 'Nurse', value: 'Nurse', },
      { label: 'Electrician', value: 'Electrician', },
      { label: 'Doctor', value: 'Doctor', },
      { label: 'Businessman', value: 'Businessman', },
      { label: 'American football player', value: 'American football player', },
      { label: 'Student', value: 'Student', },
      { label: 'Surgeon', value: 'Surgeon', },
      { label: 'Doorman', value: 'Doorman', },
      { label: 'Secretary', value: 'Secretary', },
      { label: 'Soldier', value: 'Soldier', },
      { label: 'Repairman', value: 'Repairman', },
      { label: 'Scientist', value: 'Scientist', },
      { label: 'Reporter', value: 'Reporter', },
      { label: 'Construction worker', value: 'Construction worker', },
      { label: 'Professor', value: 'Professor', },
      { label: 'Police officer', value: 'Police officer', },
      { label: 'Postman', value: 'Postman', },
      { label: 'Photographer', value: 'Photographer', },
      { label: 'Pilot', value: 'Pilot', },
      { label: 'Catholic nun', value: 'Catholic nun', },
      { label: 'Painter', value: 'Painter', },
      { label: 'Mechanic', value: 'Mechanic', },
      { label: 'Magician', value: 'Magician', },
      { label: 'Lifeguard', value: 'Lifeguard', },
      { label: 'Lunchroom supervisor', value: 'Lunchroom supervisor', },
      { label: 'Clown', value: 'Clown', },
      { label: 'Housekeeper', value: 'Housekeeper', },
      { label: 'Gardener', value: 'Gardener', },
      { label: 'Geisha', value: 'Geisha', },
      { label: 'Footballer', value: 'Footballer', },
      { label: 'Forest ranger', value: 'Forest ranger', },
      { label: 'Builder', value: 'Builder', },
      { label: 'Foreman', value: 'Foreman', },
      { label: 'Farmer', value: 'Farmer', },
      { label: 'Flight attendant', value: 'Flight attendant', },
      { label: 'Fireman', value: 'Fireman', },
      { label: 'Engineer', value: 'Engineer', },
      { label: 'Carpenter', value: 'Carpenter', },
      { label: 'Architect', value: 'Architect', },
      { label: 'Boxer', value: 'Boxer', },
      { label: 'Cameraman', value: 'Cameraman', },
      { label: 'Detective', value: 'Detective', },
      { label: 'Journalist', value: 'Journalist', },
      { label: 'Housewife', value: 'Housewife', },
      { label: 'Diver', value: 'Diver', },
      { label: 'Pope', value: 'Pope', },
      { label: 'Priest', value: 'Priest', },
      { label: 'Salesman', value: 'Salesman', },
      { label: 'Librarian', value: 'Librarian', },
      { label: 'Pirate', value: 'Pirate', },
      { label: 'Singer', value: 'Singer', },

    ];
    return (
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.text}>Patient Details</Text>
          <Text style={styles.labelText}>Patient Relationship:</Text>
          <DropDownPicker
            items={relationship}
            defaultValue={this.state.relationship}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              relationship: item.value
            })}
          />

          <Text style={styles.labelText}>Patient First Name:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Patient first Name"
              placeholderTextColor="white"
              ref="firstName"
              onChangeText={(firstName) => this.setState({ firstName })}
              value={this.state.firstName}
            />
          </View>

          <Text style={styles.labelText}>Patient Last Name:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Patient last Name"
              placeholderTextColor="white"
              ref="lastName"
              onChangeText={(lastName) => this.setState({ lastName })}
              value={this.state.lastName}
            />
          </View>

          <Text style={styles.labelText}>Patient phone Number:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="123456789"
              placeholderTextColor="white"
              keyboardType="number-pad"
              ref="mobileNumber"
              onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
              value={this.state.mobileNumber}
            />
          </View>

          <Text style={styles.labelText}>Patient email address:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="test@test.com"
              placeholderTextColor="white"
              ref="email"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
          </View>

          <Text style={styles.labelText}>Patient Occupation:</Text>
          <DropDownPicker
            items={occupation}
            defaultValue={this.state.occupation}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              occupation: item.value
            })}
          />

          <Text style={styles.labelText}>Patient Date of Birth:</Text>
          <DropDownPicker
            items={age}
            defaultValue={this.state.age}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              age: item.value
            })}
          />
          <Text style={styles.labelText}>Gender:</Text>
          <DropDownPicker
            items={gender}
            defaultValue={this.state.gender}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              gender: item.value
            })}
          />

          <Text style={styles.labelText}>Patient Martial status:</Text>
          <DropDownPicker
            items={maritalStatus}
            defaultValue={this.state.maritalStatus}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              maritalStatus: item.value
            })}
          />
          <Text style={styles.labelText}>Patient's height:</Text>
          <DropDownPicker
            items={height}
            defaultValue={this.state.height}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              height: item.value
            })}
          />
          <Text style={styles.labelText}>Patient's weight:</Text>
          <DropDownPicker
            items={weight}
            defaultValue={this.state.weight}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              weight: item.value
            })}
          />

          <Text style={styles.labelText}>Patient's Blood group:</Text>
          <DropDownPicker
            items={bloodGroup}
            defaultValue={this.state.bloodGroup}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              bloodGroup: item.value
            })}
          />
          <Text style={styles.text}>Medical History</Text>
          <Text style={styles.labelText}>Patient's Medical history (recurring problems):</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Medication History"
              placeholderTextColor="white"
              ref="recurringProblems"
              onChangeText={(recurringProblems) => this.setState({ recurringProblems })}
              value={this.state.recurringProblems}
            />
          </View>

          <Text style={styles.labelText}>Patient's Allergies to Medicine:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Allergies"
              placeholderTextColor="white"
              ref="allergies"
              onChangeText={(allergies) => this.setState({ allergies })}
              value={this.state.allergies}
            />
          </View>

          <Text style={styles.text}>Social History</Text>
          <Text style={styles.labelText}>Patient's Hobbies:</Text>
          <View style={styles.inputViewPatients}>
            <TextInput
              style={styles.input}
              placeholder="Hobbies"
              placeholderTextColor="white"
              ref="hobbies"
              onChangeText={(hobbies) => this.setState({ hobbies })}
              value={this.state.hobbies}
            />
          </View>

          <Text style={styles.labelText}>Use of Tobacco (now or past):</Text>
          <DropDownPicker
            items={yesorno}
            defaultValue={this.state.tobacco}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              tobacco: item.value
            })}
          />



          <Text style={styles.labelText}>Use of Alcohol (now or past):</Text>
          <DropDownPicker
            items={yesorno}
            defaultValue={this.state.alcohol}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              alcohol: item.value
            })}
          />

          <Text style={styles.labelText}>Do you get regular physical activities:</Text>
          <DropDownPicker
            items={yesorno}
            defaultValue={this.state.physicalActivities}
            containerStyle={{ height: 60 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, marginBottom: 20 }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item => this.setState({
              physicalActivities: item.value
            })}
          />


          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressRegister(profileId, doctor, hospital, selectedDate, selectedTime)}>
            <Text style={styles.buttonText}>Register/Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}


