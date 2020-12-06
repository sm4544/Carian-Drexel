import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput , StyleSheet } from 'react-native';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import { Table, TableWrapper, Row, Cell  } from 'react-native-table-component';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
export default class DepartmentConfirmationScreen extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = {
            hospitalName:'',
            dataSource:'',
            flagDep:false,
        };
    }

    componentDidMount() {
      return fetch(
        'https://hospitalmanagementbackend.herokuapp.com/hospitals-simple',
      )
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({dataSource: responseJson});
        })
        .catch((error) => {
          console.log(error);
        });
        
    }
    handle = () => {
      alert("sriram");
      console.log(this.state.dataSource);
    };
        render() {         
      const state = this.state;   
       
      return (
        <View>
          <View  style = {{justifyContent:"center", alignItems:"center", marginTop: 80}}>
          <DropDownPicker
    items={[
        {label: 'Penn Medicine', value: 'Penn_Medicine', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
        {label: 'Rainbow hospitals', value: 'Rainbow_hospitals', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'KIMS Hospitals', value: 'KIMS_Hospitals', icon: () => <Icon name="flag" size={18} color="#900" />},
    ]}
    defaultValue={this.state.hospitalName}
    containerStyle={{height: 40, width:300}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => { this.setState({
        hospitalName: item.value
    }),this.setState({flagDep:true}),this.handle}}

/>
        
          </View>
          
            <View>{this.state.flagDep ? (
              <TouchableOpacity style = {styles.button}
              onPress={() => {this.props.navigation.navigate('DepartmentPage',{hospitalName: this.state.hospitalName,}),this.setState({flagDep:false})}}>
             <Text style={styles.buttonText}>Add here</Text>
           </TouchableOpacity>
            ):null}</View>         
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
  

