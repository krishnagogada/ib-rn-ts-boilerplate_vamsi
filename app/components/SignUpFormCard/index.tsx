import React, { Component } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { FlatList, Picker, Slider, CheckBox, Alert, View } from "react-native";
import DatePicker from "react-native-datepicker";
// import Textarea from "react-native-textarea";

import {
  SignUpCard,
  Header,
  SignUpHeading,
  SignUpInstruction,
  SignUpBody,
  FullName,
  NameTextView,
  TextInputView,
  BranchField,
  GenderField,
  GenderText,
  BranchText,
  BranchPicker,
  DOBField,
  DOBText,
  AddressField,
  AddressText,
  AddressTextInput,
  TypeSpeedField,
  TypeSpeedText,
  RangeCurrentValue,
  TermsAndConditionsField,
  TermsAndConditionsText,
  SignUpButtonField,
  SignUpButton,
} from "./styledComponent";

@observer
class SignUpFormCard extends Component {
  @observable radioValue = 0;
  @observable branchSelectedValue = "CSE";
  @observable date: any;
  @observable addressText: string | undefined;
  @observable rangeValue: number = 50;
  @observable isCheckBoxSelected: boolean = false;
  textInputItems = [
    { id: Math.random().toString(), placeholder: "Mobile Number" },
    { id: Math.random().toString(), placeholder: "Email" },
    { id: Math.random().toString(), placeholder: "Password" },
    { id: Math.random().toString(), placeholder: "Confirm Password" },
  ];

  genderItems = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Other", value: 2 },
  ];

  onPressSignUpButton = () => {
    Alert.alert("Simple Button pressed");
  };

  onClickCheckBox = () => {
    this.isCheckBoxSelected = !this.isCheckBoxSelected;
  };

  onChangeRange = (value: any) => {
    this.rangeValue = value;
  };

  onChangeAddress = (value: string) => {
    this.addressText = value;
  };

  onChangeDate = (date: any) => {
    this.date = date;
  };

  onChangeBranch = (value: any) => {
    this.branchSelectedValue = value;
  };

  renderRadioButtons = (value: number) => {
    this.radioValue = value;
  };

  renderTextInputItem = (textInputItem: any) => {
    return <TextInputView placeholder={textInputItem.item.placeholder} />;
  };
  render() {
    return (
      <SignUpCard>
        <Header>
          <SignUpHeading>Sign Up</SignUpHeading>
          <SignUpInstruction>
            Please fill in this form to create an account!
          </SignUpInstruction>
        </Header>
        <SignUpBody>
          <FullName>
            <NameTextView placeholder={"First Name"} />
            <NameTextView placeholder={"Last Name"} />
          </FullName>
          <FlatList
            data={this.textInputItems}
            renderItem={this.renderTextInputItem}
            keyExtractor={(item) => item.id}
          />
          <GenderField>
            <GenderText>Select your gender</GenderText>
            <RadioForm formHorizontal={true} animation={true}>
              {this.genderItems.map((obj, i) => (
                <RadioButton
                  labelHorizontal={true}
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.radioValue === i}
                    onPress={this.renderRadioButtons}
                    borderWidth={1}
                    buttonInnerColor={"skyblue"}
                    buttonOuterColor={
                      this.radioValue === i ? "skyblue" : "#000"
                    }
                    buttonSize={8}
                    buttonOuterSize={13}
                    buttonStyle={{}}
                    buttonWrapStyle={{ marginLeft: 5 }}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={this.renderRadioButtons}
                    labelStyle={{ fontSize: 14, color: "gray", margin: 0 }}
                    labelWrapStyle={{ marginLeft: 0 }}
                  />
                </RadioButton>
              ))}
            </RadioForm>
          </GenderField>
          <BranchField>
            <BranchText>Select your branch</BranchText>
            <BranchPicker>
              <Picker
                selectedValue={this.branchSelectedValue}
                onValueChange={this.onChangeBranch}
                style={{
                  height: 40,
                  width: 100,
                  borderWidth: 1,
                  borderRadius: 3,
                  borderStyle: "solid",
                  borderColor: "black",
                }}
              >
                <Picker.Item label="CSE" value="CSE" />
                <Picker.Item label="ECE" value="ECE" />
                <Picker.Item label="EEE" value="EEE" />
                <Picker.Item label="IT" value="IT" />
              </Picker>
            </BranchPicker>
          </BranchField>
          <DOBField>
            <DOBText>DOB</DOBText>
            <DatePicker
              style={{ width: "60%" }}
              date={this.date}
              mode="date"
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              minDate="1/1/0001"
              maxDate="31/12/2050"
              showIcon={false}
              onDateChange={this.onChangeDate}
            />
          </DOBField>
          <AddressField>
            <AddressText>Enter your address</AddressText>
            <AddressTextInput
              placeholder={"Type your address here!..."}
              multiline={true}
            />
          </AddressField>
          <TypeSpeedField>
            <TypeSpeedText>set your typing speed</TypeSpeedText>
            <Slider
              style={{ width: "55%" }}
              value={this.rangeValue}
              maximumValue={100}
              minimumValue={0}
              onValueChange={this.onChangeRange}
              aria-labelledby="continuous-slider"
            />
            <RangeCurrentValue>{this.rangeValue}</RangeCurrentValue>
          </TypeSpeedField>
          <TermsAndConditionsField>
            <CheckBox
              value={this.isCheckBoxSelected}
              onValueChange={this.onClickCheckBox}
            />
            <TermsAndConditionsText>
              I accept the Terms of Use & Privacy Policy
            </TermsAndConditionsText>
          </TermsAndConditionsField>
          <SignUpButtonField>
            <SignUpButton
              title={"Sign Up"}
              onPress={this.onPressSignUpButton}
            />
          </SignUpButtonField>
        </SignUpBody>
      </SignUpCard>
    );
  }
}

export { SignUpFormCard };
