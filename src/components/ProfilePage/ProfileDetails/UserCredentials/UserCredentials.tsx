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
  setPictureURL: (picture: any) => void;
  pictureURL: string;
  setFullName: (fullName: any) => void;
  fullName: string;
  setEmail: (email: any) => void;
  email: string;
  setLocation: (location: any) => void;
  location: string;
  setPhoneNumber: (phoneNumber: any) => void;
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
        <UserCredentialsTitleStyle
          placeholder="Full Name"
          value={this.props.fullName}
          onChange={this.props.setFullName}
        />
        <UserCredentialsTitleStyle
          placeholder="Picture URL"
          value={this.props.pictureURL}
          onChange={this.props.setPictureURL}
        />
        <UserCredentialsTitleStyle
          placeholder="Email Address"
          type="email"
          value={this.props.email}
          onChange={this.props.setEmail}
        />
        <UserCredentialsTitleStyle
          placeholder="Location"
          value={this.props.location}
          onChange={this.props.setLocation}
        />
        <UserCredentialsTitleStyle
          placeholder="Phone Number"
          value={this.props.phoneNumber}
          onChange={this.props.setPhoneNumber}
        />
        {/* <UserCredentialsTitleStyle type="password" value="Password" /> */}
      </UserCredentialsStyle>
    );
  }
}
