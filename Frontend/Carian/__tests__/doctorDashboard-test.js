import React from "react";
import { shallow } from "enzyme";
import doctor_dashboard from "../pages/doctor_dashboard";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { expect } from "chai";
import sinon from "sinon";

global.expect = expect;
global.sinon = sinon;
global.shallow = shallow;

describe("<doctor_dashboard/>", () => {
  beforeEach(function () {
    wrapper = shallow(<doctor_dashboard></doctor_dashboard>);
  });
  it("should have view", () => {
    expect(wrapper.type()).to.equal(View);
  });
  it("should have TouchableOpacity", () => {
    expect(wrapper.type()).to.equal(TouchableOpacity);
  });
  it("should have profile text component", () => {
    expect(wrapper.find(Text)).to.have.length(7);
    expect(wrapper.contains("profile")).to.equal(true);
  });
  it("should have Appointments text component", () => {
    expect(wrapper.find(Text)).to.have.length(7);
    expect(wrapper.contains("Appointments")).to.equal(true);
  });
  it("should have  Inbox text component", () => {
    expect(wrapper.find(Text)).to.have.length(5);
    expect(wrapper.contains("Inbox")).to.equal(true);
  });
  it("should have Appointments text component", () => {
    expect(wrapper.find(Text)).to.have.length(7);
    expect(wrapper.contains("Appointments")).to.equal(true);
  });
  it("should have  Inbox text component", () => {
    expect(wrapper.find(Text)).to.have.length(5);
    expect(wrapper.contains("Inbox")).to.equal(true);
  });
});
