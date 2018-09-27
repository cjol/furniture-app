import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Call, Email } from "@material-ui/icons";
import styled from "styled-components";
import { white, grey, mainFont } from "@style";

const PhoneLine2Styled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  flex-grow: 1;
  color: grey;
  margin-top: 24px;
  margin-bottom: 24px;
`;
const PhoneNo2Styled = styled.div`
  flex-grow: 1;
  font: ${mainFont};
  font-size: 13px;
`;

export class PhoneLine extends React.PureComponent<{ phoneline: string }> {
  static defaultProps: PhoneLine["props"] = { phoneline: "+256 Phone Number " };

  render() {
    return (
      <PhoneLine2Styled>
        <PhoneNo2Styled>{this.props.phoneline}</PhoneNo2Styled>
        <Call />
      </PhoneLine2Styled>
    );
  }
}
