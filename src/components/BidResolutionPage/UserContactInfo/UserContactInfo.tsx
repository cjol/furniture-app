import { Placeholder } from "Components/Placeholder";
import * as React from "react";
import { InfoRow } from "./InfoRow/InfoRow";
import { EmailRow } from "./EmailRow/EmailRow";
import { PhoneLine } from "./PhoneLine/PhoneLine";
import { Address } from "./Address/Address";
import styled from "styled-components";
import { whiteButtonColor, normalBoxShadow } from "@style";

const UserInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${whiteButtonColor};
  box-shadow: ${normalBoxShadow};
  margin-top: 12px;
  margin-bottom: 12px;
`;

const BoxContentsStyle = styled.div`
  padding: 24px;
`;

export class UserContactInfo extends React.PureComponent<{
  infoProps: InfoRow["props"];
  emailProps: EmailRow["props"];
  phoneProps: PhoneLine["props"];
  addressProps: Address["props"];
}> {
  static defaultProps: UserContactInfo["props"] = {
    infoProps: InfoRow.defaultProps,
    emailProps: EmailRow.defaultProps,
    phoneProps: PhoneLine.defaultProps,
    addressProps: Address.defaultProps
  };

  render() {
    return (
      <UserInfoStyle>
        <InfoRow {...this.props.infoProps} />
        <BoxContentsStyle>
          <EmailRow {...this.props.emailProps} />
          <PhoneLine {...this.props.phoneProps} />

          <Address {...this.props.addressProps} />
        </BoxContentsStyle>
      </UserInfoStyle>
    );
  }
}
