import * as React from "react";
import styled from "styled-components";

const NameAndPhoneNumberStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NameStyle = styled.div``;
const PhoneNumberStyle = styled.div``;

export class InfoNameAndNumber extends React.PureComponent<{}> {
  static defaultProps: InfoNameAndNumber["props"] = {};

  render() {
    return (
      <NameAndPhoneNumberStyle>
        <NameStyle>Carpenter Name</NameStyle>
        <PhoneNumberStyle>+256 Phone Number</PhoneNumberStyle>
      </NameAndPhoneNumberStyle>
    );
  }
}
