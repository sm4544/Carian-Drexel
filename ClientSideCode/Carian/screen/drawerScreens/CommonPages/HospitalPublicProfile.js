import ValidationComponent from 'react-native-form-validator';
import React, { Component, useState } from 'react';
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
    ImageBackground
} from 'react-native';
import styles from '../../../styles/DoctorProfileStyles';
import CardView from 'react-native-cardview';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SpecialityCard from '../Cards/SpecialityCard';
import HospitalCard from '../Cards/HospitalCard';
import DoctorProfileCard from '../Cards/DoctorProfileCard';
import ReviewCard from '../Cards/ReviewCard';
import { SliderBox } from "react-native-image-slider-box";
import { Table, Row, Rows } from "react-native-table-component";
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

export default class HospitalPublicProfile extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {


            customerCount: '1000',

            hospitalImages: [
                "https://source.unsplash.com/1024x768/?nature",
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
                ["Mon", "Yes", "-", "-"],
                ["Tue", "No", "01:00PM", "06:00PM"],
                ["Wed", "No", "01:00PM", "06:00PM"],
                ["Thu", "No", "01:00PM", "06:00PM"],
                ["Fri", "Yes", "-", "-"],
                ["Sat", "Yes", "-", "-"],
                ["Sun", "No", "01:00PM", "06:00PM"]],
            doctorsList: [{ image: image, name: 'Srinivasa Rao', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Nallapati', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Test Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },],
            hospitalReviews: [{ id: 0, name: 'Srinivas', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 1, name: 'Nallapati', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 2, name: 'Test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 3, name: 'Hello', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 4, name: 'Test test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 5, name: 'Se510', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' }],
        }

        this.onPressingDoctorCard = this.onPressingDoctorCard.bind(this)
    }
    onPressingDoctorCard = (name) => {
        this.props.navigation.navigate('DoctorPublicProfile', { name: name });
    }

    render() {
        const doctorId = this.props.navigation.state.params.name;
        const hospital = { image: image, name: 'Manipal1 hospital', type: 'Multispecialtiy', streatAddline1: 'Unit 5', streatAddline2: '3675 market st', area: 'spring garden', city: 'Philadelphia', state: 'PA', pincode: '19104', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' }
        let services = [{ id: 0, name: 'treatment A' },
        { id: 1, name: 'treatment B' },
        { id: 2, name: 'treatment C' },
        { id: 3, name: 'treatment D' },

        ]
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

                        <Text style={styles.hospitalName}>{hospital.name}</Text>
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
                                <Text style={styles.adressText}> {hospital.streatAddline1}, {hospital.streatAddline2}</Text>
                                <Text style={styles.adressText}> {hospital.area}, {hospital.city} ,{hospital.state}, {hospital.pincode}</Text>
                            </View>
                        </View>

                        <View style={styles.hospitalDataRow}>
                            <View>
                                <Text style={styles.addressHeader}>Reviews: </Text>
                            </View>
                            <View>
                                <Text style={styles.addressHeader}>{hospital.avgRating} {hospital.totalNoOfReviews} Reviews </Text>
                            </View>
                        </View>

                        <View style={styles.hospitalDataRow}>
                            <View>
                                <Text style={styles.addressHeader}>Customers: </Text>
                            </View>
                            <View>
                                <Text style={styles.addressHeader}>{this.state.customerCount} Served Via Carian </Text>
                            </View>
                        </View>



                    </View>

                    <View style={styles.horizontalLine} />

                    <Text style={styles.sectionTitle}>Book Appointment with our Doctors</Text>

                    {this.state.doctorsList.map(doctor => (
                        <TouchableOpacity onPress={() => this.onPressingDoctorCard(doctor.name)} key={doctor.name} style={{ width: '100%', flex: 1, backgroundColor: "white", borderColor: '#00b5ec', alignItems: "center", justifyContent: 'center' }}>
                            <DoctorProfileCard key={doctor.name} doctor={doctor} ></DoctorProfileCard>
                        </TouchableOpacity>
                    ))}
                    <View style={styles.horizontalLine} />
                    <Text style={styles.sectionTitle}>Working Hours</Text>
                    <Table style={styles.tableStyle}>
                        <Row data={this.state.headerSlots} style={styles.tableHeader} textStyle={styles.tableHeaderText} />
                        <Rows data={this.state.workingHours} style={styles.tableRowstyle} textStyle={styles.tableRowText} />
                    </Table>
                    <View style={styles.horizontalLine} />

                    <Text style={styles.sectionTitle}>Location</Text>

                    <View style={styles.horizontalLine} />
                    <Text style={styles.sectionTitle}>Specialization</Text>
                    <View style={styles.imagesRowSetUp}>
                        {this.state.specialistCarddata.map(item => (
                            <View key={item.name} style={{ flexBasis: '50%' }}>
                                <SpecialityCard key={item.name} data={item} style={{ backgroundColor: 'white' }}></SpecialityCard>

                            </View>
                        ))}
                    </View>

                    <View style={styles.horizontalLine} />
                    <Text style={styles.sectionTitle}>Services</Text>

                    <View style={styles.slotsView}>
                        {services.map(item => (
                            <View key={item.id} style={{ flexBasis: '31%' }}>
                                <TouchableOpacity key={item.id} disabled={true} style={styles.slotsTouch}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            </View>

                        ))}
                    </View>

                    <View style={styles.horizontalLine} />

                    <Text style={styles.sectionTitle}>Patient Reviews</Text>

                    <Text style={styles.reviewsSubText}>These reviews represent patient opinions and experiences. And they do not reflect the Doctor's medical capabilities.</Text>

                    {this.state.hospitalReviews.map(review => (
                        <ReviewCard key={review.id} review={review}></ReviewCard>

                    ))}

                </View>
            </ScrollView>
        )
    };
}