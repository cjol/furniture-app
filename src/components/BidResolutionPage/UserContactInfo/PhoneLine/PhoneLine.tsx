import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Call, Email } from "@material-ui/icons";
import styled from "styled-components";

const PhoneLine2Styled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  flex-grow: 1;
`;
const PhoneNo2Styled = styled.div`
  flex-grow: 1;
`;
export class PhoneLine extends React.PureComponent<{}> {
  static defaultProps: PhoneLine["props"] = {};

  render() {
    return (
      <PhoneLine2Styled>
        <PhoneNo2Styled>+256 Phone Number</PhoneNo2Styled>
        <Call />
      </PhoneLine2Styled>
    );
  }
}
