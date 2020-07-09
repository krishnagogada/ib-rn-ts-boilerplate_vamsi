import React, { Component, Fragment } from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";

import { SignUpFormCard } from "../SignUpFormCard/";
import {
  Container,
  DatePicker,
  DatePickerText,
  LogIn,
  LogInText,
} from "./styledComponent";

class SignUpForm extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <DatePicker>
            <DatePickerText>Select your favorite color</DatePickerText>
          </DatePicker>
          <SignUpFormCard />
          <LogIn>
            <LogInText>Already have an account?Login Here</LogInText>
          </LogIn>
        </Container>
      </ScrollView>
    );
  }
}

export { SignUpForm };
