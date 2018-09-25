import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";

const NameAndPhoneNumberStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NameStyle = styled.div`
  display: flex;
  font: ${mainFont};
  font-size: 16px;
`;
const PhoneNumberStyle = styled.div`
  display: flex;
  font-size: 14px;
`;

export class InfoNameAndNumber extends React.PureComponent<{
  name: string;
  number: string;
}> {
  static defaultProps: InfoNameAndNumber["props"] = {
    name: "Jonathan",
    number: "+256700187418"
  };

  render() {
    return (
      <NameAndPhoneNumberStyle>
        <NameStyle>Carpenter Name</NameStyle>
        <PhoneNumberStyle>+256 Phone Number</PhoneNumberStyle>
      </NameAndPhoneNumberStyle>
    );
  }
}
