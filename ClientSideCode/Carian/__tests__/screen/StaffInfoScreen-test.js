
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
import { postStaffInfoProfileApi } from '../../screen/services/StaffInfoService';
import { getAllHospitals } from '../../screen/services/hospitalService';
const navigation = {
  navigate: jest.fn(),
  state: {
    params: {
      name: 'hello',
      profileid: '1',
      profile_type: 'Doctor'

    }
  }
};
global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;
jest.mock("../../screen/services/StaffInfoService");
jest.mock("../../screen/services/hospitalService");


describe('<StaffInfoScreen/>', () => {
  beforeEach(function () {
    spyon = sinon.spy(navigation, 'navigate');
    getAllHospitals.mockResolvedValue([{ 'label': 'Applos', 'value': '1' }])
    wrapper = shallow(<StaffInfoScreen navigation={navigation}></StaffInfoScreen>);
  });
  afterEach(function () {
    navigation.navigate.restore();
  });
  it('should have Scrollview', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });
  it('should have View', () => {
    expect(wrapper.find(View)).to.have.length(9);
  });
  it('should have Doctors Details text component', () => {
    expect(wrapper.find(Text)).to.have.length(14);
    expect(wrapper.contains("Additional Details")).to.equal(true);
  });
  it('should have Education text component', () => {
    expect(wrapper.find(Text)).to.have.length(14);
    expect(wrapper.contains("Education")).to.equal(true);
  });
  it('should have TextInput', () => {
    expect(wrapper.find(TextInput)).to.have.length(8);
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
  it('should have college name  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(2).props().value).to.equal('');
  });

  it('should change state when text changed on college name inputtext box', () => {
    const GPA = wrapper.find(TextInput).at(2);
    GPA.simulate('ChangeText', 'siddartha');
    expect(wrapper.state('College_name')).to.equal('siddartha');
  });

  it('should have Work Details text component', () => {
    expect(wrapper.find(Text)).to.have.length(14);
    expect(wrapper.contains("WORK")).to.equal(true);
  });
  it('should have Experience   input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(3).props().value).to.equal('');
  });
  it('should change state when text changed on experince inputtext box', () => {
    const Experience = wrapper.find(TextInput).at(3);
    Experience.simulate('ChangeText', '10');
    expect(wrapper.state('overall_work_experience')).to.equal('10');
  });


  it('should have work_email_address  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(4).props().value).to.equal('');
  });

  it('should change state when text changed on work_email_address inputtext box', () => {
    const work_email_address = wrapper.find(TextInput).at(4);
    work_email_address.simulate('ChangeText', 'ram@gmail.com');
    expect(wrapper.state('work_email_address')).to.equal('ram@gmail.com');
  });
  it('should have work_phone_number  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(5).props().value).to.equal('');
  });

  it('should change state when text changed on work_phone_number inputtext box', () => {
    const work_phone_number = wrapper.find(TextInput).at(5);
    work_phone_number.simulate('ChangeText', '1234567890');
    expect(wrapper.state('work_phone_number')).to.equal('1234567890');
  });

  it('should have License Details  text component', () => {
    expect(wrapper.find(Text)).to.have.length(14);
    expect(wrapper.contains("License Details")).to.equal(true);
  });
  it('should have License Number  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(6).props().value).to.equal('');
  });

  it('should change state when text changed on License Number inputtext box', () => {
    const License = wrapper.find(TextInput).at(6);
    License.simulate('ChangeText', '1234');
    expect(wrapper.state('licence_number')).to.equal('1234');
  });

  it('should have doctor_fee  input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(7).props().value).to.equal('');
  });

  it('should change state when text changed on doctor_fee inputtext box', () => {
    const doctor_fee = wrapper.find(TextInput).at(7);
    doctor_fee.simulate('ChangeText', '100');
    expect(wrapper.state('doctor_fee')).to.equal('100');
  });


  it('should have TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(2);
  });

  it('should have Submit button  component', () => {
    expect(wrapper.find(Text)).to.have.length(14);
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

  it('should through error messages if user click on Register with empty College_name', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');

    expect(wrapper.contains('The field "College_name" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with empty overall_work_experience', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');

    expect(wrapper.contains('The field "overall_work_experience" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with invalid overall_work_experience', () => {
    const Experience = wrapper.find(TextInput).at(3);
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
    const work_phone_number = wrapper.find(TextInput).at(5);
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
    const work_email_address = wrapper.find(TextInput).at(4);
    work_email_address.simulate('ChangeText', 'ram');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');

    expect(wrapper.contains('The field "work_email_address" must be a valid email address.')).to.equal(true);
  })



  it('should through error messages if user click on Register with empty licence_number', () => {
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');

    expect(wrapper.contains('The field "licence_number" is mandatory.')).to.equal(true);
  })

  it('should through error messages if user click on Register with invalid licence_number', () => {
    const License = wrapper.find(TextInput).at(6);
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
    const doctor_fee = wrapper.find(TextInput).at(7);
    doctor_fee.simulate('ChangeText', 'test');
    const registerButton = wrapper.find(TouchableOpacity).at(0);
    registerButton.simulate('press');

    expect(wrapper.contains('The field "doctor_fee" must be a valid number.')).to.equal(true);
  })

  it('should contain login link button', () => {
    expect(wrapper.contains(<Text style={styles.hyperlink}> Already have an account? Sign in</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(2);
  })

  it('DROPDOWNDATA should NOT BE EMPTY', () => {
    
    //expect(wrapper.state('dropdowndata')).to.have.length(2);
    expect(wrapper.state('dropdowndata')).to.be.an('array').that.is.not.empty;
    
  })

  it('should navigate to confirmation screen ', async () => {

    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(3).simulate('ChangeText', '4');
    wrapper.find(TextInput).at(4).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(5).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(6).simulate('ChangeText', '12345');
    wrapper.find(TextInput).at(7).simulate('ChangeText', '100.2');
    wrapper.setState({ hospital_id: '1' })

    const output = { "Message": "Added Staff", "StaffID": "39" };

    postStaffInfoProfileApi.mockResolvedValue(output);
    await wrapper.instance().onPressStaffProfile('test', '30', 'Doctor');
    console.log(spyon + 'spyon')
    sinon.assert.calledWith(spyon, "ConfirmationScreen", { name: 'test' });
    sinon.assert.calledOnce(spyon);
  })

  it('should NOT navigate to confirmation screen ', async () => {

    wrapper.find(TextInput).at(0).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(1).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(2).simulate('ChangeText', 'test');
    wrapper.find(TextInput).at(3).simulate('ChangeText', '4');
    wrapper.find(TextInput).at(4).simulate('ChangeText', 'test@test.com');
    wrapper.find(TextInput).at(5).simulate('ChangeText', '123456789632');
    wrapper.find(TextInput).at(6).simulate('ChangeText', '12345');
    wrapper.find(TextInput).at(7).simulate('ChangeText', '100.2');
    wrapper.setState({ hospital_id: '1' })

    const output = { "Message": "ERROR", "StaffID": "39" };

    postStaffInfoProfileApi.mockResolvedValue(output);
    await wrapper.instance().onPressStaffProfile('test', '30', 'Doctor');
    console.log(spyon + 'spyon')
    sinon.assert.notCalled(spyon)
  })

});
