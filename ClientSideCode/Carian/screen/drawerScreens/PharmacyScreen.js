import React, { Component } from 'react';

import { View, Text, TouchableOpacity, TextInput , ScrollView, StyleSheet } from 'react-native';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import { Table, TableWrapper, Row, Rows, Cell  } from "react-native-table-component";
<<<<<<< Updated upstream
=======
import { PharmacyApi } from '../services/adminPharmacyService'
import HospitalCard from './Cards/HospitalCard';
import ActionButton from 'react-native-action-button';
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

>>>>>>> Stashed changes
export default class PharmacyScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flag: "",
      //tableData: [],
      pharmacyList : [
        ['   '],
         ],

      tableHead: ['Added Pharmacy:'],
      };
    }

    componentWillMount(){
  this.onPressSubmit();
  }

  onPressSubmit = () => {
    var tableData = [];
 
    PharmacyApi().then((res) => {
        console.log(res);
        res.forEach((data) => {
          tableData.push({ image:image,name:data.name, area:data.area, city:data.city, phonenumber:data.pharmacy_phone_number
            , addressine1: data.addressine1, addressine2: data.addressine2, state: data.state,
            pincode: data.pincode, licence_number: data.licence_number, originally_registered_date: data.originally_registered_date,
            id: data.id});

        });
        this.setState({ pharmacyList: tableData });

        });
  

  }


    render() {
    
      const state = this.state;

      return (
        
         <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
         <View style = {{width: '100%', justifyContent: "center", alignContent:"center"}}>
         <ScrollView> 
                      
                      {this.state.pharmacyList.map(hospital => (
                        <TouchableOpacity key={hospital.name} style={{ width: '100%', flex: 1, backgroundColor: "#F0F0E1", alignItems: "center", justifyContent: 'center' }}
                        onPress={() => this.props.navigation.navigate('PharmacyOverview', {name: hospital.name, area: hospital.area, city: hospital.city, phonenumber: hospital.phonenumber,
                          addressine1: hospital.addressine1, addressine2: hospital.addressine2, state: hospital.state, pincode: hospital.pincode, licence_number: hospital.licence_number, originally_registered_date: hospital.originally_registered_date,
                          id: hospital.id})}>
                            <HospitalCard key={hospital.name} hospital={hospital} style={{ width: '80%', borderRadius: 18 }}></HospitalCard>
                        </TouchableOpacity>
                    ))}
     
           </ScrollView>
          </View>
          <ActionButton buttonColor="rgba(231,76,60,1)"  onPress={() => this.props.navigation.navigate('PharmacyDetailsScreen', {name: "", area: "", city: "", phonenumber: "",
                          addressine1: "", addressine2: "", state: "", pincode: "", licence_number: "", originally_registered_date: "",
                          id: ""})}>
        </ActionButton>          
        </View>
       
      );
      
    }
  }

  const styles1 = StyleSheet.create({
    head: { height: 40, backgroundColor: '#f1f8ff', },
    text: { marginLeft: 5 },
    row: { height: 30, flexDirection: 'row', marginBottom: 20},
    cell: {flex: 1, }
  });
  