import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont } from "@style";
const UserCredentialsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
`;
const UserCredentialsTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font: ${mainFont};
  font-size: 16px;
`;

export class UserCredentials extends React.PureComponent<{}> {
  static defaultProps: UserCredentials["props"] = {};

  render() {
    return (
      <UserCredentialsStyle>
        <UserCredentialsTitleStyle>FullName</UserCredentialsTitleStyle>
        <UserCredentialsTitleStyle>Email Address</UserCredentialsTitleStyle>
        <UserCredentialsTitleStyle>Location</UserCredentialsTitleStyle>
        <UserCredentialsTitleStyle>PhoneNumber</UserCredentialsTitleStyle>
        <UserCredentialsTitleStyle>Password</UserCredentialsTitleStyle>
      </UserCredentialsStyle>
    );
  }
}
