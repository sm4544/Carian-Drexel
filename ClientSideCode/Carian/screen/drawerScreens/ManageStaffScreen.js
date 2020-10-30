import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../../styles/commonStyles';
import { Table, TableWrapper, Row, Rows, Cell  } from "react-native-table-component";
export default class ManageStaffScreen extends Component {
  render() {
    const state = this.state;

    const tableHead = ['Added Doctors/Staff:'];
    const tableData = [
      ['ABC'],
      ['XYZ'],
      ['XYZHJKTE'],
    ];

    return (
        <View >
          <View  style = {{justifyContent:"center", alignItems:"center", marginTop: 80}}>

        <TouchableOpacity style = {styles.button}
           onPress={() => this.props.navigation.navigate('StaffDetailsScreen')}>
          <Text style={styles.buttonText}>Add Doctor/Staff</Text>

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
                      <TouchableOpacity key={j} style={styles1.cell} onPress={() => this.props.navigation.navigate('LabDetailsScreen')}>
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


