import styled from "styled-components/native";

export const SignUpCard = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  border-radius: 10;
  height: 500;
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
`;

export const NameTextView = styled.TextInput`
  width: 47%;
  border-radius: 3;
  background-color: lightgray;
`;

export const TextInputView = styled.TextInput`
  width: 100%;
  border-radius: 3;
`;
