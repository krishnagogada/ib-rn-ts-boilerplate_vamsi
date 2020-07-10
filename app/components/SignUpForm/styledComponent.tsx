import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  display: flex;
  align-items: center;
`;

export const DatePicker = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10;
  margin-bottom: 10;
`;
export const DatePickerText = styled.Text`
  color: white;
  text-align: center;
`;

export const LogIn = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;

export const LogInText = styled.Text`
  text-align: center;
  color: white;
`;

export const Styles = StyleSheet.create({
  colorPicker: {
    width: 75,
    height: 50,
  },
});
