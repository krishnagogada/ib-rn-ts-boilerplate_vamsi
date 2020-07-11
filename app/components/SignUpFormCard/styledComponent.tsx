import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const SignUpCard = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  border-radius: 10;
  margin-bottom: 10;
  width: 80%;
`;

export const Header = styled.View`
  flex: 1;
  width: 90%;
  margin-top: 15;
`;

export const SignUpHeading = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin-bottom: 10;
`;

export const SignUpInstruction = styled.Text`
  color: lightgray;
  margin-bottom: 10;
`;

export const SignUpBody = styled.View`
  flex: 1;
  width: 90%;
`;

export const FullName = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10;
`;

export const NameTextView = styled.TextInput`
  width: 48.5%;
  border-radius: 3;
  background-color: lightgray;
  padding-left: 10;
`;

export const TextInputView = styled.TextInput`
  width: 100%;
  border-radius: 3;
  background-color: lightgray;
  margin-bottom: 10;
  padding-left: 10;
`;

export const VaildationError = styled.Text`
  color: red;
`;

export const BranchField = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10;
`;

export const GenderField = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10;
`;

export const GenderText = styled.Text`
  color: gray;
  width: 40%;
`;

export const BranchText = styled.Text`
  color: gray;
  width: 40%;
`;

export const BranchPicker = styled.View`
  border: 1px solid lightgray;
  border-radius: 3;
`;

export const DOBField = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const DOBText = styled.Text`
  color: gray;
  width: 40%;
`;

export const AddressField = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const AddressText = styled.Text`
  color: gray;
  width: 40%;
`;

export const AddressTextInput = styled.TextInput`
  width: 60%;
  border: 1px solid lightgray;
`;

export const TypeSpeedField = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const TypeSpeedText = styled.Text`
  color: gray;
  width: 40%;
`;

export const RangeCurrentValue = styled.Text`
  color: gray;
`;

export const TermsAndConditionsField = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10;
`;

export const TermsAndConditionsText = styled.Text`
  color: gray;
`;

export const SignUpButtonField = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10;
`;

export const SignUpButton = styled.Button`
  color: white;
  background-color: skyblue;
`;
