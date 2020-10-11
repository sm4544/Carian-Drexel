import React from 'react';
import { shallow } from 'enzyme';
import Login from '../pages/login';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { expect } from 'chai';
import styles from '../styles/commonStyles';
import Register from '../pages/register';
const navigation = { navigate: jest.fn() };
import spies from 'chai-spies';

describe('<Login/>', () => {
  
  beforeEach(function () {
    
    wrapper = shallow(<Login navigation={navigation}></Login>);

  });
  it('should have view', () => {

    expect(wrapper.type()).to.equal(View);
  });

  it('should have CARIAN text component', () => {
    expect(wrapper.find(Text)).to.have.length(6);
    expect(wrapper.contains("CARIAN")).to.equal(true);
  })

  it('should have 2 Textinput boxes', () => {
    expect(wrapper.find(TextInput)).to.have.length(2);
  })

  it('should have the email input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(0).props().value).to.equal('');
  });

  it('should change state when text changed on email inputtext box', () => {
    const email = wrapper.find(TextInput).at(0);
    email.simulate('ChangeText', 'test@test.com');
    expect(wrapper.state('email')).to.equal('test@test.com');
  });

  it('should have the password input component with empaty value ', () => {
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('');
  });

  it('should change state when text changed on password inputtext box', () => {
    const password = wrapper.find(TextInput).at(1);
    password.simulate('ChangeText', '123456789');
    expect(wrapper.state('password')).to.equal('123456789');
  });

  it('should contain forgot password link', () => {
    expect(wrapper.contains(<Text style={styles.hyperlink}>Forgot Password</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);

  })

  it('should contain Login button', () => {

    expect(wrapper.contains(<Text style={styles.buttonText}>LOGIN</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);

  })

  it('should contain register button', () => {
    expect(wrapper.contains(<Text style={styles.hyperlink}>New user? Register Here</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity)).to.have.length(3);

  })

  {/*it('should navigate to register component', () => {
    
    
    const register = wrapper.find(TouchableOpacity).at(2);
    //register.simulate('press');
    //expect(props.navigation.navigate).toHaveBeenCalledWith('Register'); 
   // expect(wrapper.find(Register)).toHaveLength(1);
    chai.spy.on(navigation, 'navigate');



    register.simulate('press')
    //expect(onPressRegister()).toHaveBeenCalled()
   // expect(wrapper.find(Register)).toHaveLength(1);
    expect(spy).to.have.been.called();
    //expect(navigation.navigate).toHaveBeenCalledWith('/login')

  })*/}

  it('should through error messages if user click on login with empty email', () => {
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);
    expect(wrapper.contains('The field "email" is mandatory.')).to.equal(true);

  })

  it('should through error message if user click on login with invalid email', () => {
    const email = wrapper.find(TextInput).at(0);
    email.simulate('ChangeText', 'test');
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    expect(wrapper.contains('The field "email" must be a valid email address.')).to.equal(true);   

  })

  it('should through error messages if user click on login with empty password', () => {
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 7.')).to.equal(true);
    expect(wrapper.contains('The field "password" is mandatory.')).to.equal(true);

  })

  it('should through error message if user click on login with invalid password', () => {
    const password = wrapper.find(TextInput).at(1);
    password.simulate('ChangeText', 'test');
    const loginButton = wrapper.find(TouchableOpacity).at(1);
    loginButton.simulate('press');
    expect(wrapper.contains('The field "password" length must be greater than 7.')).to.equal(true);   

  })


});