import React, {  Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import {  getAllHospitals} from '../services/hospitalService';   
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/commonStyles';     
import ValidationComponent from 'react-native-form-validator';

export default class DepartmentConfirmationScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      hospital_id: '',
      flagDep: false,
      dropdowndata: [],
    };
  }

  componentDidMount() {
    var tempdata = []
    getAllHospitals()
      .then(results => {
        results.forEach((data) => {
          tempdata.push({
            value: data.value,
            label: data.label
          });

        });
      });
    this.setState({
      dropdowndata: tempdata
    });

  }

  onPressDepartment = () => {
    console.log(this.state.dropdowndata);
    
  };

  render() {
    const state = this.state;

    return ( 
    <View>
      <View style = { styles.departmentPositionVisble } >      

        <DropDownPicker
            items={this.state.dropdowndata}
            defaultValue={this.state.hospital_id}
            containerStyle={{ height: 50 }}
            style={{ backgroundColor: 'steelblue', width: "80%", borderRadius: 18, }}
            itemStyle={{
              justifyContent: 'flex-start',
              width: "80%"
            }}
            dropDownStyle={{ backgroundColor: '#fafafa', width: "80%" }}
            onChangeItem={item =>{ this.setState({
              hospital_id: item.value
            }), this.setState({
              flagDep: true
            }), this.handle}}
          />
      

      </View>

      <View> 
      {this.state.flagDep ? 
        (<TouchableOpacity style = {styles.button}
          onPress = {() => { 
            this.props.navigation.navigate('DepartmentPage', { hospital_id: this.state.hospital_id }),
            this.setState({flagDep: false })}
          } >
          <Text style = {styles.buttonText} > Add here </Text> 
          </TouchableOpacity>
        ) : null
      } 
      
        </View>          
      </View>


    );

  }
}