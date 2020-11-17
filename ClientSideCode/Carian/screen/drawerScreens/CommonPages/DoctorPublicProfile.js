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
import moment from 'moment';
import ReviewCard from '../Cards/ReviewCard';


import CalendarStrip from 'react-native-calendar-strip';
const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };

export default class DoctorPublicProfile extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityArray: [{ label: 'Hyd', value: 'hyd' }, { label: 'vij', value: 'vij' }],
            hospitalCount: '100',
            customerCount: '1000',
            doctorsCount: '150',
            reviewCount: '1500',
            selectedDate: moment().format("MM/DD/YYYY"),
            selectedTime: '',
            specialists: [{ image: '', specialist: 'Dental', description: 'make an appointment for toothache' }, { image: '', specialist: 'Dental', description: 'make an appointment for toothache' }],
            topDoctors: [{ name: 'Test, Test', qualification: 'MBBS', Specilazation: 'Dental', hospitalName: 'Apollo Hospital', area: 'nagar', city: 'Hyderabad' }],
            hospitalImageList: [{ id: 0, image: image },
            { id: 1, image: image },
            { id: 2, image: image },
            { id: 3, image: image },
            { id: 4, image: image },
            { id: 5, image: image }],
            specialistCarddata: [{ image: image, name: 'Family physicians' },
            { image: image, name: 'Pediatricians' },
            { image: image, name: 'Geriatric doctors' },
            { image: image, name: 'Allergists' },
            { image: image, name: 'Dermatologists' },
            { image: image, name: 'Ophthalmologists' },
            { image: image, name: 'Infectious disease doctors' },
            { image: image, name: 'Obstetrician/gynecologists' },
            { image: image, name: 'Cardiologists' },
            { image: image, name: 'Endocrinologists' },
            { image: image, name: 'Gastroenterologists' },
            { image: image, name: 'Nephrologists' },
            { image: image, name: 'Urologists' },
            { image: image, name: 'Pulmonologists' },
            { image: image, name: 'Otolaryngologists' },
            { image: image, name: 'Neurologists' },
            { image: image, name: 'Psychiatrists' },
            { image: image, name: 'Oncologists' },
            { image: image, name: 'Radiologists' },
            { image: image, name: 'General surgeons' },
            { image: image, name: 'Orthopedic surgeons' },
            { image: image, name: 'Cardiac surgeons' },
            { image: image, name: 'Anesthesiologists' },
            { image: image, name: 'Rheumatologists' }],
            doctorReviews: [{ id: 0, name: 'Srinivas', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 1, name: 'Nallapati', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 2, name: 'Test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 3, name: 'Hello', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 4, name: 'Test test', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' },
            { id: 5, name: 'Se510', rating: 4, date: '11/12/2020', comment: 'Review, criticism imply careful examination of something, formulation of a judgment' }],
            hospitalsList: [{ image: image, name: 'Manipal hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' },
            { image: image, name: 'Manipal1 hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' },
            { image: image, name: 'Manipal2 hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' },
            { image: image, name: 'Manipal3 hospital', type: 'Multispecialtiy', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' }],
            doctorsList: [{ image: image, name: 'Srinivasa Rao', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Nallapati', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },
            { image: image, name: 'Test Test', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' },]
        },
            this.displaySlots = this.displaySlots.bind(this);
    }
    displaySlots = (date) => {
        console.log(date.format("MM/DD/YYYY"));
        this.setState({ selectedDate: date.format("MM/DD/YYYY") })

    };
    onpressTime = (time) => {
        console.log(time);
        this.setState({ selectedTime: time })
    }
    render() {
        const doctorId = this.props.navigation.state.params.name;
        const doctor = { image: image, name: 'Srinivasa Rao', specialization: 'Dentist', highestDegree: 'MBBS', fee: '100', area: 'spring garden', city: 'Philadelphia', avgRating: '4.5', totalNoOfReviews: '150', overAllExperience: '10' };
        const hospital = { image: image, name: 'Manipal1 hospital', type: 'Multispecialtiy', streatAddline1: 'Unit 5', streatAddline2: '3675 market st', area: 'spring garden', city: 'Philadelphia', state: 'PA', pincode: '19104', avgRating: '4.5', totalNoOfReviews: '150', totalNoOfDoctors: '10' }
        const cal = [{date:'16/11/2020', slots:[{id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}]},
        {date:'17/11/2020', slots:[{id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}, {id:0, time:'10:00 AM'}]}];
        let customDatesStyles = [];
        let startDate = moment();
        let endDate = moment(startDate).add(30, 'days');
        let datesWhitelist = [{ start: startDate, end: endDate }];
        let radiogroup_options = [
            { value: 0, label: '10:00 AM   ' },
            { value: 1, label: '10:30 Am   ' },
            { value: 2, label: '11:00 Am   ' },
            { value: 3, label: '10:00 AM   ' },
            { value: 4, label: '10:30 Am   ' },
            { value: 5, label: '11:00 Am   ' },


        ];
        let slots = [{ id: 0, time: '09:30 AM' },
        { id: 1, time: '10:00 AM' },
        { id: 2, time: '10:30 AM' },
        { id: 3, time: '11:00 AM' },
        { id: 4, time: '11:30 AM' },
        { id: 5, time: '12:00 AM' },
        { id: 12, time: '12:30 AM' },
        { id: 6, time: '01:00 PM' },
        { id: 7, time: '01:30 PM' },
        { id: 8, time: '02:00 PM' },
        { id: 9, time: '02:30 PM' },
        { id: 10, time: '03:00 PM' },
        { id: 11, time: '03:30 PM' }
        ]

        for (let i = 0; i < 40; i++) {
            customDatesStyles.push({
                startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided

                dateNameStyle: styles.dateNameStyle,
                dateNumberStyle: styles.dateNumberStyle,
                dateContainerStyle: { backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` },
            });
        }
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1, alignSelf: 'center', margin: 10, backgroundColor: 'white', width: '95%' }}>
                        <View style={styles.setFlexRow}>
                            <View style={styles.positionImage}>
                                <Image source={doctor.image} style={styles.profileImage} />
                            </View>
                            <View style={styles.imageRightPosition}>
                                <Text style={styles.cardText}>Dr. {doctor.name}({doctor.highestDegree})</Text>
                                <Text style={styles.cardSubBoldText}>{doctor.specialization}</Text>
                                <Text style={styles.cardSubItalicText}>{doctor.overAllExperience} Years of over all experience</Text>
                                <Text style={styles.cardSubBoldText}>{doctor.avgRating}({doctor.totalNoOfReviews} Stories )</Text>
                            </View>
                        </View>

                        <View style={styles.feesdisplay}>
                            <View>
                                <Text>In-Clinic Appointment fee:</Text>
                            </View>
                            <View>
                                <Text>${doctor.fee}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'center', margin: 10, backgroundColor: 'white', width: '95%' }}>

                        <CalendarStrip style={{ height: 135, paddingTop: 10, paddingBottom: 10 }}
                            customDatesStyles={customDatesStyles}
                            maxDate={endDate}
                            datesWhitelist={datesWhitelist}
                            onDateSelected={this.displaySlots}

                        >
                        </CalendarStrip>

                    </View>
                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 18 }}>Select available times on {this.state.selectedDate}</Text>
                    <View style={{ width: '95%', marginTop: 10, flex: 1, backgroundColor: 'white', flexWrap: 'wrap', alignSelf: 'center', flexDirection: 'row' }}>
                        {slots.map(item => (
                            <View key={item.id} style={{ flexBasis: '25%' }}>
                                <TouchableOpacity onPress={() => this.onpressTime(item.time)} key={item.id} style={{ padding: 4, backgroundColor: '#AED6F1', borderColor: 'black', alignSelf: 'center', margin: 4, justifyContent: "center", borderRadius: 5, borderWidth: 2 }}>
                                    <Text>{item.time}</Text>
                                </TouchableOpacity>
                            </View>

                        ))}
                    </View>

                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 15 }} />

                    <View style={{ flex: 1, alignSelf: 'center', margin: 10, backgroundColor: 'white', width: '95%' }}>

                        <View style={{ alignSelf: 'center', margin: 10, width: '95%' }}>
                            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 5 }}>{hospital.name}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 1 }}>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }}>Address: </Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16, fontStyle: 'italic' }}> {hospital.streatAddline1}, {hospital.streatAddline2}</Text>
                                    <Text style={{ fontSize: 16, fontStyle: 'italic' }}> {hospital.area}, {hospital.city} ,{hospital.state}, {hospital.pincode}</Text>
                                </View>
                            </View>
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
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8, }}>{hospital.avgRating} {hospital.totalNoOfReviews} Reviews </Text>
                        </View>


                    </View>

                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 18 }}>Location</Text>

                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 15 }} />

                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 18 }}>Clinic Photos</Text>

                    <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', backgroundColor: 'white' }}>
                        {this.state.hospitalImageList.map(image => (
                            <View key={image.id} style={{ flexBasis: '30%', margin: 5 }}>
                                <Image source={image.image} style={styles.hospitalImage} />

                            </View>
                        ))}
                    </View>

                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 15 }} />
                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 18 }}>Specialization</Text>
                    <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', backgroundColor:'white' }}>
                        <View style={{ flexBasis: '50%' }}>
                            <SpecialityCard data={this.state.specialistCarddata[0]} style={{ backgroundColor: 'white' }}></SpecialityCard>

                        </View>
                    </View>

                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 15 }} />
                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 18 }}>Services</Text>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, margin: 15 }} />
                    <Text style={{ margin: 15, fontWeight: 'bold', fontSize: 18 }}>Patient Reviews</Text>

                    <Text style={{ marginLeft: 15, fontSize: 12, marginBottom: 10 }}>These reviews represent patient opinions and experiences. And they do not reflect the Doctor's medical capabilities.</Text>

                    {this.state.doctorReviews.map(review => (
                        <ReviewCard key={review.id} review={review}></ReviewCard>

                    ))}



                </ScrollView>

                <View style={{ alignSelf: 'center', flexDirection: 'row', backgroundColor: '#307ecc', width: '100%', justifyContent: 'space-between' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 20 }}> Date : {this.state.selectedDate}</Text>
                        <Text style={{ color: 'black', fontSize: 20 }}> Time : {this.state.selectedTime}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ backgroundColor: "#F7DC6F", borderRadius: 10, borderColor: "white", padding: 10, borderWidth: 2, alignItems: "center", justifyContent: "center", margin: 4 }}>
                            <Text style={{ color: 'black', fontSize: 25 }}>Pay $ {doctor.fee}</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    };
}