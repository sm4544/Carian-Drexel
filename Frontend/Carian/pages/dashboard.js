import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Picker,
} from "react-native";

import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
    this.logout = this.logout.bind(this);
  }

  deleteAccount(e) {
    console.log("Deleting Account")
  }
 
  logout(e) {
    console.log("Logging out")
  }
 
  render() {
    return  (
     <View>
       <View>
        <Text>hello</Text>
       </View>
      <DropdownMenu userName="Chris Smith123">        
        <MenuItem text="Delete Account" onClick={this.deleteAccount} />
        <MenuItem text="Logout" onClick={this.logout} />
    </DropdownMenu>
    </View>    
    );
  };
};


