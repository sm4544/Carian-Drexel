import React from 'react';
import { shallow } from 'enzyme';
import TimePickingScreen from '../../screen/drawerScreens/TimePickingScreen';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import ActionButton from 'react-native-action-button';
import DropDownPicker from 'react-native-dropdown-picker';

import { workingHoursEditHospitalApi,  workingHoursGetHospitalApi, workingHoursHospitalApi } from '../../screen/services/adminHospitalService';
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/adminHospitalService");
const id =  {id: id};

const navigation = {

    navigate: jest.fn(),

    state: {

        params: {

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
            id: id,
    
        }

    }

};




describe('<TimePickingScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    workingHoursGetHospitalApi.mockResolvedValue([{ id: id}])
    workingHoursHospitalApi.mockResolvedValue([{ id: id}])
    wrapper = shallow(<TimePickingScreen navigation={navigation}></TimePickingScreen>);
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  it('should have Dropdown', () => {
    expect(wrapper.find(DropDownPicker)).to.have.length(14);
  });

  it('should contain 2 buttons', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(2);
  })

  it('should contain  days texts', () => {
    expect(wrapper.contains( <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Monday</Text>)).to.equal(true);
    expect(wrapper.contains( <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Tuesday</Text>)).to.equal(true);
    expect(wrapper.contains( <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Wednesday</Text>)).to.equal(true);
    expect(wrapper.contains( <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Thursday</Text>)).to.equal(true);
    expect(wrapper.contains( <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Friday</Text>)).to.equal(true);
    expect(wrapper.contains( <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Saturday</Text>)).to.equal(true);
    expect(wrapper.contains( <Text  style={{ fontWeight: 'bold', fontSize : 20}} >Sunday</Text>)).to.equal(true);
    expect(wrapper.contains( <Text style={{ fontWeight: 'bold' }}>  To</Text>)).to.equal(true);
  })



 
  it('should navigate to TimePickingScreen component on edit', async() => {
    wrapper.find(DropDownPicker).at(0).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(1).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(2).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(3).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(4).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(5).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(6).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(7).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(8).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(9).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(10).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(11).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(12).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(13).simulate('onChangeItem', '12:00 AM');

  
      const output = { "message": "Data" 
                    };
  
      workingHoursHospitalApi.mockResolvedValue(output);    
      await wrapper.instance().onPressSubmit();
      sinon.assert.calledWith(spyon, "HospitalScreen");
      sinon.assert.calledOnce(spyon);
    
  })

 

  it('should navigate to TimePickingScreen component on submit', async() => {
    wrapper.find(DropDownPicker).at(0).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(1).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(2).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(3).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(4).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(5).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(6).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(7).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(8).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(9).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(10).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(11).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(12).simulate('onChangeItem', '12:00 AM');
    wrapper.find(DropDownPicker).at(13).simulate('onChangeItem', '12:00 AM');

  
      const output = { "message": "Data" 
                    };
  
      workingHoursEditHospitalApi.mockResolvedValue(output);    
      await wrapper.instance().onPressEdit();
      sinon.assert.calledWith(spyon, "HospitalScreen");
      sinon.assert.calledOnce(spyon);
    
  })
 

  it('should called load component ', async() => {

  
      const output = {"monst":"Start time","monet":"End time","tuest":"Start time","tueet":"End time","wedst":"Start time","wedet":"End time","thust":"Start time","thuet":"End time",
      "frist":"Start time","friet":"End time","satst":"Start time","satet":"End time","sunst":"Start time","sunet":"End time","hospital_id":"1" };
  
     workingHoursGetHospitalApi.mockResolvedValue(output);    
      await wrapper.instance().onLoad();
     
    
  })
 

});