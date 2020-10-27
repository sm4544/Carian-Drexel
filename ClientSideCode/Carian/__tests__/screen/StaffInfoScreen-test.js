
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  style,
} from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import styles from '../../styles/commonStyles';
import StaffInfoScreen from '../../screen/stackNavScreens/StaffInfoScreen';
const navigation = { navigate: jest.fn() };
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

const spyNavigate = jest.fn()
const props = {
  navigation: {
    navigate: spyNavigate,
    state: {params: {
      name:'hello',
      profileid: '1234'
    }}
  }
}

describe('<StaffInfoScreen/>', () => {
  beforeEach(function () {
    //spyon = sinon.spy(navigation, 'navigate');
    wrapper = shallow(<StaffInfoScreen {...props}></StaffInfoScreen>);
  });
  afterEach(function () {
    //navigation.navigate.restore();
  });
  it('should have Scrollview', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });
  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(14);
  });
  it('should have Doctors Details text component', () => {
    expect(wrapper.find(Text)).to.have.length(18);
    expect(wrapper.contains("Staff Additional Details")).to.equal(true);
  });
  it('should have Education text component', () => {
    expect(wrapper.find(Text)).to.have.length(18);
    expect(wrapper.contains("Education")).to.equal(true);
  });
  it('should have TextInput', () => {
    expect(wrapper.find(TextInput)).to.have.length(13);
  });
  it('should have Highest Degree input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on Highest Degree inputtext box', () => {
    const degree = wrapper.find(TextInput).at(0);
    degree.simulate('ChangeText', 'MBBS');
    expect(wrapper.state('Highest_degree')).to.equal('MBBS');
  });
  it('should have Specilization  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on Specilization inputtext box', () => {
    const Specilization = wrapper.find(TextInput).at(1);
    Specilization.simulate('ChangeText', 'Orthopedic');
    expect(wrapper.state('Specilization')).to.equal('Orthopedic');
  });
  it('should have GPA  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on GPA inputtext box', () => {
    const GPA = wrapper.find(TextInput).at(2);
    GPA.simulate('ChangeText', '9.6');
    expect(wrapper.state('GPA')).to.equal('9.6');
  });
  it('should have College  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });

  it('should change state when text changed on College inputtext box', () => {
    const College = wrapper.find(TextInput).at(3);
    College.simulate('ChangeText', 'Rajiv gandhi medical college');
    expect(wrapper.state('College_name')).to.equal('Rajiv gandhi medical college');
  });
  it('should have University  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on University inputtext box', () => {
    const University = wrapper.find(TextInput).at(4);
    University.simulate('ChangeText', 'University of Pen');
    expect(wrapper.state('University_name')).to.equal('University of Pen');
  });
  it('should have College_address  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on College_address inputtext box', () => {
    const College_address = wrapper.find(TextInput).at(5);
    College_address.simulate('ChangeText', 'HAmilton,Texas');
    expect(wrapper.state('College_address')).to.equal('HAmilton,Texas');
  });


  it('should have Work Details text component', () => {
    expect(wrapper.find(Text)).to.have.length(18);
    expect(wrapper.contains("WORK")).to.equal(true);
  });
  it('should have Experience   input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(6).props().value).to.equal('');
  });
  it('should change state when text changed on experince inputtext box', () => {
    const Experience = wrapper.find(TextInput).at(6);
    Experience.simulate('ChangeText', '10');
    expect(wrapper.state('overall_work_experience')).to.equal('10');
  });

  it('should have Hospital name  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(7).props().value).to.equal('');
  });

  it('should change state when text changed on Hospital name inputtext box', () => {
    const H_name = wrapper.find(TextInput).at(7);
    H_name.simulate('ChangeText', 'Rainbow Hospital');
    expect(wrapper.state('hospital_name')).to.equal('Rainbow Hospital');
  });

  it('should have work_email_address  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(8).props().value).to.equal('');
  });

  it('should change state when text changed on work_email_address inputtext box', () => {
    const work_email_address = wrapper.find(TextInput).at(8);
    work_email_address.simulate('ChangeText', 'ram@gmail.com');
    expect(wrapper.state('work_email_address')).to.equal('ram@gmail.com');
  });
  it('should have work_phone_number  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(9).props().value).to.equal('');
  });

  it('should change state when text changed on work_phone_number inputtext box', () => {
    const work_phone_number = wrapper.find(TextInput).at(9);
    work_phone_number.simulate('ChangeText', '1234567890');
    expect(wrapper.state('work_phone_number')).to.equal('1234567890');
  });
  it('should have Hospital_address  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(10).props().value).to.equal('');
  });

  it('should change state when text changed on Hospital_address inputtext box', () => {
    const Hospital_address = wrapper.find(TextInput).at(10);
    Hospital_address.simulate('ChangeText', 'PEn,USA');
    expect(wrapper.state('Hospital_address')).to.equal('PEn,USA');
  });
  it('should have License Details  text component', () => {
    expect(wrapper.find(Text)).to.have.length(18);
    expect(wrapper.contains("License Details")).to.equal(true);
  });
  it('should have License Number  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(11).props().value).to.equal('');
  });

  it('should change state when text changed on License Number inputtext box', () => {
    const License = wrapper.find(TextInput).at(11);
    License.simulate('ChangeText', '1234');
    expect(wrapper.state('licence_number')).to.equal('1234');
  });

  it('should have doctor_fee  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(12).props().value).to.equal('');
  });

  it('should change state when text changed on doctor_fee inputtext box', () => {
    const doctor_fee = wrapper.find(TextInput).at(12);
    doctor_fee.simulate('ChangeText', '100');
    expect(wrapper.state('doctor_fee')).to.equal('100');
  });


  it('should have TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  });

  it('should have Submit button  component', () => {
    expect(wrapper.find(Text)).to.have.length(18);
    expect(wrapper.contains(<Text style={styles.buttonText}>Register/Submit</Text>)).to.equal(true);

  });

  it('should through error messages if user click on Register with empty degree', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "Highest_degree" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty Specilaization', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "Specilization" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty GPA', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "GPA" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with inavlid GPA', () => {
    const GPA = wrapper.find(TextInput).at(2);
    GPA.simulate('ChangeText', 'hello');
    
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "GPA" must be a valid number.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty College_name', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "College_name" is mandatory.')).to.equal(true);
  })

  

  it('should through error messages if user click on Register with empty University_name', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "University_name" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty College_address', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "College_address" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty overall_work_experience', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "overall_work_experience" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with invalid overall_work_experience', () => {
    const Experience = wrapper.find(TextInput).at(6);
    Experience.simulate('ChangeText', 'test');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "overall_work_experience" must be a valid number.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty work_phone_number', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "work_phone_number" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with invalid work_phone_number', () => {
    const work_phone_number = wrapper.find(TextInput).at(9);
    work_phone_number.simulate('ChangeText', 'test');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "work_phone_number" must be a valid number.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty work_email_address', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "work_email_address" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with invalid work_email_address', () => {
    const work_email_address = wrapper.find(TextInput).at(8);
    work_email_address.simulate('ChangeText', 'ram');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "work_email_address" must be a valid email address.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty hospital_name', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "hospital_name" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty Hospital_address', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "Hospital_address" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty licence_number', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "licence_number" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with invalid licence_number', () => {
    const License = wrapper.find(TextInput).at(11);
    License.simulate('ChangeText', 'test');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "licence_number" must be a valid number.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty doctor_fee', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "doctor_fee" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with invalid doctor_fee', () => {
    const doctor_fee = wrapper.find(TextInput).at(12);
    doctor_fee.simulate('ChangeText', 'test');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');
    
    expect(wrapper.contains('The field "doctor_fee" must be a valid number.')).to.equal(true);
  })
});
