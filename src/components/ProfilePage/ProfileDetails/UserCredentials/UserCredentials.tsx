import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont, greenMain } from "@style";

const UserCredentialsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const UserCredentialsTitleStyle = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font: ${mainFont};
  font-size: 16px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 2px;
  border-bottom-style: solid;
  padding-bottom: 16px;
  border-color: ${greenMain};
`;

export class UserCredentials extends React.PureComponent<{
  isEditMode: boolean;
  setPictureURL: (picture: string) => void;
  pictureURL: string;
  setFullName: (fullName: string) => void;
  fullName: string;
  setEmail: (email: string) => void;
  email: string;
  setLocation: (location: string) => void;
  location: string;
  setPhoneNumber: (phoneNumber: string) => void;
  phoneNumber: string;
  // setPassword: (password: string) => void;
  // password: string;
}> {
  static defaultProps: UserCredentials["props"] = {
    isEditMode: true,
    setPictureURL: picture => alert("Inserting picture"),
    pictureURL: " ",
    setFullName: fullName => alert("Inserting FullName"),
    fullName: " ",
    setEmail: email => alert("Inserting Email"),
    email: " ",
    setLocation: location => alert("Inserting location"),
    location: " ",
    setPhoneNumber: phoneNumber => alert("Inserting PhoneNumber"),
    phoneNumber: " "
    // setPassword: password => alert("Inserting Password"),
    // password: " "
  };

  render() {
    return (
      <UserCredentialsStyle>
        <UserCredentialsTitleStyle value="Full Name" />
        <UserCredentialsTitleStyle value="Picture URL" />
        <UserCredentialsTitleStyle type="email" value="Email Address" />
        <UserCredentialsTitleStyle value="Location" />
        <UserCredentialsTitleStyle value="Phone Number" />
        {/* <UserCredentialsTitleStyle type="password" value="Password" /> */}
      </UserCredentialsStyle>
    );
  }
}
