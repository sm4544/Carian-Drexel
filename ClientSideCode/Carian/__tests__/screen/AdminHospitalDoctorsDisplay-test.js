import React from 'react';
import { shallow } from 'enzyme';
import DoctorsDisplay from '../../screen/drawerScreens/DoctorsDisplay';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/Fontisto'

import DoctorProfileCard from '../../screen/drawerScreens/Cards/DoctorProfileCard';

import { getDoctors } from '../../screen/services/DepartmentService';
import CardView from 'react-native-cardview';

const image = { uri: "https://thomsonhospitals.com/wp-content/uploads/2019/07/Thomson-Hospital-Kota-Damansara-Specialties-Obstetrics-Gynaecology-Thumbnail.jpg" };



const doctorsList =  {doctorsList: doctorsList};
 

const navigation = {

  navigate: jest.fn(),
  state: {
      params: {

          
          doctorsList:[{ name: "john", specialization:"ortho", highestDegree: "PG", overAllExperience:"4" }

          ],

  
      }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/DepartmentService");

describe('<DoctorsDisplay/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    getDoctors.mockResolvedValue([{image:image, name:"john", specialization:"ortho", highestDegree: "PG", overAllExperience:"4",
        email:"ss@carain.com", college_name:"gandhi", fee:"200", area:"lancaster", city:"phily",
        licence_number:"122", id: "1", hospital_id: "2" ,department_id: "1"
}])
    wrapper = shallow(<DoctorsDisplay navigation={navigation}></DoctorsDisplay>);
    console.log(wrapper)
  });

  afterEach(function () {
    navigation.navigate.restore();
  });

  


  it('should contain  button', () => {
     expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  })


it('should have Doctorprofilecard ', () => {
    expect(wrapper.find(DoctorProfileCard)).to.have.length(1);
});

it('should have doctor name', () => {
    expect(wrapper.find(<DoctorProfileCard doctor={doctorsList.name} ></DoctorProfileCard>));
    expect(wrapper.find(<DoctorProfileCard doctor={doctorsList.specialization} ></DoctorProfileCard>));
    expect(wrapper.find(<DoctorProfileCard doctor={doctorsList.highestDegree} ></DoctorProfileCard>));
    expect(wrapper.find(<DoctorProfileCard doctor={doctorsList.overAllExperience} ></DoctorProfileCard>));
  });
  
  it('should called submit component ', async() => {

  
    const output = {"name":"john", "specialization":"ortho", "highestDegree": "PG", "overAllExperience":"5",
      "email":"ss@carian.com", "college_name":"gandhi", "fee":"200", "area":"jubile", "city":"hyd",
      "licence_number":"1234", "id": "1", "hospital_id": "1","department_id": "1" };

    getDoctors.mockResolvedValue(output);    
    await wrapper.instance().onPressSubmit();
   
  
})


});