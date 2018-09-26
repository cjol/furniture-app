import { Placeholder } from "Components/Placeholder";
import * as React from "react";
import { InfoRow } from "./InfoRow/InfoRow";
import { EmailRow } from "./EmailRow/EmailRow";
import { PhoneLine } from "./PhoneLine/PhoneLine";
import { Address } from "./Address/Address";
import styled from "styled-components";

const UserInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export class UserContactInfo extends React.PureComponent<{}> {
  static defaultProps: UserContactInfo["props"] = {};

  render() {
    return (
      <UserInfoStyle>
        <InfoRow />

        <EmailRow />
        <PhoneLine />

        <Address />
      </UserInfoStyle>
    );
  }
}
