import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardView from 'react-native-cardview' ;
import { ScrollView } from 'react-native-gesture-handler';
import { customerDetailsApi } from '../services/customerDetailsService'

export default class Profile extends Component {

  constructor(props) {
    super(props);
   


    this.state = {
 
    //  name: props.navigation.state.params.name,

      name : global.name,
      workingHours: [
      ],

      profileName: "",
      email: "",
      date_of_birth: "",
      patientsList:[

      ],



      };
    }

    componentDidMount(){
      this.onPressSubmit();
    }


    onPressSubmit = () => {
      var body;
      body = JSON.stringify({ profile_id: "1"  });
      var i;
      var tableData = [];
      console.log("wrknghrs")
      console.log(body);
      customerDetailsApi(body).then((res) => {
          console.log(res);
          for(i=0;i<res.patients.length;i++){
            tableData.push(res.patients[i])
          }

          this.setState({patientsList:tableData});
  
          this.setState({email:res.Profile[0].email});
          this.setState({DOB:res.Profile[0].date_of_birth});
          console.log(res.patients.length);
          console.log(this.state.patientsList);
          // console.log(this.state.profileName); patientsList
         
        
          });
    
  
    }
  
  


  render() {
    // console.log(this.state.name)
    
    return (
      <View style={styles.container}>
           <ScrollView>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.name}</Text>




              
            </View>
            {/* <View>
            <Text style={styles.name}>Age:25</Text>  
            </View> */}
            
                   <View style={styles.userInfoSection}>

              <View style={styles.row}>
          <Text style={styles.Icontext}>DOB: {this.state.DOB}</Text>
        </View>
        <View style={styles.row}>
        <Icon name="phone" color="#777777" size={20}/>
        <Text style={styles.Icontext}>+91-900000009</Text>
       </View>
       <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
         <Text style={styles.Icontext}>{this.state.email}</Text>
        </View>
      </View>

     

      <View>

      {this.state.patientsList.map(patients => (
        
        <TouchableOpacity key={patients.Patient_Name} style={{ width: '100%', flex: 1, backgroundColor: "#F0F0E1", alignItems: "center", justifyContent: 'center' }} 
       >
          {/* onPress={() => this.props.navigation.navigate('PatientDetailsScreen', {Patient: patients.Patient_Name, Gender: patients.Gender,Mobile: patients.Mobile ,BloodGroup: patients.BloodGroup, Age: patients.Age})} */}
                            
                                 <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={5}
          style={styles.cardViewStyle}>
 
                <Text style={styles.cardView_InsideText}> Patient: {patients.Patient_Name} </Text>
                {/* <Text style={styles.cardView_InsideText}> {patients.Patient}  </Text> */}
                <Text style={styles.cardView_InsideText}> Relation: ({patients.relation})  </Text>
 
        </CardView>
        
                        </TouchableOpacity>
                       
                    ))}
     
    

        </View>

 
        </View>
        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#B3B4B5",
    height:10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"darkblue",
    fontWeight:'500',
  },
  body:{
    marginTop:120,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:40,
  },
  name:{
    fontSize:28,
    color: "darkblue",
    fontWeight: "600"
  },

    userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },

  Icontext:{
    color:"#777777", 
    marginLeft: 20,
    fontWeight: 'bold'

  },

    row: {
    flexDirection: 'row',
    marginBottom: 10,

    
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
    marginTop:15 
  
   
    
   
  
     
 
  }
});
// import React, { Component } from 'react';

// import {View,  Image, StyleSheet} from 'react-native';
// import {
//   Avatar,
//   Title,
//   Caption,
//   Text,
  
// } from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



// export default class CustomerDetails extends Component {

// render() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.userInfoSection}>
//         <View style={{flexDirection: 'row', marginTop: 15}}>
//         <View style={styles.header}></View>

//                   <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
//           <View style={styles.body}>
//             <View style={styles.bodyContent}>
//               <Text style={styles.name}>John Doe</Text>
//             <Text style={styles.name}>Age:25</Text>
//               </View>
//            </View>

//         {/* <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
//           <View style={{marginLeft: 150}}>
//             <Title style={[styles.title]}>John</Title>
            
//           </View> */}
//         </View>
//       </View>

//       <View style={styles.userInfoSection}>

//                 <View style={styles.row}>
//           <Text style={styles.Icontext}>Age: 25 Years</Text>
//         </View>
//         <View style={styles.row}>
//           <Icon name="gender-male-female" color="#777777" size={20}/>
//           <Text style={styles.Icontext}>Gender: Male</Text>
//         </View>
//         <View style={styles.row}>
//           <Icon name="phone" color="#777777" size={20}/>
//           <Text style={styles.Icontext}>+91-900000009</Text>
//         </View>
//         <View style={styles.row}>
//           <Icon name="email" color="#777777" size={20}/>
//           <Text style={styles.Icontext}>john_doe@email.com</Text>
//         </View>
//       </View>


//     </View>
//   );
// };
//  }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 25,
//   },
// title: {
//         marginTop:15,
//         marginBottom: 80,
    
// },

//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//     avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     marginBottom:10,
//     alignSelf:'center',
//     position: 'absolute',
//     marginTop:300
//   },

//   Icontext:{
//     color:"#777777", 
//     marginLeft: 20,
//     fontWeight: 'bold'

//   },
//     body:{
//     marginTop:40,
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding:30,
//   },
//   name:{
//     fontSize:28,
//     color: "#696969",
//     fontWeight: "600"
//   },
//     header:{
//     backgroundColor: "#078B94",
//     height:150,
//   },
// });            