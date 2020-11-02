import React, { Component } from 'react';
import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import styles from '../../styles/commonStyles';
import ValidationComponent from 'react-native-form-validator';
import { Table, TableWrapper, Row, Rows, Cell  } from "react-native-table-component";

export default class LabScreen extends Component {

    render() {

        // const { navigation } = this.props;  
        // const lab_name = navigation.getParam('labname', 'NO-names added');  

        const state = this.state;

        const tableHead = ['Added Labs:'];
        const tableData = [
          ['ABC Lab'],
          ['XYZ Lab'],
          ['XYZHJKTE Lab'],
        ];

       
      return (
        <View>
           <View  style = {{justifyContent:"center", alignItems:"center", marginTop: 80}}>
          <TouchableOpacity style = {styles.button}
             onPress={() => this.props.navigation.navigate('LabDetailsScreen')}>
            <Text style={styles.buttonText}>Add Laboratory</Text>
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

