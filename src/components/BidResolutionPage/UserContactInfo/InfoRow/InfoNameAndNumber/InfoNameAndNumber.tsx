import * as React from "react";
import styled from "styled-components";
import { mainFont } from "@style";

const NameAndPhoneNumberStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  color: white;
  margin-left: 24px;
  margin-right: 24px;
  flex-grow: 1;
`;
const NameStyle = styled.div`
  font: ${mainFont};
  font-size: 16px;
  flex-grow: 1;
  font-weight: bold;
  margin-bottom: 4px;
`;
const PhoneNumberStyle = styled.div`
  font-size: 14px;
  flex-grow: 1;
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
