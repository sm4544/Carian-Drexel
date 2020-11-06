import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert , ScrollView, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../../styles/commonStyles';
import { Table, TableWrapper, Row, Cell  } from "react-native-table-component";

export default class HospitalScreen extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    const state = this.state;

    const tableHead = ['Added Hospitals:'];
    const tableData = [
      ['ABC Hospital'],
      ['XYZ Hospital'],
      ['XYZHJKTE Hospital'],
      ['XYZHJKTEKKKKK Hospital'],
    ];

    return (
        <View  >
        <View style = {{justifyContent:"center", alignItems:"center", marginTop: 80}}>

        <TouchableOpacity style = {styles.button}
           onPress={() => this.props.navigation.navigate('HospitalDetailsScreen')}>
          <Text style={styles.buttonText}>Add Hospital</Text>

        </TouchableOpacity>
        </View>

        <View style = {{width: '80%', justifyContent: "center", marginLeft: 40 }}>

        <Table >
          <TableWrapper >
            <Row data={tableHead} style={styles.HeadStyle} textStyle={styles.HeaderText}/>
            {
              tableData.map((data, i) => (
                <TableWrapper key={i} style={styles1.row}>
                  {
                    data.map((cell, j) => (
                      <TouchableOpacity key={j} style={styles1.cell} onPress={() => this.props.navigation.navigate('HospitalDetailsScreen')}>
                        <Cell data={cell} textStyle={styles.TableText}/>
                      </TouchableOpacity>
                    // <TouchableOpacity>
                    //  <Cell data={cell} textStyle={styles.TableText}/>
                    //  </TouchableOpacity>
                    ))
                  }
                </TableWrapper>
              ))                          
            }
          </TableWrapper>
        </Table>
      </View>

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
