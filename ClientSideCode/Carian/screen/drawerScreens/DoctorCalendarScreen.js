import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import DoctorProfileCard from './Cards/DoctorProfileCard';
import styles from '../../styles/DoctorProfileStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { workingHoursHospitalApi, workingHoursGetHospitalApi, workingHoursEditHospitalApi } from '../services/adminHospitalService'
import { ScrollView } from 'react-native-gesture-handler';
import {postDoctorSchedule} from '../services/doctorAppointmentService';



const stylesTime = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class DoctorCalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        monst:"Start time",
        monet:"End time",
        tuest:"Start time",
        tueet:"End time",
        wedst:"Start time",
        wedet:"End time",
        thust:"Start time",
        thuet:"End time",
        frist:"Start time",
        friet:"End time",
        satst:"Start time",
        satet:"End time",
        sunst:"Start time",
        sunet:"End time",
        // hospital_id: this.props.navigation.state.params.id,
    };
  };

  onPressSubmit = () => {
    console.log("hi")
      var body;
      
      body = JSON.stringify({"doctor_id":profileId,"working_hours":{ 'Monday': this.state.monst +'-'+ this.state.monet,
        "Tuesday": this.state.tuest +'-'+ this.state.tueet,
        "Wednesday": this.state.wedst+'-'+ this.state.wedet,
        "Thursday": this.state.thust+'-'+ this.state.thuet, "Friday": this.state.frist+'-'+this.state.friet , "Saturday": this.state.satst+'-'+ this.state.satet, "Sunday": this.state.sunst+'-'+
        this.state.sunet }});
      
        console.log(body); 
        console.log(this.state.monst);
        postDoctorSchedule(body).then((res) => {
        console.log(res);
          this.props.navigation.navigate('HomeScreen');
  

    });

    

 };


  render() {
    const profileId = global.profileId;
    
    // var TimePicker = require('basic-react-timepicker');
    // const { selectedHours, selectedMinutes } = this.state;
    var data = [
      { label: '12:00', value: '12:00'  },
      { label: '01:00', value: '01:00'  },
      { label: '02:00', value: '02:00'  },
      { label: '03:00', value: '03:00'  },
      { label: '04:00', value: '04:00'  },
      { label: '05:00', value: '05:00'  },
      { label: '06:00', value: '06:00'  },
      { label: '07:00', value: '07:00'  },
      { label: '08:00', value: '08:00'  },
      { label: '09:00', value: '09:00'  },
      { label: '10:00', value: '10:00'  },
      { label: '11:00', value: '11:00'  },
      { label: '12:00', value: '12:00'  },
      { label: '13:00', value: '13:00'  },
      { label: '14:00', value: '14:00'  },
      { label: '15:00', value: '15:00'  },
      { label: '16:00', value: '16:00'  },
      { label: '17:00', value: '17:00'  },
      { label: '18:00', value: '18:00'  },
      { label: '19:00', value: '19:00'  },
      { label: '20:00', value: '20:00'  },
      { label: '21:00', value: '21:00'  },
      { label: '22:00', value: '23:00'  },
      { label: '23:00', value: '24:00'  },
      { label: 'Start time', value: 'Start time'  },
      { label: 'End time', value: 'End time'  },
      { label: 'x', value: 'x'  },
     
 
  ];
    return (
      
      <View style={stylesTime.container}>
        <View >
          <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Monday</Text>
          </View>

        <View style={{ flexDirection:"row" }}>

          <View style={{ flex:1,alignItems:'flex-end'}}>
         
                            <DropDownPicker
                            
                        items={data}
                        defaultValue={this.state.monst}
                        // defaultValue="select"
                        placeholder="Start Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            monst: item.value
                        })}
                    />
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>  To</Text>
 
<View style={{flex:1,alignItems:'flex-end'}}>

<DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.monet}
                        placeholder="End Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-end',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            monet: item.value
                        })}
                    />
                    </View>


      </View>

      <View >
          <Text style={{ fontWeight: 'bold', fontSize : 20}}>Tuesday</Text>
          </View>

      <View style={{ flexDirection:"row" }}>

          <View style={{flex:1,alignItems:'flex-end'}}>
                            <DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.tuest}
                        placeholder="Start Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            tuest: item.value
                        })}
                    />
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>  To</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>

<DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.tueet}
                        placeholder="End Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-end',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            tueet: item.value
                        })}
                    />
                    </View>

      </View>
      <View >
          <Text style={{ fontWeight: 'bold', fontSize : 20}}>Wednesday</Text>
          </View>
      <View style={{ flexDirection:"row" }}>
 
          <View style={{flex:1,alignItems:'flex-end'}}>
                            <DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.wedst}
                        placeholder="Start Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            wedst: item.value
                        })}
                    />
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>  To</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>

<DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.wedet}
                        placeholder="End Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-end',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            wedet: item.value
                        })}
                    />
                    </View>

      </View>
      <View >
          <Text style={{ fontWeight: 'bold', fontSize : 20}}>Thursday</Text>
          </View>

      <View style={{ flexDirection:"row" }}>

          <View style={{flex:1,alignItems:'flex-end'}}>
                            <DropDownPicker
                        items={data}
                        defaultValue={this.state.thust}
                        placeholder="Start Time"
                        // defaultValue="select"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            thust: item.value
                        })}
                    />
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>  To</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>

<DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.thuet}
                        placeholder="End Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-end',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            thuet: item.value
                        })}
                    />
                    </View>

      </View>

      <View >
          <Text style={{ fontWeight: 'bold', fontSize : 20}}>Friday</Text>
          </View>

      <View style={{ flexDirection:"row" }}>
        {/* <View >
          <Text style={{ fontWeight: 'bold',flex:1,alignSelf:'flex-start'  }} >Fri</Text>
          </View> */}
          <View style={{flex:1,alignItems:'flex-end'}}>
                            <DropDownPicker
                        items={data}
                        defaultValue={this.state.frist}
                        placeholder="Start Time"
                        // defaultValue="select"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            frist: item.value
                        })}
                    />
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>  To</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>

<DropDownPicker
                        items={data}
                        defaultValue={this.state.friet}
                        // defaultValue="select"
                        placeholder="End Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-end',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "100%" }}

                        onChangeItem={item => this.setState({
                            friet: item.value
                        })}
                    />
                    </View>

      </View>

      <View >
          <Text style={{ fontWeight: 'bold', fontSize : 20}}>Saturday</Text>
          </View>

      <View style={{ flexDirection:"row" }}>
        {/* <View >
          <Text style={{ fontWeight: 'bold',flex:1,alignSelf:'flex-start'  }}>Sat</Text>
          </View> */}
          <View style={{flex:1,alignItems:'flex-end'}}>
                            <DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.satst}
                        placeholder="Start Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "100%" }}

                        onChangeItem={item => this.setState({
                            satst: item.value
                        })}
                    />
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>  To</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>

<DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.satet}
                        placeholder="End Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-end',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            satet: item.value
                        })}
                    />
                    </View>

      </View>

      <View >
          <Text style={{ fontWeight: 'bold', fontSize : 20}}>Sunday</Text>
          </View>
      <View style={{ flexDirection:"row" }}>
        {/* <View >
          <Text style={{ fontWeight: 'bold', flex:1,alignSelf:'flex-start'  }}>Sun</Text>
          </View> */}
          <View style={{flex:1,alignItems:'flex-end'}}>
                            <DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.sunst}
                        placeholder="Start Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            sunst: item.value
                        })}
                    />
                    </View>
                    <Text style={{ fontWeight: 'bold' }}>  To</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>

<DropDownPicker
                        items={data}
                        // defaultValue="select"
                        defaultValue={this.state.sunet}
                        placeholder="End Time"
                        containerStyle={{ height: 50 }}
                        style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
                        itemStyle={{
                            justifyContent: 'flex-end',
                            width: "80%"
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

                        onChangeItem={item => this.setState({
                            sunet: item.value
                        })}
                    />
                    </View>

      </View>
      
      <View style={{ flexDirection:"row", paddingTop:20 }}>

      <TouchableOpacity onPress={this.onPressSubmit} activeOpacity={0.7} style={styles2.button} >
   
   <Text style={styles.buttonText}> Submit </Text>

    </TouchableOpacity>
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


