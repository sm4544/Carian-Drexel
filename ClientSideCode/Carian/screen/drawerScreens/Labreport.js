

import React, { Component } from 'react';

import { StyleSheet, Image,TextInput, View, TouchableOpacity, Text , ScrollView, ImageBackground} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Feather';
import DoctorProfileCard from './Cards/DoctorProfileCard';
import { labOrders } from '../services/customerDetailsService'


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
        // appointment_id:  this.props.navigation.state.params.id,
        patientdetails: [],
        doctordetails:[],
        doctorprofiledetails:[],
        doctorarray:[],

        Patient_id: this.props.navigation.state.params.patientid,
      
    

      };
     
   
    }

 
    componentDidMount(){
      this.onPressSubmit();
    }


    onPressSubmit = () => {

      var i;
      var tableData = [];
      console.log("wrknghrs")
 
      labOrders().then((res) => {

          // this.setState({patientdetails:res.patient[0]});
        

          for(i=0;i<res.length;i++){

            if(this.state.Patient_id==res[i].generated_for){
              tableData.push({ orderid: res[i].id, orderdate: res[i].generated_date, orderstatus: res[i].order_status});
              this.setState({doctorarray:tableData});
              console.log(this.state.doctorarray);
          
            }

          }

       
          });
    
  
    }

    onselecting = (orderid) => {
 
      this.props.navigation.navigate('LabOrderDetails',{orderid:orderid});
  
  }

   
    render() {

 

    // const Patient_id=  this.props.navigation.state.params.patientid
    // const appointment_id=  this.props.navigation.state.params.appointment_id


    
      return (
        <ScrollView> 
   
        <View style={styles.calenderViewStyle}>
        
        <View style={styles.setFlexRow}>
                    <Text style={styles.cardText}>Lab Order Details:</Text>
                        
                    </View>
                
                

{this.state.doctorarray.map(patientsdoc => (
  <TouchableOpacity onPress={() => this.onselecting(patientsdoc.orderid)}>

<CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}
          style={styles2.cardViewStyle}>
            
            <Image style={styles2.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>


                <Text style={styles2.cardView_InsideText}> OrderId: {patientsdoc.orderid} </Text>
    
                <Text style={styles2.cardView_InsideText}>OrderStatus: {patientsdoc.orderstatus}  </Text>
                <Text style={styles2.cardView_InsideText}>OrderDate: {patientsdoc.orderdate} </Text>

        </CardView>
        </TouchableOpacity>
        
          ))} 
             
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
  
  

