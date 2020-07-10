import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { ColorPicker, HsvColor } from "react-native-color-picker";
import LinearGradient from "react-native-linear-gradient";
import { fromHsv } from "react-native-color-picker";

import { SignUpFormCard } from "../SignUpFormCard/";
import {
  Container,
  DatePicker,
  DatePickerText,
  LogIn,
  LogInText,
  Styles,
} from "./styledComponent";
@observer
class SignUpForm extends Component {
  @observable selectedColor1 = "#30a9f4";
  @observable selectedColor2 = "#9575cd";

  onColorSelected1 = (selectedColor: any) => {
    console.log(selectedColor);
    this.selectedColor1 = fromHsv(selectedColor);
  };
  onColorSelected2 = (selectedColor: any) => {
    this.selectedColor2 = fromHsv(selectedColor);
  };
  render() {
    return (
      <ScrollView>
        <LinearGradient
          colors={[this.selectedColor1, this.selectedColor2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Container>
            <DatePicker>
              <DatePickerText>Select your favorite color</DatePickerText>
              <ColorPicker
                defaultColor={this.selectedColor1}
                onColorSelected={this.onColorSelected1}
                onColorChange={this.onColorSelected1}
                hideSliders={true}
                style={Styles.colorPicker}
              />
              <ColorPicker
                defaultColor={this.selectedColor2}
                onColorSelected={this.onColorSelected2}
                onColorChange={this.onColorSelected2}
                hideSliders={true}
                style={Styles.colorPicker}
              />
            </DatePicker>
            <SignUpFormCard />
            <LogIn>
              <LogInText>Already have an account?Login Here</LogInText>
            </LogIn>
          </Container>
        </LinearGradient>
      </ScrollView>
    );
  }
}

export { SignUpForm };
