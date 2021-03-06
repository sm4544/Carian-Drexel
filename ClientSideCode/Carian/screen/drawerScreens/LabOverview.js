import React, { Component } from 'react';

import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert , Image, ImageBackground,ScrollView, TouchableHighlight } from 'react-native';

import DoctorProfileCard from './Cards/DoctorProfileCard';
import styles from '../../styles/DoctorProfileStyles';
import styles1 from '../../styles/commonStyles';
import HospitalCard from './Cards/HospitalCard';
import { SliderBox } from "react-native-image-slider-box";
// import ReviewCard from './Cards/ReviewCard';
import { Table, Row, Rows } from "react-native-table-component";
import { deleteAdminLabApi, workingHoursGetLabApi } from '../services/adminLabService'

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

    hospitalImages: [
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree"

  ],

  specialistCarddata: [{ image: image, name: 'Family physicians' },
  { image: image, name: 'Pediatricians' },
  { image: image, name: 'Geriatric doctors' },
  { image: image, name: 'Allergists' },
  { image: image, name: 'Rheumatologists' }],

  headerSlots: ["Days", "24Hours", "Opens At", "Closed at",],
  workingHours: [
  ],
 
      id: this.props.navigation.state.params.id,
      flag : true
      };
    }

    onPressDelete = () => {
      var body;
      console.log("hi")
        body = JSON.stringify({ id: this.state.id });
        
        console.log(body)
          
        deleteAdminLabApi(body).then((res) => {
           console.log(res);
          this.props.navigation.navigate('LabScreen');
  
        });
  
 
  
   };

   componentDidMount(){
    console.log("loading labs");
this.onPressSubmit();

}

   onPressSubmit = () => {
    var body;
    body = JSON.stringify({ lab_id: this.props.navigation.state.params.id  });

    var tableData = [];
    console.log("wrknghrs")
    console.log(body);
    workingHoursGetLabApi().then((res) => {
        console.log(res);

        res.forEach((data) => {
          if(this.props.navigation.state.params.id == data.lab_id){
            this.setState({ flag: false });

          
          tableData.push(["Mon",data.mon_start_time,data.mon_end_time],["Tue",data.tue_start_time,data.tue_end_time],
            ["Wed",data.wed_start_time,data.wed_end_time], ["Thu",data.thu_start_time,data.thu_end_time],
            ["Fri",data.fri_start_time,data.fri_end_time], ["Sat",data.sat_start_time,data.sat_end_time],
            ["Sun",data.sun_start_time,data.sun_end_time]);
          }
        });
        this.setState({ workingHours: tableData });
        console.log("loadinglabs1")
      
        });
  

  }

 
   
    render() {
      const name=  this.props.navigation.state.params.name
      const area =  this.props.navigation.state.params.area
      const city =  this.props.navigation.state.params.city
      const phonenumber =  this.props.navigation.state.params.phonenumber
      const addressine1 =  this.props.navigation.state.params.addressine1
      const addressine2 =  this.props.navigation.state.params.addressine2
      const state =  this.props.navigation.state.params.state
      const pincode =  this.props.navigation.state.params.pincode
      const licence_number =  this.props.navigation.state.params.licence_number
      const originally_registered_date =  this.props.navigation.state.params.originally_registered_date
      const hospital_id =  this.props.navigation.state.params.hospital_id
      const id =  this.props.navigation.state.params.id

      // const name =  this.props.navigation.getParam('name', 'nothing sent')

      return (
  
        <View style={{ flex: 1 }}>
          <ScrollView>

                <View style={styles.container}>
                    <SliderBox
                        images={this.state.hospitalImages}
                        sliderBoxHeight={180}

                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                    />
                    </View>

                    <View style={styles.hospitalSectionView}>
                    <Text style={   { fontSize: 18,
                      fontWeight: 'bold'}}>{name}</Text>

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
                </View>


                      <View style={styles.hospitalDataRow}>
                            <View>
                                <Text style={styles.addressHeader}>Address: </Text>
                            </View>
                            <View>
                                <Text style={styles.adressText}> {addressine1}, {addressine2}</Text>
                                <Text style={styles.adressText}> {area}, {city} ,{state}, {pincode}</Text>
                            </View>
                        </View>

                        <View>   
                          {   this.state.flag?
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TimePickingLabScreen', { id: id})}activeOpacity={0.7} style={styles2.button}  >
   
           <Text style={styles.buttonText}> Add Working Hours </Text>
 
 </TouchableOpacity>
    :            <TouchableOpacity onPress={() => this.props.navigation.navigate('TimePickingLabScreen', { id: id})}activeOpacity={0.7} style={styles2.button}  >
   
    <Text style={styles.buttonText}> Edit Working Hours </Text>

</TouchableOpacity>}
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

                    {/* {this.state.hospitalReviews.map(review => (
                        <ReviewCard key={review.id} review={review}></ReviewCard>

                        ))} */}


                </ScrollView>
                <View style={styles.footerView}>

                <View style={{ flexDirection:"row" }}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('LabDetailsScreen', {name: name, area: area, city: city, phonenumber: phonenumber, addressine1: addressine1,addressine2: addressine2,
                state: state, pincode: pincode, licence_number: licence_number,hospital_id: hospital_id, originally_registered_date: originally_registered_date, id: id})}  activeOpacity={0.7} style={styles2.button} >
   
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