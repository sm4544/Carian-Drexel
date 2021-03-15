import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import DoctorProfileCard from './Cards/DoctorProfileCard';
import styles from '../../styles/DoctorProfileStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { workingHoursHospitalApi, workingHoursGetHospitalApi, workingHoursEditHospitalApi } from '../services/adminHospitalService'



const stylesTime = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class TimePickingScreen extends Component {
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
        hospital_id: this.props.navigation.state.params.id,
    };
  };

  onPressSubmit = () => {
    console.log("hi")
      var body;
      body = JSON.stringify({ monst: this.state.monst,   monet: this.state.monet,
        tuest: this.state.tuest, tueet: this.state.tueet,
        wedst: this.state.wedst, wedet: this.state.wedet,
        thust: this.state.thust, thuet: this.state.thuet, frist: this.state.frist,
        friet: this.state.friet , satst: this.state.satst,
        satet: this.state.satet, sunst: this.state.sunst,
        sunet: this.state.sunet, hospital_id: this.state.hospital_id  });
      
        console.log(body); 
        workingHoursHospitalApi(body).then((res) => {
        console.log(res);

          console.log("hello")
          this.props.navigation.navigate('HospitalScreen');
  

    });

    

 };


 onPressEdit = () => {
    console.log("hi")
      var body;
      body = JSON.stringify({ monst: this.state.monst,   monet: this.state.monet,
        tuest: this.state.tuest, tueet: this.state.tueet,
        wedst: this.state.wedst, wedet: this.state.wedet,
        thust: this.state.thust, thuet: this.state.thuet, frist: this.state.frist,
        friet: this.state.friet , satst: this.state.satst,
        satet: this.state.satet, sunst: this.state.sunst,
        sunet: this.state.sunet, hospital_id: this.state.hospital_id  });
      
        console.log(body); 
        workingHoursEditHospitalApi(body).then((res) => {
        console.log(res);

   
          console.log("hello")
          this.props.navigation.navigate('HospitalScreen');


    });

    

 };


 onLoad = () => {
    var body;
    body = JSON.stringify({ hospital_id: this.props.navigation.state.params.id  });

  
    console.log("wrknghrs")
    console.log(body);
    workingHoursGetHospitalApi().then((res) => {
        console.log(res);
        res.forEach((data) => {
          if(this.props.navigation.state.params.id == data.hospital_id){
            //   if(1==2){
            this.setState({ flag: false });
this.setState({monst:data.mon_start_time});   
this.setState({monet:data.mon_end_time}); 
this.setState({tuest:data.tue_start_time}); 
this.setState({tueet:data.tue_end_time}); 
this.setState({wedst:data.wed_start_time}); 
this.setState({wedet:data.wed_end_time}) ;   
this.setState({thust:data.thu_start_time});   
this.setState({thuet:data.thu_end_time}); 
this.setState({frist:data.fri_start_time}); 
this.setState({friet:data.fri_end_time}); 
this.setState({satst:data.sat_start_time}); 
this.setState({satet:data.sat_end_time}) ; 
this.setState({sunst:data.sun_start_time}); 
this.setState({sunet:data.sun_end_time}) ;      
          }
        });
       
        console.log(this.state.monst)
      
        });
  

  }

  componentDidMount(){
    console.log("loading hospitals");
this.onLoad();

}

//   onPressSubmit = () => {

//     this.props.navigation.navigate('HospitalOverview');

 
//    }

  render() {
    // var TimePicker = require('basic-react-timepicker');
    // const { selectedHours, selectedMinutes } = this.state;
    var data = [
      { label: '12:00AM', value: '12:00AM'  },
      { label: '01:00AM', value: '01:00AM'  },
      { label: '02:00AM', value: '02:00AM'  },
      { label: '03:00AM', value: '03:00AM'  },
      { label: '04:00AM', value: '04:00AM'  },
      { label: '05:00AM', value: '05:00AM'  },
      { label: '06:00AM', value: '06:00AM'  },
      { label: '07:00AM', value: '07:00AM'  },
      { label: '08:00AM', value: '08:00AM'  },
      { label: '09:00AM', value: '09:00AM'  },
      { label: '10:00AM', value: '10:00AM'  },
      { label: '11:00AM', value: '11:00AM'  },
      { label: '12:00PM', value: '12:00PM'  },
      { label: '01:00PM', value: '01:00PM'  },
      { label: '02:00PM', value: '02:00PM'  },
      { label: '03:00PM', value: '03:00PM'  },
      { label: '04:00PM', value: '04:00PM'  },
      { label: '05:00PM', value: '05:00PM'  },
      { label: '06:00PM', value: '06:00PM'  },
      { label: '07:00PM', value: '07:00PM'  },
      { label: '08:00PM', value: '08:00PM'  },
      { label: '09:00PM', value: '09:00PM'  },
      { label: '10:00PM', value: '10:00PM'  },
      { label: '11:00PM', value: '11:00PM'  },
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
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

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
                        dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}

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

      <View style={{ flexDirection:"row" }}>

      <TouchableOpacity onPress={this.onPressSubmit} activeOpacity={0.7} style={styles2.button} >
   
   <Text style={styles.buttonText}> Submit </Text>

    </TouchableOpacity>

    <TouchableOpacity onPress={this.onPressEdit} activeOpacity={0.7} style={styles2.button} >
   
   <Text style={styles.buttonText}> Update </Text>

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


