import React, { Component } from "react";
import {
  SignUpCard,
  Header,
  SignUpHeading,
  SignUpInstruction,
  SignUpBody,
  FullName,
  NameTextView,
  TextInputView,
} from "./styledComponent";
class SignUpFormCard extends Component {
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
        </SignUpBody>
      </SignUpCard>
    );
  }
}

export { SignUpFormCard };
