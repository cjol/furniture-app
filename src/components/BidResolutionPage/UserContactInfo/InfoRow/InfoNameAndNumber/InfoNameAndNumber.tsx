import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";

const NameAndPhoneNumberStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  color: white;
`;
const NameStyle = styled.div`
  font: ${mainFont};
  font-size: 16px;
`;
const PhoneNumberStyle = styled.div`
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
        <NameStyle>{this.props.name}</NameStyle>
        <PhoneNumberStyle>{this.props.number}</PhoneNumberStyle>
      </NameAndPhoneNumberStyle>
    );
  }
}
