import React, { Component } from 'react';

import { StyleSheet,Linking, TextInput, View, TouchableOpacity, Text, Alert , Image, ImageBackground,ScrollView, TouchableHighlight, Button } from 'react-native';

import DoctorProfileCard from './Cards/DoctorProfileCard';
import styles from '../../styles/DoctorProfileStyles';
import styles1 from '../../styles/commonStyles';
import HospitalCard from './Cards/HospitalCard';
// import ReviewCard from './Cards/ReviewCard';
import { SliderBox } from "react-native-image-slider-box";
import { Table, Row, Rows } from "react-native-table-component";
import SpecialityCard from './Cards/SpecialityCard';
import { deleteAdminHospitalApi, workingHoursGetHospitalApi } from '../services/adminHospitalService'
import MapView from 'react-native-maps';
import getDirections from 'react-native-google-maps-directions'
import MapViewDirections from 'react-native-maps-directions';
import Geocoder from 'react-native-geocoding';
import { getAllDepartments } from '../services/DepartmentService'





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

  specialistCarddata: [],

  mon: "jkklll",

  headerSlots: ["Days",  "Opens At", "Closed at",],
  workingHours: [
     ],

      id: this.props.navigation.state.params.id,
      flag : true,
      destlatitude: 0,
      destlongitude:0,

     city:  this.props.navigation.state.params.city,
      addressine1:  this.props.navigation.state.params.addressine1,
      addressine2: this.props.navigation.state.params.addressine2,
      state: this.props.navigation.state.params.state,
   pincode:  this.props.navigation.state.params.pincode,
  phonenumber: this.props.navigation.state.params.phonenumber


      };
    }

    onPressDelete = () => {
      var body;
      console.log("hi")
        body = JSON.stringify({ id: this.state.id });
        
        console.log(body)
          
        deleteAdminHospitalApi(body).then((res) => {
           console.log(res);
          this.props.navigation.navigate('HospitalScreen');
  
        });
  
 
  
   };

   
   componentDidMount(){
    console.log("loading hospitals");

this.onPressSubmit();

var tempdata = []
var Body;
Body = JSON.stringify({ 
  hospital_id: this.state.id});

  console.log("body",Body); 
getAllDepartments(Body)
  .then(results => {
    results.forEach((data) => {
      tempdata.push({
        image: image,
        name: data.Department_name,
        department_id: data.id
      });

    });
  });
this.setState({
  specialistCarddata: tempdata
});
   

Geocoder.init("AIzaSyDKy8Lt1iz47kRCjbJA4FA2lCYqOpHQcKg"); // use a valid API key

Geocoder.from(this.state.addressine1, this.state.city, this.state.state, this.state.pincode)
		.then(json => {
			var location = json.results[0].geometry.location;
      console.log(location['lat'],location['lng']);
      this.setState({ destlatitude: location['lat'] });
      this.setState({ destlongitude: location['lng']});
      console.log(this.state.destlongitude);
      console.log(this.state.destlatitude);
		})
    // .catch(error => console.warn(error));



}


  
  onPressSubmit = () => {
    var body;
    body = JSON.stringify({ hospital_id: this.props.navigation.state.params.id  });

    var tableData = [];
    console.log("wrknghrs")
    console.log(body);
    workingHoursGetHospitalApi().then((res) => {
        console.log(res);

        res.forEach((data) => {
          if(this.props.navigation.state.params.id == data.hospital_id){
            this.setState({ flag: false });

          
          tableData.push(["Mon",data.mon_start_time,data.mon_end_time],["Tue",data.tue_start_time,data.tue_end_time],
            ["Wed",data.wed_start_time,data.wed_end_time], ["Thu",data.thu_start_time,data.thu_end_time],
            ["Fri",data.fri_start_time,data.fri_end_time], ["Sat",data.sat_start_time,data.sat_end_time],
            ["Sun",data.sun_start_time,data.sun_end_time]);
          }
        });
        this.setState({ workingHours: tableData });
        console.log("loadinghospitals1")
      
        });
  

  }


  handleGetDirections = () => {
 
    const data = {
       source: {
        // latitude: 39.961320,
        // longitude:-75.196790
      },
      destination: {
        latitude: this.state.destlatitude,
        longitude: this.state.destlongitude,
        }
       
      ,

      params: [
        {
          key: "travelmode",
          value: "driving"        
        }

      ],
     }



    getDirections(data)


  }



onselectingspecilazation = (id, department_id) => {
 
  this.props.navigation.navigate('DoctorsDisplay', { hospital_id: id, department_id: department_id})

}



  
   
    render() {
 
      //const name =  this.props.navigation.getParam('name', 'nothing sent')
      const name=  this.props.navigation.state.params.name
      const area =  this.props.navigation.state.params.area
      const city =  this.props.navigation.state.params.city
      const addressine1 =  this.props.navigation.state.params.addressine1
      const addressine2 =  this.props.navigation.state.params.addressine2
      const state =  this.props.navigation.state.params.state
      const pincode =  this.props.navigation.state.params.pincode
      const licence_number =  this.props.navigation.state.params.licence_number
      const originally_registered_date =  this.props.navigation.state.params.originally_registered_date
      const phonenumber =  this.props.navigation.state.params.phonenumber
      const id =  this.props.navigation.state.params.id

      const { photo } = this.state;



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
                    {/* () => this.props.navigation.navigate('Directions') */}

                    <TouchableOpacity  onPress={this.handleGetDirections} activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.buttonText}>Directions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => { Linking.openURL(`tel:${phonenumber}`) }} style={styles.button}>
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TimePickingScreen', { id: id})}activeOpacity={0.7} style={styles2.button}  >
   
           <Text style={styles.buttonText}> Add Working Hours </Text>
 
 </TouchableOpacity>
    :            <TouchableOpacity onPress={() => this.props.navigation.navigate('TimePickingScreen', { id: id})}activeOpacity={0.7} style={styles2.button}  >
   
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

                    <Text style={styles.sectionTitle}>Location</Text>
                    <View>




  </View>
                    


                    <View style={styles.horizontalLine} />
                    <Text style={styles.sectionTitle}>Specialization</Text>
                    <View style={styles.imagesRowSetUp}>
                        {this.state.specialistCarddata.map(item => (
                            <View key={item.name} style={{ flexBasis: '50%' }}>
                              <TouchableOpacity onPress={() => this.onselectingspecilazation(  this.state.id, item.department_id)}>
                                <SpecialityCard key={item.name} data={item} style={{ backgroundColor: 'white' }}></SpecialityCard>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>



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
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('HospitalDetailsScreen', {name: name, area: area, city: city, phonenumber: phonenumber, addressine1: addressine1,addressine2: addressine2,
                state: state, pincode: pincode, licence_number: licence_number, originally_registered_date: originally_registered_date, id: id})}  activeOpacity={0.7} style={styles2.button} >
   
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

    mapStyle: {
  
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    }
  });





